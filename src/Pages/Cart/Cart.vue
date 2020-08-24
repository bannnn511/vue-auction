<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "home",
  data() {
    return {
      msg: "Welcome to the Cart Page",
    };
  },
});
</script>
