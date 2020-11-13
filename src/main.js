import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = VueRouter({
  routes
});
