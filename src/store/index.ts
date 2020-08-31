import Vue from "vue";
import Vuex from "vuex";
import {
  auctionGetters,
  manufacturerGetters,
  categoriesGetters,
} from "./getters";
import { auctionMutations } from "./mutations";
import { auctionActions } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    auction: {},
    tempPrice: 0,
    auctions: [],
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
    auctionGetters,
    manufacturerGetters,
    categoriesGetters
  ),
  mutations: Object.assign({}, auctionMutations),
  actions: Object.assign({}, auctionActions),
});
