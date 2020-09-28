import { URL } from "./../../shared/constants";
import axios from "axios";
import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "@/store/mutation-types";

const API_BASE = URL.BASEAPI;

export const authActions = {
  async login({ commit }: any, payload: any) {
    try {
      const res = await axios.post(`${API_BASE}/auth/login`, {
        email: payload.email,
        password: payload.password,
      });
      if (res.status < 400) {
        commit(LOGIN_SUCCESS, res.data);
        console.log(res.data);
      } else {
        throw new Error("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  },

  async signUp({ commit }: any, payload: any) {
    try {
      const res = await axios.post(`${API_BASE}/auth/register`, {
        email: payload.email,
        password: payload.password,
      });
      if (res.status < 400) {
        commit(SIGNUP_SUCCESS, res.data);
        console.log(res.data);
      } else {
        throw new Error("signup failed");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
