<template>
  <div class="subjects">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="search-button">
        <div class="icon"></div>
        <input class="pingfang-R" type="text" placeholder="搜索科目/课程/机构">
        <router-link to="/search" class="mask"></router-link>
      </div>
    </header>
    <ul class="content">
      <li class="item" v-for="item in msg">
        <img :src="item.pic" alt="" class="pic">
        <p class="name">{{item.name}}</p>
        <router-link class="mask" :to="item.path"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "../../router/index"
  import "@/assets/style/home-page/subjects.scss";
  export default{
    name: "CourseCategory",
    data(){
      return {
        msg: [
          {id: 1, pic: "/static/images/home-page/subject01.png", name: "英语", path: "/subject/1"},
          {id: 2, pic: "/static/images/home-page/subject02.png", name: "数学", path: "/subject/2"},
          {id: 3, pic: "/static/images/home-page/subject03.png", name: "语文", path: "/subject/3"},
          {id: 4, pic: "/static/images/home-page/subject04.png", name: "体育", path: "/subject/4"},
          {id: 5, pic: "/static/images/home-page/subject05.png", name: "美术", path: "/subject/5"},
          {id: 6, pic: "/static/images/home-page/subject06.png", name: "舞蹈", path: "/subject/6"},
          {id: 7, pic: "/static/images/home-page/subject07.png", name: "音乐", path: "/subject/7"},
          {id: 8, pic: "/static/images/home-page/subject08.png", name: "国学", path: "/subject/8"},
          {id: 9, pic: "/static/images/home-page/subject10.png", name: "益智", path: "/subject/9"}
        ]
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      }
    },
  }
</script>
