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
    <p class="no-more" v-show="status_noMore">没有更多</p>
    <p class="no-result" v-show="status_noResult">暂无相关搜索结果</p>
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
        active: "",
        msg_nav: [
          {id: 1, path: "/contents-list/subjects-list"},
          {id: 2, path: "/contents-list/courses-list"},
          {id: 3, path: "/contents-list/institutions-list"}
        ],
        msg: "",
        msg_view: "",
        status_noResult: false,
        withScroll: {
          viewHeight: 0,
          height: 0,
          scrollTop: 0,
          distance: 100
        },
        status_reload: true,
        status_noMore: false
      }
    },
    methods: {
      // 回退上一页
      goBack: function () {
        this.status_return = true;
//        router.push("/search");
        router.go(-1);
      },
      // tab导航
      setNav: function (path) {
        router.push(path);
      },
      // 子组件data设置
      setView: function (active) {
        if (active === 1) {
          this.msg_view = this.msg.teacherDtoList;
        }
        if (active === 2) {
          this.msg_view = this.msg.courseDtoList;
        }
        if (active === 3) {
          this.msg_view = this.msg.educationList;
        }
      },
      // 长字段处理
      cutOff: function (fn_str, fn_num) {
        return fn_str.length > fn_num ? fn_str.slice(0, fn_num) + "..." : fn_str;
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/search/getSearchList",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            searchKey: this.keyword,
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
              data: {
                teacherDtoList: [
                  {
                    id: 1,
                    photo: "/static/images/home-page/pic.png",
                    name: "王小路01",
                    parentTypeName: "数学",
                    experienceAge: "8",
                    address: "古墩路",
                    distance: "3.7",
                    description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                  },
                  {
                    id: 1,
                    photo: "/static/images/home-page/pic.png",
                    name: "王小路02",
                    parentTypeName: "数学",
                    experienceAge: "8",
                    address: "古墩路",
                    distance: "3.7",
                    description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                  },
                  {
                    id: 1,
                    photo: "/static/images/home-page/pic.png",
                    name: "王小路03",
                    parentTypeName: "数学",
                    experienceAge: "8",
                    address: "古墩路",
                    distance: "3.7",
                    description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                  },
                  {
                    id: 1,
                    photo: "/static/images/home-page/pic.png",
                    name: "王小路04",
                    parentTypeName: "数学",
                    experienceAge: "8",
                    address: "古墩路",
                    distance: "3.7",
                    description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                  },
                  {
                    id: 1,
                    photo: "/static/images/home-page/pic.png",
                    name: "王小路05",
                    parentTypeName: "数学",
                    experienceAge: "8",
                    address: "古墩路",
                    distance: "3.7",
                    description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                  },
                  {
                    id: 1,
                    photo: "/static/images/home-page/pic.png",
                    name: "王小路06",
                    parentTypeName: "数学",
                    experienceAge: "8",
                    address: "古墩路",
                    distance: "3.7",
                    description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                  },
                  {
                    id: 1,
                    photo: "/static/images/home-page/pic.png",
                    name: "王小路07",
                    parentTypeName: "数学",
                    experienceAge: "8",
                    address: "古墩路",
                    distance: "3.7",
                    description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                  },
                  {
                    id: 1,
                    photo: "/static/images/home-page/pic.png",
                    name: "王小路08",
                    parentTypeName: "数学",
                    experienceAge: "8",
                    address: "古墩路",
                    distance: "3.7",
                    description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
                  }
                ],
                courseDtoList: [
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
                    id: 2,
                    name: "棒棒的音乐课02",
                    photo: "/static/images/home-page/course.jpg",
                    typeName: "音乐",
                    classTotal: 3,
                    price: "360.00",
                    characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    collections: 123,
                    teacher: [
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                    ]
                  },
                  {
                    id: 3,
                    name: "棒棒的音乐课03",
                    photo: "/static/images/home-page/course.jpg",
                    typeName: "音乐",
                    classTotal: 3,
                    price: "360.00",
                    characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    collections: 123,
                    teacher: [
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                    ]
                  },
                  {
                    id: 3,
                    name: "棒棒的音乐课04",
                    photo: "/static/images/home-page/course.jpg",
                    typeName: "音乐",
                    classTotal: 3,
                    price: "360.00",
                    characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    collections: 123,
                    teacher: [
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                    ]
                  },
                  {
                    id: 3,
                    name: "棒棒的音乐课05",
                    photo: "/static/images/home-page/course.jpg",
                    typeName: "音乐",
                    classTotal: 3,
                    price: "360.00",
                    characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    collections: 123,
                    teacher: [
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                    ]
                  },
                  {
                    id: 3,
                    name: "棒棒的音乐课06",
                    photo: "/static/images/home-page/course.jpg",
                    typeName: "音乐",
                    classTotal: 3,
                    price: "360.00",
                    characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                    score: "5.0",
                    collections: 123,
                    teacher: [
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                      {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                    ]
                  },
                ],
                educationList: [
                  {
                    id: 1,
                    name: "神隐琴行01",
                    subject: ["音乐"],
                    teacherNum: 18,
                    address: "杭州市拱墅区祥园路39号",
                    photo: "/static/images/home-page/institution.jpg"
                  },
                  {
                    id: 2,
                    name: "神隐琴行02",
                    subject: ["音乐", "数学", "语文"],
                    teacherNum: 18,
                    address: "杭州市拱墅区祥园路39号",
                    photo: "/static/images/home-page/institution.jpg"
                  },
                  {
                    id: 3,
                    name: "神隐琴行03",
                    subject: ["音乐", "语文"],
                    teacherNum: 18,
                    address: "杭州市拱墅区祥园路39号",
                    photo: "/static/images/home-page/institution.jpg"
                  },
                  {
                    id: 3,
                    name: "神隐琴行04",
                    subject: ["音乐", "语文"],
                    teacherNum: 18,
                    address: "杭州市拱墅区祥园路39号",
                    photo: "/static/images/home-page/institution.jpg"
                  },
                  {
                    id: 3,
                    name: "神隐琴行05",
                    subject: ["音乐", "语文"],
                    teacherNum: 18,
                    address: "杭州市拱墅区祥园路39号",
                    photo: "/static/images/home-page/institution.jpg"
                  },
                  {
                    id: 3,
                    name: "神隐琴行06",
                    subject: ["音乐", "语文"],
                    teacherNum: 18,
                    address: "杭州市拱墅区祥园路39号",
                    photo: "/static/images/home-page/institution.jpg"
                  },
                  {
                    id: 3,
                    name: "神隐琴行07",
                    subject: ["音乐", "语文"],
                    teacherNum: 18,
                    address: "杭州市拱墅区祥园路39号",
                    photo: "/static/images/home-page/institution.jpg"
                  },
                  {
                    id: 3,
                    name: "神隐琴行08",
                    subject: ["音乐", "语文"],
                    teacherNum: 18,
                    address: "杭州市拱墅区祥园路39号",
                    photo: "/static/images/home-page/institution.jpg"
                  }
                ]
              }
            };
            if (data.code === 0) {
              // 长字段处理
              data.data.teacherDtoList.forEach((item) => {
                item.description = this.cutOff(item.description, 25);
              });
              data.data.courseDtoList.forEach((item) => {
                item.name = this.cutOff(item.name, 12);
                item.characteristic = this.cutOff(item.characteristic, 34);
              });
              this.status_noResult = false;
              this.msg = data.data;
              // 子组件data设置
              this.msg_nav.forEach(function (item) {
                if (this.$route.path === item.path) {
                  this.active = item.id;
                }
              }.bind(this));
            } else {
              this.status_noResult = true;
            }
          }.bind(this)
        });
      },
      // 下拉加载
      reload: function (fn_url) {
        $.ajax({
          type: "post",
          url: fn_url,
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
//              data: [
//                {
//                  id: 1,
//                  photo: "/static/images/home-page/pic.png",
//                  name: "王小路01",
//                  parentTypeName: "数学",
//                  experienceAge: "8",
//                  address: "古墩路",
//                  distance: "3.7",
//                  description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
//                },
//                {
//                  id: 1,
//                  photo: "/static/images/home-page/pic.png",
//                  name: "王小路02",
//                  parentTypeName: "数学",
//                  experienceAge: "8",
//                  address: "古墩路",
//                  distance: "3.7",
//                  description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
//                },
//                {
//                  id: 1,
//                  photo: "/static/images/home-page/pic.png",
//                  name: "王小路03",
//                  parentTypeName: "数学",
//                  experienceAge: "8",
//                  address: "古墩路",
//                  distance: "3.7",
//                  description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
//                },
//                {
//                  id: 1,
//                  photo: "/static/images/home-page/pic.png",
//                  name: "王小路04",
//                  parentTypeName: "数学",
//                  experienceAge: "8",
//                  address: "古墩路",
//                  distance: "3.7",
//                  description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
//                },
//                {
//                  id: 1,
//                  photo: "/static/images/home-page/pic.png",
//                  name: "王小路05",
//                  parentTypeName: "数学",
//                  experienceAge: "8",
//                  address: "古墩路",
//                  distance: "3.7",
//                  description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
//                },
//                {
//                  id: 1,
//                  photo: "/static/images/home-page/pic.png",
//                  name: "王小路06",
//                  parentTypeName: "数学",
//                  experienceAge: "8",
//                  address: "古墩路",
//                  distance: "3.7",
//                  description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
//                },
//                {
//                  id: 1,
//                  photo: "/static/images/home-page/pic.png",
//                  name: "王小路07",
//                  parentTypeName: "数学",
//                  experienceAge: "8",
//                  address: "古墩路",
//                  distance: "3.7",
//                  description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
//                },
//                {
//                  id: 1,
//                  photo: "/static/images/home-page/pic.png",
//                  name: "王小路08",
//                  parentTypeName: "数学",
//                  experienceAge: "8",
//                  address: "古墩路",
//                  distance: "3.7",
//                  description: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的老师",
//                }
//              ]
              data: [
                {
                  id: 1,
                  name: "棒棒的音乐课01棒棒的音乐课01棒棒的音乐课01",
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
                  id: 2,
                  name: "棒棒的音乐课02",
                  photo: "/static/images/home-page/course.jpg",
                  typeName: "音乐",
                  classTotal: 3,
                  price: "360.00",
                  characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                  score: "5.0",
                  collections: 123,
                  teacher: [
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                  ]
                },
                {
                  id: 3,
                  name: "棒棒的音乐课03",
                  photo: "/static/images/home-page/course.jpg",
                  typeName: "音乐",
                  classTotal: 3,
                  price: "360.00",
                  characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                  score: "5.0",
                  collections: 123,
                  teacher: [
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                  ]
                },
                {
                  id: 3,
                  name: "棒棒的音乐课04",
                  photo: "/static/images/home-page/course.jpg",
                  typeName: "音乐",
                  classTotal: 3,
                  price: "360.00",
                  characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                  score: "5.0",
                  collections: 123,
                  teacher: [
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                  ]
                },
                {
                  id: 3,
                  name: "棒棒的音乐课05",
                  photo: "/static/images/home-page/course.jpg",
                  typeName: "音乐",
                  classTotal: 3,
                  price: "360.00",
                  characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                  score: "5.0",
                  collections: 123,
                  teacher: [
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                  ]
                },
                {
                  id: 3,
                  name: "棒棒的音乐课06",
                  photo: "/static/images/home-page/course.jpg",
                  typeName: "音乐",
                  classTotal: 3,
                  price: "360.00",
                  characteristic: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
                  score: "5.0",
                  collections: 123,
                  teacher: [
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"},
                    {id: 122, name: "王小剑", photo: "/static/images/home-page/pic.png"}
                  ]
                },
              ]
//              data: [
//                {
//                  id: 1,
//                  name: "神隐琴行01",
//                  subject: ["音乐"],
//                  teacherNum: 18,
//                  address: "杭州市拱墅区祥园路39号",
//                  photo: "/static/images/home-page/institution.jpg"
//                },
//                {
//                  id: 2,
//                  name: "神隐琴行02",
//                  subject: ["音乐", "数学", "语文"],
//                  teacherNum: 18,
//                  address: "杭州市拱墅区祥园路39号",
//                  photo: "/static/images/home-page/institution.jpg"
//                },
//                {
//                  id: 3,
//                  name: "神隐琴行03",
//                  subject: ["音乐", "语文"],
//                  teacherNum: 18,
//                  address: "杭州市拱墅区祥园路39号",
//                  photo: "/static/images/home-page/institution.jpg"
//                },
//                {
//                  id: 3,
//                  name: "神隐琴行04",
//                  subject: ["音乐", "语文"],
//                  teacherNum: 18,
//                  address: "杭州市拱墅区祥园路39号",
//                  photo: "/static/images/home-page/institution.jpg"
//                },
//                {
//                  id: 3,
//                  name: "神隐琴行05",
//                  subject: ["音乐", "语文"],
//                  teacherNum: 18,
//                  address: "杭州市拱墅区祥园路39号",
//                  photo: "/static/images/home-page/institution.jpg"
//                },
//                {
//                  id: 3,
//                  name: "神隐琴行06",
//                  subject: ["音乐", "语文"],
//                  teacherNum: 18,
//                  address: "杭州市拱墅区祥园路39号",
//                  photo: "/static/images/home-page/institution.jpg"
//                },
//                {
//                  id: 3,
//                  name: "神隐琴行07",
//                  subject: ["音乐", "语文"],
//                  teacherNum: 18,
//                  address: "杭州市拱墅区祥园路39号",
//                  photo: "/static/images/home-page/institution.jpg"
//                },
//                {
//                  id: 3,
//                  name: "神隐琴行08",
//                  subject: ["音乐", "语文"],
//                  teacherNum: 18,
//                  address: "杭州市拱墅区祥园路39号",
//                  photo: "/static/images/home-page/institution.jpg"
//                }
//              ]
            };
            if (data.code === 0) {
              this.status_noResult = false;
              if (this.active === 1) {
                this.msg.teacherDtoList = this.msg.teacherDtoList.concat(data.data);
              }
              if (this.active === 2) {
                data.data.forEach((item) => {
                  item.name = this.cutOff(item.name, 10);
                });
                data.data.forEach((item) => {
                  item.characteristic = this.cutOff(item.characteristic, 34);
                });
                this.msg.courseDtoList = this.msg.courseDtoList.concat(data.data);
              }
              if (this.active === 3) {
                this.msg.educationList = this.msg.educationList.concat(data.data);
              }
              this.setView(this.active);
              this.status_reload = true;
            } else {
              this.status_noMore = true;
            }
          }.bind(this)
        });
      },
      // 搜索
      search: function () {
        if (this.keyword) {
          $(".contents-list header input").blur();
          this.getData()
        } else {
          console.log("no keyword");
        }
      },
      // 滑动处理
      scroll: function () {
        this.withScroll.viewHeight = $(window).height();
        this.withScroll.height = $("html").height();
        this.withScroll.scrollTop = $(window).scrollTop();
        if (this.reloadLine < 0) {
          if (this.status_reload) {
            this.status_reload = false;
            this.reload(this.reloadUrl);
          }
        }
      }
    },
    computed: {
      reloadLine: function () {
        return this.withScroll.height - this.withScroll.viewHeight - this.withScroll.scrollTop - this.withScroll.distance;
      },
      reloadUrl: function () {
        if (this.active === 1) {
          return "/search/getSearchTeacherList";
        }
        if (this.active === 2) {
          return "/search/getSearchCourseList";
        }
        if (this.active === 3) {
          return "/search/getSearchEducationList";
        }
      },
      xy: function () {
        return JSON.parse(sessionStorage.xy)
      }
    },
    watch: {
      "$route": function () {
        this.msg_nav.forEach(function (item) {
          if (this.$route.path === item.path) {
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
      this.keyword = this.$route.query.keyword || "";
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
