<template>
  <div class="subject">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>{{title}}</p>
    </header>
    <ul class="content">
      <div class="search-box">
        <div class="icon" @click="search()"></div>
        <input class="pingfang-R"
               type="text" placeholder="请输入课程名称/老师名字"
               v-model="keyword"
               @keydown="inputMonitor($event)">
      </div>
      <CoursesList :msg="msg" v-if="msg"></CoursesList>
      <p class="no-result" v-show="active_noResult">暂无相关搜索结果</p>
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
        active_noResult: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      getData: function (para) {
        if (this.keyword || para) {
          $.ajax({
            type: "post",
            url: "/search",
            headers: {
              Authorization: sessionStorage.token || ""
            },
            data: {
              keyword: this.keyword || para
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
                    name: "棒棒的音乐课",
                    pic: "/static/images/home-page/course.jpg",
                    subject: "音乐",
                    class_hour: 3,
                    price: "360.00",
                    describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    students_num: 123,
                    teacher: [
                      {id: 122, name: "王小剑", pic: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", pic: "/static/images/home-page/pic.png"}
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
                      {id: 122, name: "王小剑", pic: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", pic: "/static/images/home-page/pic.png"}
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
                      {id: 122, name: "王小剑", pic: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", pic: "/static/images/home-page/pic.png"}
                    ]
                  }
                ]
              };
              if (data.code === 0) {
                this.msg = data.msg;
              } else {
                this.active_noResult = true;
                setTimeout(function () {
                  this.active_noResult = false;
                }.bind(this), 5000)
              }
            }.bind(this)
          });
        } else {
          console.log("no keyword");
        }
      },
      search: function () {
        if (this.keyword) {
          $(".subject .content input").blur();
          this.getData();
        } else {
          console.log("no keyword");
        }
      }
    },
    created: function () {
      this.getData("default");
      this.title = this.msg_subjects[this.$route.params.typeId - 1];
    }
  }
</script>
