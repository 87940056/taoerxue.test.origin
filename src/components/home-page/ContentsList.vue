<template>
  <div class="contents-list">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="search">
        <div class="icon" @click="search()"></div>
        <input class="pingfang-R" type="text"
               placeholder="搜索科目/课程/机构"
               v-model="keyword"
               @keydown="inputMonitor($event)">
      </div>
    </header>
    <nav>
      <div class="item pingfang-M"
           :class="{'active':active==1}"
           @click="setNav('/contents-list/subjects-list')">
        科目
      </div>
      <div class="division"></div>
      <div class="item pingfang-M"
           :class="{'active':active==2}"
           @click="setNav('/contents-list/courses-list')">
        课程
      </div>
      <div class="division"></div>
      <div class="item pingfang-M"
           :class="{'active':active==3}"
           @click="setNav('/contents-list/institutions-list')">
        机构
      </div>
    </nav>
    <router-view :msg="msg_view" v-if="msg"></router-view>
    <p class="no-result" v-show="active_noResult">暂无相关搜索结果</p>
  </div>
</template>

<script>
  import router from "../../router/index"
  import "@/assets/style/home-page/contents-list.scss";
  export default {
    name: 'ContentsList',
    data () {
      return {
        status_return: false,
        keyword: "",
        active: 1,
        msg_nav: [
          {id: 1, path: "/contents-list/subjects-list"},
          {id: 2, path: "/contents-list/courses-list"},
          {id: 3, path: "/contents-list/institutions-list"}
        ],
        msg: "",
        msg_view: "",
        active_noResult:false
      }
    },
    methods: {
      goBack: function () {
        this.status_return = true;
        router.go(-1);
      },
      setNav: function (path) {
        router.push(path);
      },
      setView: function (active) {
        if (active === 1) {
          this.msg_view = this.msg.subjects;
        }
        if (active === 2) {
          this.msg_view = this.msg.courses;
        }
        if (active === 3) {
          this.msg_view = this.msg.institutions;
        }
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
                msg: {
                  subjects: [
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
                  ],
                  institutions: [
                    {
                      id: 1,
                      name: "神隐琴行",
                      subject: ["音乐"],
                      teacher_num: 18,
                      address: "杭州市拱墅区祥园路39号",
                      pic: "/static/images/home-page/institution.jpg"
                    },
                    {
                      id: 2,
                      name: "神隐琴行",
                      subject: ["音乐", "数学", "语文"],
                      teacher_num: 18,
                      address: "杭州市拱墅区祥园路39号",
                      pic: "/static/images/home-page/institution.jpg"
                    },
                    {
                      id: 3,
                      name: "神隐琴行",
                      subject: ["音乐", "语文"],
                      teacher_num: 18,
                      address: "杭州市拱墅区祥园路39号",
                      pic: "/static/images/home-page/institution.jpg"
                    }
                  ]
                }
              };
              if (data.code === 0) {
                this.msg = data.msg;
                this.setView(this.active);
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
          $(".contents-list header input").blur();
          this.getData()
        } else {
          console.log("no keyword");
        }
      }
    },
    watch: {
      "$route": function () {
        this.msg_nav.forEach(function (item) {
          if (this.$route.path == item.path) {
            this.active = item.id;
          }
        }.bind(this));
        var index = this.$route.path.slice(1).indexOf("/") + 1;
        var superiorPath = this.$route.path.slice(0, index);
        if (superiorPath === "/contents-list") {
          if (this.status_return) {
            router.go(-1);
          }
        }
      },
      active: function (active) {
        this.setView(active);
      }
    },
    created: function () {
      this.msg_nav.forEach(function (item) {
        if (this.$route.path == item.path) {
          this.active = item.id;
        }
      }.bind(this));
      this.keyword = this.$route.query.keyword || "";
      this.getData("default");
    }
  }
</script>
