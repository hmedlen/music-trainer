<template>
  <div>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col cols="12" sm="3" />
        <v-col cols="12" sm="6">
          <pitch-card :note="note" />
        </v-col>
      <v-col cols="12" sm="3" />
    </v-row>

    <v-row>
      <piano />
    </v-row>
  </div>
</template>

<script>
import PitchCard from './PitchCard'
import Piano from '../globals/Piano'

export default {
  data () {
    return {
      note: '3C'
    }
  },
  components: {
    PitchCard,
    Piano
  }
}
</script>

<style scoped>

</style>