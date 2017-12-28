<template>
  <div class="login-by-aliPay">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>支付宝登录</p>
    </header>
    <div class="logo"></div>
    <div class="hint">
      <p class="hint-title">登陆后开发者将获得以下权限</p>
      <div class="hint-content">
        <div class="point"></div>
        <span>将获得你的公开信息（昵称，头像，性别等）</span>
      </div>
      <div class="hint-content">
        <div class="point"></div>
        <span>使用身份信息（姓名，手机号，证件号）办理业务</span>
      </div>
    </div>
    <div class="agreement-button">
      <div class="pick-button" :class="{'active':agreement}" @click="setAgreement()"></div>
      <span>我已阅读并同意</span>
      <router-link to="/agreement">《淘儿学用户服务协议》</router-link>
    </div>
    <div class="submit">确认授权</div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/login-by-aliPay.scss";
  export default{
    name: "LoginByAliPay",
    data(){
      return {
        agreement: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setAgreement: function () {
        this.agreement = this.status ? true : !this.agreement;
      }
    }
  }
</script>
