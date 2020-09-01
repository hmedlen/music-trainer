<template>
  <div>
      <div class="score">
        {{ correct }} / {{ total }}
      </div>
      <div>
        {{ correctRatio }}%
      </div>

      <div style="marginTop:20px" />
      <div style="fontSize:40px; fontWeight:700;">
        {{ correctAnswer | fixSharps }} {{ correctAnswerNum }}
        <!-- {{ theIndex }} -->
      </div>
      <div style="marginTop:0px" />
      <div style="fontSize:30px; fontWeight:700; color:lightgray">
        {{ nextAnswer | fixSharps }} {{ nextAnswerNum }}
        <!-- {{ theIndex }} -->
      </div>

      <div>
        <v-btn fab text large id="incorrectBtn">
          Incorrect
        </v-btn>
        <span style="width:100px">....................</span>
        <v-btn fab text large id="correctBtn">
          Correct
        </v-btn>
      </div>

      <!-- <v-btn
        large
        dark
        @click="playSound"
      >
        <v-icon>mdi-volume-high</v-icon>
      </v-btn> -->


      <div class="answerChoices">
        <v-btn fab text class="answerBtns" v-for="item in activeChoices" :id="item" :key="item" @click="onAnswerClick(item)">
          {{ nextAnswer }}
        </v-btn>
      </div>
  </div>
</template>

<script>
import Piano from '../globals/Piano'

export default {
  components: {
    Piano
  },
  data () {
    return {
      sound: 'Piano',
      correctAnswer: 'C',
      correctAnswerNum: 0,
      nextAnswer: '-',
      nextAnswerNum: 0,
      noteBig: 0,
      octave: 3,
      activeChoices: [],
      flag: false,
      correct: 0,
      total: 0,
      correctRatio: 0,
      theIndex: "i"
    }
  },
  methods: {
    onAnswerClick (answer) {
      if (this.flag) return;
      this.total += 1;
      // var answerConverted = noteArray2.indexOf(answer);
      var isCorrect = processAnswer(answer);

      if (isCorrect) {
        this.correct += 1;
        untilFlag = false;
        playCorrectAnswer();
        // $("#" + answer).addClass("correct");
        $("#correctBtn").addClass("correct");

        // this.noteBig = convertToBigInt(answer, this.octave);

        $('#pkey-' + this.noteBig).addClass("correct");
        
        this.nextStep();
      } else {
        // this.correctAnswer = "WRONG!";
        // this.nextStep();
        $("#incorrectBtn").addClass("incorrect");
      }

      this.correctRatio = ((this.correct / this.total) * 100).toFixed(1)
    },

    nextStep () {
      this.flag = true;
      // for (var item in this.activeChoices) {
      //   $("#" + this.activeChoices[item]).prop("disabled", true);
      // }

      let randomItem = getRandomItem(activeOptions);
      // let theIndex =  romanNumeralsMinor((currentKeyNotes.indexOf(randomItem) + 1));
      // let randomOctave = getRandomItem([3]);
      // setTimeout(() => { this.correctAnswer = randomItem; correctAnswer = randomItem; this.flag = !this.flag; this.resetChoices(); this.theIndex = theIndex; }, 3000);
      let nextItem = processNewItem(activeOptions);

      this.nextAnswer = nextItem;
      this.nextAnswerNum = romanNumeralsMinor[chordsByMinorKey[currentKey].indexOf(this.nextAnswer)];

      let nextItemNum = romanNumeralsMinor[chordsByMinorKey[currentKey].indexOf(this.nextAnswer)];

      setTimeout(() => { this.correctAnswer = nextItem; correctAnswer = nextItem; this.correctAnswerNum = nextItemNum; this.flag = !this.flag; this.resetChoices(); this.nextAnswer = ""; this.nextAnswerNum = ""; }, 3000);
      // // setTimeout(()=> { this.resetChoices(); }, 1400);
      // setTimeout(() => { this.playSound(); this.resetChoices(); }, 1500);

      // // console.log("??");
      // // setInterval(this.playSound(), 100);
      // // setTimeout(() => { playAudioFile2(this.octave, this.note, this.sound, this.flag); this.resetChoices(); }, 1000);
      // // TODO: change parameter of playAudioFile to an object, where it resolves the current step yknow?
    },

    resetChoices() {
      $("#correctBtn").removeClass("correct");
      $("#incorrectBtn").removeClass("incorrect");
      // $('#pkey-' + this.noteBig).removeClass("correct");
      // // $('#pkey-' + this.noteBig).css("background", "transparent");
      // for (var item in this.activeChoices) {
      //   if ($("#" + this.activeChoices[item]).hasClass("correct")) $("#" + this.activeChoices[item]).removeClass("correct");
      //   if ($("#" + this.activeChoices[item]).hasClass("incorrect")) $("#" + this.activeChoices[item]).removeClass("incorrect");
      //   $("#" + this.activeChoices[item]).prop("disabled", false);
      // }
    },

    // playSound () {
    //   playAudioFile2(this.octave, this.note, this.sound, this.flag);
    // }
  },
  mounted () {
    let initGameSettings = initializeGame('ChordTraining');
    this.activeChoices = initGameSettings[0];
    this.correctAnswer = initGameSettings[1];
    this.correctAnswerNum = romanNumeralsMinor[chordsByMinorKey[currentKey].indexOf(this.correctAnswer)];
  },
  filters: {
    fixSharps: function (value) {
      return value.replace("s", "#");
    }
  }
}
</script>

<style scoped>

.score {
  padding-top: 40px;
  font-size: 30px;
}

.answerChoices {
  padding-top: 30px;
  display: none;
}

.answerBtns {
  margin: 2px;
}



</style>