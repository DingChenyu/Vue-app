import Vue from "vue";
import App from "./App.vue";
//注册全局组件
import TypeNav from "@/TypeNav";
import Carousel from "@/components/Carousel";
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";
// 引入mock
import "@/mock/mockSever";
//引入swiper样式
import "swiper/css/swiper.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  //全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 注册路由
  router,
  store,
}).$mount("#app");
