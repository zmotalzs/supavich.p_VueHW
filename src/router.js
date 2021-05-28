import { createRouter, createWebHistory } from "vue-router";
import main from "@/pages/main.vue";
import Contact from "@/pages/Contact.vue";

const routes = [
  { path: "/", name: "home", component: main },
  { path: "/Contact", name: "Contact", component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
