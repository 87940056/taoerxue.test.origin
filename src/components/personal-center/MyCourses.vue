<template>
  <div class="my-courses">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>我的课程</p>
    </header>
    <ul class="content" v-if="msg">
      <li class="item clearfix" v-for="item in msg">
        <img v-lazy="item.pic" alt="" class="pic">
        <div class="pic-right">
          <p class="name">{{item.name}}</p>
          <div class="subject-status clearfix">
            <p class="subject-name">{{item.subject}}</p>
            <p class="status">{{item.status}}</p>
          </div>
          <div class="progress-bar">
            <div class="progress" :style="'width:'+item.progress"></div>
          </div>
        </div>
        <router-link class="mask" to="/my-course-details"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/my-courses.scss";
  export default{
    name: "MyCourses",
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
                {
                  id: 1,
                  name: "厉害极了的舞蹈课",
                  status: "已结束",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png",
                  progress: "100%"
                },
                {
                  id: 1,
                  name: "厉害极了的舞蹈课",
                  status: "进行中",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png",
                  progress: "60%"
                },
                {
                  id: 1,
                  name: "厉害极了的舞蹈课",
                  status: "进行中",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png",
                  progress: "60%"
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
