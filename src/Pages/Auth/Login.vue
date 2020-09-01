<template>
  <div class="auth">
    <div class="login">
      <form>
        <h3>Sign In</h3>

        <div class="form-group">
          <label>Email address</label>
          <ValidationProvider name="email" rules="required|email">
            <input
              v-model="loginEmail"
              type="email"
              class="form-control form-control-lg"
            />
          </ValidationProvider>
        </div>

        <div class="form-group">
          <label>Password</label>
          <ValidationProvider name="price" rules="required">
            <input
              v-model="loginPassword"
              type="password"
              class="form-control form-control-lg"
            />
          </ValidationProvider>
        </div>

        <button class="btn btn-dark btn-lg btn-block" v-on:click="login">
          Sign In
        </button>

        <!-- <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </p> -->

        <!-- <div class="social-icons">
          <ul>
            <li>
              <a href="#"><i class="fa fa-google"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
          </ul>
        </div> -->
      </form>
    </div>
    <div class="login">
      <form>
        <h3>Sign Up</h3>

        <div class="form-group">
          <label>Full Name</label>
          <ValidationProvider name="price" rules="required">
            <input
              v-model="fullname"
              type="text"
              class="form-control form-control-lg"
            />
          </ValidationProvider>
        </div>

        <div class="form-group">
          <label>Email address</label>
          <ValidationProvider name="price" rules="required">
            <input
              v-model="signUpEmail"
              type="email"
              class="form-control form-control-lg"
            />
          </ValidationProvider>
        </div>

        <div class="form-group">
          <label>Password</label>
          <ValidationProvider name="price" rules="required">
            <input
              v-model="signUpPassword"
              type="password"
              class="form-control form-control-lg"
            />
          </ValidationProvider>
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">
          Sign Up
        </button>

        <!-- <p class="forgot-password text-right">
          Already registered
          <router-link :to="{ name: 'login' }">sign in?</router-link>
        </p> -->
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      fullname: "",
      signUpEmail: "",
      signUpPassword: "",
    };
  },
  methods: {
    login() {
      this.fullname = "";
      this.signUpEmail = "";
      this.signUpPassword = "";
      console.log(this.loginEmail, this.loginPassword);
    },
    sigup() {
      this.loginEmail = "";
      this.loginPassword = "";
      console.log(this.fullname, this.signUpEmail, this.signUpPassword);
    },
  },
});
</script>

<style scoped>
.auth {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.login {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

social-icons {
  display: inline;
}
</style>
