<template>
  <div class="chat-details">
    <header>
      <div class="return" @click="goBack()"></div>
      <router-link to="/group-data" class="group-data-button"></router-link>
      <p>{{msg.name}}</p>
    </header>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/chat-details.scss";
  export default{
    name: "ChatDetails",
    data(){
      return {
        msg: {
          name: "淘儿学工作群"
        }
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      }
    }
  }
</script>
