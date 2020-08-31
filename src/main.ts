import Vue from "vue";
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

// install rules for vee-validate
// with typescript
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  });
}

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("ValidationProvider", ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
