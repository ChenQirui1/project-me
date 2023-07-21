import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import LandingViewVue from "./views/LandingView.vue";
import ArtViewVue from "./views/ArtView.vue";

const routes = [
  { path: "/", component: LandingViewVue },
  { path: "/art", component: ArtViewVue },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
