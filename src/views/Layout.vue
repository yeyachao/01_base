<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <!-- 这里是侧边栏 -->
        <slide-bar></slide-bar>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 这里是头部内容 -->
          <layout-header></layout-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SlideBar from "../components/layout/SlideBar.vue"
import LayoutHeader from "../components/layout/LayoutHeader.vue"

export default {
  name:"Layout",
  components:{
    SlideBar,
    LayoutHeader
  }
}
</script>

<style scoped>
  .layout{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .el-header {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid #e6e6e6;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 260px;
    height: 100vh;
    overflow: scroll-y;
  }
  .el-aside::-webkit-scrollbar{
    display: none;
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container .el-container{
    height: 100vh;
    overflow: auto;
  }
</style>