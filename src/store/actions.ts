import {
  ALL_AUCTIONS,
  ADD_AUCTION_SUCCESS,
  ALL_AUCTIONS_SUCCESS,
  AUCTION_BY_ID,
  AUCTION_BY_ID_SUCCESS,
} from "./mutation-types";
import axios from "axios";

const API_BASE = "http://localhost:4000/api";

export const auctionActions = {
  async allAuctions({ commit }: any) {
    commit(ALL_AUCTIONS);
    const route = `${API_BASE}/auctions`;
    const res = await axios.get(route);
    commit(ADD_AUCTION_SUCCESS, res.data);
  },

  async addAuction({ commit }: any, payload: any) {
    commit(ALL_AUCTIONS);
    const res = await axios.get(`${API_BASE}/auctions`);
    commit(ALL_AUCTIONS_SUCCESS, res.data);
  },

  async auctionById({ commit }: any, payload: any) {
    commit(AUCTION_BY_ID);
    const res = await axios.get(`${API_BASE}/auctions/${payload}`);
    commit(AUCTION_BY_ID_SUCCESS, res.data);
  },
};
