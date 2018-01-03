<template>
  <div class="course-details" :class="{'active':status_share}">
    <ContentDetailsHeader :msg="msg_head" :setCollect="setCollect" :setShare="setShare"></ContentDetailsHeader>
    <div class="banner">
      <img src="/static/images/home-page/institution_detail.jpg" alt="">
      <div class="play-button" :class="{'active':active_play}" @click="setPlay()"></div>
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
      <div class="download">
        <div class="icon"></div>
        <p>下载</p>
      </div>
      <div class="customer-server">
        <div class="icon"></div>
        <p>客服</p>
      </div>
      <div class="add-to-box" v-if="msg.with_me">
        <div class="add-to" v-show="!msg.with_me.status_own">添加购物车</div>
      </div>
      <div class="purchase-box" v-if="msg.with_me">
        <router-link to="/course-order/2" class="purchase" v-show="!msg.with_me.status_own">立即购买</router-link>
        <router-link to="" class="already-purchase" v-show="msg.with_me.status_own">已购买</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "@/assets/style/home-page/course-details.scss";
  import ContentDetailsHeader from "@/components/home-page/ContentDetailsHeader";
  export default{
    name: 'CourseDetails',
    components: {ContentDetailsHeader},
    data(){
      return {
        status_share: false,
        msg_head: {
          title: "课程详情",
          status_collect: false,
          superiorPath: "/course-details",
          link: ""
        },
        active_play: false,
        msg: "",
        msg_view: "",
        active: "",
        content_nav: [
          {id: 1, name: "详情", route_name: "CourseContentDetails"},
          {id: 2, name: "目录", route_name: "CourseCatalog"},
          {id: 3, name: "推荐", route_name: "CourseRecommend"}
        ],
      }
    },
    methods: {
      setShare: function () {
        this.status_share = !this.status_share;
      },
      setPlay: function () {
        this.active_play = !this.active_play;
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
      // 长字段处理
      cutOff: function (fn_str, fn_num) {
        return fn_str.length > fn_num ? fn_str.slice(0, fn_num) + "..." : fn_str;
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
              data: {
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
//                    score: "4.8",
//                    stars: [],
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
                    {id: 1, title: "小羊的故事", duration: "25分钟", watched: "100%"},
                    {id: 2, title: "小羊的故事", duration: "25分钟", watched: "100%"},
                    {id: 3, title: "小羊的故事", duration: "25分钟", watched: "100%"}
                  ]
                },
                courses_recommend: [
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
                    name: "棒棒的音乐课棒棒的音乐课棒棒的音乐课02",
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
                    name: "棒棒的音乐课棒棒的音乐课棒棒的音乐课03",
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
                ]
              }
            };
            if (data.code === 0) {
              data.data.courses_recommend.forEach((item) => {
                item.name = this.cutOff(item.name, 12);
                item.characteristic = this.cutOff(item.characteristic, 34);
              });
              this.msg = data.data;
              this.content_nav.forEach(function (item) {
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
        this.content_nav.forEach(function (item) {
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
    },
    mounted: function () {
//      window.onhashchange = function (event) {
//        console.log(111);
//        console.log(event);
//      };
    }
  }
</script>
