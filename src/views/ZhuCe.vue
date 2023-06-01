<template>
  <div class="login">
    <div class="login-center">
      <div class="login-form">
        <div class="form-top"></div>
        <el-row class="form-logo">
          <el-col :span="6" :offset="9">
            <b class="el-icon-goods"></b>
          </el-col>
        </el-row>
        <el-row class="form-title">
          <el-col :span="24">
            <b>mall-admin-web</b>
          </el-col>
        </el-row>
        <el-row class="form-content">
          <el-col :span="22" :offset="1">
            <el-input placeholder="请输入用户名" v-model.trim="user.username">
              <i
                slot="prefix"
                class="el-input__icon el-icon-user-solid login-icon"
              ></i>
            </el-input>
          </el-col>
          <br /><br /><br />
          <el-col :span="22" :offset="1">
            <el-input placeholder="请输入密码" show-password v-model.trim="user.pwd">
              <i
                slot="prefix"
                class="el-input__icon el-icon-lock login-icon"
              ></i>
            </el-input>
          </el-col>
          <br /><br /><br />
          <el-col :span="22" :offset="1">
            <el-input placeholder="再次输入密码" show-password v-model="user.repwd">
              <i
                slot="prefix"
                class="el-input__icon el-icon-lock login-icon"
              ></i>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="form-btn">
          <el-col :span="10" :offset="7">
            <el-button class="login-btn" type="primary" @click="register"
              >注册</el-button
            >
          </el-col>
        </el-row>
      </div>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>该用户名已存在，是否要直接跳转到登录页面</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="toLogin">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ZhuCe",
  data() {
    return {
      user:{
        username:"",
        pwd:"",
        repwd:""
      },
      dialogVisible:false
    }
  },
  methods:{
    toLogin(){
      this.dialogVisible = false
      this.$router.push({
        path:"/login",
        query:{
          username:this.user.username
        }
      })
    },
    register(){
      if(this.user.pwd !== this.user.repwd){
        this.$message.error("两次输入的密码不一致")
      }else{
        if(this.user.username == "" || this.user.pwd == ""){
          this.$message.error("用户名或密码不能为空")
        }else{
          this.$http({
            url:"/user/username/register",
            method:"post",
            data:{
              username:this.user.username,
              pwd:this.user.pwd            
            }
          }).then(res => {
            console.log(res)
            if(res.data.code == 10000){
              this.dialogVisible = true
            }else if(res.data.code == 0){
              this.$message.success("注册成功")
              this.$router.push("/login")
            }
          })
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .login{
    width: 100vw;
    display: flex;
    height: 100vh;
    align-items: center;
    .login-center{
      width: 100%;
      height: 200px;
      background: #409eff url("../assets/imgs/login_center_bg.png");
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      .login-form{
        width: 350px;
        height: 400px;
        box-shadow: 0px 5px 5px 2px #eee;
        border-radius: 3px;
        overflow: hidden;
        background:#fff;
        .form-top{
          width: 100%;
          height: 15px;
          background: #409eff;
        }
        .form-logo{
          margin-top: 20px;
          color: #409eff;
          font-size: 70px;
          text-align: center;
        }
        .form-title{
          color: #409eff;
          text-align: center;
          font-size: 24px;
        }
        .form-content{
          margin-top: 20px;
          .login-icon{
            color: #409eff;
          }
        }
        .form-btn{
          margin-top: 10px;
          .login-btn{
            width: 90%;
          }
        }
      }
    }
  }
</style>