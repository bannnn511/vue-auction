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
      <div id="Auction">
        <b-card-group deck>
          <b-card
            :title="product"
            img-src="https://placekitten.com/g/300/450"
            img-alt="Image"
            img-top
            v-for="(product, index) in products"
            v-bind:key="index"
            @mouseover="hoverCard = index"
            @mouseleave="hoverCard = null"
            :class="{ shadow: hoverCard === index }"
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>
            <template v-slot:footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",
  props: {
    msg: String,
  },
  data: function() {
    return {
      categories: ["books", "clothes", "accessory"],
      title: "Auction",
      hover: false,
      hoverCard: false,
      products: ["bike", "car", "book", "laptop", "iphone", "watch"],
    };
  },
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  border: 1px solid white;
  border-radius: 5px;
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
  display: block;
}

.menu-contrainer {
  display: flex;
  justify-content: center;
  height: 100px;
  background-color: #5995da;
}

.menu {
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-color: #5995da;
}

.date {
  display: flex;
  justify-content: flex-start;
  margin-left: 150px;
  color: white;
  margin-top: 30px;
  font-size: 25px;
}

.signup {
  display: flex;
  margin-right: 150px;
  justify-content: flex-end;
  height: 40px;
  margin-top: 30px;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

.banner-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #d0d0d0;
}

#Categories {
  display: flex;
  margin: left;
  flex-direction: column;
  text-align: left;
  width: 20%;
}

#Categories .categoryItem {
  margin-left: 10px;
  height: 40px;
}

#Categories li {
  justify-content: flex-start;
  align-items: center;
  display: flex;
  margin: 0 0px;
  text-align: left;
}

#Banners {
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.active {
  background: green;
  color: white;
}

#Auction {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  flex-direction: row;
}

#Auction .deck {
  display: flex;
}

.card {
  margin-right: 50px;
  margin-left: 50px;
  width: 100%;
}

.card-group {
  max-width: 25%;
}

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
