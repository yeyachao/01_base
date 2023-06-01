<template>
  <div class="search">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        
        <el-button 
        style="float: right;" 
        type="primary"
        size="mini"
        @click="searchText"
          >{{btnText}}</el-button>
        <el-button 
        style="float: right; margin-right:10px;" 
        size="mini"
        @click="resetClick"
        v-if="resetBtn"
          >重置</el-button>
      </div>
      <div class="text item">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Search",
  props:{
    resetBtn:{
      type:Boolean,
      default:false
    },
    btnText:{
      type:String,
      default:"查询搜索"
    }
  },
  methods:{
    searchText(){
      this.$emit('search')
    },
    resetClick(){
      this.$emit("reset")
    }
  }
};
</script>

<style lang="less" scoped>
  /deep/ .el-card__header{
    border: none;
  }
  .search {
    .el-button{

    }
  }
</style>