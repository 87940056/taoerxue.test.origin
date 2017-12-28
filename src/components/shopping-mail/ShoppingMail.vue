<template>
  <div class="shopping-mail">
    <header>
      <router-link to="/goods-categories" class="category-button"></router-link>
      <router-link to="/shopping-cart/1" class="shopping-cart-button" ></router-link>
      <p>商城</p>
    </header>
    <router-link to="/goods-search" class="goods-search-button">
      <div class="icon"></div>
      <span>搜索商品</span>
    </router-link>
    <ul class="contents">
      <li class="content">
        <div class="title">
          <div class="bar"></div>
          <span>特惠商品</span>
          <div class="bar"></div>
        </div>
        <ul class="items">
          <li class="item" v-for="item in goods_special">
            <img v-lazy="item.pic" alt="" class="pic">
            <p class="name">{{item.name}}</p>
            <p class="price">￥{{item.price}}</p>
            <router-link :to="`/goods-details?id=${item.id}`"></router-link>
          </li>
        </ul>
      </li>
      <li class="content">
        <div class="title">
          <div class="bar"></div>
          <span>本周上新</span>
          <div class="bar"></div>
        </div>
        <ul class="items">
          <li class="item" v-for="item in goods_new">
            <img v-lazy="item.pic" alt="" class="pic">
            <p class="name">{{item.name}}</p>
            <p class="price">￥{{item.price}}</p>
            <router-link :to="`/goods-details?id=${item.id}`"></router-link>
          </li>
        </ul>
      </li>
      <li class="content">
        <div class="title">
          <div class="bar"></div>
          <span>热卖商品</span>
          <div class="bar"></div>
        </div>
        <ul class="items">
          <li class="item" v-for="item in goods_hot">
            <img v-lazy="item.pic" alt="" class="pic">
            <p class="name">{{item.name}}</p>
            <p class="price">￥{{item.price}}</p>
            <router-link :to="`/goods-details?id=${item.id}`"></router-link>
          </li>
        </ul>
      </li>
    </ul>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import "../../assets/style/shopping-mail/shopping-mail.scss";
  import TabBar from "@/components/func-components/TabBar";
  export default {
    name: 'ShoppingMail',
    components: {
      TabBar
    },
    data () {
      return {
        goods_special: [
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
          }
        ],
        goods_new: [
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
          }, {
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
        ],
        goods_hot: [
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
          }
        ],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
