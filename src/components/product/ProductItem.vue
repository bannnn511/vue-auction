<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="product">
      <router-link :to="'/details/' + auction.id" class="product-link">
        <div class="product__image">
          <img
            loading="lazy"
            class="img-responsive"
            :src="auction.imgURL"
            alt
          />
        </div>
        <div class="product__description">
          <div class="product__info">
            <h5>{{ auction.productName }}</h5>
            <small
              >Remaining time:
              {{
                remaingTime
                  ? `${remaingTime.days}:${("0" + remaingTime.hours).slice(
                      -2
                    )}:${("0" + remaingTime.minutes).slice(-2)}:${(
                      "0" + remaingTime.seconds
                    ).slice(-2)}`
                  : ""
              }}</small
            >
          </div>
          <div class="product__price-cart">${{ auction.currentPrice }}</div>
        </div>
      </router-link>
      <div class="product__action">
        <product-button :auction="auction"></product-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductButton from "./ProductButton.vue";
export default Vue.extend({
  name: "product-item",
  props: ["auction"],
  components: {
    "product-button": ProductButton,
  },
  data() {
    return {
      remaingTime: {},
    };
  },
  methods: {
    countdown() {
      const endAt = new Date(this.$props.auction.endAt);
      const now = new Date();
      const t = endAt.getTime() - now.getTime();
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (t > 0) {
        this.remaingTime = {
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };
        setTimeout(this.countdown, 1000);
      } else {
        this.remaingTime = {};
      }
    },
  },

  mounted() {
    setTimeout(this.countdown, 1);
  },
});
</script>

<style>
.product {
  background: #fff;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  box-shadow: 0 0px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
}
.product .product__description,
.product .product__action {
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
}
.product:hover .product__description {
  transform: translateY(-40px);
}
.product:hover .product__action {
  transform: none;
}
.product-link {
  display: block;
  color: #3d3d3d;
}
.product-link:hover {
  color: #3d3d3d;
  text-decoration: none;
}
.product .product__image {
  width: 100%;
}
.product__image img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 225px;
}
.product__description {
  width: 100%;
  display: flex;
  padding: 20px 20px 15px;
  background: #fff;
}
.product__info {
  flex: 2;
}
.product__description small {
  color: #808080;
  font-size: 13px;
}
.product__description h4 {
  margin: 3px 0 5px 0;
}
.product__price-cart {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #51d2b7;
}
.product__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
.product__action {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
}
.product__action button {
  border-radius: 0;
  width: 100%;
  display: block;
}
</style>
