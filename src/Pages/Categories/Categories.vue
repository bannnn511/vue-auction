<template>
  <div class="categories">
    <div class="container">
      <template v-for="(category, index) in categories">
        <category-item :category="category" v-bind:key="index"></category-item>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CategoryItem from "../../components/category/CategoryItem.vue";
export default Vue.extend({
  name: "category-list",
  created() {
    this.$store.dispatch("allCategories");
    this.$store.dispatch("getPersonalFavouritesCategories");
  },
  computed: {
    categories() {
      return this.$store.getters.allCategories;
    },
  },
  components: {
    "category-item": CategoryItem,
  },
});
</script>

<style>
.categories {
  background: white;
}

.categories .container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  background-color: white;
}
</style>
