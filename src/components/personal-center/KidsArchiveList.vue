<template>
  <div class="kids-archive-list">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>孩子档案</p>
    </header>
    <ul class="content" v-if="msg">
      <li class="item" v-for="item in msg">
        <img :src="item.pic" alt="" class="pic">
        <div class="come-in clearfix">
          <span>{{item.name}}</span>
          <div class="icon"></div>
          <router-link class="mask" to="/kid-data"></router-link>
        </div>
      </li>
    </ul>
    <router-link to="/add-kidArchive" class="add-button">添加宝宝</router-link>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/kids-archive-list.scss";
  export default{
    name: "KidsArchiveList",
    data(){
      return {
        msg: ""
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/user/courses",
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
              msg: [
                {id: 1, name: "王大剑", pic: "/static/images/personal-center/my_pic.png"},
                {id: 2, name: "王二剑", pic: "/static/images/personal-center/my_pic.png"},
                {id: 3, name: "王三剑", pic: "/static/images/personal-center/my_pic.png"}
              ]
            };
            if (data.code === 0) {
              this.msg = data.msg;
            }
          }.bind(this)
        });
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>
