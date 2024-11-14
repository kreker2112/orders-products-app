import { createRouter, createWebHashHistory } from "vue-router";
import Orders from "../views/OrdersPage.vue";
import Products from "../views/ProductsPage.vue";

const routes = [
  { path: "/", redirect: "/orders" },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    meta: {
      layout: "defaultLayout",
    },
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    meta: {
      layout: "defaultLayout",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
