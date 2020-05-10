import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [{
  path: "/",
  name: "intro",
  component: () => import("./components/Intro.vue")
},{
  path: "/posts",
  name: "posts",
  component: () => import("./components/ListOfPosts.vue")
}];

export default new Router({
  mode:"history",
  routes
});