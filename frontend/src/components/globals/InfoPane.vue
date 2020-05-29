<template>
  <div class="infoPane">
    <v-toolbar flat dense class="primary" dark>
      <v-spacer />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-card class="information" outlined v-bind:id="identification+'-0'">

    </v-card>

      <!-- <v-toolbar flat dense class="primary" dark>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer/>
        <slot name="action" />
      </v-toolbar> -->

    <!-- <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div> -->
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'identification'
  ]
}
</script>

<style scoped>
.infoPane {
  max-width: 200px;
  background-color: white;
  margin: 0 auto;
}


.information {
  font-size: 40px;
  font-weight: 700;
}
</style>