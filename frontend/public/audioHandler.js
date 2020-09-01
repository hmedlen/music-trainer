console.log("yip yip!");
// function playAudioFile(number, note) {
// 	console.log('ok...');
// 	// console.log("audio file");
// 	// console.log(number);
// 	// console.log(note);

// 	// var number = note.slice(0,1)
// 	// var key = note.slice(1,3);

// 	try {
// 		var audio = new Audio('./wav/Piano_' + number + ' ' + note + '.wav');
// 		audio.play()
// 	} catch (e) {
// 		console.log("wtf?");
// 		console.log(e);
// 	}
// }

function playCorrectAnswer() {
	var audio = new Audio('./wav/correct.mp3');
	audio.volume = '0.02';
	audio.play()
}





// var context = new AudioContext();
// var o = context.createOscillator();
// o.frequency.setTargetAtTime(440, context.currentTime, 0);
// o.connect(context.destination);
// o.start(0);

// function playSound(m) {
// 	o.frequency.setTargetAtTime(Math.pow(2, (m-69)/12)*440, context.currentTime, 0);
// }