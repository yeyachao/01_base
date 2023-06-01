<template>
  <div class="product">
    <Search 
      btnText="查询结果" 
      :resetBtn="true"
      @search="searchClick"
      @reset="resetClick"
    >
      <div class="search-wap">
        <div class="search-item">
          <span>输入搜索:</span>
          <el-input clearable placeholder="商品名称" size="mini" v-model="searchList.nameLike"></el-input>
        </div>
        <div class="search-item">
          <span>品牌ID:</span>
          <el-input clearable size="mini" placeholder="品牌ID" v-model="searchList.brandId"></el-input>
        </div>
        <div class="search-item">
          <span>商品分类:</span>
          <el-select clearable v-model="searchList.categoryId" placeholder="请选择" size="mini">
            <el-option
              v-for="item in categoryList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div class="search-item">
          <span>所属门店:</span>
          <el-select clearable v-model="searchList.shopId" placeholder="请选择" size="mini">
            <el-option
              v-for="item in shopList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div class="search-item">
          <span>上架状态:</span>
          <el-select clearable v-model="searchList.status" placeholder="请选择" size="mini">
            <el-option label="默认" :value="-1"></el-option>
            <el-option
              v-for="item in shangjiaList"
              :key="item.status"
              :label="item.name"
              :value="item.status"
            >
            </el-option>
          </el-select>
        </div>
        <div class="search-item">
          <span>审核状态:</span>
          <el-input clearable size="mini"></el-input>
        </div>
      </div>
    </Search>
    <DataList
      @add="addData"
    ></DataList>
    <Tables 
    @del="delData"
    @sel-change="selChange"
    @piliang="piliangClick"
    @change-data="changeData"
    ></Tables>

  </div>
</template>

<script>
import Search from "../../components/common/Search.vue";
import DataList from "../../components/common/DataList.vue"
import Tables from "../../components/common/Tables.vue"
import goodsMixin from "../../mixins"
export default {
  name: "Product",
  mixins:[goodsMixin],
  components: {
    Search,
    DataList,
    Tables
  },
  data() {
    return {
      searchList:{
        nameLike:"",
        brandId:"",
        status:-1,
        shopId:"",
        categoryId:""
      },
      shopCategory:"", //选中的商品类别
      categoryList:[], //所有的商品类别
      shopId:[], // 设置哪些门店需要获取数据
      shop:"", // 设置选中的门店
      shopList:[], //所有的门店信息
      shangjiaList:[{
        name:"上架",
        status:0
      },
      {
        name:"下架",
        status:1
      }],
      shangjia:"",
      selList:[]
    }
  },
  created() {
    this.getCategoryList()
    this.getShopList()
  },
  methods:{
    // 获取所有的商品类别
    getCategoryList(){
      this.$http({
        url:"/shop/goods/category/all",
        params:{
          shopId:this.shopId
        }
      }).then(res => {
        this.categoryList = res.data.data
      })
    },
    // 获取所有的门店信息
    getShopList(){
      this.$http({
        url:"/shop/subshop/list",
        method:"post"
      }).then(res => {
        this.shopList = res.data.data
      })
    },
    searchClick(){
      this.setGoods(this.searchList).then(() => {
        this.setGoodsList()
      })

    },
    resetClick(){
      this.searchList = {
        nameLike:"",
        brandId:"",
        status:-1,
        shopId:"",
        categoryId:""
      }
    },
    delData(v){
      console.log(v)
      this.$net({
        url:"/user/apiExtShopGoods/del",
        method:"post",
        data:{
          id:v.id
        }
      }).then(() => {
        this.setGoodsList()
      })
    },
    selChange(v){
      this.selList = v
    },
    piliangClick(v){
      let arr = this.selList.map(item => item.id)
      if(v == 0){
        this.changeGoodsInfo({
          ids:arr,
          status:0
        }).then(()=>{
          this.setGoodsList()
        })
      }else if(v == 1){
        this.changeGoodsInfo({
          ids:arr,
          status:1
        }).then(()=>{
          this.setGoodsList()
        })
      }else if(v == 2){
        this.changeTuiJIan({
          ids:arr,
          recommendStatus:1
        }).then(()=>{
          this.setGoodsList()
        })
      }else if(v == 3){
        this.changeTuiJIan({
          ids:arr,
          recommendStatus:0
        }).then(()=>{
          this.setGoodsList()
        })
      }
    },
    addData(){
      this.$router.push("/pms/addProduct")
    },
    changeData(id){
      this.$router.push("/pms/changeProduct/" + id)
    }
  }
};
</script>

<style lang="less" scoped>
.search-wap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .search-item {
    width: 25%;
    margin: 5px 20px;
    .el-input,.el-select{
      width: 70%;
      margin-left: 20px;
    }
  }
}
</style>