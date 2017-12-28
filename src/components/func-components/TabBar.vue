<template>
  <ul class="tab-bar">
    <li class="item"
        :class="{'active':active==1}"
        @click="setActive('/')">
      <div class="icon"></div>
      <p>首页</p>
    </li>
    <li class="item"
        :class="{'active':active==2}"
        @click="setActive('/message')">
      <div class="icon"></div>
      <p>消息</p>
      <div class="unread">{{unread_message}}</div>
    </li>
    <li class="item"
        :class="{'active':active==3}"
        @click="setActive('/information')">
      <div class="icon"></div>
      <p>资讯</p>
    </li>
    <li class="item"
        :class="{'active':active==4}"
        @click="setActive('/shopping-mail')">
      <div class="icon"></div>
      <p>商城</p>
    </li>
    <li class="item"
        :class="{'active':active==5}"
        @click="setActive('/personal-center')">
      <div class="icon"></div>
      <p>我的</p>
    </li>
  </ul>
</template>

<script>
  import "@/assets/style/func-components/tab-bar.scss";
  import router from "@/router/index"
  export default{
    name: "TabBar",
    data(){
      return {
        active: 1,
        unread_message: 20,
        msg: [
          {id: 1, name: "HomePage"},
          {id: 2, name: "Message"},
          {id: 3, name: "Information"},
          {id: 4, name: "ShoppingMail"},
          {id: 5, name: "PersonalCenter"},
        ]
      }
    },
    methods: {
      setActive(path){
        router.push(path);
      }
    },
    created: function () {
      this.msg.forEach(function (item) {
        if (item.name == this.$route.name) {
          this.active = item.id;
        }
      }.bind(this))
    }
  }
</script>
