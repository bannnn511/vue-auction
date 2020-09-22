import { GET_CATEGORIES } from "./../mutation-types";
export const categoryMutations = {
  [GET_CATEGORIES](state: any, payload: any) {
    state.categories = payload;
  },
};
