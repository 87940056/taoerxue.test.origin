<template>
  <div class="my-comments">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>我的评价</p>
    </header>
    <ul class="content" v-if="msg">
      <li class="item" v-for="item in msg">
        <div class="comment-content">
          <div class="my-msg">
            <img :src="myMsg.pic" alt="" class="pic">
            <span class="name">{{myMsg.name}}</span>
          </div>
          <p class="text-content">{{item.textContent}}</p>
          <div class="time">{{item.time}}</div>
        </div>
        <div class="obj clearfix">
          <img :src="item.obj.pic" alt="" class="pic">
          <div class="pic-right">
            <p class="name">{{item.obj.name}}</p>
            <p class="extra">{{item.obj.time || "￥ " + item.obj.price}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/my-comments.scss";
  export default{
    name: "MyComments",
    data(){
      return {
        myMsg: {
          id: 155,
          name: "王大剑",
          pic: "/static/images/personal-center/my_pic.png"
        },
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
          url: "/user/comments",
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
                {
                  id: 122,
                  textContent: "秀！大秀！陈独秀！蒂花之秀！造化钟神秀！",
                  time: "2017-11-11 14:11",
                  obj: {
                    id: 123, name: "厉害极了的英语课", price: "125.55", pic: "/static/images/personal-center/course_pic.png",
                  }
                },
                {
                  id: 124,
                  textContent: "秀！大秀！陈独秀！蒂花之秀！造化钟神秀！",
                  time: "2017-11-11 14:11",
                  obj: {
                    id: 123, name: "厉害极了的文章", time: "2017-11-11", pic: "/static/images/personal-center/information_pic.jpg",
                  }
                }
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
