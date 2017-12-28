<template>
  <div class="teacher-details" :class="{'active':status_share}">
    <ContentDetailsHeader :msg="msg_head" :setCollect="setCollect" :setShare="setShare"></ContentDetailsHeader>
    <div class="banner">
      <img src="/static/images/home-page/teacher_banner.jpg" alt="">
    </div>
    <div class="teacher-info">
      <div class="base-info">
        <img :src="msg.pic" alt="" class="pic">
        <div class="text-content">
          <p class="name">{{msg.name}}</p>
          <div class="span-box clearfix">
            <span class="teacher-type">{{msg.teacher_type}}</span>
            <div></div>
            <span class="seniority">{{msg.seniority}}</span>
            <span>教龄</span>
          </div>
        </div>
      </div>
      <div class="profile">
        <p class="profile-title">个人简介</p>
        <p class="profile-content">{{msg.profile}}</p>
      </div>
    </div>
    <ul class="teacher-achievement">
      <li class="item">
        <span>学生：</span>
        <span>{{msg.students_num}}</span>
        <span>人</span>
      </li>
      <li class="item">
        <span>课程：</span>
        <span>{{msg.courses_num}}</span>
        <span>节</span>
      </li>
      <li class="item">
        <span>好评：</span>
        <span>{{msg.praise_rate}}</span>
      </li>
    </ul>
    <div class="nav-box">
      <nav>
        <div class="item"
             v-for="item in msg_nav"
             :class="{'active':item.id==active}"
             @click="setNav(item.route_name)">
          {{item.name}}
        </div>
      </nav>
      <router-view :msg="msg_view" v-if="msg_view"></router-view>
    </div>
    <footer>
      <div class="phone">
        <div class="icon"></div>
        <span>拨打电话</span>
      </div>
      <div class="communication">立即沟通</div>
    </footer>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "@/assets/style/home-page/teacher-details.scss";
  import ContentDetailsHeader from "@/components/home-page/ContentDetailsHeader";
  export default{
    name: "TeacherDetails",
    components: {
      ContentDetailsHeader
    },
    data(){
      return {
        status_share: false,
        msg_head: {
          title: "教师详情",
          status_collect: false,
          superiorPath: "/teacher-details",
          link: ""
        },
        msg: "",
        msg_view: "",
        active: "",
        msg_nav: [
          {id: 1, name: "课程", route_name: "CoursesInTDetails"},
          {id: 2, name: "评价", route_name: "EvaluateInTDetails"}
        ]
      }
    },
    methods: {
      setShare: function () {
        this.status_share = !this.status_share;
      },
      setNav: function (name) {
        router.push({name: name});
      },
      setCollect: function () {
        this.msg.with_me.status_collect = !this.msg.with_me.status_collect;
        this.setHead();
      },
      setHead: function () {
        this.msg_head.status_collect = this.msg.with_me.status_collect;
      },
      setStars: function (score) {
        var num = Math.ceil(score),
          arr = [],
          difference = num - Number(score);
        for (var i = 0; i < num; i++) {
          arr.push(true);
        }
        if (difference > 0.5) {
          arr[num - 1] = false;
        }
        this.msg.evaluate.stars = arr;
      },
      setView: function (active) {
        if (active === 1) {
          this.msg_view = this.msg.courses;
        }
        if (active === 2) {
          this.msg_view = this.msg.evaluate;
        }
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/search",
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
                id: 112,
                name: "王丽丽",
                pic: "/static/images/home-page/pic.png",
                teacher_type: "书法老师",
                seniority: "5年",
                profile: "书法是中国传统文化的重要组成部分，书法是中国传统文化的重要组成部分，书法是中国传统文化的重要组成部分,传统文化的重要组成部分。",
                students_num: 123,
                courses_num: 36,
                praise_rate: "90%",
                with_me: {
                  status_collect: true
                },
                courses: [
                  {
                    id: 1,
                    name: "棒棒的音乐课",
                    pic: "/static/images/home-page/course.jpg",
                    subject: "音乐",
                    class_hour: 3,
                    price: "360.00",
                    describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    students_num: 123,
                    teacher: [
                      {
                        name: "王小剑",
                        pic: "/static/images/home-page/pic.png"
                      },
                      {
                        name: "王小剑",
                        pic: "/static/images/home-page/pic.png"
                      }
                    ]
                  },
                  {
                    id: 2,
                    name: "棒棒的音乐课",
                    pic: "/static/images/home-page/course.jpg",
                    subject: "音乐",
                    class_hour: 3,
                    price: "360.00",
                    describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    students_num: 123,
                    teacher: [
                      {
                        name: "王小剑",
                        pic: "/static/images/home-page/pic.png"
                      },
                      {
                        name: "王小剑",
                        pic: "/static/images/home-page/pic.png"
                      }
                    ]
                  },
                  {
                    id: 3,
                    name: "棒棒的音乐课",
                    pic: "/static/images/home-page/course.jpg",
                    subject: "音乐",
                    class_hour: 3,
                    price: "360.00",
                    describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    students_num: 123,
                    teacher: [
                      {
                        name: "王小剑",
                        pic: "/static/images/home-page/pic.png"
                      },
                      {
                        name: "王小剑",
                        pic: "/static/images/home-page/pic.png"
                      }
                    ]
                  }
                ],
                evaluate: {
//                  score: "4.8",
//                  stars: [],
                  msg_remark: [
                    {
                      id: 1,
                      name: "狮子",
                      pic: "/static/images/home-page/pic_.png",
                      eva_content: "非常满意",
                      date: "2017-11-11",
                      time: "14:11"
                    },
                    {
                      id: 2,
                      name: "狮子",
                      pic: "/static/images/home-page/pic_.png",
                      eva_content: "非常满意",
                      date: "2017-11-11",
                      time: "14:11"
                    },
                    {
                      id: 3,
                      name: "狮子",
                      pic: "/static/images/home-page/pic_.png",
                      eva_content: "非常满意",
                      date: "2017-11-11",
                      time: "14:11"
                    },
                  ]
                }
              }
            };
            if (data.code === 0) {
              this.msg = data.msg;
              this.msg_nav.forEach(function (item) {
                if (this.$route.name === item.route_name) {
                  this.active = item.id;
                }
              }.bind(this));
              this.msg_head.status_collect = this.msg.with_me.status_collect;
            }
          }.bind(this)
        });
      }
    },
    watch: {
      $route: function () {
        this.msg_nav.forEach(function (item) {
          if (item.route_name === this.$route.name) {
            this.active = item.id;
          }
        }.bind(this));
      },
      active: function (active) {
        this.setView(active);
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>
