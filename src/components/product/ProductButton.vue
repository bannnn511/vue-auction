<template>
  <div>
    <button v-if="isAdding" class="button" @click="bidPrice">
      <i class="fa fa-cart-plus"></i> Bid price
    </button>
    <!-- <button
      v-else
      class="button button-danger"
      @click="removeFromCart(auction._id)"
    >
      <i class="fa fa-trash"></i> Remove from Cart
    </button> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["auction"],
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  computed: {
    isAdding() {
      return this.$store.state.cart.indexOf(this.auction) < 0;
    },
  },
  methods: {
    bidPrice() {
      this.$store.dispatch("bidAuction", {
        id: this.$props.auction.id,
        price: this.$store.getters.currentAuctionPrice,
      });
    },
  },
});
</script>
