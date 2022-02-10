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
