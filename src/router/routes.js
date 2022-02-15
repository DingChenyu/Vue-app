// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";

// 对外暴露路由组件
export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    meta: { isShow: true },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { isShow: true },
    name: "search",
  },
  {
    path: "/register",
    component: Register,
    meta: { isShow: false },
  },
  {
    path: "/login",
    component: Login,
    meta: { isShow: false },
  },
  {
    path: "/detail/:skuId",
    component: Detail,
    meta: { isShow: true },
  },
];
