<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <v-container class="grey lighten-5" fluid>
          <div class="mainContainer">
            <router-view></router-view>
          </div>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  },
  props: ['thisVariable'],
  data () {
    return {
      counter: this.thisVariable
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.mainContainer {
  max-width: 90%;
  margin: 0 auto;
}
</style>