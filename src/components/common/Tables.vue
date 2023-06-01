<template>
  <div class="tables">
    <el-table 
      :data="getGoodsList" 
      border style="width: 100%"
      @selection-change="selChange"
    >
      <el-table-column
      type="selection"
      align="center"
      width="55">
      </el-table-column>
      <el-table-column align="center" prop="id" label="编号" > </el-table-column>
      <el-table-column align="center" label="商品图片" > 
        <template slot-scope="scope">
          <img class="goods-imgs" :src="scope.row.pic" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="name"  align="center" label="商品名称"></el-table-column>
      <el-table-column align="center" label="商品价格" >
        <template slot-scope="scope">
          <span>价格：￥{{scope.row.minPrice | toF}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="标签" >
        <template slot-scope="scope">
          <el-switch
            @change="changeShangJia(scope.row)"
            v-model="scope.row.shangjia"
            inactive-text="上架">
          </el-switch> <br>
          <el-switch
            v-model="scope.row.tuijian"
            inactive-text="推荐">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="weight"  align="center" label="排序"></el-table-column>
      <el-table-column prop="stores"  align="center" label="库存"></el-table-column>
      <el-table-column prop="numberSells"  align="center" label="销量"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini"
            @click="changeClick(scope.row)"
          >编辑</el-button>
          <el-button class="delBtn" size="mini" type="danger" @click="delClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="fenye">
      <el-col :span="6">
        <el-select 
          clearable 
          v-model="selValue" 
          placeholder="请选择"
        >
          <el-option 
            label="设为上架" 
            value="0">
          </el-option>
          <el-option 
            label="设为下架" 
            value="1">
          </el-option>
          <el-option 
            label="设为推荐" 
            value="2">
          </el-option>
          <el-option 
            label="取消推荐" 
            value="3">
          </el-option>
        </el-select>
        <el-button @click="piliangClick" type="primary">确定</el-button>
      </el-col>
      <el-col :span="11" :offset="7">
        <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="getGoods.page"
          :page-sizes="[5,10,15]"
          :page-size="getGoods.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="getTotal">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import goodsMixin from "../../mixins"
export default {
  name: "Tables",
  mixins:[goodsMixin],
  data() {
    return {
      selValue:"", // 0表示上架 1表示下架 2表示推荐 3表示取消推荐
    }
  },
  created() {
    this.setGoodsList()
  },
  methods:{
    // 分页 数据条数改变事件函数
    sizeChange(v){
      this.setGoods({pageSize:v})
      this.setGoodsList()
    },
    currentChange(v){
      this.setGoods({page:v})
      this.setGoodsList()
    },
    changeShangJia(v){
      if(v.status == 0){
        v.status = 1
      }else {
        v.status = 0
      }
      this.changeGoodsInfo({
        ids:[v.id],
        status:v.status
      }).then(res=>{
        console.log(res)
        this.setGoodsList()
      })

    },
    delClick(v){
      this.$emit('del',v)
    },
    piliangClick(){
      this.$emit('piliang',this.selValue)
    },
    selChange(v){
      this.$emit('sel-change',v)
    },
    changeClick(v){
      this.$emit('change-data',v.id)
    }
  },
  filters:{
    toF(v){
      return Number(v).toFixed(2)
    }
  }
};
</script>

<style scoped>
  .tables{
    margin-top: 20px;
  }
  .goods-imgs{
    width: 100px;
  }

  .delBtn{
    margin-left: 0px;
  }
  .fenye{
    margin-top: 20px;
    margin-bottom: 50px;
  }
</style>