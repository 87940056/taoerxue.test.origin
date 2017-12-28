<template>
  <div class="message">
    <header>
      <router-link to="/mail-list" class="mail-list-button"></router-link>
      <div class="more-func">
        <div class="add-button" @click="setMore_func()"></div>
        <div class="more-box" v-show="more_func">
          <div class="item clearfix">
            <div class="icon"></div>
            <span>添加好友</span>
            <router-link class="mask" to="/add-friend"></router-link>
          </div>
          <div class="segment"></div>
          <div class="item clearfix">
            <div class="icon"></div>
            <span>发起群聊</span>
            <router-link class="mask" to="/add-friend"></router-link>
          </div>
          <div class="triangle"></div>
        </div>
      </div>
      <p>消息</p>
    </header>
    <router-link to="/message-search" class="search">
      <div class="icon"></div>
      <span>搜好友、聊天记录</span>
    </router-link>
    <ul class="content">
      <li class="item clearfix" v-for="item in msg">
        <div class="pic">
          <img :src="item.pic" alt="">
          <div class="unread" v-show="item.unread">{{item.unread}}</div>
        </div>
        <div class="pic-right">
          <p class="name">{{item.name}}</p>
          <p class="text-content">{{item.text_content}}</p>
        </div>
        <p class="time">{{item.time}}</p>
        <router-link to="/chat-details" class="mask"></router-link>
      </li>
    </ul>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import "../../assets/style/message/message.scss";
  import TabBar from "@/components/func-components/TabBar";
  export default {
    name: "Message",
    components: {
      TabBar
    },
    data () {
      return {
        more_func: false,
        msg: [
          {
            id: 1,
            name: "二傻子",
            pic: "/static/images/message/linkman_pic.png",
            text_content: "你好啊",
            time: "14:38",
            unread: 1
          },
          {
            id: 2,
            name: "二傻子",
            pic: "/static/images/message/linkman_pic.png",
            text_content: "你好啊",
            time: "14:38",
            unread: 2
          },
          {
            id: 3,
            name: "二傻子",
            pic: "/static/images/message/linkman_pic.png",
            text_content: "你好啊你好啊你好啊你你好啊你好啊你...",
            time: "昨天",
            unread: 0
          },
          {
            id: 4,
            name: "二傻子",
            pic: "/static/images/message/linkman_pic.png",
            text_content: "你好啊",
            time: "11月12号",
            unread: 2
          }
        ]
      }
    },
    methods: {
      setMore_func: function () {
        this.more_func = !this.more_func;
      }
    }
  }
</script>
