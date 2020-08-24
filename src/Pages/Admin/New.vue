<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers"
  ></product-form>
</template>

<script>
import ProductFrom from "@/components/product/ProductForm";
export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: "sam",
          name: "Samsung",
        },
        {
          _id: "apple",
          name: "Apple",
        },
      ],
    };
  },
  components: {
    "product-form": ProductFrom,
  },
};
</script>
