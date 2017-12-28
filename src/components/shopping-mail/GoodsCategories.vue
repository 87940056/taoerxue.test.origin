<template>
  <div class="goods-categories">
    <header>
      <div class="return" @click="goBack()"></div>
      <router-link to="/goods-search" class="goods-search-button" ></router-link>
      <p>商品分类</p>
    </header>
    <div class="nav">
      <div class="nav-content">
        <ul class="items" v-show="!style">
          <li class="item" v-for="(item,index) in msg"
              :class="{'active':index==active-1}"
              @click="setActive(index+1)">{{item.name}}
          </li>
        </ul>
        <span v-show="style">全部分类</span>
      </div>
      <div class="style-conversion" @click="setStyle()" :class="{'active':style}"></div>
    </div>
    <ul class="contents" v-show="!style">
      <li class="content">
        <div class="title">
          <div class="line"></div>
          <span>推荐</span>
          <div class="line"></div>
        </div>
        <ul class="items">
          <li class="item" v-for="item in msg[active-1].recommend">
            <img :src="item.pic" alt="" class="pic">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
      <li class="content">
        <div class="title">
          <div class="line"></div>
          <span>推荐</span>
          <div class="line"></div>
        </div>
        <ul class="items">
          <li class="item" v-for="item in msg[active-1].hot">
            <img :src="item.pic" alt="" class="pic">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="contents_" v-show="style">
      <li class="item" v-for="item in msg">
        <img :src="item.pic" alt="" class="pic">
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "@/assets/style/shopping-mail/goods-categories.scss";
  export default{
    name: "GoodsCategories",
    data(){
      return {
        active: 1,
        style: 0,
        msg: [
          {
            id: 1,
            name: "家电",
            pic:"/static/images/shopping-mail/category_icon.png",
            recommend: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ],
            hot: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ]
          },
          {
            id: 2,
            name: "美妆",
            pic:"/static/images/shopping-mail/category_icon.png",
            recommend: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ],
            hot: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ]
          },
          {
            id: 3,
            name: "洗漱",
            pic:"/static/images/shopping-mail/category_icon.png",
            recommend: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ],
            hot: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ]
          },
          {
            id: 4,
            name: "男装",
            pic:"/static/images/shopping-mail/category_icon.png",
            recommend: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ],
            hot: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ]
          },
          {
            id: 5,
            name: "女装",
            pic:"/static/images/shopping-mail/category_icon.png",
            recommend: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ],
            hot: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ]
          },
          {
            id: 6,
            name: "童装",
            pic:"/static/images/shopping-mail/category_icon.png",
            recommend: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ],
            hot: [
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"},
              {id: 1, name: "小垃圾", pic: "/static/images/shopping-mail/category_icon.png"}
            ]
          }
        ]
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setActive: function (index) {
        this.active = index;
      },
      setStyle:function(){
          this.style=!this.style;
      }
    }
  }
</script>
