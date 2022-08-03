import { createRouter, createWebHistory } from 'vue-router'
import PkIndexViews from "../views/pk/PkIndexViews"
import NotFoundViews from "../views/error/NotFoundViews"
import RanklistIndexViews from "../views/ranklist/RanklistIndexViews"
import RecordIndexViews from "../views/record/RecordIndexViews"
import UserBotIndexViews from "../views/user/bot/UserBotIndexViews"
import UserAccountLoginViews from "../views/user/account/UserAccountLoginViews"
import UserAccountRegisterViews from "../views/user/account/UserAccountRegisterViews"
import store from "../store/index"

const routes = [
  {
    path: "/",
    name:"home",
    redirect: "/pk/",
    meta:{
      requestAuth: true,
    }
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexViews,
    meta:{
      requestAuth: true,
    }
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
    meta:{
      requestAuth: true,
    }
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexViews,
    meta:{
      requestAuth: true,
    }
  },
  {
    path: "/userbotindex/",
    name: "userbot_index",
    component: UserBotIndexViews,
    meta:{
      requestAuth: true,
    }
  },
  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginViews,
  },
  {
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterViews,
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

// router.beforeEach((to, from, next) =>{
//   if(to.meta.requestAuth && !store.state.user.is_login){
//     next({name: "user_account_login"});
//   }else{
//     next();
//   }
// })

router.beforeEach((to, from, next) => {

  let flag = 1;
  const jwt_token = localStorage.getItem("jwt_token");

  if (jwt_token) {
    store.commit("updateToken", jwt_token);
    store.dispatch("getinfo", {
      success() {
      },
      error() {
        alert("token无效，请重新登录！");
        router.push({ name: 'user_account_login' });
      }
    })
  } else {
    flag = 2;
  }

  if (to.meta.requestAuth && !store.state.user.is_login) {
    if (flag === 1) {
      next();
    } else {
      alert("请先进行登录！");
      next({name: "user_account_login"});
    }
  } else {
    next();
  }
})

export default router
