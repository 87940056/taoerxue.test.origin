<template>
  <div class="crowd-funding" :class="{'active':status_share}">
    <ContentDetailsHeader :msg="msg_head" :setCollect="setCollect" :setShare="setShare"></ContentDetailsHeader>
    <div class="banner">
      <img src="/static/images/home-page/institution_detail.jpg" alt="">
    </div>
    <div class="content">
      <p class="course-name">{{msg.name}}</p>
      <div class="teacher-box">
        <p class="title">讲师</p>
        <div class="teacher clearfix">
          <img :src="msg.teacherPhoto" alt="" class="pic">
          <div class="pic-right">
            <div class="name-box clearfix">
              <p class="name">{{msg.teacherName}}</p>
              <div class="gold-medal"></div>
            </div>
            <p class="describe">{{msg.teacherBrief}}</p>
          </div>
          <router-link class="mask" to="/teacher-details/courses"></router-link>
        </div>
      </div>
      <ul class="base-info">
        <li class="info-item">
          <div class="icon"></div>
          <span>时间：{{msg.time}}</span>
        </li>
        <li class="info-item">
          <div class="icon"></div>
          <span>地点：{{msg.address}}</span>
        </li>
        <li class="info-item">
          <div class="icon"></div>
          <span>目标金额：￥{{msg.targetPrice}}</span>
        </li>
      </ul>
      <div class="schedule">
        <div class="part-one clearfix">
          <span class="existing">已筹款：￥{{msg.raisedMoney}}</span>
          <span class="proportion">进度：{{msg_proportion}}</span>
        </div>
        <div class="progress-bar">
          <div :style="`width:${msg_proportion}`"></div>
        </div>
        <div class="part-two clearfix">
          <span class="num-support">支持人数：{{msg.raisedNumber}}</span>
          <span class="days-remaining">剩余天数：{{msg.daysRemaining}}</span>
        </div>
      </div>
      <div class="plan-box">
        <p class="title">课程计划</p>
      </div>
    </div>
    <footer>
      <div class="phone">
        <div class="icon"></div>
        <span>立即咨询</span>
      </div>
      <div class="communication">支持￥300</div>
    </footer>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "@/assets/style/home-page/crowd-funding.scss";
  import ContentDetailsHeader from "@/components/home-page/ContentDetailsHeader";
  export default{
    name: "CrowdFunding",
    components: {ContentDetailsHeader},
    data(){
      return {
        status_share: false,
        msg_head: {
          title: "众筹课堂",
          status_collect: false,
          link_return: "/",
          link: ""
        },
        msg: ""
      }
    },
    computed: {
      msg_proportion: function () {
        return Math.round((this.msg.raisedNumber / this.msg.targetNumber) * 100) + "%";
      }
    },
    methods: {
      setShare: function () {
        this.status_share = !this.status_share;
      },
      setCollect: function () {
        this.msg.withMe.status_collect = !this.msg.withMe.status_collect;
        this.setHead();
      },
      setHead: function () {
        this.msg_head.status_collect = this.msg.withMe.status_collect;
      }
    },
    created: function () {
      this.msg = JSON.parse(sessionStorage.msg_crowdFunding)[0];
      this.msg_head.status_collect = this.msg.withMe.status_collect;
    }
  }
</script>
