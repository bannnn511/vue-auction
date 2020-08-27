<template>
  <div class="home">
    <div class="menu-container">
      <div class="menu">
        <div class="date">{{ title }}</div>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-secondary" type="submit">Search</button>
        </form>
        <button type="button" class="btn btn-light signup">Sign Up</button>
      </div>
    </div>
    <div class="content-wrapper">
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
      <!-- <div class="cards-list">
        <div
          class="cards-details"
          v-for="(auction, index) in auctions"
          v-bind:key="index"
          @mouseover="hoverCard = index"
          @mouseleave="hoverCard = null"
          :class="{ shadow: hoverCard === index }"
        >
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
            class="image-dis"
          />
          <p class="text-title">{{ product }}</p>
        </div>
      </div>-->
      <product-list></product-list>
    </div>
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
