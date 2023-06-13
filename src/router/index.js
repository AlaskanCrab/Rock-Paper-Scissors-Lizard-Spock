import { createRouter, createWebHistory } from "vue-router";
import Fightview from "../views/Fightview.vue";
import Homeview from "../views/Homeview.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homeview,
    },
    {
      path: "/fight",
      name: "fight",
      component: Fightview,
    },
  ],
});
export default router;
