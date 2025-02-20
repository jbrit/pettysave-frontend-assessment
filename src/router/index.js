import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "../views/PostList.vue";
import PostDetail from "../views/PostDetail.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PostList",
    component: PostList,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
