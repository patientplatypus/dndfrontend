<template>
  <div class="LoginorSignup">
    <div>
      <h1>
        LoginorSignup
      </h1>
      <br/>
      <div>
        <h2>
          Log In
        </h2>
      </div>
      <br/>
        <input v-model="usernamelogin" placeholder="username">
      <br/>
        <input v-model="passwordlogin" placeholder="password">
      <br/>
      <div v-bind:style="{ backgroundColor: 'black', color: 'white', paddingTop: '5px', paddingBottom: '5px', width: '10%', marginLeft: '45%'}" v-on:click="loginsignupbutton('login')">
        Login!
      </div>
      <br/>
      <div>
        <h2>
          Sign Up
        </h2>
      </div>
      <br/>
        <input v-model="usernamesignup" placeholder="username">
      <br/>
        <input v-model="passwordsignup" placeholder="password">
      <br/>
      <div v-bind:style="{ backgroundColor: 'black', color: 'white', paddingTop: '5px', paddingBottom: '5px', width: '10%', marginLeft: '45%'}"
      v-on:click="loginsignupbutton('signup')">
        Sign Up!
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LoginorSignup',
  data () {
    return {
      usernamelogin: '',
      passwordlogin: '',
      usernamesignup: '',
      passwordsignup: ''
    }
  },
  computed: {
    ...mapGetters([
      'loginpostreturn',
      'signuppostreturn'
    ])
  },
  methods:{
    ...mapActions([
      'loginaction',
      'signupaction'
    ]),
    loginsignupbutton: function(signuporlogin){
      if (signuporlogin === "login"){
        console.log('inside login in loginsignupbutton');
        console.log('value of this.usernamelogin', this.usernamelogin);
        console.log('value of this.usernamepassword', this.passwordlogin);

        this.loginaction({username: this.usernamelogin, password: this.passwordlogin})
      }
      if (signuporlogin === "signup"){
        console.log('inside signup in loginsignupbutton');
        this.signupaction({username: this.usernamesignup, password: this.passwordsignup})
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
