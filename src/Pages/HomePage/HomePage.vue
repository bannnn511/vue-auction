<template>
  <div class="home">
    <div class="banner-container">
      <div id="Categories">
        <ul v-for="(category, index) in categories" v-bind:key="category">
          <div
            @mouseover="hover = index"
            @mouseleave="hover = null"
            :class="{ active: hover === index }"
          >
            <li class="categoryItem">{{ category }}</li>
          </div>
        </ul>
      </div>
      <div id="Banners">
        <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
        />
        <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
        />
      </div>
    </div>

    <product-list></product-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductList from "../../components/product/ProductList.vue";

export default Vue.extend({
  name: "HomePage",
  props: {
    msg: String,
  },
  data: function() {
    return {
      categories: this.$store.getters.allCategories,
      title: "Auction",
      hover: false,
      hoverCard: false,
      auctions: this.$store.getters.allAuctions,
    };
  },
  methods: {},
  components: {
    "product-list": ProductList,
  },
});
</script>

<style>
@import "./HomePage.css";
</style>
