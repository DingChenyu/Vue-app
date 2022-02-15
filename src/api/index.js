//统一管理项目接口的模块
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./ajax";
import mockRequests from "./mockAjax";

// 三级菜单
export const reqgetCategoryList = () =>
  requests.get(`/product/getBaseCategoryList`);

// 轮播图
export const reqgetBannerList = () => mockRequests.get(`/banner`);

// floor数据
export const reqgetFloorList = () => mockRequests.get(`/floor`);

// search数据
export const reqgetSearchInfo = (params) =>
  requests({ url: "/list", method: "POST", data: params });

// 商品详情数据
export const reqgetGoodsInfo = (skuId) => requests.get(`/item/${skuId}`);

// 获取验证码
export const reqgetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

// 注册
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });
