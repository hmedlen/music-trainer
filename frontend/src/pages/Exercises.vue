<template>
  <div>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col cols="12" sm="3">
        <v-btn
          text
          light
          :to="{name: 'pitch-training'}">
          Pitch Training
        </v-btn>
        <v-btn
          text
          light
          :to="{name: 'interval-training'}">
          Interval Training
        </v-btn>
        <v-btn
          text
          light
          :to="{name: 'training'}">
          Generic Training Page
        </v-btn>
        <!-- <v-col cols="12" sm="6">
          <pitch-card :note="note" />
        <v-col cols="12" sm="3" /> -->
      </v-col>
    </v-row>

  </div>
</template>

<script>
// import PitchCard from './PitchCard'

export default {
  // data () {
  //   return {
  //     note: '3C'
  //   }
  // },
  // components: {
  //   // PitchCard,
  // }
}
</script>

<style scoped>

</style>