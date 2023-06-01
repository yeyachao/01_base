<template>
  <div class="login">
    <button @click="changeLang">切换语言</button>
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
            <b>{{$t('message.loginTitle')}}</b>
          </el-col>
        </el-row>
        <el-row class="form-content">
          <el-col :span="22" :offset="1">
            <el-input
              :placeholder="$t('message.hint')"
              v-model="user.username">
              <i slot="prefix" class="el-input__icon el-icon-user-solid login-icon"></i>
            </el-input>
          </el-col>
          <br><br><br>
          <el-col :span="22" :offset="1">
            <el-input
              :placeholder="$t('message.hint')"
              show-password
              v-model="user.pwd">
              <i slot="prefix" class="el-input__icon el-icon-lock login-icon"></i>
            </el-input>
          </el-col>
          <br><br><br>
          <el-row>
            <el-col :span="11" :offset="1">
              <el-input :placeholder="$t('message.hint')" v-model="code"></el-input>
            </el-col>
            <el-col :span="11" :offset="1">
              <img @click="changeCode" class="code-img" :src="codeUrl" alt="">
            </el-col>
          </el-row>
        </el-row>
        <el-row class="form-btn">
          <el-col :span="10" :offset="2">
            <el-button class="login-btn" type="primary" @click="login">{{$t('message.login')}}</el-button>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-button class="login-btn"  type="primary" @click="register">{{$t('message.zhuce')}}</el-button>
          </el-col>
        </el-row>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Login",
  data() {
    return {
      codeUrl:"",
      code:"",
      randomNum:Math.random(),
      user:{
        username:"",
        pwd:"",
        deviceId:1,
        deviceName:"华为"
      }
    }
  },
  created() {
    this.getCodeImg()
    this.user.username = this.$route.query.username
  },
  methods:{
    login(){
      if(this.user.username.trim() === "" || this.user.pwd.trim() === ""){
        this.$message.error("输入框不能为空")
      }else{
        // this.$http({
        //   url:"/user/username/login",
        //   method:"post",
        //   data:this.user
        // }).then(res => {
        //   console.log(res)
        //   if(res.data.code == 500){
        //     this.$message.error(res.data.msg)
        //   }else if(res.data.code == 0){
        //     this.$message.success("登录成功")
        //     window.sessionStorage.setItem('token',res.data.data.token)
        //     this.user = {
        //       username:"",
        //       pwd:"",
        //       deviceId:1,
        //       deviceName:"华为"
        //     }
        //     this.$router.push("/layout")
        //   }
        // })

        this.$net({
          url:"/login/operator/v2",
          method:"post",
          data:{
            imgcode:this.code,
            k:this.randomNum,
            merchantId:"36387",
            pwd:this.user.pwd,
            userName:this.user.username
          }
        }).then(res => {
          console.log(res)         
          this.getCodeImg()
          if(res.data.code == 0){
            window.sessionStorage.setItem("token",res.data.data.token)
            this.$router.push("/home")
          }    
        })

      }
    },
    register(){
      this.$router.push("/zhuce")
    },
    getCodeImg(){
      this.$net({
        url:"/code",
        params:{
          k:this.randomNum
        },
        responseType:"arraybuffer"
      }).then(res => { 
        // arrayBuff
        console.log(res.data)
        this.codeUrl = 'data:image/png;base64,' + btoa(new Uint8Array(res.data).reduce((data,
							byte) => data + String.fromCharCode(byte), ''));
      })
    },
    changeCode(){
      this.getCodeImg()
    },
    changeLang(){
      if(this.$i18n.locale == "en"){
        this.$i18n.locale = "zh_CN"
      }else{
        this.$i18n.locale = "en"
      }
      
    }
  }
}
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
          margin-top: 10px;
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
  .code-img{
    width: 90%;
    height: 40px;
  }
</style>