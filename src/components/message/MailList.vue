<template>
  <div class="mail-list">
    <header>
      <div class="return" @click="goBack()"></div>
      <router-link to="/add-friend" class="add-friend-button"></router-link>
      <p>通讯录</p>
    </header>
    <ul class="newFriend-group">
      <li class="item">
        <div class="icon-box">
          <div class="icon"></div>
          <div class="unread" v-show="unread_friend">{{unread_friend}}</div>
        </div>
        <span>新好友</span>
        <router-link to="/addRequest-unread" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon-box">
          <div class="icon"></div>
          <div class="unread" v-show="unread_group">{{unread_group}}</div>
        </div>
        <span>群组</span>
        <router-link to="/my-groups" class="mask"></router-link>
      </li>
    </ul>
    <ul class="contents">
      <li class="content" v-for="content in msg">
        <div class="title-text">{{content.title}}</div>
        <ul class="items">
          <li class="item" v-for="item in content.contents">
            <img :src="item.pic" alt="" class="pic">
            <span class="name">{{item.name}}</span>
            <router-link class="mask" to="/user-data"></router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/mail-list.scss";
  export default{
    name: "MailList",
    data(){
      return {
        unread_friend: 12,
        unread_group: 0,
        msg: [
          {
            title: "A",
            contents: [
              {name: "小仙女", pic: "/static/images/message/linkman_pic.png"},
              {name: "老流氓", pic: "/static/images/message/linkman_pic.png"},
              {name: "小仙女", pic: "/static/images/message/linkman_pic.png"},
              {name: "小仙女", pic: "/static/images/message/linkman_pic.png"}
            ]
          },
          {
            title: "B",
            contents: [
              {name: "小仙女", pic: "/static/images/message/linkman_pic.png"},
              {name: "老流氓", pic: "/static/images/message/linkman_pic.png"}
            ]
          }
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
