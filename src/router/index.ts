import Vue from "vue";
import Router from "vue-router";
import HomePage from "../Pages/HomePage/HomePage.vue";
import Cart from "../Pages/Cart/Cart.vue";
import Index from "../Pages/Admin/Index.vue";
import New from "../Pages/Admin/New.vue";
import Products from "../Pages/Admin/Products.vue";
import Edit from "../Pages/Admin/Edit.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Index,
      children: [
        {
          path: "new",
          name: "New",
          component: New,
        },
        {
          path: "",
          name: "Products",
          component: Products,
        },
        {
          path: "edit/:id",
          name: "Edit",
          component: Edit,
        },
      ],
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
  ],
});
