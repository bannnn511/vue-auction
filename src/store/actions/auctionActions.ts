import {
  ADD_AUCTION_SUCCESS,
  ALL_AUCTIONS,
  ALL_AUCTIONS_SUCCESS,
  AUCTION_BY_ID,
  AUCTION_BY_ID_SUCCESS,
  BID_PRICE,
} from "@/store/mutation-types";
import store from "../index";
import axios from "axios";
import { URL } from "@/shared/constants";

export const auctionActions = {
  async allAuctions({ commit }: any) {
    commit(ALL_AUCTIONS);
    try {
      const route = `${URL.BASEAPI}/auctions`;
      const res = await axios.get(route);
      commit(ADD_AUCTION_SUCCESS, res.data);
    } catch (error) {
      console.error(error);
    }
  },

  async addAuction({ commit }: any, payload: any) {
    commit(ALL_AUCTIONS);
    try {
      const res = await axios.get(`${URL.BASEAPI}/auctions`);
      commit(ALL_AUCTIONS_SUCCESS, res.data);
    } catch (error) {
      console.error(error);
    }
  },

  async auctionById({ commit }: any, payload: any) {
    commit(AUCTION_BY_ID);
    try {
      const res = await axios.get(`${URL.BASEAPI}/auctions/${payload}`);
      commit(AUCTION_BY_ID_SUCCESS, res.data);
    } catch (error) {
      console.error(error);
    }
  },

  async bidAuction({ commit }: any, payload: any) {
    try {
      const options = {
        headers: { Authorization: store.getters.getBearerToken },
      };

      const res = await axios.put(
        `${URL.BASEAPI}/products/${payload.id}/price`,
        {
          price: payload.price,
        },
        options
      );

      if (res.status < 400) {
        commit(BID_PRICE, res.data);
      } else {
        throw new Error("bid price failed");
      }
    } catch (error) {
      console.error(error);
    }
  },
};
