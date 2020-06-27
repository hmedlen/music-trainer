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
  data: () => ({compName: 'ChordTraining'}),
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
  width: 800px;
  height: 320px;
  margin: 10px auto 30px auto;
  padding: 10px;
}
</style>