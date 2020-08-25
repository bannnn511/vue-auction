import Vue from "vue";
import Vuex from "vuex";
import {
  productGetters,
  manufacturerGetters,
  categoriesGetters,
} from "./getters";
import { productMutations } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: ["bike", "car", "book", "laptop", "iphone", "watch", "tetse"],
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
    categories: ["books", "clothes", "accessory"],
  },
  getters: Object.assign(
    {},
    productGetters,
    manufacturerGetters,
    categoriesGetters
  ),
  mutations: Object.assign({}, productMutations),
});
