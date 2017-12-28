<template>
  <div class="goods-search">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="search-box">
        <div class="icon" @click="search()"></div>
        <input class="pingfang-R" type="text" autofocus="autofocus"
               placeholder="搜索商品"
               v-model="keyword"
               @keydown="inputMonitor($event)">
      </div>
    </header>
    <ul class="content" v-if="msg">
      <li class="item" v-for="item in msg">
        <img v-lazy="item.pic" alt="" class="pic">
        <p class="name">{{item.name}}</p>
        <p class="price">￥{{item.price}}</p>
        <router-link :to="`/goods-details?id=${item.id}`"></router-link>
      </li>
    </ul>
    <p class="no-result" v-show="active_noResult">暂无相关搜索结果</p>
  </div>
</template>

<script>
  import router from "../../router/index"
  import "@/assets/style/shopping-mail/goods-search.scss";
  export default{
    name: "GoodsSearch",
    data(){
      return {
        keyword: "",
        active_noResult: false,
        msg: ""
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/search",
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
              code: 1,
              msg: [
                {
                  id: 1,
                  pic: "/static/images/shopping-mail/goods_pic.jpg",
                  name: "新品钥匙包",
                  price: "1.25"
                },
                {
                  id: 2,
                  pic: "/static/images/shopping-mail/goods_pic.jpg",
                  name: "新品钥匙包",
                  price: "1.25"
                },
                {
                  id: 3,
                  pic: "/static/images/shopping-mail/goods_pic.jpg",
                  name: "新品钥匙包",
                  price: "1.25"
                },
                {
                  id: 4,
                  pic: "/static/images/shopping-mail/goods_pic.jpg",
                  name: "新品钥匙包",
                  price: "1.25"
                }
              ]
            };
            if (data.code === 0) {
              this.msg = data.msg;
            } else {
              this.active_noResult = true;
              setTimeout(function () {
                this.active_noResult = false;
              }.bind(this), 3000)
            }
          }.bind(this)
        });
      },
      search: function () {
        if (this.keyword) {
          this.getData();
        } else {
          console.log("no keyword");
        }
      }
    }
  }
</script>
