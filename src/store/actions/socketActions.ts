/* eslint-disable @typescript-eslint/camelcase */
import Vue from "vue";
export const socketActions = {
  SOCKET_oops(state: any, server: any) {
    Vue.toasted.global
      .appError({
        message: server.message,
      })
      .goAway(1200);
  },

  SOCKET_success(state: any, server: any) {
    Vue.toasted.global
      .appSuccess({
        message: server.message,
      })
      .goAway(1200);
  },

  SOCKET_info(state: any, server: any) {
    Vue.toasted.global
      .appInfo({
        message: server.message,
      })
      .goAway(1200);
  },
};
