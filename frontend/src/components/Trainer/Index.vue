<template>
  <div>
    <v-row>
      <v-col cols="2">
        <select id="keySelect" @change="onKeyChange($event)">
          <option value=0>C</option>
          <option value=1>C#</option>
          <option value=2>D</option>
          <option value=3>D#</option>
          <option value=4>E</option>
          <option value=5>F</option>
          <option value=6>F#</option>
          <option value=7>G</option>
          <option value=8>G#</option>
          <option value=9>A</option>
          <option value=10>A#</option>
          <option value=11>B</option>
        </select>
      </v-col>
      <v-col cols="2">
        <select id="modeSelect" @change="onModeChange($event)">
          <option value="major">Major</option>
          <option value="minor">Minor</option>
        </select>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col class="chordCol" cols="1" v-for="item in chordTeller" :key="item" :id="item" />
      <v-col cols="3">
        <info-pane title="Chord" identification="chordTeller"></info-pane>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="chordCol" cols="1" v-for="item in chordNumberTeller" :key="item" :id="item" />
      <v-col cols="3">
        <info-pane title="Chord Number" identification="chordNumberTeller"></info-pane>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col cols="3">
        <info-pane title="Note" identification="noteTeller"></info-pane>
      </v-col>
      <v-col cols="3">
        <info-pane title="Note #" identification="noteNumberTeller"></info-pane>
      </v-col>
      <v-col cols="3">
        <info-pane title="Chord" identification="chordTeller"></info-pane>
      </v-col>
      <v-col cols="3">
        <info-pane title="Chord #" identification="chordNumberTeller"></info-pane>
      </v-col>
    </v-row>

    <v-row>
      <piano />
    </v-row>

          <!-- <v-col cols="3">
        <info-pane title="Note" identification="noteTeller"></info-pane>
      </v-col>
      <v-col cols="3">
        <info-pane title="Note #" identification="noteNumberTeller"></info-pane>
      </v-col>
            <v-col cols="3">
        <info-pane title="Chord #" identification="chordNumberTeller"></info-pane>
      </v-col> -->

    <!-- <v-btn
      dark
      class="primary"
      @click="doSomething">
      Do Something
    </v-btn> -->

    <!-- <div id="noteTeller" />
    <div id="noteNumberTeller" />
    <div id="chordTeller" /> -->

    <!-- {{ isCorrect }} -->
  </div>
</template>

<script>
import ChordPane from './ChordPane'
import Piano from '../globals/Piano'

export default {
  data () {
    return {
      chordTeller: ['chordTeller-8', 'chordTeller-7', 'chordTeller-6', 'chordTeller-5', 'chordTeller-4', 'chordTeller-3', 'chordTeller-2', 'chordTeller-1'],
      chordNumberTeller: ['chordNumberTeller-8', 'chordNumberTeller-7', 'chordNumberTeller-6', 'chordNumberTeller-5', 'chordNumberTeller-4', 'chordNumberTeller-3', 'chordNumberTeller-2', 'chordNumberTeller-1']
    }
  },
  methods: {
    doSomething () {
      playAudioFile('yep');
    },
    onKeyChange (event) {
      setCurrentKey(event.target.value);

    },
    onModeChange (event) {
      setCurrentMode(event.target.value);
    },
  },
  components: {
    ChordPane,
    Piano
  }
}
</script>

<style scoped>
.chordCol {
  padding-top: 80px;
  font-size: 20px;
  font-weight: 700;
}
</style>