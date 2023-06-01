<template>
  <div class="slide-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/pms">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pms/product">
            <i class="el-icon-location"></i>
            <span slot="title">商品列表</span>  
          </el-menu-item>
          <el-menu-item index="/pms/addProduct">
            <i class="el-icon-location"></i>
            <span slot="title">添加商品</span>
          </el-menu-item>
          <el-menu-item index="1-3">
            <i class="el-icon-location"></i>
            <span slot="title">商品分类</span>
          </el-menu-item>
          <el-menu-item index="1-4">
            <i class="el-icon-location"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
          <el-menu-item index="1-5">
            <i class="el-icon-location"></i>
            <span slot="title">品牌管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <i class="el-icon-location"></i>
            <span>商品列表</span>  
          </el-menu-item>
          <el-menu-item index="3-2">
            <i class="el-icon-location"></i>
            <span>添加商品</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
};
</script>

<style scoped>
  .slide-bar .el-menu-vertical-demo{
    height: 100vh;
    text-align: left;
  }
</style>