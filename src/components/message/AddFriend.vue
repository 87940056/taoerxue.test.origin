<template>
  <div class="add-friend">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>添加好友</p>
    </header>
    <div class="accurate-lookup">
      <p class="hint">输入好友的手机号码或身份证号码进行查找</p>
      <router-link to="/message-search" class="search-button clearfix">
        <div class="icon"></div>
        <span>搜好友、聊天记录</span>
      </router-link>
    </div>
    <div class="lookup-phone clearfix">
      <div class="icon"></div>
      <div class="icon-right">
        <p>通讯录好友</p>
        <p>添加手机通讯录里的好友</p>
      </div>
      <router-link to="/mail-list-phone" class="come-in"></router-link>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/add-friend.scss";
  export default{
    name: "AddFriend",
    data(){
      return {}
    },
    methods: {
      goBack: function () {
        router.go(-1);
      }
    }
  }
</script>
