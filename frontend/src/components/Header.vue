<template>
  <v-toolbar fixed flat class="primary" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{name: 'trainer'}">
        Music Trainer
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        text
        dark
        :to="{name: 'pitch'}">
        Pitch Trainer
      </v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-toolbar-items>
      <v-btn
        text
        dark
        :to="{name: 'trainer'}">
        Login
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}

.primary {
  max-height: 56px;
}
</style>
