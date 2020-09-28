import { ALL_NOTIFICATIONS, MARK_ALL_AS_READ } from "./../mutation-types";
export const notificationMutations = {
  [ALL_NOTIFICATIONS](state: any, payload: any) {
    state.notifications = payload;
  },
  [MARK_ALL_AS_READ](state: any, payload: any) {
    state.notifications = payload;
  },
};
