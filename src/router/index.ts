import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import ProductsList from "../pages/ProductsList.vue";
import UserCart from "../pages/UserCart.vue";
import ShopAdmin from "../pages/ShopAdmin.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/products" },
  { path: "/products", component: ProductsList },
  { path: "/cart", component: UserCart },
  { path: "/admin", component: ShopAdmin },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
