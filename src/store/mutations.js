export default {
  SET_GOODS_LIST(state,v){
    state.goodsList = v
  },
  SET_GOODS(state,v){
    //  {pageSize:10}
    // state.goods = v
    Object.assign(state.goods,v)
    state.goods.categoryId = ["" + state.goods.categoryId]
    state.goods.shopId = [state.goods.shopId]
    state.goods.brandId = [state.goods.brandId]
  },
  SET_TOTAL(state,v){
    state.total = v
  },
  SET_TITLE_LIST(state,v){
    state.titleList = v
  }
}