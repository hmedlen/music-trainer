

// console.log("midi handler");

// Initialization

// C = 0
// C# = 1
// D = 2
// D# = 3
// E = 4
// F = 5
// F# = 6
// G = 7
// G# = 8
// A = 9
// A# = 10
// B = 11

// // C major
// 0, 4, 7
// // D minor
// 2, 5, 9
// // E minor
// 4, 7, 11
// // F major
// 5, 9, 0
// // G major
// 7, 11, 2
// // A minor
// 9, 0, 4
// // B dim
// 11, 2, 5

var noteArray = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var noteArray2 = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];

var romanNumeralsMajor = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii dim'];
var romanNumeralsMinor = ['i', 'ii dim', 'III', 'iv', 'v', 'VI', 'VII'];

var notesInMajorKey = {};
var notesInMinorKey = {};

// HELPER FUNCTIONS

function convertToBigInt(note, octave) {
    var returnedInt = 0;

    if (typeof(note) == 'number') {
        returnedInt = 24 + note + octave * 12;
    } else {
        returnedInt = 24 + noteArray2.indexOf(note) + octave * 12;
    }

    return returnedInt;
}


for (var i=0; i < 12; i++) {
    let notesInC = [0, 2, 4, 5, 7, 9, 11];
    let notesInCm = [0, 2, 3, 5, 7, 8, 10];
    let tempMajorArray = notesInC;
    let tempMinorArray = notesInCm;

    for (var j=0; j < tempMajorArray.length; j++) {
        tempMajorArray[j] = (notesInC[j] + i) % 12;
        tempMinorArray[j] = (notesInCm[j] + i) % 12;
    }

    notesInMajorKey[noteArray[i]] = tempMajorArray;
    notesInMinorKey[noteArray[i]] = tempMinorArray;
}

var chordLibrary = {};
var chordArrays = {"major": [], "minor": [], "diminished": []};

for (var i=0; i < 12; i++) {
    let chordC = [0, 4, 7];
    let chordCm = [0, 3, 7];
    let chordCdim = [0, 3, 6];

    let tempMajorChord = chordC;
    let tempMinorChord = chordCm;
    let tempDimChord = chordCdim;

    let majorChordName = noteArray2[i];
    let minorChordName = noteArray2[i] + 'min';
    let dimChordName = noteArray2[i] + 'dim';

    for (var j=0; j < chordC.length; j++) {
        tempMajorChord[j] = (chordC[j] + i) % 12;
        tempMinorChord[j] = (chordCm[j] + i) % 12;
        tempDimChord[j] = (chordCdim[j] + i) % 12;
    }

    chordArrays["major"].push(majorChordName);
    chordArrays["minor"].push(minorChordName);
    chordArrays["diminished"].push(dimChordName);

    chordLibrary[majorChordName] = tempMajorChord;
    chordLibrary[minorChordName] = tempMinorChord;
    chordLibrary[dimChordName] = tempDimChord;
}

var chordsByMajorKey = [];
var chordsByMinorKey = [];
var notesByMajorKey = [];
var notesByMinorKey = [];

for (var i=0; i < 12; i++) {
    chordsByMajorKey.push(new Array());
    chordsByMajorKey[i].push(chordArrays["major"][(0+i) % 12]);
    chordsByMajorKey[i].push(chordArrays["minor"][(2+i) % 12]);
    chordsByMajorKey[i].push(chordArrays["minor"][(4+i) % 12]);
    chordsByMajorKey[i].push(chordArrays["major"][(5+i) % 12]);
    chordsByMajorKey[i].push(chordArrays["major"][(7+i) % 12]);
    chordsByMajorKey[i].push(chordArrays["minor"][(9+i) % 12]);
    chordsByMajorKey[i].push(chordArrays["diminished"][(11+i) % 12]);

    chordsByMinorKey.push(new Array());
    chordsByMinorKey[i].push(chordArrays["minor"][(0+i) % 12]);
    chordsByMinorKey[i].push(chordArrays["diminished"][(2+i) % 12]);
    chordsByMinorKey[i].push(chordArrays["major"][(3+i) % 12]);
    chordsByMinorKey[i].push(chordArrays["minor"][(5+i) % 12]);
    chordsByMinorKey[i].push(chordArrays["minor"][(7+i) % 12]);
    chordsByMinorKey[i].push(chordArrays["major"][(8+i) % 12]);
    chordsByMinorKey[i].push(chordArrays["major"][(10+i) % 12]);

    notesByMajorKey.push(new Array());
    notesByMajorKey[i].push((0+i) % 12);
    notesByMajorKey[i].push((2+i) % 12);
    notesByMajorKey[i].push((4+i) % 12);
    notesByMajorKey[i].push((5+i) % 12);
    notesByMajorKey[i].push((7+i) % 12);
    notesByMajorKey[i].push((9+i) % 12);
    notesByMajorKey[i].push((11+i) % 12);

    notesByMinorKey.push(new Array());
    notesByMinorKey[i].push((0+i) % 12);
    notesByMinorKey[i].push((2+i) % 12);
    notesByMinorKey[i].push((3+i) % 12);
    notesByMinorKey[i].push((5+i) % 12);
    notesByMinorKey[i].push((7+i) % 12);
    notesByMinorKey[i].push((8+i) % 12);
    notesByMinorKey[i].push((10+i) % 12);
}

