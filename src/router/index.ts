import Vue from "vue";
import Router from "vue-router";
import HomeRoutes from "./home";
import SellerRoutes from "./seller";
import CartRoutes from "./cart";
import DetailRoutes from "./details";
import authRoutes from "./auth";
import notificationRoutes from "./notifications";
Vue.use(Router);

export default new Router({
  routes: [
    authRoutes,
    HomeRoutes,
    SellerRoutes,
    CartRoutes,
    DetailRoutes,
    notificationRoutes,
  ],
});
