<template>
  <div class="product-detail">
    <div class="parent-container">
      <div class="mine-container">
        <div class="mine-img">
          <img class="img-responsive" :src="auction.imgURL" alt />
        </div>
        <div>
          <div class="product-details__description">
            <h3>{{ auction.productName }}</h3>
            <small>End date: {{ auction.description && auction.endAt }}</small>
            <p>description: {{ auction.description }}</p>
          </div>
          <div class="product-details__price-cart">
            <p>Price:</p>
            <ValidationProvider name="price" rules="required" v-slot="{ errors }">
              <input
                type="number"
                class="form-control"
                :placeholder="auction.currentPrice"
                :class="{ 'form-control': true, error: errors[0] }"
              />
            </ValidationProvider>
            <product-button></product-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductButton from "./ProductButton.vue";

export default Vue.extend({
  props: ["auction"],
  created() {
    if (!this.auction.productName) {
      this.$store.dispatch("auctionById", this.$route.params["id"]);
    }
  },
  components: {
    "product-button": ProductButton,
  },
});
</script>

<style>
.product-details {
  border-bottom: 2px solid #f5f5f5;
}
.product-details__image {
  width: 50%;
  height: 50%;
}
.product-details__description {
  padding-top: 0px;
}
.product-details__description small {
  color: #808080;
}
.product-details__description h3 {
  margin: 5px 0 30px 0;
}
.product-details__price-cart {
  display: flex;
  padding-top: 30px;
  margin: auto;
}
.product-details__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
.parent-container {
  background-color: #f5f5f5;
  display: flex;
  justify-content: flex-start;
}

.mine-container {
  margin-top: 50px;
  display: flex;
  max-width: 70%;
}
.mine-img {
  padding: 0px 10px 0px 10px;
  margin-left: 20vh;
}
</style>
