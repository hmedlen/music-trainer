<template>
  <div>
    <div class="exerciseContainer">
      <component :is="loadComp"/>
    </div>
    <div>
      <piano />
    </div>
  </div>
</template>

<script>
import Piano from '../components/globals/Piano'

export default {
  data: () => ({compName: 'PitchTraining'}),
  components: {
    Piano
  },
  computed: {
    loadComp () {
      return () => import(`../components/Exercises/${this.compName}`);
    }
  }
}
</script>

<style scoped>
.exerciseContainer {
  background-color: white;
  width: 600px;
  height: 300px;
  margin: 0px auto 10px auto;
  padding: 10px;
}
</style>