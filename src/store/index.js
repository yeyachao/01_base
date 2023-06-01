import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)
const state = {
  goodsList:[],
  goods:{
    status:-1, // 上架状态
    page:1, // 页码
    pageSize:5, //每页条数
    nameLike:"", //商品名模糊搜索
    brandId:[], //品牌ID
    categoryId:[], //分类ID
    shopId:[] //店铺ID
  },
  total:0,
  titleList:[]
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
