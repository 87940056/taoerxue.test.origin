<template>
  <div class="mail-list-phone">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>手机通讯录</p>
    </header>
    <ul class="content">
      <li class="item clearfix" v-for="item in msg">
        <img :src="item.pic" alt="" class="pic">
        <div class="pic-right">
          <p class="name">{{item.name}}</p>
          <p class="phone">{{item.phone}}</p>
        </div>
        <div class="status">
          <router-link to="/add-apply" class="status-false" v-show="item.status===false">加好友</router-link>
          <p class="status0" v-show="item.status===0">已申请</p>
          <p class="status1" v-show="item.status===1">已添加</p>
        </div>
        <router-link class="mask" to="/user-data"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/mail-list-phone.scss";
  export default{
    name: "MailListPhone",
    data(){
      return {
        msg: [
          {name: "小仙女", phone: "13888888888", pic: "/static/images/message/linkman_pic.png", status: false},
          {name: "小仙女", phone: "13888888888", pic: "/static/images/message/linkman_pic.png", status: 0},
          {name: "小仙女", phone: "13888888888", pic: "/static/images/message/linkman_pic.png", status: 1},
          {name: "小仙女", phone: "13888888888", pic: "/static/images/message/linkman_pic.png", status: false}
        ]
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      }
    }
  }
</script>
