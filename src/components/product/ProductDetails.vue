<template>
  <div class="product-detail">
    <div class="parent-container">
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
              v-model="price"
              class="form-control"
              :placeholder="price"
              :class="{ 'form-control': true, error: errors[0] }"
            />
          </ValidationProvider>
        </div>
        <product-button :auction="auction"></product-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductButton from "./ProductButton.vue";
import { UPDATE_PRODUCT_TEMP_PRICE } from "@/store/mutation-types";

export default Vue.extend({
  props: ["auction"],
  async created() {
    await this.$store.dispatch("auctionById", this.$route.params["id"]);

    this.$store.commit(
      UPDATE_PRODUCT_TEMP_PRICE,
      this.$store.getters.currentAuctionPrice
    );
  },
  computed: {
    price: {
      get(): number {
        const value = this.$store.getters.tempPrice
          ? this.$store.getters.tempPrice
          : this.$store.getters.currentAuctionPrice;
        return value;
      },
      set(value: number) {
        this.$store.commit(UPDATE_PRODUCT_TEMP_PRICE, value);
      },
    },
  },
  components: {
    "product-button": ProductButton,
  },
  sockets: {
    connect: () => {
      console.log("socket connected");
    },
    broadcast: function(data) {
      this.$store.commit(UPDATE_PRODUCT_TEMP_PRICE, data.currentPrice);
    },
  },
});
</script>

<style>
.product-details {
  margin-top: 100vh;
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
  margin-right: 1vh;
}

.parent-container {
  margin-top: 10vh;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
}

.mine-img {
  padding: 0px 10px 0px 10px;
}
.mine-img img {
  width: 75vh;
}
</style>
