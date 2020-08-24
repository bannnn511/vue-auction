<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav>
      <div class="container">
        <ul class="nav__left">
          <!-- Navigation Links -->
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/admin">Admin</router-link>
          </li>
          <li>
            <router-link to="./cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <HomePage />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomePage from "./Pages/HomePage/HomePage.vue";

export default Vue.extend({
  name: "App",
  components: {
    HomePage,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
