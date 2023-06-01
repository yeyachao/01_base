import { mapGetters , mapActions } from "vuex"

export default {
  computed:{
    ...mapGetters([
      "getGoodsList",
      "getGoods",
      "getTotal",
      "getTitleList"
    ])
  },
  methods:{
    ...mapActions([
      "setGoodsList",
      "setGoods",
      "setTotal",
      "changeGoodsInfo",
      "changeTuiJIan",
      "setTitleList"
    ])
  }
}