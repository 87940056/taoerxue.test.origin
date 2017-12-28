<template>
  <div class="goods-details">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>商品详情</p>
    </header>
    <div class="goods-title clearfix">
      <img src="/static/images/shopping-mail/store_pic.png" alt="" class="pic">
      <div class="pic-right">
        <p class="name-store">淘儿学官方旗舰店</p>
        <p class="name-goods">{{msg.name}}</p>
      </div>
    </div>
    <div class="goods-baseInfo">
      <ul class="pics">
        <li class="item" v-for="item in msg.pics">
          <img v-lazy="item" alt="">
        </li>
      </ul>
      <div class="goodsAddress-goodsSold clearfix">
        <span class="goods-address">浙江杭州</span>
        <span class="goods-sold">销量 {{msg.sold}}</span>
      </div>
      <div class="goods-price clearfix">
        <span>￥ {{msg.price}}</span>
      </div>
      <ul class="goods-others">
        <li class="item clearfix">
          <div class="icon"></div>
          <span>7天退货</span>
        </li>
        <li class="item clearfix">
          <div class="icon"></div>
          <span>支付宝</span>
        </li>
        <li class="item clearfix">
          <div class="icon"></div>
          <span>微信</span>
        </li>
        <li class="item clearfix">
          <div class="icon"></div>
          <span>包邮</span>
        </li>
      </ul>
      <div class="size-select">
        <span>请选择规则尺寸</span>
        <div class="icon"></div>
      </div>
    </div>
    <div class="goods-comments">
      <p class="title-text">评价 ({{msg_comments.length}})</p>
      <ul class="content">
        <li class="item clearfix" v-for="item in msg_comments_show">
          <img v-lazy="item.pic" alt="" class="pic">
          <div class="pic-right">
            <p class="name">{{item.name}}</p>
            <p class="text-content">{{item.text_content}}</p>
          </div>
        </li>
      </ul>
      <div class="more" @click="moreComments()">
        {{msg_comments_more}}
      </div>
    </div>
    <footer>
      <div class="collect">
        <div class="icon" :class="{'active':msg.status_collect}" @click="setStatus_collect()"></div>
        <p>收藏</p>
      </div>
      <div class="customer-server">
        <div class="icon"></div>
        <p>客服</p>
      </div>
      <div class="add-to">添加购物车</div>
      <router-link to="/course-order?type=online" class="purchase">立即购买</router-link>
    </footer>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "@/assets/style/shopping-mail/goods-details.scss";
  export default{
    name: "GoodsDetails",
    data(){
      return {
        msg: {
          name: "儿童实木床",
          pics: [
            '/static/images/shopping-mail/goods_details.png',
            '/static/images/shopping-mail/goods_details.png',
            '/static/images/shopping-mail/goods_details.png',
            '/static/images/shopping-mail/goods_details.png',
            '/static/images/shopping-mail/goods_details.png',
            '/static/images/shopping-mail/goods_details.png'
          ],
          sold: 122,
          price: "1.25-1.5",
          status_collect: false
        },
        msg_comments: [
          {
            id: 1,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          },
          {
            id: 2,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          },
          {
            id: 3,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          },
          {
            id: 4,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          },
          {
            id: 5,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          },
          {
            id: 6,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          }, {
            id: 7,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          },
          {
            id: 8,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          },
          {
            id: 9,
            name: "狮子",
            pic: "/static/images/shopping-mail/user_pic.png",
            date: "2017-11-15",
            time: "14:11",
            text_content: "质量很好"
          }
        ],
        msg_comments_num: 3,
        msg_comments_show: [],
        msg_comments_more: "点击查看更多评论",
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      moreComments: function () {
        if (this.msg_comments_num === this.msg_comments.length) {
          this.msg_comments_more = "没有更多";
          return;
        }
        this.msg_comments_num += 3;
        if (this.msg_comments_num >= this.msg_comments.length) {
          this.msg_comments_num = this.msg_comments.length;
        }
        this.msg_comments_show = this.msg_comments.slice(0, this.msg_comments_num);
      },
      setStatus_collect: function () {
        this.msg.status_collect = !this.msg.status_collect;
      }
    },
    created: function () {
      this.msg_comments_show = this.msg_comments.slice(0, this.msg_comments_num);
    }
  }
</script>
