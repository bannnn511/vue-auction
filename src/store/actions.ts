import {
  ALL_AUCTIONS,
  ADD_AUCTION_SUCCESS,
  ALL_AUCTIONS_SUCCESS,
  AUCTION_BY_ID,
  AUCTION_BY_ID_SUCCESS,
  BID_PRICE,
} from "./mutation-types";
import axios from "axios";

const API_BASE = "http://localhost:4000/api";

export const auctionActions = {
  async allAuctions({ commit }: any) {
    commit(ALL_AUCTIONS);
    try {
      const route = `${API_BASE}/auctions`;
      const res = await axios.get(route);
      commit(ADD_AUCTION_SUCCESS, res.data);
    } catch (error) {
      console.log(error);
    }
  },

  async addAuction({ commit }: any, payload: any) {
    commit(ALL_AUCTIONS);
    try {
      const res = await axios.get(`${API_BASE}/auctions`);
      commit(ALL_AUCTIONS_SUCCESS, res.data);
    } catch (error) {
      console.log(error);
    }
  },

  async auctionById({ commit }: any, payload: any) {
    commit(AUCTION_BY_ID);
    try {
      const res = await axios.get(`${API_BASE}/auctions/${payload}`);
      commit(AUCTION_BY_ID_SUCCESS, res.data);
    } catch (error) {
      console.log(error);
    }
  },

  async bidAuction({ commit }: any, payload: any) {
    try {
      const res = await axios.put(`${API_BASE}/auctions/${payload.id}/price`, {
        price: payload.price,
      });
      if (res.status < 400) {
        commit(BID_PRICE, res.data);
      } else {
        throw new Error("bid price failed");
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export const authActions = {
  async loginAction({ commit }: any, payload: any) {
    try {
      const res = await axios.post(`${API_BASE}/auth/login`, {
        email: payload.email,
        password: payload.password,
      });
      if (res.status < 400) {
        console.log(res.data);
      } else {
        throw new Error("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  },

  async signUpAction({ commit }: any, payload: any) {
    try {
      const res = await axios.post(`${API_BASE}/auth/register`, {
        email: payload.email,
        password: payload.password,
      });
      if (res.status < 400) {
        console.log(res.data);
      } else {
        throw new Error("signup failed");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
