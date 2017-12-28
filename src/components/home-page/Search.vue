<template>
  <div class="search">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="search-box">
        <div class="icon" @click="search()"></div>
        <input class="pingfang-R" type="text" autofocus="autofocus"
               placeholder="搜索科目/课程/机构"
               v-model="keyword"
               @keydown="inputMonitor($event)">
      </div>
    </header>
    <ul class="classify">
      <li class="item">
        <div class="icon"></div>
        <p>科目</p>
        <router-link class="mask" to="/contents-list/subjects-list"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p>课程</p>
        <router-link class="mask" to="/contents-list/courses-list"></router-link>
      </li>
      <li class="item">
        <div class="icon"></div>
        <p>机构</p>
        <router-link class="mask" to="/contents-list/institutions-list"></router-link>
      </li>
    </ul>
    <p class="no-result" v-show="active_noResult">暂无相关搜索结果</p>
  </div>
</template>

<script>
  import router from "../../router/index"
  import "@/assets/style/home-page/search.scss";
  export default{
    name: "Search",
    data(){
      return {
        keyword: "",
        active_noResult: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      search: function () {
        if (this.keyword) {
          router.push("/contents-list/courses-list?keyword=" + this.keyword);
        } else {
          console.log("no keyword");
        }
      }
    }
  }
</script>
