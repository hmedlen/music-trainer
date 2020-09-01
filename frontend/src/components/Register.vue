<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response);
    }
  }
}
</script>

<style scoped>
</style>