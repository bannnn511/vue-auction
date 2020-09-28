<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
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
            <router-link to="/categories">Categories</router-link>
          </li>
          <li>
            <router-link to="/notifications">Notifications</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <nav-home></nav-home>
    <notifications />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "../components/Nav.vue";
export default Vue.extend({
  name: "App",
  components: {
    "nav-home": Nav,
  },
  sockets: {
    askForUserId: function() {
      const id = this.$store.getters.getUserId;
      this.$socket.emit("userIdReceived", id);
    },
    notification: function(payload) {
      this.$notify({
        title: payload,
      });
    },
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
