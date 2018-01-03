<template>
  <div class="content-details-header">
    <div class="return" @click="goBack()"></div>
    <div class="share" @click="setShare_()"></div>
    <div class="collect" :class="{'active':msg.status_collect}" @click="setCollect()" v-show="!(msg.status_collect===null)"></div>
    <p class="title">{{msg.title}}</p>
    <div class="shadow" v-show="status_share">
      <div class="occupy" @click="setShare_()"></div>
      <div class="section-share">
        <p class="title-word">分享至：</p>
        <ul class="share-list">
          <li class="item">
            <div class="icon"></div>
            <p>微博</p>
          </li>
          <li class="item">
            <div class="icon"></div>
            <p>朋友圈</p>
          </li>
          <li class="item">
            <div class="icon"></div>
            <p>微信</p>
          </li>
          <li class="item">
            <div class="icon"></div>
            <p>复制链接</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "@/assets/style/home-page/content-details-header.scss";
  export default{
    name: "ContentDetailsHeader",
    props: ["msg", "setCollect", "setShare"],
    data(){
      return {
        status_return: false,
        status_share: false,
      }
    },
    methods: {
      goBack: function () {
        this.status_return = true;
        router.go(-1);
      },
      setShare_: function () {
        this.setShare();
        this.status_share = !this.status_share;
      }
    },
    watch: {
      "$route": function () {
        var index = this.$route.path.slice(1).indexOf("/") + 1;
        var superiorPath = this.$route.path.slice(0, index);
        if (superiorPath === this.msg.superiorPath) {
          if (this.status_return) {
            router.go(-1);
          }
        }
      },
    },
  }
</script>
