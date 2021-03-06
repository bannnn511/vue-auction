import { URL } from "./../../shared/constants";
import axios from "axios";
import store from "..";
import { ALL_NOTIFICATIONS, MARK_ALL_AS_READ } from "../mutation-types";
const API_BASE = URL.BASEAPI;

export const notificationActions = {
  async getNotifications({ commit }: any) {
    try {
      const options = {
        headers: { Authorization: store.getters.getBearerToken },
      };
      const res = await axios.get(`${API_BASE}/notifications`, options);
      commit(ALL_NOTIFICATIONS, res.data);
    } catch (error) {
      console.error(error);
    }
  },

  async markAllAsRead({ commit }: any) {
    try {
      const res = await axios.put(
        `${API_BASE}/notifications/all`,
        {},
        {
          headers: { Authorization: store.getters.getBearerToken },
        }
      );
      commit(MARK_ALL_AS_READ, res.data);
    } catch (error) {
      console.error(error);
    }
  },

  async markAsRead({ commit }: any, payload: any) {
    try {
      const res = await axios.put(
        `${API_BASE}/notifications`,
        { description: payload.description, createdAt: payload.createdAt },
        {
          headers: { Authorization: store.getters.getBearerToken },
        }
      );
      commit(MARK_ALL_AS_READ, res.data);
    } catch (error) {
      console.error(error);
    }
  },

  async sendOneSignalPlayerId({ commit }: any, playerId: string) {
    try {
      const options = {
        headers: { Authorization: store.getters.getBearerToken },
      };
      await axios.post(`${API_BASE}/onesignal`, { playerId }, options);
    } catch (error) {
      console.error(error);
    }
  },
};
