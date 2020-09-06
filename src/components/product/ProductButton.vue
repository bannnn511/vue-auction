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
    </button>-->
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
      const path = `/details/${this.$props.auction.id}`;
      if (this.$router.currentRoute.path == path) {
        this.$store.dispatch("bidAuction", {
          id: this.$props.auction.productId,
          price: this.$store.getters.tempPrice,
        });
      } else {
        this.$router.push({ path });
      }
    },
  },
});
</script>
