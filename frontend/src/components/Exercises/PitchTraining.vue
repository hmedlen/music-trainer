<template>
  <div>
      <v-btn
        large
        dark
        @click="playSound"
      >
        <v-icon>mdi-volume-high</v-icon>
      </v-btn>

      <div class="score">
        {{ correct }} / {{ total }}
      </div>

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
      note: 0,
      noteBig: 0,
      octave: 3,
      activeChoices: [],
      correct: 0,
      total: 0
    }
  },
  methods: {
    onAnswerClick (answer) {
      this.total += 1;
      var answerConverted = noteArray.indexOf(answer);
      var isCorrect = processAnswer(answerConverted);

      if (isCorrect) {
        this.correct += 1;
        playCorrectAnswer();
        $("#" + answer).addClass("correct");

        this.noteBig = convertToBigInt(answer, this.octave);
        $('#pkey-' + this.noteBig).addClass("correct");
        // $('#pkey-' + this.noteBig).css("background", "#7cfc00");
        
        this.nextStep();
      } else {
        $("#" + answer).addClass("incorrect");
      }
    },

    nextStep () {
      for (var item in this.activeChoices) {
        $("#" + this.activeChoices[item]).prop("disabled", true);
      }

      let randomItem = getRandomItem(activeOptions);
      let randomOctave = getRandomItem([2,3]);
      setTimeout(() => { this.note = randomItem; correctAnswer = randomItem; this.octave = randomOctave;}, 1300);
      setTimeout(() => { playAudioFile(this.octave, this.note); this.resetChoices(); }, 1500); 
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
      playAudioFile(this.octave, this.note);
    }
  },
  mounted () {
    let initGameSettings = initializeGame('PitchTraining');
    this.activeChoices = initGameSettings[0];
    this.note = initGameSettings[1];
  }
}
</script>

<style scoped>

.score {
  padding-top: 20px;
  font-size: 18px;
}

.answerChoices {
  padding-top: 20px;
}

.answerBtns {
  margin: 2px;
}



</style>