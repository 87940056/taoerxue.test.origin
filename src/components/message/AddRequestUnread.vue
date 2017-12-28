<template>
  <div class="add-request-unread">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>新朋友</p>
    </header>
    <div class="lookup-phone">
      <router-link to="/mail-list-phone" class="icon"></router-link>
      <p>添加手机通讯录中的好友</p>
    </div>
    <ul class="content">
      <li class="item clearfix" v-for="item in msg">
        <img :src="item.pic" alt="" class="pic">
        <div class="pic-right">
          <p class="name">{{item.name}}</p>
          <p class="time">{{item.time}}</p>
        </div>
        <div class="status">
          <p class="status-false" v-show="item.status===false">已过期</p>
          <p class="status0" v-show="item.status===0" @click="setStatus(item.id)">接受</p>
          <p class="status1" v-show="item.status===1">已添加</p>
        </div>
        <router-link to="/user-data" class="mask"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/add-request-unread.scss";
  export default{
    name: "AddRequestUnread",
    data(){
      return {
        msg: [
          {id: 1, name: "小仙女", pic: "/static/images/message/linkman_pic.png", time: "2017-11-15", status: 0},
          {id: 2, name: "小仙女", pic: "/static/images/message/linkman_pic.png", time: "2017-11-15", status: 1},
          {id: 3, name: "小仙女", pic: "/static/images/message/linkman_pic.png", time: "2017-11-15", status: false}
        ]
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setStatus: function (id) {
        this.msg[id - 1].status = 1;
      }
    }
  }
</script>
