<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <nav>
      <div class="container">
        <ul class="nav__left">
          <!-- Navigation Links -->
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/seller">Seller</router-link>
          </li>
          <li>
            <router-link to="/cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {},
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

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav {
  text-transform: uppercase;
  background: #5995da;
}

nav .container {
  display: flex;
}

nav li a {
  color: #ffffff;
  display: block;
  padding: 15px 15px;
  transition: all 150ms ease-out;
}

nav .nav__left {
  display: flex;
  justify-content: space-between;
}
</style>
