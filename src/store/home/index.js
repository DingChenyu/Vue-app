import { reqgetCategoryList, reqgetBannerList, reqgetFloorList } from "@/api";

// home模块的仓库
const state = {
  // 三级菜单
  categoryList: [],
  // 轮播图
  bannerList: [],
  // floor
  floorList: [],
};

// mutations是唯一修改state的地方
const mutations = {
  // 三级菜单
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  // 轮播图
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  }, 
  // floor
  FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};

// action 用户处理派发action的地方 可以书写异步语句 自己逻辑的地方
const actions = {
  // 获取三级菜单数据
  async getCategoryList({ commit }) {
    let result = await reqgetCategoryList();
    if (result.code === 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  // 获取轮播图数据
  async getBannerList({ commit }) {
    let result = await reqgetBannerList();
    if (result.code === 200) {
      commit("BANNERLIST", result.data);
    }
  },
  // 获取floor数据
  async getFloorList({ commit }) {
    let result = await reqgetFloorList();
    if (result.code === 200) {
      commit("FLOORLIST", result.data);
    }
  },
};

// 计算属性
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
