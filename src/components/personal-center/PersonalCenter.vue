<template>
  <div class="personal-center">
    <header>
      <div class="pic">
        <img :src="msg.pic" alt="">
        <div class="grade" v-show="status"></div>
        <router-link class="mask" :to="status?'':'/login'"></router-link>
      </div>
      <div class="pic-bottom">
        <p class="name">{{msg.name}}</p>
        <router-link to="/personal-data" class="personalData-button" v-show="status"></router-link>
      </div>
      <ul class="courses-orders">
        <li class="item">
          <div class="icon"></div>
          <p>我的课程</p>
          <router-link :to="status?'/my-courses':'/login'" class="mask"></router-link>
        </li>
        <li class="item">
          <div class="icon"></div>
          <p>我的订单</p>
          <router-link :to="status?'/my-orders':'/login'" class="mask"></router-link>
        </li>
      </ul>
    </header>
    <ul class="content">
      <li class="item clearfix" v-for="item in content">
        <img :src="item.pic" alt="" class="icon">
        <span>{{item.name}}</span>
        <router-link :to="status?item.path:'/login'" class="come-in"></router-link>
      </li>
    </ul>
    <div class="quit-button" v-show="status" @click="quit()">退出登录</div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/personal-center.scss"
  import TabBar from "@/components/func-components/TabBar";
  export default {
    name: 'PersonalCenter',
    components: {
      TabBar
    },
    data () {
      return {
        status: false,
        msg: "",
        msg_visitor: {
          id: 0,
          name: "未登录",
          pic: "/static/images/personal-center/pic_none.png",
        },
        content: [
          {id: 1, pic: "/static/images/personal-center/kids_archive.png", name: "孩子档案", path: "/kids-archive-list"},
          {id: 2, pic: "/static/images/personal-center/collections.png", name: "我的收藏", path: "/my-collections"},
          {id: 3, pic: "/static/images/personal-center/comments.png", name: "我的评价", path: "/my-comments"},
          {id: 4, pic: "/static/images/personal-center/addresses.png", name: "地址管理", path: "/my-addresses"},
          {id: 5, pic: "/static/images/personal-center/feedback.png", name: "我要反馈", path: "/feedback"}
        ]
      }
    },
    methods: {
      getData: function () {
        $.ajax({
          type: "post",
          url: "/user",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            keyword: this.keyword
          },
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              msg: {
                id: 122,
                name: "王大剑",
                pic: "/static/images/personal-center/my_pic.png",
              }
            };
            if (data.code === 0) {
              this.msg = data.msg;
            }
          }.bind(this)
        });
      },
      quit: function () {
        this.status = false;
        sessionStorage.removeItem("token");
        this.msg = this.msg_visitor;
      }
    }
    ,
    created: function () {
      if (sessionStorage.token) {
        this.status = true;
        this.getData();
      } else {
        this.msg = this.msg_visitor;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
