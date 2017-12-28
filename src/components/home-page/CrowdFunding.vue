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
          <img :src="msg.teacher.pic" alt="" class="pic">
          <div class="pic-right">
            <div class="name-box clearfix">
              <p class="name">{{msg.teacher.name}}</p>
              <div class="gold-medal"></div>
            </div>
            <p class="describe">{{msg.teacher.describe}}</p>
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
          <span>目标金额：￥{{msg.price}}</span>
        </li>
      </ul>
      <div class="schedule">
        <div class="part-one clearfix">
          <span class="existing">已筹款：￥{{msg.schedule.existing}}</span>
          <span class="proportion">进度：{{msg.schedule.proportion}}</span>
        </div>
        <div class="progress-bar">
          <div :style="`width:${msg.schedule.proportion}`"></div>
        </div>
        <div class="part-two clearfix">
          <span class="num-support">支持人数：{{msg.schedule.num_support}}</span>
          <span class="days-remaining">剩余天数：{{msg.schedule.days_remaining}}</span>
        </div>
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
        msg: {
          name: "天寒社硬笔书法课程",
          time: "2017-11-15 19:00-21:00",
          address: "杭州市余杭区梦想小镇天使村6-202",
          price: "30000",
          schedule: {
            existing: "18000",
            proportion: "60%",
            num_support: 60,
            days_remaining: 12
          },
          teacher: {
            id: 122,
            name: "王丽丽",
            pic: "/static/images/home-page/pic.png",
            describe: "全国最好的书法老师"
          },
          with_me: {
            status_own: false,
            status_collect: false
          }
        }
      }
    },
    methods: {
      setShare: function () {
        this.status_share = !this.status_share;
      },
      setCollect: function () {
        this.msg.with_me.status_collect = !this.msg.with_me.status_collect;
        this.setHead();
      },
      setHead: function () {
        this.msg_head.status_collect = this.msg.with_me.status_collect;
      }
    },
    created: function () {
      this.msg_head.status_collect = this.msg.with_me.status_collect;
    }
  }
</script>
