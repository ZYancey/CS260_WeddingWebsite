<template>
<div class="hero">
  <div class="heroBox">
    <h1 v-if="submitted" class="Prompt">We need your address!</h1>
    <h1 v-else class="Prompt">Thank you, we will send that your way!
    </h1>
    <p><img src="../assets/decoration.png"></p>



    <form v-if="submitted" class="pure-form">
      <fieldset>
        <legend>Let us know where to send your invitation</legend>
        <div class="pure-u-1-2">
        <input class="pure-input-1" required="" placeholder="First Name" v-model="firstName">
        </div>
        <div class="pure-u-1-2">
        <input class="pure-input-1" required="" placeholder="Last Name" v-model="lastName">
        </div>
      </fieldset>

      <fieldset>
        <input class="pure-input-1" required="" placeholder="Street Address" v-model="line1">
      </fieldset>
      <fieldset>
        <input class="pure-input-1" placeholder="Line 2" v-model="line2">
      </fieldset>


      <fieldset>
        <div class="pure-u-1-3">
          <input class="pure-input-1" required="" placeholder="City" v-model="cityName">
        </div>
        <div class="pure-u-1-3">
          <input class="pure-input-1" placeholder="Zip Code" v-model="zipCode">
        </div>
        <div class="pure-u-1-3">
          <input class="pure-input-1" required="" placeholder="State" v-model="stateName">
        </div>
      </fieldset>
      
      <fieldset>
        <label for="checkbox-radio-option-one" class="pure-checkbox">
          <input type="checkbox" id="checkbox-radio-option-one" value="" v-model="attending"/> We plan on attending the reception on August 6th
        </label>
      </fieldset>

      <fieldset>
        <button type="submit" class="pure-button pure-button-primary" @click.prevent="register">Submit!</button>
      </fieldset>

    </form>


    <p v-if="error" class="error">{{error}}</p>
    
    
    <form class="pure-form" hidden>
      <fieldset>
        <legend>Login</legend>
        <input placeholder="username" v-model="usernameLogin">
        <input type="password" placeholder="password" v-model="passwordLogin">
      </fieldset>
      <fieldset>
        <button type="submit" class="pure-button pure-button-primary" @click.prevent="login">Login</button>
      </fieldset>
    </form>
    <p v-if="errorLogin" class="error">{{errorLogin}}</p>

  </div>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'RSVPView',
  data() {
    return {
      firstName: '',
      lastName: '',
      line1: '',
      line2: '',
      cityName: '',
      zipCode: '',
      stateName: '',
      attending: false,
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      submitted: true,
      errorLogin: '',
    }
  },
  methods: {    
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.lastName || !this.line1 || !this.cityName || !this.stateName)
        return;
      try {
        
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          line1: this.line1,
          line2: this.line2,
          cityName: this.cityName,
          zipCode: this.zipCode,
          stateName: this.stateName,
          attending: this.attending
        });
        this.$root.$data.user = response.data.user;
        console.log("SUCESS")
        this.submitted = false;
      } catch (error) {
        console.log("FAIL")
        this.submitted = true;
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  }
}

</script>



<style scoped>
h1 {
  font-size: 28px;
  font-variant: capitalize;
}

.hero {
  padding: 30px;
  display: flex;
  justify-content: center;
}

.heroBox {
  background: white;
  opacity: 0.95;
  display: inline;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border-radius: 30px;
  margin-bottom: 100px
}

.hero::after {
  content: "";
  background-image: url("../assets/payson.jpeg");
  background-size: 100%;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.hero img {
  height: 20px;
  margin: 0px;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
}

.error {
  margin-top: 20px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}
</style>