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
          <div class="status">
            <p>{{item.status}}</p>
            <p>时间：{{item.time}}</p>
          </div>
          <div class="subject-teacher clearfix">
            <p class="subject-name">{{item.subject}}</p>
            <p class="teacher">{{item.teacher}}</p>
          </div>
        </div>
        <router-link class="mask" to="/course-details/content"></router-link>
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
                  status: "待上课",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png"
                },
                {
                  id: 1,
                  name: "厉害极了的舞蹈课",
                  status: "待上课",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png"
                },
                {
                  id: 1,
                  name: "厉害极了的舞蹈课",
                  status: "待上课",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png"
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
