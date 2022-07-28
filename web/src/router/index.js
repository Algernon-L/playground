import { createRouter, createWebHistory } from 'vue-router'
import PkIndexViews from "../views/pk/PkIndexViews"
import NotFoundViews from "../views/error/NotFoundViews"
import RanklistIndexViews from "../views/ranklist/RanklistIndexViews"
import RecordIndexViews from "../views/record/RecordIndexViews"
import UserBotIndexViews from "../views/user/bot/UserBotIndexViews"

const routes = [
  {
    path: "/",
    name:"home",
    redirect: "/pk/",
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexViews,
  },
  {
    path: "/notfound/",
    name: "not_found",
    component: NotFoundViews,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexViews,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexViews,
  },
  {
    path: "/userbotindex/",
    name: "userbot_index",
    component: UserBotIndexViews,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/notfound/",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
