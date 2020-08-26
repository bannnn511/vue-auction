<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product" v-bind:key="product"></product-item>
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
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  components: {
    "product-item": ProductItem,
  },
});
</script>
