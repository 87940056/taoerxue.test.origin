<template>
  <div class="login-by-weChat">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>微信登陆</p>
    </header>
    <div class="logo"></div>
    <div class="hint">
      <p class="hint-title">登陆后开发者将获得以下权限</p>
      <div class="hint-content">
        <div class="point"></div>
        <span>将获得你的公开信息（昵称，头像等）</span>
      </div>
    </div>
    <div class="submit">
      <span>登</span>
      <span>录</span>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/login-by-weChat.scss";
  export default{
    name: "LoginByWeChat",
    data(){
      return {}
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
    }
  }
</script>
