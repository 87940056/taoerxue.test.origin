<template>
  <div class="my-course-details">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>{{msg.name}}</p>
    </header>
    <ul class="content">
      <li class="item" v-for="(item,index) in msg.contents">
        <div class="index">{{++index}}</div>
        <div class="item-content">
          <p class="name">{{item.name}}</p>
          <div class="teacher">
            <!--<div class="icon"></div>-->
            <span>老师：{{item.teacher}}</span>
          </div>
          <div class="time">
            <span>{{item.date}}</span>
            <span>{{item.time}}</span>
          </div>
        </div>
        <div class="comment-button">
          <div class="icon"></div>
          <p>去评价</p>
          <router-link to="/commenting" class="mask"></router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/my-course-details.scss";
  export default{
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
            id: 1
          },
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              msg: {
                id: 12,
                name: "教你画画的数学课",
                contents: [
                  {
                    id: 1,
                    name: "狼与羊的故事（1）",
                    date: "2017-11-11",
                    time: "13：30-14：30",
                    teacher: "王老师",
                    status: 1
                  },
                  {
                    id: 1,
                    name: "狼与羊的故事（2）",
                    date: "2017-11-11",
                    time: "13：30-14：30",
                    teacher: "王老师",
                    status: 0
                  },
                  {
                    id: 1,
                    name: "狼与羊的故事（3）",
                    date: "2017-11-11",
                    time: "13：30-14：30",
                    teacher: "王老师",
                    status: 0
                  }
                ]
              }
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
