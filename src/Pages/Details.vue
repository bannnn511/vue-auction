<template>
  <div>
    <product-details :auction="auction" :isAdding="true"></product-details>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductDetails from "../components/product/ProductDetails.vue";
export default Vue.extend({
  created() {
    if (!this.auction.productName) {
      this.$store.dispatch("auctionById", this.$route.params["id"]);
    }
  },
  computed: {
    auction() {
      return this.$store.getters.auctionById(this.$route.params["id"]);
    },
  },
  data() {
    return {};
  },
  components: {
    "product-details": ProductDetails,
  },
});
</script>
