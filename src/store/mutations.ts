import {
  ALL_PRODUCTS,
  ADD_PRODUCT_SUCCESS,
  ALL_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
} from "./mutation-types";

export const productMutations = {
  [ALL_PRODUCTS](state: any) {
    state.showLoader = true;
  },

  [ALL_PRODUCTS_SUCCESS](state: any, payload: any) {
    state.showLoader = false;
    state.products = payload;
  },

  [ADD_PRODUCT](state: any) {
    state.showLoader = true;
  },

  [ADD_PRODUCT_SUCCESS](state: any, payload: any) {
    state.showLoader = false;
    state.products.push(payload);
  },
};
