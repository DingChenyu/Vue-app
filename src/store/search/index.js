import { reqgetSearchInfo } from "@/api";

// home模块的仓库
const state = {
  // 三级菜单
  searchInfo: {},
};

// mutations是唯一修改state的地方
const mutations = {
  // 三级菜单
  SEARCHINFO(state, searchInfo) {
    state.searchInfo = searchInfo;
  },
};

// action 用户处理派发action的地方 可以书写异步语句 自己逻辑的地方
const actions = {
  // 获取三级菜单数据
  async getSearchInfo({ commit }, params = {}) {
    let result = await reqgetSearchInfo(params);
    if (result.code === 200) {
      commit("SEARCHINFO", result.data);
    }
  },
};

// 计算属性
//项目当中getters主要的作用是:简化仓库中的数据(简化数据而生)
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
  //当前形参state，当前仓库中的state，并非大仓库中的那个state
  goodsList(state) {
    //state.searchInfo.goodsList如果服务器数据回来了，没问题是一个数组
    //假如网络不给力|没有网state.searchInfo.goodsList应该返回的是undefined
    //计算新的属性的属性值至少给人家来一个数组
    return state.searchInfo.goodsList || [];
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || [];
  },
  attrsList(state) {
    return state.searchInfo.attrsList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
