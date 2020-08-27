<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">
      <i class="fa fa-cart-plus"></i> Bid price
    </button>
    <button v-else class="button button-danger" @click="removeFromCart(auction._id)">
      <i class="fa fa-trash"></i> Remove from Cart
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ADD_TO_CART, REMOVE_FROM_CART } from "@/store/mutation-types";
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
    addToCart() {
      // this.$store.commit(ADD_TO_CART, this.$props.auction);
    },
    removeFromCart(id: any) {
      // this.$store.commit(REMOVE_FROM_CART, id);
    },
  },
});
</script>
