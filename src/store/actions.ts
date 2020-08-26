import {
  ALL_PRODUCTS,
  ADD_PRODUCT_SUCCESS,
  ALL_PRODUCTS_SUCCESS,
} from "./mutation-types";
import axios from "axios";

const API_BASE = "localhost:4000/api";

export const productActions = {
  async allProducts({ commit }: any) {
    commit(ALL_PRODUCTS);
    const data = await axios.get(`${API_BASE}/products`);
    console.log(data);
    commit(ADD_PRODUCT_SUCCESS, data);
  },

  async addProduct({ commit }: any, payload: any) {
    commit(ALL_PRODUCTS);
    const data = await axios.get(`${API_BASE}/products`);
    console.log(data);
    commit(ALL_PRODUCTS_SUCCESS, data);
  },
};
