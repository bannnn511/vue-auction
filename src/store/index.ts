import { notificationActions } from "./actions/notificationActions";
import { notificationMutations } from "./mutations/notificationMutations";
import { favouriteMutations } from "./mutations/favouriteMutations";
import Vue from "vue";
import Vuex from "vuex";
import {
  auctionGetters,
  manufacturerGetters,
  categoriesGetters,
  authGetters,
  notificationGetters,
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
    notifications: [],
  },
  getters: Object.assign(
    {},
    authGetters,
    auctionGetters,
    manufacturerGetters,
    categoriesGetters,
    notificationGetters
  ),
  mutations: Object.assign(
    {},
    authMutations,
    auctionMutations,
    categoryMutations,
    favouriteMutations,
    notificationMutations
  ),
  actions: Object.assign(
    {},
    authActions,
    auctionActions,
    categoryActions,
    favouriteActions,
    notificationActions
  ),
  plugins: [createPersistedState()],
});
