<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="category">
      <div class="category__description">
        <div class="like-content">
          <h5>{{ category }}</h5>
          <button
            :class="{ btn__like: like, btn__normal: !like }"
            v-on:click="onLike"
          >
            <i class="fa fa-heart" aria-hidden="true"></i>
            Like
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "category-item",
  computed: {
    favCategories(): any {
      return this.$store.getters.favCategories;
    },
  },
  data() {
    return {
      like: false,
    };
  },
  methods: {
    onLike: function() {
      this.like = !this.like;
      const category = this.$props.category;
      this.$store.dispatch("addToFavouriteCategory", category);
    },
  },
  watch: {
    favCategories(newFav, oldFav) {
      newFav.forEach((category: any) => {
        if (category.categoryName === this.$props.category) {
          this.like = true;
        }
      });
    },
  },
  props: ["category"],
});
</script>

<style>
.category {
  background: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
}
.category-link {
  display: block;
  color: #3d3d3d;
}
.category .category__image {
  width: 100%;
}
.category__image img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 225px;
}
.category__description {
  width: 100%;
  display: flex;
  padding: 20px 20px 15px;
  background: #fff;
}
.category__info {
  flex: 2;
}
.category__description small {
  color: white;
  font-size: 13px;
}
.category__description h4 {
  margin: 3px 0 5px 0;
}
.category__price-cart {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #51d2b7;
}
.category__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
.category__action {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.category__action button {
  border-radius: 0;
  width: 100%;
  display: block;
}
.like-content {
  display: inline-block;
  width: 100%;
  font-size: 18px;
  text-align: center;
}
.like-content span {
  color: #9d9da4;
  font-family: monospace;
}
.like-content .btn__like {
  display: block;
  margin: 40px auto 0px;
  text-align: center;
  background: #ed2553;
  border-radius: 3px;
  box-shadow: 0 10px 20px -8px rgb(240, 75, 113);
  padding: 10px 17px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  color: #ffffff;
  text-decoration: none;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}
.like-content .btn__normal {
  display: block;
  margin: 40px auto 0px;
  text-align: center;
  background: white;
  border-radius: 3px;
  box-shadow: 0 0px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 17px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  color: black;
  text-decoration: none;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}
.like-content .btn-secondary:hover {
  transform: translateY(-3px);
}
.like-content .btn-secondary .fa {
  margin-right: 5px;
}
.like-animation {
  animation-name: likeAnimation;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: 0.65s;
}
@keyframes likeAnimation {
  0% {
    transform: scale(30);
  }
  100% {
    transform: scale(1);
  }
}
</style>
