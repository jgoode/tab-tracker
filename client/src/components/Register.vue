<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue darken-4" dark>
          <v-toolbar-title><span style="color:white;">Register</span></v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
                name="email"
                label="E-mail"
                id="email"
                v-model="email"
              ></v-text-field>
          <br>
          <v-text-field
                name="password"
                label="Password"
                id="password"
                v-model="password"
              ></v-text-field>                 
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn class="blue darken-3" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }

</style>
