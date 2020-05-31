<template>
  <v-card class="game-card d-flex flex-column">
    <v-card-title>
      <v-spacer class="last-note">
        
      </v-spacer>
    </v-card-title>

    <div>
      <v-btn
        large
        dark
        @click="playSound"
      >
        <v-icon>mdi-volume-high</v-icon>
      </v-btn>
    </div>

    <v-row>
      <v-spacer />

      <v-col cols="4">
        <v-card flat dense :class="colorIncorrect" style="min-height:150px; margin-top:10px; padding-top:32px; font-size:60px; font-weight:400">
          {{ incorrect }}
        </v-card>
      </v-col>
     
      <v-spacer />

      <v-col cols="4">
        <v-card flat dense :class="colorCorrect" style="min-height:150px; margin-top:10px; padding-top:32px; font-size:60px; font-weight:400">
          {{ correct }}
        </v-card>
      </v-col>

      <v-spacer />
    </v-row>

    <v-row>
      <v-col cols="12">
        <span class="last-note">
            {{ feedback }} {{ lastNote }} {{ lastOctave }}
        </span>
      </v-col>
    </v-row>

    <!-- <v-toolbar flat dense :class="colorCorrect" dark>
      <v-spacer />
      <v-toolbar-title>{{ correct }}</v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-toolbar flat dense :class="colorIncorrect" dark>
      <v-spacer />
      <v-toolbar-title>{{ incorrect }}</v-toolbar-title>
      <v-spacer />
    </v-toolbar> -->

    <v-card-actions class="card-actions">
      <v-spacer />
      <v-btn
        id="noteBtnOther"
        light
        x-large
        class="secondary"
        @click="clickNo"
        v-on:keyup.37="onClick">
        OTHER
      </v-btn>
      <v-spacer />
      <v-btn
        id="noteBtnC"
        dark
        x-large
        class="primary"
        @click="clickYes('0')" >
        <!-- v-on:keyup.39="onClick"> -->
        C
      </v-btn>
      <v-spacer />
      <v-btn
        id="noteBtnG"
        dark
        x-large
        class="primary"
        @click="clickYes('7')" >
        <!-- v-on:keyup.39="onClick"> -->
        G
      </v-btn>
      <v-spacer />
    </v-card-actions>
    You said: <span id="userAnswer" />
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      rando: 0,
      octave: 3,
      correct: 0,
      incorrect: 0,
      lastNote: " ",
      lastOctave: "",
      colorCorrect: "green",
      colorIncorrect: "red",
      feedback: "",
    }
  },
  props: [
    'note'
  ],
  methods: {
    clickNo () {
      this.feedback = "Correct Answer:";
      // this.yourAnswer = noteArray[varNote];

      if (this.rando != '0' && this.rando != '7') {
        // this.correct += 1;
        // this.colorCorrect = "green";
        // this.colorIncorrect = "white";
      } else {
        this.incorrect += 1;
        // this.colorIncorrect = "red";
        // this.colorCorrect = "white";
      }

      this.lastNote = noteArray[this.rando];
      this.lastOctave = this.octave;

      var threshhold1 = 35;
      var randomNumber = Math.random() * 100;
      if (randomNumber < threshhold1) {
        this.rando = 0;
      }
      else {
        this.rando = (Math.ceil(Math.random() * 12)) % 12;
      }

      this.octave = randomInteger(2,3);

      setTimeout(() => { this.lastNote = " "; this.lastOctave = " "; this.feedback = " "; }, 1200);
      setTimeout(() => { this.playSound(); }, 1300);
    },
    clickYes (varNote) {
      this.feedback = "Correct Answer:";
      // this.yourAnswer = noteArray[varNote];

      if (this.rando == varNote) {
        this.correct += 1;
        playCorrectAnswer();
      } else {
        this.incorrect += 1;
      }

      this.lastNote = noteArray[this.rando];
      this.lastOctave = this.octave;

      var threshhold1 = 25;
      var threshhold2 = 75;
      var randomNumber = Math.random() * 100;
      if (randomNumber < threshhold1) {
        this.rando = 0;
      } else if (randomNumber > threshhold2) {
        this.rando = 7;
      } else {
        this.rando = (Math.ceil(Math.random() * 12)) % 12;
      }

      this.octave = randomInteger(2,3);

      setTimeout(() => { this.lastNote = " "; this.lastOctave = " "; this.feedback = " "; }, 1200);
      setTimeout(() => { this.playSound(); }, 1300);
    },
    playSound () {
      let noteToPlay = noteArray2[this.rando];
      playAudioFile(this.octave, noteToPlay);
    }
  },
  mounted () {
    let vm = this;

    // vm.$nextTick(function () {      
    //   playAudioFile(vm.note)
    // });
  } 
}
</script>

<style scoped>
.game-card {
  height: 500px;
  position: relative;
  padding-bottom: 50px;
}

/* .card-actions {
  position: absolute;
  bottom: 0;
} */

.last-note {
  font-size: 30px;
  font-weight: 700;
}
</style>