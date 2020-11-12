import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";

const router = new VueRouter({ routes });
createApp(App, router).mount("#app");

const routes = [{ path: "/home", component: Home }];
