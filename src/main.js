import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";

new Vue({ el: "#app", router, render: h => h(App) });

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
