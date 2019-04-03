import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import showBlogs from "./views/showBlog.vue"
import addBlog from "./views/AddBlog.vue"
import singleBlog from "./views/singleBlog.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: showBlogs
    },
    {
      path: '/add',
      component: addBlog
    },
    {
      path: '/blog/:id',
      component: singleBlog
    }
    // {
    //   path: "/add",
    //   name: "add",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/AddBlog.vue")
    // },
    // {
    //   path: "/users/:teamId",
    //   name: "users",
    //   component: () =>
    //     import("./Users.vue")
    // }
  ]
});
