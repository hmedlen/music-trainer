// SECTION: HELPERS

// HELPERS: FUNCTIONS
function getRandomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}


// SECTION: GAME

// GAME: VARIABLES
var gameType;
var correctAnswer = 0;
var activeOptions;

class Game {
    constructor() {
        this.gameType = ""; // pitchTraining, chordTraining, intervalTraining, perfectPitch
        this.answerType = ""; // type of the answeer expected. button click, or midiSequence (which will be either history of chords or notes)
        this.questionType = ""; // audio file or prompt
        this.timed = false; // timed question, true or false

        this.chordOptions = []; // array of chords or notes that can be ASKED 
        this.noteOptions = []; // 
    }
}

// GAME: FUNCTIONS
function setActiveOptions(options) {
    if (options == null) {
        activeOptions = currentKeyNotes;
    } else {
        // do function, pick between options and currentKeyNotes, make sure they match u know?
    }
}

function initializeGame(description) {
    setCurrentKey(6);
    setCurrentMode("minor");
    gameType = description;
    // setActiveOptions();

    activeOptions = currentKeyNotes;
    // activeOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    console.log(chordLibrary);
    console.log(currentKeyChords);
    if (description == "ChordTraining") {
        activeOptions = currentKeyChords;
        activeOptions = ["C", "Cs", "D", "Ds", "E", "F", "Fs", "G", "Gs", "A", "As", "B", "Cmin", "Csmin", "Dmin", "Dsmin", "Emin", "Fmin", "Fsmin", "Gmin", "Gsmin", "Amin", "Asmin", "Bmin"];
    }


    // how to handle the activeOptions in a better way:
    // if getting notes in the key of C octave 3 for example, do it by midi note number
    // so, potential notes that could be played would be: 60 (if this is middle c), + each item in array
    // like 60 + 0, 60 + 2, 60 + 4, 60 + 5, 60 + 7... etc... 
    // I could then create an array of these... like, say it spans 3 octaves TOTAL, but I only want a potential 2 octaves to be played, with random starting point
    // then for the new options array, I could select the next 14 items starting at a random position 0-6
    // activeOptions might still stay the same for pitch game, because I don't want to use octaves in the answers

    var optionsArray = activeOptions;
    var randomItem = getRandomItem(optionsArray);

    // Sets the first answer when initializing game
    correctAnswer = randomItem;

    // Make function for this
    var optionsConverted = [];
    for (var item in optionsArray) {
        if (description == "ChordTraining") {
            optionsConverted = activeOptions;
        } else {
            optionsConverted.push(noteArray2[optionsArray[item]]);
        }
    }

    return [optionsConverted, correctAnswer];
    // return randomItem;
}

function processAnswer(answer) {
    if (answer == correctAnswer) return true;
    else return false;
}