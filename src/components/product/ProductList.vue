<template>
  <div class="auction">
    <div class="container">
      <template v-for="(auction, index) in auctions">
        <product-item :auction="auction" v-bind:key="index"></product-item>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "./ProductItem.vue";
import { UPDATE_PRODUCT_PRICE_WITH_ID } from "@/store/mutation-types";
export default Vue.extend({
  name: "product-list",
  created() {
    this.$store.dispatch("allAuctions");
  },
  computed: {
    auctions() {
      return this.$store.getters.allAuctions;
    },
  },
  components: {
    "product-item": ProductItem,
  },
  sockets: {
    broadcast: function(data) {
      const index = this.$store.getters.auctionIndex(data.id);
      this.$store.commit(UPDATE_PRODUCT_PRICE_WITH_ID, {
        index,
        price: data.currentPrice,
      });
    },
  },
});
</script>

<style>
.auction {
  background: #ededed;
}

.auction .container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 0px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
}
</style>
