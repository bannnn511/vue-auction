<template>
  <div>
    <button class="button" @click="bidPrice">
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
      price: null,
    };
  },
  computed: {},
  methods: {
    bidPrice() {
      const path = `/details/${this.$props.auction.id}`;
      if (this.$router.currentRoute.path == path) {
        const data = {
          id: this.$props.auction.productId,
          price: this.$store.getters.tempPrice,
        };
        this.$store.dispatch("bidAuction", data);
      } else {
        this.$router.push({ path });
      }
    },
  },
});
</script>
