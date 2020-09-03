import { LOGIN_FAILED, LOGIN_SUCCESS } from "@/store/mutation-types";

export const authMutations = {
  [LOGIN_SUCCESS](state: any, payload: any) {
    state.token = payload.token;
  },

  [LOGIN_FAILED](state: any, payload: any) {
    state.token = null;
  },
};