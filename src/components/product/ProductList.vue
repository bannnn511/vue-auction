<template>
  <div>
    <div class="auction">
      <div class="container">
        <template v-for="(auction, index) in auctions[0]">
          <product-item :auction="auction" v-bind:key="index"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "./ProductItem.vue";
export default Vue.extend({
  name: "product-list",
  created() {
    if (this.auctions.length === 0) {
      this.$store.dispatch("allAuctions");
    }
  },
  computed: {
    auctions() {
      return this.$store.getters.allAuctions;
    },
  },
  components: {
    "product-item": ProductItem,
  },
});
</script>

<style>
.auction {
  margin-top: 20px;
  background: #f7f8fb;
}

.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
