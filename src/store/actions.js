import { request , request1 } from "../network/request"
export default {
  setGoodsList(s,v){
    console.log(s)
    request({
      url:"/shop/goods/list/v2",
      method:"post",
      data:s.state.goods
    }).then(res => {
      console.log(res)
      if(res.data.code == 0){
        s.commit("SET_TOTAL",res.data.data.totalRow)    
        res.data.data.result.forEach(el => {
          if(el.status == 0){
            el.shangjia = true
          }else if(el.status == 1){
            el.shangjia = false
          }
          if(el.recommendStatus == 0){
            el.tuijian = false
          }else if(el.recommendStatus == 1){
            el.tuijian = true
          }        
        });
        s.commit("SET_GOODS_LIST",res.data.data.result)
      }else{
        s.commit("SET_GOODS_LIST",[])
        s.commit("SET_TOTAL",0)
      }   
    })
    
  },
  setGoods({commit},v){
    commit("SET_GOODS",v)
  },
  setTotal({commit},v){
    commit("SET_TOTAL",v)
  },
  changeGoodsInfo(store,v){
    return new Promise((rev,rej)=>{
      request1({
        url:"/user/apiExtShopGoods/modify/status",
        method:"post",
        data:v
      }).then(res => {
        rev(res)
      }).catch(err => {
        rej(err)
      })
    })
  },
  changeTuiJIan(store,v){
    return new Promise((rev,rej)=>{
      request1({
        url:"/user/apiExtShopGoods/modify/recommendStatus",
        method:"post",
        data:v
      }).then(res => {
        rev(res)
      }).catch(err => {
        rej(err)
      })
    })
  },
  setTitleList({commit},v){
    commit("SET_TITLE_LIST",v)
  }
}