// Global Variables
var currentKey = 8;
var currentMode = "major"
var currentKeyChords = chordsByMajorKey[currentKey];
var currentKeyNotes = notesByMajorKey[currentKey];

function setCurrentKey(key) {
    currentKey = key;

    if (currentMode == "major") {
        currentKeyChords = chordsByMajorKey[currentKey];
        currentKeyNotes = notesByMajorKey[currentKey];
    }
    else {
        currentKeyChords = chordsByMinorKey[currentKey];
        currentKeyNotes = notesByMinorKey[currentKey];
    }
}

function setCurrentMode(mode) {
    currentMode = mode;

    if (currentMode == "major") {
        currentKeyChords = chordsByMajorKey[currentKey];
        currentKeyNotes = notesByMajorKey[currentKey];
    }
    else {
        currentKeyChords = chordsByMinorKey[currentKey];
        currentKeyNotes = notesByMinorKey[currentKey];
    }
}

// Request MIDI access
if (navigator.requestMIDIAccess) {
    console.log('This browser supports WebMIDI!');
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
} else {
    console.log('WebMIDI is not supported in this browser.');
}

function onMIDISuccess(midiAccess) {
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;

    console.log(inputs);

    // Attach MIDI event "listeners" to each input
    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
    }
}

function onMIDIFailure() {
    console.log('Error: Could not access MIDI devices.');
}

// Function to parse the MIDI messages we receive
function getMIDIMessage(message) {
    var command = message.data[0];
    var note = message.data[1];
    var velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command

    switch (command) {
        case 144: // note on
            if (velocity > 0) {
                noteOn(note);
            } else {
                noteOff(note);
            }
            break;
        case 128: // note off
            noteOffCallback(note);
            break;
        // we could easily expand this switch statement to cover other types of commands such as controllers or sysex
    }
}

var correctChord = [60, 64, 67, 70]; // C7 chord starting on middle C
var activeChord = [];

var isCorrect = false;

console.log("chord library");
console.log(chordLibrary);

var chordsInMajorKey = {};
var chordsInMinorKey = {};

// var chordsInCMajor = ['C', 'Dmin', 'Emin', 'F', 'G', 'Amin', 'Bdim'];


var chordHistory = [];
var chordNumberHistory = [];
function manageChordHistory(key) {

    // figure out if it has chordNumber based off of current key
    if (currentKeyChords.indexOf(key) >= 0) {
        // chordNumberHistory.unshift(currentKeyChords.indexOf(key) + 1);
        if (currentMode == "major") chordNumberHistory.unshift(romanNumeralsMajor[currentKeyChords.indexOf(key)]);
        else chordNumberHistory.unshift(romanNumeralsMinor[currentKeyChords.indexOf(key)]);
        
    } else {
        chordNumberHistory.unshift('--');
    }

    for (var i=0; i < chordHistory.length; i++) {
        $('#chordTeller-' + i).html(chordHistory[i]);
        $('#chordNumberTeller-' + i).html(chordNumberHistory[i]);
    }
    if (chordHistory.length > 8) {
        chordHistory.pop();
        chordNumberHistory.pop();
    }
}

function chordIsPlayed() {
    console.log("chordIsPlayed");
    console.log(activeChord);
    // if (activeChord)
    var theChord = activeChord;
    for (var i=0; i < theChord.length; i++) {
        theChord[i] = theChord[i] % 12;
    }

    console.log(theChord);
    // $('#' + theChord).click();
}

