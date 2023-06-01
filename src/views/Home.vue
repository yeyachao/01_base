<template>
  <div class="home">
    <!-- 今日总计 -->
    <el-row>
      <el-row>
        <el-col :span="6" :offset="2">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header">
              <h4>后台项目</h4>
            </div>
            <div class="text item">
              <a href="#">mall</a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header">
              <h4>前端项目</h4>
            </div>
            <div class="text item">
              <a href="#">mall-admin-web</a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header">
              <h4>学习教程</h4>
            </div>
            <div class="text item">
              <a href="#">mall-learning</a>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="2">
          <el-card class="box-card card-item">
            <div class="text item">
              <el-col :span="12">
                <i class="el-icon-document card-icon"></i>
              </el-col>
              <el-col :span="12">
                <div class="cart-text">
                  <p>今日订单总数</p>
                  <p>200</p>
                </div>
              </el-col>
              
            </div>
          </el-card>
        </el-col>
        <el-col  :span="6" :offset="1">
          <el-card class="box-card card-item">
            <div class="text item">
              <el-col :span="12">
                <i class="el-icon-bank-card card-icon"></i>
              </el-col>
              <el-col :span="12">
                <div class="cart-text">
                  <p>昨日销售总额</p>
                  <p>￥5000.00</p>
                </div>
              </el-col>
              
            </div>
          </el-card>
        </el-col>
        <el-col  :span="6" :offset="1">
          <el-card class="box-card card-item">
            <div class="text item">
              <el-col :span="12">
                <i class="el-icon-coin card-icon"></i>
              </el-col>
              <el-col :span="12">
                <div class="cart-text">
                  <p>昨日销售总额</p>
                  <p>￥5000.00</p>
                </div>
              </el-col>           
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
    <!-- 待事务处理 -->
    <br><br>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-card class="box-card">
            <div slot="header" class="clearfix card-header">
              <h4>待处理事务</h4>
            </div>
            <div class="text item">
              <el-col :span="7">
                <ul>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                </ul>
              </el-col>
              <el-col :span="7" :offset="1">
                <ul>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                </ul>
              </el-col>
              <el-col :span="7" :offset="1">
                <ul>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                  <li>
                    <span>待付款订单</span>
                    <span>（10）</span>
                  </li>
                </ul>
              </el-col>
            </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 商品及用户总览 -->
    <br><br>
    <el-row>
      <el-col :span="9" :offset="2">
        <el-card class="box-card">
            <div slot="header" class="clearfix card-header">
              <h4>商品总览</h4>
            </div>
            <div class="text item">
              
            </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 订单统计 -->
    <el-row>

    </el-row>
  </div>
</template>

<script>
export default {
  name:"Home"
}
</script>

<style lang="less" scoped>
  a{
    text-decoration: none;
  }
  h4{
    color: #606266;
  }
  /deep/ .el-card__header{
    background: #f2f6fc;
  }

  .card-icon{
    font-size: 80px;
    color: #409eff;
  }
  .card-item{
    padding: 5px 30px 20px;
    margin-top: 20px;
  }
  .box-card .cart-text {
    margin-top: 20px;
    margin-left: -20px;
  }
  .cart-text p:first-of-type{
    color: #909399;
    margin-bottom: 5px;
  }
  .box-card li{
    list-style: none;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .box-card li span:first-of-type{
    float: left;
    color: #333;
  }
  .box-card li span{
    float: right;
    color: red;
  }
  .box-card ul{
    margin-bottom: 10px;
  }
</style>