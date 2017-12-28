<template>
  <div class="institution-details" :class="{'active':status_share}">
    <ContentDetailsHeader :msg="msg_head" :setCollect="setCollect" :setShare="setShare"></ContentDetailsHeader>
    <div class="banner">
      <img src="/static/images/home-page/institution_detail.jpg" alt="">
    </div>
    <div class="info">
      <div class="base-info clearfix">
        <img :src="msg.pic" alt="" class="pic">
        <div class="right-box">
          <p class="name">{{msg.name}}</p>
          <ul class="scale">
            <li>
              <span>老师：</span>
              <span>{{msg.teachers_num}}</span>
              <span>人</span>
            </li>
            <li>
              <span>课程：</span>
              <span>{{msg.courses_num}}</span>
              <span>节</span>
            </li>
            <li style="margin-right: 0">
              <span>学生：</span>
              <span>{{msg.students_num}}</span>
              <span>人</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="describe">
        <p>{{msg.describe}}</p>
      </div>
      <div class="address">
        <div class="icon"></div>
        <span class="address-data">{{msg.address}}</span>
        <div class="go-to">
          <div class="icon_go_to"></div>
          <p>到这儿去!</p>
        </div>
      </div>
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
    <footer class="customer-server">
      <div class="server-data clearfix">
        <img class="pic" :src="server_data.pic" alt="">
        <div>
          <p class="name">{{server_data.name}}</p>
          <p class="position">客服</p>
        </div>
      </div>
      <div class="phone">
        <div class="icon"></div>
        <span>客服电话</span>
      </div>
      <div class="communication">立即沟通</div>
    </footer>
  </div>
</template>

<script>
  import router from "../../router/index"
  import "@/assets/style/home-page/institution-details.scss";
  import ContentDetailsHeader from "@/components/home-page/ContentDetailsHeader";
  export default{
    name: "InstitutionDetails",
    components: {ContentDetailsHeader},
    data(){
      return {
        status_share: false,
        msg_head: {
          title: "机构详情",
          status_collect: false,
          superiorPath: "/institution-details",
          link: ""
        },
        msg: "",
        msg_view: "",
        active: "",
        content_nav: [
          {id: 1, name: "课程", route_name: "CoursesListInInstDetails"},
          {id: 2, name: "老师", route_name: "TeachersListInInstDetails"},
          {id: 3, name: "评价", route_name: "EvaluateInInstDetails"}
        ],
        server_data: {
          pic: "/static/images/home-page/server.jpg",
          name: "小仙女"
        }
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
          this.msg_view = this.msg.teachers;
        }
        if (active === 3) {
          this.setStars(this.msg.evaluate.score);
          this.msg_view = this.msg.evaluate;
        }
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/institution",
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
                name: "新东方烹饪学校",
                pic: "/static/images/home-page/institution.jpg",
                teachers_num: 11,
                courses_num: 11,
                students_num: 110,
                describe: "在中国，每10名专业厨师，就有7名来自新东方烹饪。新东方烹饪教育创建于1988年，专注烹饪行业29年，继承，弘扬了博大精深的中华传统美食文化。全国35所直属院校，每年是十万余人的共同选择",
                address: "浙江省杭州市去哪里路111号",
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
                teachers: [
                  {
                    id: 1,
                    pic: "/static/images/home-page/pic.png",
                    name: "王小路",
                    subject: "数学",
                    seniority: "8",
                    address: "古墩路",
                    distance: "3.7",
                    describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                    score: "5.0"
                  },
                  {
                    id: 2,
                    pic: "/static/images/home-page/pic.png",
                    name: "陈小路",
                    subject: "数学",
                    seniority: "8",
                    address: "古墩路",
                    distance: "3.7",
                    describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                    score: "5.0"
                  },
                  {
                    id: 3,
                    pic: "/static/images/home-page/pic.png",
                    name: "陈小路",
                    subject: "数学",
                    seniority: "8",
                    address: "古墩路",
                    distance: "3.7",
                    describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                    score: "5.0"
                  },
                  {
                    id: 4,
                    pic: "/static/images/home-page/pic.png",
                    name: "陈小路",
                    subject: "数学",
                    seniority: "8",
                    address: "古墩路",
                    distance: "3.7",
                    describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                    score: "5.0"
                  }
                ],
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
              }
            };
            if (data.code === 0) {
              this.msg = data.msg;
              this.content_nav.forEach(function (item) {
                if (this.$route.name === item.route_name) {
                  this.active = item.id;
                }
              }.bind(this));
              this.msg_head.status_collect = this.msg.with_me.status_collect;
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
      "$route": function () {
        this.content_nav.forEach(function (item) {
          if (this.$route.name === item.route_name) {
            this.active = item.id;
          }
        }.bind(this))
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
