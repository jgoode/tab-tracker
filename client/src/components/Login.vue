<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
          <v-text-field
                name="email"
                label="E-mail"
                id="email"
                v-model="email"
              ></v-text-field>
          <br>
          <v-text-field
                name="password"
                type="password"
                label="Password"
                id="password"
                v-model="password"
              ></v-text-field>                 
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn dark class="blue darken-3" @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        const token = response.data.token
        this.$store.dispatch('setToken', token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: white;
    font-weight: bold;
    
  }

</style>
