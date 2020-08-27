import Index from "../Pages/Seller/Index.vue";
import New from "../Pages/Seller/New.vue";
import Products from "../Pages/Seller/Products.vue";
import Edit from "../Pages/Seller/Edit.vue";

export default {
  path: "/seller",
  name: "Seller",
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
};
