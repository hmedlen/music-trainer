<template>
  <div>
      <v-btn
        large
        dark
        @click="playSound"
      >
        <v-icon>mdi-volume-high</v-icon>
      </v-btn>
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
      sound: 'Harp',
      note: 0,
      octave: 3
    }
  },
  methods: {
    playSound () {
      playAudioFile(this.octave, this.note, this.sound);
    }
  },
  mounted () {
    let vm = this;
    initializeGame('IntervalTraining');
    
  }
}
</script>

<style scoped>

</style>