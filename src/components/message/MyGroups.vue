<template>
  <div class="my-groups">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>我的群组</p>
    </header>
    <div class="content">
      <p class="content-title">共{{msg.length}}个群组</p>
      <ul class="items">
        <li class="item clearfix" v-for="item in msg">
          <img :src="item.pic" alt="" class="pic">
          <div class="pic-right">
            <p class="name">{{item.name}}</p>
            <p class="founder">创建人：{{item.founder}}</p>
          </div>
          <p class="time">{{item.time}}</p>
          <router-link to="/chat-details" class="mask"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/my-groups.scss";
  export default{
    name: "MyGroups",
    data(){
      return {
        msg: [
          {id: 1, name: "淘儿学工作群", pic: "/static/images/message/linkman_pic.png", founder: "老流氓", time: "2017-11-11"},
          {id: 2, name: "淘儿学工作群", pic: "/static/images/message/linkman_pic.png", founder: "老流氓", time: "2017-11-11"}
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
