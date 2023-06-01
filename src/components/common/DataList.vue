<template>
  <div class="data-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-tickets"></i>
        <span>数据列表</span>
        <el-button style="float: right;"  size="mini" @click="addClick">{{btnText}}</el-button>
        <el-button 
          style="float: right;"  
          size="mini" 
          v-if="btnShow"     
        >添加</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name:"DataList",
  props:{
    btnShow:{
      type:Boolean,
      default:false
    },
    btnText:{
      type:String,
      default:"添加"
    }
  },
  methods:{
    addClick(){
      this.$emit('add')
    }
  }
}
</script>

<style lang="less" scoped>
  .data-list{
    margin-top: 20px;
    /deep/ .el-card__body{
      padding:0;
    }
  }
  .el-icon-tickets{
    margin-right: 5px;
  }
</style>