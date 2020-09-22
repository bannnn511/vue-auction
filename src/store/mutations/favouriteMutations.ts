import { GET_PERSONAL_FAVORITES_CATEGORIES } from "../mutation-types";

export const favouriteMutations = {
  [GET_PERSONAL_FAVORITES_CATEGORIES](state: any, payload: any) {
    state.favCategories = payload;
  },
};
