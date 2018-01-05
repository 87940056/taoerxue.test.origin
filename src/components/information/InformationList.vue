<template>
  <div class="information-list">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>{{title}}</p>
    </header>
    <ul class="contents" v-if="msg">
      <li class="item clearfix" v-for="item in msg">
        <img v-lazy="item.photo" alt="" class="pic">
        <div class="pic-right">
          <p class="name">{{item.title}}</p>
          <div class="source-date clearfix">
            <span class="source">{{item.author}}</span>
            <span class="date">{{item.date}}</span>
          </div>
          <ul class="achievement clearfix">
            <li class="item_read clearfix">
              <div class="icon"></div>
              <span>{{item.views}}</span>
            </li>
            <li class="item_comment clearfix">
              <div class="icon"></div>
              <span>{{item.commentsNum}}</span>
            </li>
          </ul>
        </div>
        <router-link :to="`/information-details?id=${item.id}`"></router-link>
      </li>
    </ul>
    <p class="hint-noMore" v-if="status_noMore">没有更多</p>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "../../assets/style/information/information-list.scss";
  export default {
    data () {
      return {
        title: "",
        pageNum: 1,
        pageSize: 8,
        msg: "",
        withScroll: {
          viewHeight: 0,
          height: 0,
          scrollTop: 0,
          distance: 100
        },
        status_reload: true,
        status_noMore: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      getData: function (fn_type) {
        this.pageNum = this.msg.length / this.pageSize + 1;
        $.ajax({
          type: "post",
          url: "/news/list",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            keyWord: this.title,
            pageNum: this.pageNum,
            pageSize: this.pageSize
          },
          dataType: "json",
          success: function (data) {

          },
          error: function () {
            var data = {
              code: 0,
              data: [
                {
                  id: 1,
                  title: "如何让孩子如何让孩子增强自控力01",
                  typeName: "",
                  photo: "/static/images/information/information_pic.jpg",
                  author: "天天教育",
                  date: "2017-11-15",
                  views: 121,
                  commentsNum: 15
                },
                {
                  id: 4,
                  title: "如何让孩子增强自控力02",
                  typeName: "",
                  photo: "/static/images/information/information_pic.jpg",
                  author: "天天教育",
                  date: "2017-11-15",
                  views: 121,
                  commentsNum: 15
                },
                {
                  id: 5,
                  title: "如何让孩子增强自控力03",
                  typeName: "",
                  photo: "/static/images/information/information_pic.jpg",
                  author: "天天教育",
                  date: "2017-11-15",
                  views: 121,
                  commentsNum: 15
                },
                {
                  id: 7,
                  title: "如何让孩子增强自控力04",
                  typeName: "",
                  photo: "/static/images/information/information_pic.jpg",
                  author: "天天教育",
                  date: "2017-11-15",
                  views: 121,
                  commentsNum: 15
                },
                {
                  id: 12,
                  title: "如何让孩子增强自控力05",
                  typeName: "",
                  photo: "/static/images/information/information_pic.jpg",
                  author: "天天教育",
                  date: "2017-11-15",
                  views: 121,
                  commentsNum: 15
                },
                {
                  id: 18,
                  title: "如何让孩子增强自控力06",
                  typeName: "",
                  photo: "/static/images/information/information_pic.jpg",
                  author: "天天教育",
                  date: "2017-11-15",
                  views: 121,
                  commentsNum: 15
                },
                {
                  id: 19,
                  title: "如何让孩子增强自控力07",
                  typeName: "",
                  photo: "/static/images/information/information_pic.jpg",
                  author: "天天教育",
                  date: "2017-11-15",
                  views: 121,
                  commentsNum: 15
                },
                {
                  id: 21,
                  title: "如何让孩子增强自控力08",
                  typeName: "",
                  photo: "/static/images/information/information_pic.jpg",
                  author: "天天教育",
                  date: "2017-11-15",
                  views: 121,
                  commentsNum: 15
                }
              ]
            };
            if (data.code === 0) {
              if (data.data.length < this.pageSize) {
                this.status_noMore = true;
              }
              if (!this.msg) {
                this.msg = [];
              }
              this.msg = this.msg.concat(data.data);
              this.status_reload = true;
            }
          }.bind(this)
        })
      },
      scroll: function () {
        this.withScroll.viewHeight = $(window).height();
        this.withScroll.height = $("html").height();
        this.withScroll.scrollTop = $(window).scrollTop();
        if (this.reloadLine < 0 && !this.status_noMore) {
          if (this.status_reload) {
            this.status_reload = false;
            this.getData();
          }
        }
      }
    },
    computed: {
      reloadLine: function () {
        return this.withScroll.height - this.withScroll.viewHeight - this.withScroll.scrollTop - this.withScroll.distance;
      }
    },
    created: function () {
      this.title = this.$route.query.keyword;
      this.getData();
    },
    mounted: function () {
      $(window).scroll(this.scroll);
    },
    beforeDestroy: function () {
      $(window).off("scroll", this.scroll);
    }
  }
</script>
