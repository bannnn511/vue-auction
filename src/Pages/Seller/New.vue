<template>
  <product-form :model="model" :manufacturers="manufacturers"></product-form>
</template>

<script>
import ProductForm from "../../components/product/ProductForm.vue";
export default {
  data() {
    return {
      model: {},
      manufacturers: this.$store.getters.allManufacturers,
    };
  },
  methods: {
    addProduct(model) {
      console.log("model", model);
    },
  },
  components: {
    "product-form": ProductForm,
  },
};
</script>
