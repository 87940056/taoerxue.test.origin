<template>
  <div class="subject">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>{{title}}</p>
    </header>
    <div class="search-box">
      <div class="search-content">
        <div class="icon" @click="search()"></div>
        <input class="pingfang-R"
               type="text" placeholder="请输入课程名称/老师名字"
               v-model="keyword"
               @keydown="inputMonitor($event)">
      </div>
    </div>
    <ul class="content">
      <CoursesList :msg="msg" v-if="msg"></CoursesList>
      <p class="no-result" v-show="status_noResult">暂无相关搜索结果</p>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import CoursesList from '@/components/home-page/CoursesList'
  import "../../assets/style/home-page/subject.scss";
  export default{
    name: "Subject",
    components: {CoursesList},
    data(){
      return {
        title: "",
        keyword: "",
        msg_subjects: ["英语", "数学", "语文", "体育", "美术", "舞蹈", "音乐", "国学", "益智"],
        msg: "",
        status_noResult: false,
        withScroll: {
          viewHeight: 0,
          height: 0,
          scrollTop: 0,
          distance: 100
        },
        status_reload: true
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      // 长字段处理
      cutOff: function (fn_str, fn_num) {
        return fn_str.length > fn_num ? fn_str.slice(0, fn_num) + "..." : fn_str;
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/search/getSearchCourseList",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            searchKey: this.title,
            pageNum: 1,
            pageSize: 6,
            lng: this.xy.x,
            lat: this.xy.y
          },
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              data: [
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
                },
                {
                  id: 1,
                  name: "棒棒的音乐课棒棒的音乐课棒棒的音乐课04",
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
                  name: "棒棒的音乐课棒棒的音乐课棒棒的音乐课05",
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
                  name: "棒棒的音乐课棒棒的音乐课棒棒的音乐课06",
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
            };
            if (data.code === 0) {
              if (!this.msg) {
                this.msg = [];
              }
              data.data.forEach((item) => {
                item.name = this.cutOff(item.name, 12);
                item.characteristic = this.cutOff(item.characteristic, 34);
              });
              this.status_noResult = false;
              this.msg = this.msg.concat(data.data);
              this.status_reload = true;
            } else {
              this.status_noResult = true;
            }
          }.bind(this)
        });
      },
      search: function () {
        if (this.keyword) {
          $(".subject .content input").blur();
          this.getData();
        } else {
          console.log("no keyword");
        }
      },
      scroll: function () {
        this.withScroll.viewHeight = $(window).height();
        this.withScroll.height = $("html").height();
        this.withScroll.scrollTop = $(window).scrollTop();
        if (this.reloadLine < 0) {
          if (this.status_reload) {
            this.status_reload = false;
            this.getData();
          }
        }
      }
    },
    computed: {
      reloadLine: function () {
        return this.withScroll.height - this.withScroll.viewHeight - this.withScroll.scrollTop - this.withScroll.distance;
      },
      xy: function () {
        return JSON.parse(sessionStorage.xy)
      }
    },
    created: function () {
      this.title = this.msg_subjects[this.$route.params.typeId - 1];
      this.getData();
    },
    mounted: function () {
      $(window).scroll(this.scroll);
    },
    beforeDestroy: function () {
      $(window).off("scroll", this.scroll);
    }
  }
</script>
