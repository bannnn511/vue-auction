import { ALL_PRODUCTS } from "./mutation-types";
 
export const productMutations = {
  addProduct(state: any, payload: any) {
    state.showLoader = true;
    state.products.push(payload);
  },
};
