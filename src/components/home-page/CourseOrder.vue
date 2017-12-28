<template>
  <div class="course-order">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>{{$route.params.type === "1" ? "确认报名" : "确认订单"}}</p>
    </header>
    <div class="kid-info personal-info" v-show="$route.params.type === '1'">
      <img :src="msg_kid.pic" alt="" class="pic">
      <span class="name">上课人：{{msg_kid.name}}</span>
      <div class="alter clearfix">
        <span>修改</span>
        <div class="icon"></div>
        <router-link class="mask" to="/select-kid"></router-link>
      </div>
    </div>
    <div class="course-info clearfix">
      <img v-lazy="msg.pic" alt="" class="pic">
      <ul class="contents">
        <li class="institution_name">{{msg.name}}</li>
        <li class="describe">{{msg.describe}}</li>
        <li class="others">
          <div class="subject">{{msg.subject}}</div>
          <span>共</span>
          <span>{{msg.class_hour}}</span>
          <span>节课</span>
        </li>
      </ul>
      <div class="price clearfix">
        <span>￥</span>
        <span>{{msg.price}}</span>
      </div>
      <router-link class="mask" to="/course-details/content?id=122"></router-link>
    </div>
    <div class="teacher-info personal-info" v-show="$route.params.type === '2'">
      <img :src="msg_teacher.pic" alt="" class="pic">
      <div class="gold-medal"></div>
      <span class="name">{{msg_teacher.name}}</span>
      <div class="seniority clearfix">
        <span>{{msg_teacher.seniority}}</span>
        <span>教龄</span>
      </div>
      <router-link class="mask" to="/teacher-details/courses?id=155"></router-link>
    </div>
    <div class="discount clearfix">
      <span>暂无折扣优惠</span>
    </div>
    <ul class="payment-info">
      <li class="item clearfix">
        <div class="amount">
          <span>￥</span>
          <span>360.00</span>
        </div>
        <span class="item-type">合计：</span>
      </li>
    </ul>
    <footer>
      <div class="span-box clearfix">
        <span class="shifu">实付</span>
        <div class="amount">
          <span>￥</span>
          <span>360.00</span>
        </div>
      </div>
      <router-link to="/payment" class="button">去支付</router-link>
    </footer>
  </div>
</template>

<script>
  import router from "../../router/index";
  import "@/assets/style/home-page/course-order.scss";
  export default{
    name: "CourseOrder",
    data(){
      return {
        msg: {
          id: 122,
          name: "很厉害的音乐课",
          pic: "/static/images/home-page/institution.jpg",
          subject: "音乐",
          class_hour: 3,
          price: "360.00",
          describe: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
        },
        msg_kid: {
          name: "王小剑",
          pic: "/static/images/home-page/pic.png",
        },
        msg_teacher: {
          name: "王小路",
          pic: "/static/images/home-page/pic.png",
          seniority: "8年"
        }
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      }
    }
  }
</script>
