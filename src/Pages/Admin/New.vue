<template>
  <product-form :model="model" :manufacturers="manufacturers"></product-form>
</template>

<script>
import ProductForm from "../../components/product/ProductForm.vue";
export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: 1,
          name: "Samsung",
        },
        {
          _id: 2,
          name: "Apple",
        },
      ],
    };
  },

  components: {
    "product-form": ProductForm,
  },
};
</script>
