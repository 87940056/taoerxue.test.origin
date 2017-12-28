<template>
  <div class="home-page">
    <header :class="{'down':direction===1}">
      <router-link to="/location" class="location-button">
        <div class="icon"></div>
        <p class="city pingfang-M">{{currentCity}}</p>
        <div class="anchor"></div>
      </router-link>
      <router-link to="/search" class="search-button">
        <div class="icon"></div>
        <input class="pingfang-R" type="text" placeholder="搜索科目/课程/机构">
      </router-link>
      <router-link to="/shopping-cart/2" class="shopping-cart-button"></router-link>
    </header>
    <div class="banner swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in msg_banner" class="swiper-slide">
          <img :src="item">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-pagination-white"></div>
      <!-- Add Navigation -->
      <div class="button-nav swiper-button-prev swiper-button-white"></div>
      <div class="button-nav swiper-button-next swiper-button-white"></div>
    </div>
    <ul class="part-subjects">
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">英语</p>
        <router-link to="/subject/1" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">数学</p>
        <router-link to="/subject/2" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">语文</p>
        <router-link to="/subject/3" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">体育</p>
        <router-link to="/subject/4" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">美术</p>
        <router-link to="/subject/5" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">舞蹈</p>
        <router-link to="/subject/6" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">音乐</p>
        <router-link to="/subject/7" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">国学</p>
        <router-link to="/subject/8" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">益智</p>
        <router-link to="/subject/9" class="mask"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p class="pingfang-R">全部</p>
        <router-link to="/subjects" class="mask"></router-link>
      </li>
    </ul>
    <div class="part-crowdFunding" v-if="msg_crowdFunding">
      <div class="title clearfix">
        <div class="icon"></div>
        <span class="pingfang-M">众筹名师课堂</span>
      </div>
      <ul class="content">
        <li class="item" v-for="item in msg_crowdFunding">
          <div class="part-one">
            <div class="teacher">
              <img :src="item.teacher.pic" alt="" class="pic">
              <span class="name">{{item.teacher.name}}</span>
            </div>
            <div class="address">
              <div class="icon"></div>
              <span>{{item.address}}</span>
            </div>
          </div>
          <div class="part-two">
            <img v-lazy="item.pic" alt="" class="pic">
            <p class="name">{{item.name}}</p>
          </div>
          <router-link class="mask" to="/crowd-funding"></router-link>
        </li>
      </ul>
      <div class="content" v-for="item in msg_crowdFunding">

      </div>
    </div>
    <div class="part-recommendCourses part-courses" v-if="msg_recommendCourses">
      <div class="title clearfix">
        <div class="icon"></div>
        <span class="pingfang-M">推荐课程</span>
      </div>
      <ul class="contents">
        <li class="item" v-for="item in msg_recommendCourses">
          <img class="pic" v-lazy="item.pic">
          <p class="name pingfang-M">{{item.name}}</p>
          <div class="span-box clearfix">
            <span class="type pingfang-M">{{item.type}}</span>
            <span class="words pingfang-M">人已学习</span>
            <span class="num pingfang-M">{{item.numOfStudents}}</span>
          </div>
          <router-link class="mask" :to="`/course-details-underline/content?id=${item.id}`"></router-link>
        </li>
      </ul>
    </div>
    <div class="part-videoCourses part-courses" v-if="msg_videoCourses">
      <div class="title clearfix">
        <div class="icon"></div>
        <span class="pingfang-M">视频课程</span>
      </div>
      <ul class="contents">
        <li class="item" v-for="item in msg_videoCourses">
          <img class="pic" v-lazy="item.pic">
          <p class="name pingfang-M">{{item.name}}</p>
          <div class="span-box clearfix">
            <span class="type pingfang-M">{{item.type}}</span>
            <span class="words pingfang-M">人已学习</span>
            <span class="num pingfang-M">{{item.num}}</span>
          </div>
          <router-link class="mask" :to="`/course-details/content?id=${item.id}`"></router-link>
        </li>
      </ul>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Swiper from "wx-swiper";
  import "@/assets/style/home-page/home-page.scss";
  import TabBar from "@/components/func-components/TabBar";
  export default {
    name: 'HomePage',
    components: {
      TabBar
    },
    data () {
      return {
        currentCity: "",
        scrollTop: [0, 0],
        direction: 0,
        msg_banner: [
          "/static/images/home-page/banner.jpg",
          "/static/images/home-page/banner.jpg",
          "/static/images/home-page/banner.jpg"
        ],
        msg_crowdFunding: "",
        msg_recommendCourses: "",
        msg_videoCourses: ""
      }
    },
    methods: {
      setDirection: function () {
        this.scrollTop[0] = this.scrollTop[1];
        this.scrollTop[1] = ($(window).scrollTop());
        if (this.scrollTop[1] > this.scrollTop[0]) {
          this.direction = 1;
        } else {
          this.direction = 0;
        }
      },
      getCrowdFunding: function () {
        $.ajax({
          type: "post",
          url: "/course",
//          headers: {
//            Authorization: sessionStorage.token || ""
//          },
          beforeSend: function (request) {
            request.setRequestHeader("Authorization", sessionStorage.token || "");
          },
          data: {},
          dataType: "json",
          success: function (data) {

          },
          error: function () {
            var data = {
              code: 0,
              msg: [
                {
                  id: 122,
                  name: "国家特级教师王晓路中考应试点播",
                  pic: "/static/images/home-page/course_.png",
                  address: "古墩路",
                  teacher: {
                    id: 133,
                    name: "王晓路",
                    pic: "/static/images/home-page/pic.png",
                  }
                },
//                {
//                  id: 122,
//                  name: "国家特级教师王晓路中考应试点播",
//                  pic: "/static/images/home-page/course_.png",
//                  address: "古墩路",
//                  teacher: {
//                    id: 133,
//                    name: "王晓路",
//                    pic: "/static/images/home-page/pic.png",
//                  }
//                }
              ]
            };
            this.msg_crowdFunding = data.msg;
          }.bind(this)
        })
      },
      getRecommendCourses: function () {
        $.ajax({
          type: "post",
          url: "/course",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            pageNum: 1,
            pageSize: 2
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
                  name: "慌慌社硬笔书法课程",
                  pic: "/static/images/home-page/course.jpg",
                  type: "国学",
                  numOfStudents: 122,
                },
                {
                  id: 136,
                  name: "慌慌社硬笔书法课程",
                  pic: "/static/images/home-page/course.jpg",
                  type: "国学",
                  numOfStudents: 122,
                },
                {
                  id: 122,
                  name: "慌慌社硬笔书法课程",
                  pic: "/static/images/home-page/course.jpg",
                  type: "国学",
                  numOfStudents: 122,
                },
                {
                  id: 136,
                  name: "慌慌社硬笔书法课程",
                  pic: "/static/images/home-page/course.jpg",
                  type: "国学",
                  numOfStudents: 122,
                }
              ]
            };
            this.msg_recommendCourses = data.msg;
          }.bind(this)
        })
      },
      getVideoCourses: function () {
        $.ajax({
          type: "post",
          url: "/course",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            pageNum: 1,
            pageSize: 2
          },
          dataType: "json",
          success: function (data) {

          },
          error: function () {
            var data = {
              code: 0,
              msg: [
                {
                  id: 122,
                  name: "慌慌社硬笔书法课程",
                  pic: "/static/images/home-page/course.jpg",
                  type: "国学",
                  numOfStudents: 122,
                },
                {
                  id: 136,
                  name: "慌慌社硬笔书法课程",
                  pic: "/static/images/home-page/course.jpg",
                  type: "国学",
                  numOfStudents: 122,
                }
              ]
            };
            this.msg_videoCourses = data.msg;
          }.bind(this)
        })
      },
      location: function () {
        var mapObj = new AMap.Map("");
        //逆地理编码函数
        var toCity = function (para) {
          var geocoder = new AMap.Geocoder({});
          geocoder.getAddress(para, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              this.currentCity = result.regeocode.addressComponent.city.slice(0, -1);
              sessionStorage.currentCity = this.currentCity;
            }
          }.bind(this));
        }.bind(this);
        //获取经纬度
        mapObj.plugin('AMap.Geolocation', function () {
          var geolocation = new AMap.Geolocation({});
          mapObj.addControl(geolocation);
          geolocation.getCurrentPosition();
          //获取成功
          AMap.event.addListener(geolocation, 'complete', function (data) {
            var x = data.position.getLng(), //定位成功返回的经度
              y = data.position.getLat(); //定位成功返回的纬度
            //逆地理编码获取城市名称
            toCity([x, y]);
          });
          //获取失败
          AMap.event.addListener(geolocation, 'error', function (data) {
            if (data.info === 'FAILED') {
//              alert('获取当前位置失败！')
            }
          });
        });
      }
    },
    created: function () {
      if (sessionStorage.currentCity) {
        this.currentCity = sessionStorage.currentCity;
      } else {
        this.location();
      }
      this.getCrowdFunding();
      this.getRecommendCourses();
      this.getVideoCourses();
    },
    mounted: function () {
//      $(window).scroll(this.setDirection);
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
        loop: true,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000
      });
    }
  }
</script>
