import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/viewpost",
    name: "ViewPost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewPost.vue"),
  },
  {
    path: "/createpost",
    name: "CreatePost",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreatePost.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
