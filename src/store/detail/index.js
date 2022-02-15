import { reqgetGoodsInfo } from "@/api";

// home模块的仓库
const state = {
  // 商品详情
  goodsInfo: {},
};

// mutations是唯一修改state的地方
const mutations = {
  // 商品详情
  GOODSINFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo;
  },
};

// action 用户处理派发action的地方 可以书写异步语句 自己逻辑的地方
const actions = {
  // 获取商品详情数据
  async getGoodsInfo({ commit }, skuId = {}) {
    let result = await reqgetGoodsInfo(skuId);
    if (result.code === 200) {
      commit("GOODSINFO", result.data);
    }
  },
};

// 计算属性
//项目当中getters主要的作用是:简化仓库中的数据(简化数据而生)
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
  //路径导航简化的数据
  categoryView(state) {
    //比如:state.goodsInfo初始状态空对象，空对象的categoryView属性值undefined
    //当前计算出的 categoryView属性值至少是一个空对象，假的报错不会有了。
    return state.goodsInfo.categoryView || {};
  },
  //简化产品信息的数据
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {};
  },
  //产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
