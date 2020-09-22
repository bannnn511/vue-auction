import { favouriteMutations } from "./mutations/favouriteMutations";
import Vue from "vue";
import Vuex from "vuex";
import {
  auctionGetters,
  manufacturerGetters,
  categoriesGetters,
  authGetters,
} from "./getters";
import {
  auctionMutations,
  authMutations,
  categoryMutations,
} from "./mutations/index";
import {
  auctionActions,
  authActions,
  categoryActions,
  favouriteActions,
} from "./actions/index";
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
    categories: [],
    favCategories: [],
  },
  getters: Object.assign(
    {},
    authGetters,
    auctionGetters,
    manufacturerGetters,
    categoriesGetters
  ),
  mutations: Object.assign(
    {},
    authMutations,
    auctionMutations,
    categoryMutations,
    favouriteMutations
  ),
  actions: Object.assign(
    {},
    authActions,
    auctionActions,
    categoryActions,
    favouriteActions
  ),
  plugins: [createPersistedState()],
});
