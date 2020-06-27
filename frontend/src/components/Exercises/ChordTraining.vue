<template>
  <div>
      <div class="score">
        {{ correct }} / {{ total }}
      </div>
      <div>
        {{ correctRatio }}%
      </div>

      <div style="marginTop:60px" />
      <div style="fontSize:40px; fontWeight:700;">
        {{ correctAnswer }}
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
          {{ item }}
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
      correctAnswer: 0,
      noteBig: 0,
      octave: 3,
      activeChoices: [],
      flag: false,
      correct: 0,
      total: 0,
      correctRatio: 0
    }
  },
  methods: {
    onAnswerClick (answer) {
      console.log("clicked");
      console.log(answer);

      this.total += 1;
      // var answerConverted = noteArray2.indexOf(answer);
      var isCorrect = processAnswer(answer);

      console.log(isCorrect);

      if (isCorrect) {
        this.correct += 1;
        untilFlag = false;
        playCorrectAnswer();
        $("#" + answer).addClass("correct");

        // this.noteBig = convertToBigInt(answer, this.octave);

        $('#pkey-' + this.noteBig).addClass("correct");
        
        this.nextStep();
      } else {
        console.log("WRONG!");
        this.correctAnswer = "WRONG!";
        this.nextStep();
        // $("#" + answer).addClass("incorrect");
      }

      this.correctRatio = ((this.correct / this.total) * 100).toFixed(1)
    },

    nextStep () {
      // for (var item in this.activeChoices) {
      //   $("#" + this.activeChoices[item]).prop("disabled", true);
      // }

      let randomItem = getRandomItem(activeOptions);
      // let randomOctave = getRandomItem([3]);
      setTimeout(() => { this.correctAnswer = randomItem; correctAnswer = randomItem; this.flag = !this.flag}, 1500);
      // // setTimeout(()=> { this.resetChoices(); }, 1400);
      // setTimeout(() => { this.playSound(); this.resetChoices(); }, 1500);

      // // console.log("??");
      // // setInterval(this.playSound(), 100);
      // // setTimeout(() => { playAudioFile2(this.octave, this.note, this.sound, this.flag); this.resetChoices(); }, 1000);
      // // TODO: change parameter of playAudioFile to an object, where it resolves the current step yknow?
    },

    resetChoices() {
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