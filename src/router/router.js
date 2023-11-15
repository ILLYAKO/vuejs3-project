import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import PostPageWithStorage from "@/pages/PostPageWithStorage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/storage",
    component: PostPageWithStorage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
