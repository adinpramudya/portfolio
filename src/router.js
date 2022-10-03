import { createRouter, createWebHistory } from "vue-router";

import ThePortfolio from "./components/ThePortfolio.vue";
import TheExperience from "./components/TheExperience.vue";
import TheCertificate from "./components/TheCertificate.vue";
import TheContact from "./components/TheContact.vue";
import TheHeader from "./components/TheHeader.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: TheHeader,
    },
    {
      path: "/portfolio",
      component: ThePortfolio,
    },
    {
      path: "/experience",
      component: TheExperience,
    },
    {
      path: "/certificate",
      component: TheCertificate,
    },
    {
      path: "/contact",
      component: TheContact,
    },
  ],
});

export default router;
