import Vue from "vue";
import socketio from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import Toasted from "vue-toasted";
import Notifications from "vue-notification";
import App from "./Pages/App.vue";
import router from "./router";
import store from "./store/index";
import { ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { URL } from "./shared/constants";

// install rules for vee-validate
// with typescript
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  });
}

Vue.config.productionTip = false;
Vue.use(Toasted);
Vue.use(Notifications);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("ValidationProvider", ValidationProvider);

export const SocketInstance = socketio(URL.BASEURL);
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketInstance,
    vuex: {
      store,
      actionPrefix: "SOCKET_",
    },
  })
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

window.OneSignal = window.OneSignal || [];
window.OneSignal.push(function() {
  console.log("tets");
  OneSignal.init({
    appId: "c13d9e87-476b-4ef1-8721-f2c1486e0dbd",
  });

  OneSignal.on("notificationDisplay", function(event) {
    console.warn("OneSignal notification displayed:", event);
  });

  OneSignal.getUserId(function(userId) {
    console.log("OneSignal User ID:", userId);
    store.dispatch("sendOneSignalPlayerId", userId);
  });

  // Occurs when the user's subscription changes to a new value.
  OneSignal.on("subscriptionChange", function(isSubscribed) {
    console.log("The user's subscription state is now:", isSubscribed);
  });
});
