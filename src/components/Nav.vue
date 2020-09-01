<template>
  <div class="menu-container">
    <div class="menu">
      <router-link to="/">
        <div class="date">{{ title }}</div>
      </router-link>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-secondary" type="submit">Search</button>
      </form>
      <router-link to="/login">
        <button type="button" class="btn btn-light signup">Sign Up</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Nav",

  data: function() {
    return {
      title: "Auction",
    };
  },
});
</script>
<style scoped>
.menu-container {
  box-shadow: 0 0px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
}
</style>
