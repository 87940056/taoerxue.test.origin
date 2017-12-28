<template>
  <div class="message-search">
    <header>
      <div class="search-box clearfix">
        <div class="icon"></div>
        <input type="text" placeholder="搜好友、聊天记录" @blur="setStatus()">
      </div>
      <div class="cancel" @click="goBack()">取消</div>
    </header>
    <p class="hint-before-search" v-show="!status">搜索朋友或聊天记录</p>
    <ul class="search-result" v-show="status">
      <li class="content">
        <div class="title-text">朋友</div>
        <ul class="items">
          <li class="item clearfix" v-for="item in msg_linkman">
            <img :src="item.pic" alt="" class="pic">
            <div class="pic-right">
              <div class="name">{{item.name}}</div>
            </div>
          </li>
        </ul>
      </li>
      <li class="content">
        <div class="title-text">聊天记录</div>
        <ul class="items">
          <li class="item clearfix" v-for="item in msg_chatRecord">
            <img :src="item.pic" alt="" class="pic">
            <div class="pic-right">
              <div class="name">{{item.name}}</div>
              <p class="num-records">{{item.num}}条相关记录</p>
            </div>
            <p class="time">{{item.time}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/message-search.scss";
  export default{
    name: "MessageSearch",
    data(){
      return {
        status: false,
        msg_linkman: [
          {
            id: 1, pic: "/static/images/message/linkman_pic.png", name: "陈晓"
          },
          {
            id: 1, pic: "/static/images/message/linkman_pic.png", name: "陈晓"
          }
        ],
        msg_chatRecord: [
          {
            id: 1, pic: "/static/images/message/linkman_pic.png", name: "陈晓", num: 12, time: "10月12号"
          },
          {
            id: 1, pic: "/static/images/message/linkman_pic.png", name: "陈晓", num: 12, time: "10月12号"
          }
        ]
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setStatus: function () {
        if ($(".message-search header input").val()) {
          this.status = true;
        } else {
          this.status = false;
        }
      }
    }
  }
</script>
