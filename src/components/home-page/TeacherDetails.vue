<template>
  <div class="teacher-details" :class="{'active':status_share||status_service}">
    <ContentDetailsHeader :msg="msg_head" :setCollect="setCollect" :setShare="setShare"></ContentDetailsHeader>
    <div class="banner">
      <img src="/static/images/home-page/teacher_banner.jpg" alt="">
    </div>
    <div class="teacher-info">
      <div class="base-info">
        <img :src="msg.photo" alt="" class="pic">
        <div class="text-content">
          <p class="name">{{msg.name}}</p>
          <div class="span-box clearfix">
            <span class="teacher-type">{{msg.typeName}}</span>
            <div></div>
            <span class="seniority">{{msg.experienceAge}}</span>
            <span>教龄</span>
          </div>
        </div>
      </div>
      <div class="profile">
        <p class="profile-title">个人简介</p>
        <p class="profile-content">{{msg.description}}</p>
      </div>
    </div>
    <ul class="teacher-achievement">
      <li class="item">
        <span>学生：</span>
        <span>{{msg.studentsCount}}</span>
        <span>人</span>
      </li>
      <li class="item">
        <span>课程：</span>
        <span>{{msg.courseCount}}</span>
        <span>节</span>
      </li>
      <li class="item">
        <!--<span>好评：</span>-->
        <!--<span>{{msg.praiseRate}}</span>-->
      </li>
    </ul>
    <div class="institution-info">
      <div class="info-title">所属机构</div>
      <div class="info-content clearfix">
        <img :src="msg.institution_pic" alt="" class="pic">
        <div class="pic-right">
          <p class="name">{{msg.institution_name}}</p>
          <p class="describe">{{msg.institution_describe}}</p>
        </div>
        <div class="go-details"></div>
        <router-link class="mask" to="/institution-details/courses-list?id=122"></router-link>
      </div>
    </div>
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
      <div class="phone" @click="setStatus(true)">
        <div class="icon"></div>
        <span>拨打电话</span>
      </div>
      <div class="communication">立即沟通</div>
    </footer>
    <!--弹框-->
    <div class="contact-service" v-show="status_service" @click="setStatus(false)">
      <div class="service-content" @click.stop="">
        <div class="p-box">
          <p>确定拨打客服电话：400-8000-8000 ？</p>
        </div>
        <ul class="select-box">
          <li class="item" @click="setStatus(false)">取消</li>
          <li class="item">拨打</li>
        </ul>
      </div>
    </div>
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
        ],
        status_service: false
      }
    },
    methods: {
      setShare: function () {
        this.status_share = !this.status_share;
      },
      setStatus: function (para) {
        this.status_service = para;
      },
      setNav: function (name) {
        router.push({name: name});
      },
      setCollect: function () {
        this.msg.withMe.status_collect = !this.msg.withMe.status_collect;
        this.setHead();
      },
      setHead: function () {
        this.msg_head.status_collect = this.msg.withMe.status_collect;
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
          this.msg_view = this.msg.course;
        }
        if (active === 2) {
          this.msg_view = this.msg.evaluate;
        }
      },
      // 长字段处理
      cutOff: function (fn_str, fn_num) {
        return fn_str.length > fn_num ? fn_str.slice(0, fn_num) + "..." : fn_str;
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/teacher/detail",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            id: 122
          },
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              data: {
                id: 112,
                name: "王丽丽",
                photo: "/static/images/home-page/pic.png",
                parentTypeName: "国学",
                typeName: "书法",
                experienceAge: "5年",
                description: "书法是中国传统文化的重要组成部分，书法是中国传统文化的重要组成部分，书法是中国传统文化的重要组成部分，传统文化的重要组成部分。",
                studentsCount: 123,
                courseCount: 36,
                praiseRate: "90%",
                withMe: {
                  status_collect: false
                },
                institution_pic: "/static/images/home-page/institution.jpg",
                institution_name: "王老师工作室",
                institution_describe: "在很远很远很远很远很远很远很远很远的地方",
                course: [
                  {
                    id: 1,
                    name: "棒棒的音乐课棒棒的音乐课棒棒的音乐课01",
                    photo: "/static/images/home-page/course.jpg",
                    typeName: "音乐",
                    classTotal: 3,
                    price: "360.00",
                    characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    collections: 123,
                    teacher: [
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                    ]
                  },
                  {
                    id: 1,
                    name: "棒棒的音乐课棒棒的音乐课棒棒的音乐课01",
                    photo: "/static/images/home-page/course.jpg",
                    typeName: "音乐",
                    classTotal: 3,
                    price: "360.00",
                    characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    collections: 123,
                    teacher: [
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                    ]
                  },
                  {
                    id: 1,
                    name: "棒棒的音乐课棒棒的音乐课棒棒的音乐课01",
                    photo: "/static/images/home-page/course.jpg",
                    typeName: "音乐",
                    classTotal: 3,
                    price: "360.00",
                    characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    collections: 123,
                    teacher: [
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
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
              // 长字段处理
              data.data.course.forEach((item) => {
                item.name = this.cutOff(item.name, 12);
                item.characteristic = this.cutOff(item.characteristic, 34);
              });
              this.msg = data.data;
              this.msg_nav.forEach(function (item) {
                if (this.$route.name === item.route_name) {
                  this.active = item.id;
                }
              }.bind(this));
              this.msg_head.status_collect = null;
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
