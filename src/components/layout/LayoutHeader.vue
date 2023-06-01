<template>
  <div class="layout-header">
    <el-row>
      <el-col :span="1">
        <i class="el-icon-s-unfold"></i>
      </el-col>
      <el-col :span="21">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in getTitleList" :key="index">
            <a href="#">{{item}}</a>
          </el-breadcrumb-item>   
        </el-breadcrumb>
      </el-col>
      <el-col :span="2">
        <el-dropdown 
          trigger="click"
          @command="goOut"
        >
          <span class="el-dropdown-link">
            <i class="el-icon-platform-eleme"></i>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="1">首页</el-dropdown-item>
            <el-dropdown-item :command="2">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import goodsMixin from "../../mixins"
export default {
  name: "LayoutHeader",
  mixins:[goodsMixin],
  methods:{
    goOut(v){
      console.log(v)
      if(v == 2){
        window.sessionStorage.removeItem('token')
        this.$router.push("/login")
      }else{
        this.$router.push("/home")
      }
      
    }
  }
};
</script>

<style lang="less" scoped>
.layout-header {
  height: 100%;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      .el-breadcrumb {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}

.el-icon-platform-eleme{
  font-size: 30px;
  vertical-align: middle;
}
</style>