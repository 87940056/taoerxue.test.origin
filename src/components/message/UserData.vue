<template>
  <div class="user-data">
    <header>
      <div class="head">
        <div class="return" @click="goBack()"></div>
        <p>用户资料</p>
      </div>
      <div class="head-data">
        <img :src="msg.pic" alt="" class="pic">
        <div class="pic-bottom">
          <div class="icon" :class="msg.gender?'female':'male'"></div>
          <span class="name">{{msg.name}}</span>
        </div>
      </div>
    </header>
    <div class="content" v-show="!msg.status">
      <ul class="items">
        <li class="item clearfix">
          <span class="item-title">工作</span>
          <span class="item-content">{{msg.job}}</span>
        </li>
        <li class="item clearfix">
          <span class="item-title">家乡</span>
          <span class="item-content">{{msg.hometown}}</span>
        </li>
        <li class="item clearfix">
          <span class="item-title">来源</span>
          <span class="item-content">{{msg.resource}}</span>
        </li>
      </ul>
      <router-link to="/add-apply" class="add-button">加为好友</router-link>
    </div>
    <div class="content" v-show="msg.status">
      <ul class="items">
        <li class="item item-groups clearfix">
          <span class="item-title">发起群聊</span>
          <ul class="item-content clearfix">
            <li class="item-group" v-for="item in msg.groups">
              <img :src="item.pic" alt="" class="pic">
            </li>
          </ul>
          <div class="add-group"></div>
        </li>
        <li class="item clearfix">
          <span class="item-title">手机号</span>
          <span class="item-content">{{msg.phone}}</span>
          <div class="icon-phone"></div>
        </li>
        <li class="item clearfix">
          <span class="item-title">家乡</span>
          <span class="item-content">{{msg.hometown}}</span>
        </li>
        <li class="item clearfix">
          <span class="item-title">备注</span>
          <span class="item-content">{{msg.name_remark}}</span>
          <router-link to="/data-set" class="icon-come-in"></router-link>
        </li>
      </ul>
      <router-link to="/chat-details" class="add-button">发消息</router-link>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/user-data.scss";
  export default{
    name: "UserData",
    data(){
      return {
        msg: {
          status: false,
          name: "小榴莲",
          pic: "/static/images/message/linkman_pic.png",
          gender: 1,
          job: "当一条最咸的咸鱼",
          hometown: "小池塘",
          resource: "搜索手机号码",
          phone: 13888888888,
          name_remark: "小仙女",
          groups: [
            {id: 1, pic: "/static/images/message/linkman_pic.png"},
            {id: 2, pic: "/static/images/message/linkman_pic.png"}
          ]
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
