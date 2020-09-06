import Vue from "vue";
import Vuex from "vuex";
import {
  auctionGetters,
  manufacturerGetters,
  categoriesGetters,
  authGetters,
} from "./getters";
import { auctionMutations, authMutations } from "./mutations/index";
import { auctionActions, authActions } from "./actions/index";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: "",
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
    authGetters,
    auctionGetters,
    manufacturerGetters,
    categoriesGetters
  ),
  mutations: Object.assign({}, authMutations, auctionMutations),
  actions: Object.assign({}, authActions, auctionActions),
  plugins: [createPersistedState()],
});
