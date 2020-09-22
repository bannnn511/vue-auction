import { GET_PERSONAL_FAVORITES_CATEGORIES } from "./../mutation-types";
import store from "../index";
import axios from "axios";
import { URL } from "@/shared/constants";

export const favouriteActions = {
  async addToFavouriteCategory({ commit }: any, category: string) {
    try {
      const options = {
        headers: { Authorization: store.getters.getBearerToken },
      };
      const route = `${URL.BASEAPI}/favourites/category`;
      await axios.post(
        route,
        {
          category,
        },
        options
      );
    } catch (error) {
      console.error(error);
    }
  },

  async getPersonalFavouritesCategories({ commit }: any) {
    try {
      const options = {
        headers: { Authorization: store.getters.getBearerToken },
        params: { type: "category" },
      };
      const route = `${URL.BASEAPI}/favourites`;
      const res = await axios.get(route, options);
      commit(GET_PERSONAL_FAVORITES_CATEGORIES, res.data);
    } catch (error) {
      console.error(error);
    }
  },
};