// Function to handle noteOn messages (ie. key is pressed)
// Think of this like an 'onkeydown' event
function noteOn(note) {
    $('#pkey-' + note).addClass("active");
    var noteMod = note % 12;

    activeChord.push(note);

    $('#userAnswer').html(noteArray[noteMod].toString());

    // Show Current Note
    $('#noteTeller-0').html(noteArray[noteMod].toString());

    // Show Number based on Current Key
    var noteNum = currentKeyNotes.indexOf(noteMod) + 1;
    if (noteNum > 0) $('#noteNumberTeller-0').html(noteNum.toString());
    else $('#noteNumberTeller-0').html('-');

    // Show Current Chord
    if (activeChord.length > 2) {
        chordIsPlayed();
        // console.log("ok");
        // var chord = "";
        var match = false;
        // Figure out Chord
        for (var key in chordLibrary) {
            for (var i=0; i < chordLibrary[key].length; i++) {
                if (chordLibrary[key].indexOf(activeChord[i] % 12) >= 0) {
                    if (activeChord.length == i+1) {
                        match = true;
                        chordHistory.unshift(key);
                        manageChordHistory(key);
                        console.log(key);
                        $('#' + key).click();
                    }
                } else {
                    break;
                }
            }
        }

        if (!match) {
            chordHistory.unshift('--');
            manageChordHistory();
        }
    }

    // If the array is the same length as the correct chord, compare
    if (activeChord.length == correctChord.length) {
        var match = true;
        for (var index = 0; index < activeChord.length; index++) {
            if (correctChord.indexOf(activeChord[index]) < 0) {
                match = false;
                break;
            }
        }

        if (match) {
            isCorrect = true;
        }
    }
}

// Function to handle noteOff messages (ie. key is released)
// Think of this like an 'onkeyup' event
function noteOff(note) {
    var noteMod = note % 12;

    activeChord.splice(activeChord.indexOf(note), 1);
    // $('#pkey-' + noteArray2[noteMod]).removeClass("active");
    $('#pkey-' + note).removeClass("active");
}



// SECTION: AUDIO

// AUDIO VARIABLES

// AUDIO FUNCTIONS
function playAudioFile(number, note, sound) {
    var soundsArray = ["Piano", "Harp", "SynthBrass"];
    var extension = '.wav';
    if (sound == "random") {
        sound = getRandomItem(soundsArray);
    }

    if (sound == "Harp" || sound == "SynthBrass") extension = '.mp3';

    // for fun
    var octaveOptions = [2, 3, 4, 5];
    number = getRandomItem(octaveOptions);

    try {
        console.log(sound + '_' + number + ' ' + noteArray2[note] + extension);
        // var audio = new Audio('./wav/Piano_' + number + ' ' + noteArray2[note] + '.wav');
        var audio = new Audio('./wav/' + sound + '_' + number + ' ' + noteArray2[note] + extension);
        audio.play();
    } catch (e) {
        console.log(e);
    }
}

function playAudioFile2(number, note, sound, flag) {
    var soundsArray = ["Piano", "Harp", "SynthBrass"];
    var extension = '.wav';
    if (sound == "random") {
        sound = getRandomItem(soundsArray);
    }

    if (sound == "Harp" || sound == "SynthBrass") extension = '.mp3';

    // for fun

    // var octaveOptions = [2, 3, 4, 5];
    // number = getRandomItem(octaveOptions);

    var octaveOptions = [2, 3, 4, 5];
    octaveOptions = [3];

    // Better way of doing this: number must be at least ____ semitones away from previous choice

    // if (flag == true) {
    //     octaveOptions = [2];
    // } else {
    //     octaveOptions = [3];
    // }

    number = getRandomItem(octaveOptions);

    try {
        console.log(sound + '_' + number + ' ' + noteArray2[note] + extension);
        // var audio = new Audio('./wav/Piano_' + number + ' ' + noteArray2[note] + '.wav');
        var audio = new Audio('./wav/' + sound + '_' + number + ' ' + noteArray2[note] + extension);
        audio.play();
    } catch (e) {
        console.log(e);
    }
}

var untilFlag = false;
function playAudioUntil(octave, note, sound, flag) {
    untilFlag = true;
    var soundsArray = ["Piano", "Harp", "SynthBrass"];
    var extension = '.wav';
    if (sound == "random") {
        sound = getRandomItem(soundsArray);
    }

    if (sound == "Harp" || sound == "SynthBrass") extension = '.mp3';

    var octaveOptions = [2, 3, 4, 5];
    
    if (flag == true) {
        octaveOptions = [2, 3];
    } else {
        octaveOptions = [4, 5];
    }

    octave = getRandomItem(octaveOptions);

    // while (untilFlag) {
    //     setTimeout(() => { }, 200);
    // }

    var funcfunc = function() {
        
    }

    
    // untilFlag = true;
}

function playAudio3(octave, note, sound, flag) {
    var soundsArray = ["Piano", "Harp", "SynthBrass"];
    var extension = '.wav';
    if (sound == "random") {
        sound = getRandomItem(soundsArray);
    }

    if (sound == "Harp" || sound == "SynthBrass") extension = '.mp3';

    var octaveOptions = [2, 3, 4, 5];

    if (flag == true) {
        octaveOptions = [2, 3];
    } else {
        octaveOptions = [4, 5];
    }

    octave = getRandomItem(octaveOptions);

    var audio = new Audio('./wav/' + sound + '_' + octave + ' ' + noteArray2[note] + extension);
    audio.play(); 
}

// setInterval(playAudio3(3, 'C', 'Piano'), 500);
