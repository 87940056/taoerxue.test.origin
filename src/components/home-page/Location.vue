<template>
  <div class="location">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="search-box">
        <div class="icon" @click="search()"></div>
        <input class="pingfang-R" type="text"
               placeholder="输入城市名称或者拼音查询"
               v-model="keyword"
               ref="searchText"
               @keydown="inputMonitor($event)">
      </div>
    </header>
    <ul class="city-location">
      <li class="item">
        <div class="icon"></div>
        <span>当前城市</span>
        <div class="name">{{msg.currentCity}}</div>
      </li>
      <li class="item">
        <div class="icon"></div>
        <span>定位城市</span>
        <div class="name">{{msg.locationCity}}</div>
        <span class="relocation" @click="relocation()">重新定位</span>
      </li>
    </ul>
    <ul class="city-list">
      <li class="list-item" v-show="!msg_search">
        <p class="item-title">最近访问城市</p>
        <ul class="item-contents">
          <li class="item" v-for="item in msg.recentVisit" @click="setCurrentCity(item)">{{item}}</li>
        </ul>
      </li>
      <li class="list-item" v-show="!msg_search">
        <p class="item-title">国内热门城市</p>
        <ul class="item-contents">
          <li class="item" v-for="item in msg.hotCity" @click="setCurrentCity(item)">{{item}}</li>
        </ul>
      </li>
      <li class="list-item" v-show="msg_search">
        <p class="item-title">搜索结果</p>
        <ul class="item-contents">
          <li class="item" v-for="item in msg_search" @click="setCurrentCity(item)">{{item}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "../../router/index"
  import "@/assets/style/home-page/location.scss";
  export default{
    name: "LocationPage",
    data(){
      return {
        test: "test",
        keyword: "",
        msg: "",
        msg_search: ""
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setCurrentCity: function (para) {
        this.msg.currentCity = para;
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/location",
          header: {
            Authorization: sessionStorage.token || ""
          },
          dataType: "json",
          data: {},
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              msg: {
                currentCity: "上海",
                locationCity: "杭州",
                recentVisit: ['杭州', '澳门', '北京'],
                hotCity: ['杭州', '澳门', '北京', '杭州', '澳门', '北京', '杭州', '澳门', '北京', '杭州', '澳门', '北京', '杭州', '澳门', '北京']
              }
            };
            if (data.code === 0) {
              this.msg = data.msg;
            }
          }.bind(this)
        })
      },
      search: function () {
        if (this.keyword) {
//          var mapObj = new AMap.Map("");
////        var txt = this.$refs.searchText.value;
//          var txt = this.keyword;
//          mapObj.plugin(["AMap.PlaceSearch"], function () {
//            //参数配置
//            var placeSearch = new AMap.PlaceSearch({
//              pageSize: 5,
//              pageIndex: 1,
//              city: "010", //城市
//            });
//            //关键字查询
//            placeSearch.search(txt, function (status, result) {
//              if (status === 'complete' && result.info === 'OK') {
//                console.log(result);
//              }
//            })
//          })
          $.ajax({
            type: "get",
            url: "/location",
            headers: {
              Authorization: sessionStorage.token || ""
            },
            data: {},
            dataType: "json",
            success: (data) => {
            },
            error: () => {
              var data = {
                code: 0,
                msg: ['杭州', '澳门', '北京', '杭州', '澳门', '北京', '杭州', '澳门']
              };
              this.msg_search = data.msg;
            }
          })
        } else {
          console.log("no keyword");
          this.msg_search = "";
        }
      },
      relocation: function () {

      }
    },
    created: function () {
      this.getData();
    }
  }
</script>
