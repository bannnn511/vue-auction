import store from "../index";
import axios from "axios";
import { URL } from "@/shared/constants";
import { GET_CATEGORIES } from "../mutation-types";

export const categoryActions = {
  async allCategories({ commit }: any) {
    try {
      const res = await axios.get(`${URL.BASEAPI}/categories`);
      commit(GET_CATEGORIES, res.data);
    } catch (error) {
      console.error(error);
    }
  },
};
