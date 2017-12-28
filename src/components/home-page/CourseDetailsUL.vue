<template>
  <div class="course-details-UL" :class="{'active':status_share}">
    <ContentDetailsHeader :msg="msg_head" :setCollect="setCollect" :setShare="setShare"></ContentDetailsHeader>
    <div class="banner">
      <img src="/static/images/home-page/institution_detail.jpg" alt="">
    </div>
    <div class="content-box">
      <nav>
        <div class="item"
             v-for="item in content_nav"
             :class="{'active':item.id==active}"
             @click="setNav(item.route_name)">
          {{item.name}}
        </div>
      </nav>
      <router-view :msg="msg_view" v-if="msg_view"></router-view>
    </div>
    <footer>
      <div class="pay-info">
        <span>需要支付</span>
        <span>￥330</span>
      </div>
      <div class="customer-server">
        <div class="icon"></div>
        <p>客服</p>
      </div>
      <router-link to="/course-order/1" class="sign-up">立即报名</router-link>
    </footer>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "@/assets/style/home-page/course-details-UL.scss";
  import ContentDetailsHeader from "@/components/home-page/ContentDetailsHeader";
  export default{
    name: 'CourseDetailsUL',
    components: {ContentDetailsHeader},
    data(){
      return {
        status_share: false,
        msg_head: {
          title: "课程详情",
          status_collect: false,
          superiorPath: "/course-details-underline",
          link: ""
        },
        active_play: false,
        msg: "",
        msg_view: "",
        active: 1,
        content_nav: [
          {id: 1, name: "详情", route_name: "CourseContentDetailsUL"},
          {id: 2, name: "课程计划", route_name: "CourseCatalogUL"},
          {id: 3, name: "推荐", route_name: "CourseRecommendUL"}
        ],
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
        this.msg.details.evaluate.stars = arr;
      },
      setView: function (active) {
        if (active === 1) {
          this.setStars(this.msg.details.evaluate.score);
          this.msg_view = this.msg.details;
        }
        if (active === 2) {
          this.msg_view = this.msg.catalog;
        }
        if (active === 3) {
          this.msg_view = this.msg.courses_recommend;
        }
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/course",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {},
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              msg: {
                id: 111,
                with_me: {
                  status_own: true,
                  status_collect: false
                },
                details: {
                  name: "天寒社硬笔书法课程",
                  teacher_resume: "美少女老师",
                  class_hour: 12,
                  play_count: 111,
                  price: "1.25",
                  openingTime:"2017年11月15日",
                  classPlace:"杭州市去哪里路111号",
                  teacher: {
                    id: 122,
                    pic: "/static/images/home-page/pic.png",
                    name: "王小丽",
                    describe: "全国最优秀的最优秀的最优秀的最优秀的最优秀的最优秀的最优秀的最优秀的老师",
                    students: 111,
                    courseNum: 36,
                    praiseRate: "98%",
                  },
                  institution_pic: "/static/images/home-page/institution.jpg",
                  institution_name: "王老师工作室",
                  institution_describe: "在很远很远很远很远很远很远很远很远的地方",
                  evaluate: {
                    score: "4.8",
                    stars: [],
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
                },
                catalog: {
                  section_num: 3,
                  details: [
                    {id: 1, title: "小羊的故事", date: "2017-11-15", time: "19：30-20：30", date_: "周三"},
                    {id: 2, title: "小羊的故事", date: "2017-11-15", time: "19：30-20：30", date_: "周三"},
                    {id: 3, title: "小羊的故事", date: "2017-11-15", time: "19：30-20：30", date_: "周三"}
                  ]
                },
                courses_recommend: [
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
                ]
              }
            };
            if (data.code === 0) {
              this.msg = data.msg;
              this.msg_head.status_collect = this.msg.with_me.status_collect;
              this.setView(this.active);
            } else {
              this.active_noResult = true;
              setTimeout(function () {
                this.active_noResult = false;
              }.bind(this), 3000)
            }
          }.bind(this)
        });
      }
    },
    watch: {
      $route: function () {
        this.content_nav.forEach(function (item) {
          if (item.route_name == this.$route.name) {
            this.active = item.id;
          }
        }.bind(this));
      },
      active: function (active) {
        this.setView(active);
      }
    },
    created: function () {
      this.content_nav.forEach(function (item) {
        if (this.$route.name === item.route_name) {
          this.active = item.id;
        }
      }.bind(this));
      this.getData();
    }
  }
</script>
