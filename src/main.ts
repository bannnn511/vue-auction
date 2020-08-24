import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

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
  render: h => h(App),
}).$mount("#app");
