<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
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
                autocomplete="new-password"
              ></v-text-field>                 
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn dark class="blue darken-3" @click="register">Register</v-btn>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
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
    color: red;
  }

</style>
