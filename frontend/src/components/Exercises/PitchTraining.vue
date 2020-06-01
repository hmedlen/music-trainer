<template>
  <div>
      <div class="score">
        {{ correct }} / {{ total }}
      </div>
      <div>
        {{ correctRatio }}%
      </div>

      <div style="marginTop:60px" />
      <v-btn
        large
        dark
        @click="playSound"
      >
        <v-icon>mdi-volume-high</v-icon>
      </v-btn>

      <div class="answerChoices">
        <v-btn fab text class="answerBtns" v-for="item in activeChoices" :id="item" :key="item" @click="onAnswerClick(item)">
          {{ item | fixSharps }}
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
      sound: 'SynthBrass',
      note: 0,
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
      this.total += 1;
      var answerConverted = noteArray2.indexOf(answer);
      var isCorrect = processAnswer(answerConverted);

      if (isCorrect) {
        this.correct += 1;
        untilFlag = false;
        playCorrectAnswer();
        $("#" + answer).addClass("correct");

        this.noteBig = convertToBigInt(answer, this.octave);
        $('#pkey-' + this.noteBig).addClass("correct");
        // $('#pkey-' + this.noteBig).css("background", "#7cfc00");
        
        this.nextStep();
      } else {
        $("#" + answer).addClass("incorrect");
      }

      this.correctRatio = ((this.correct / this.total) * 100).toFixed(1)
      // var discount = (price / listprice).toFixed(2);
    },

    nextStep () {
      for (var item in this.activeChoices) {
        $("#" + this.activeChoices[item]).prop("disabled", true);
      }

      let randomItem = getRandomItem(activeOptions);
      let randomOctave = getRandomItem([3]);
      setTimeout(() => { this.note = randomItem; correctAnswer = randomItem; this.octave = randomOctave; this.flag = !this.flag}, 1400);
      // setTimeout(()=> { this.resetChoices(); }, 1400);
      setTimeout(() => { this.playSound(); this.resetChoices(); }, 1500);

      // console.log("??");
      // setInterval(this.playSound(), 100);
      // setTimeout(() => { playAudioFile2(this.octave, this.note, this.sound, this.flag); this.resetChoices(); }, 1000);
      // TODO: change parameter of playAudioFile to an object, where it resolves the current step yknow?
    },

    resetChoices() {
      $('#pkey-' + this.noteBig).removeClass("correct");
      // $('#pkey-' + this.noteBig).css("background", "transparent");
      for (var item in this.activeChoices) {
        if ($("#" + this.activeChoices[item]).hasClass("correct")) $("#" + this.activeChoices[item]).removeClass("correct");
        if ($("#" + this.activeChoices[item]).hasClass("incorrect")) $("#" + this.activeChoices[item]).removeClass("incorrect");
        $("#" + this.activeChoices[item]).prop("disabled", false);
      }
    },

    playSound () {
      playAudioFile2(this.octave, this.note, this.sound, this.flag);
    }
  },
  mounted () {
    let initGameSettings = initializeGame('PitchTraining');
    this.activeChoices = initGameSettings[0];
    this.note = initGameSettings[1];
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
}

.answerBtns {
  margin: 2px;
}



</style>