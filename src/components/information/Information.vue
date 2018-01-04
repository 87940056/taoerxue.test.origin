<template>
  <div class="information">
    <header>
      <ul class="header-content">
        <li class="item" v-for="(item,index) in msg_nav" :class="{'active':active==index+1}"
            @click="setActive(index+1)">
          <p class="name">{{item.name}}</p>
          <div></div>
        </li>
      </ul>
    </header>
    <ul class="contents" v-if="msg_view">
      <li class="item clearfix" v-for="item in msg_view">
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
        <router-link :to="`/information-details?active=${active}&id=${item.id}`"></router-link>
        <!--<router-link :to="'/information-details?active='+active+'&id='+item.id"></router-link>-->
      </li>
    </ul>
    <p class="hint-noMore" v-if="status_noMore">没有更多</p>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "../../assets/style/information/information.scss";
  import TabBar from "@/components/func-components/TabBar";
  export default {
    name: 'Information',
    components: {
      TabBar
    },
    data () {
      return {
        active: "",
        msg_nav: "",
        pageNum: 1,
        pageSize: 8,
        msg: "",
        msg_view: "",
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
      setActive: function (id) {
        this.active = id;
      },
      getNav: function () {
        $.ajax({
          type: "post",
          url: "/news/typeList",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {},
          dataType: "json",
          success: function (data) {

          },
          error: function () {
            var data = {
              code: 0,
              data: [
                {id: 1, name: "推荐资讯"},
                {id: 5, name: "经验分享"},
                {id: 8, name: "育儿教育"},
                {id: 9, name: "教育热点"},
                {id: 12, name: "最新实事"}
              ]
            };
            this.msg_nav = data.data;
          }.bind(this)
        })
      },
      getData: function (fn_type) {
        this.pageNum = fn_type === 1 ? 1 : this.msg.length / this.pageSize + 1;
        $.ajax({
          type: "post",
          url: "/news/list",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            typeId: this.active,
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
              if (fn_type === 1) {
                this.returnTop();
                this.msg_view = data.data;
              }
              if (fn_type === 2) {
                this.msg_view = this.msg_view.concat(data.data);
                this.status_reload = true;
              }
            } else {
              if (fn_type === 2) {
                this.msg_view = this.msg_view.concat(data.data);
                this.status_reload = true;
              }
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
            this.getData(2);
          }
        }
      }
    },
    watch: {
      active: function () {
        router.push("/information?active=" + this.active);
      },
      $route: function () {
        this.getData(1);
      }
    },
    computed: {
      reloadLine: function () {
        return this.withScroll.height - this.withScroll.viewHeight - this.withScroll.scrollTop - this.withScroll.distance;
      }
    },
    created: function () {
      if (this.$route.query.active) {
        this.active = this.$route.query.active;
      } else {
        this.active = 1;
      }
      this.getNav();
      this.getData(1);
    },
    mounted: function () {
      $(window).scroll(this.scroll);
    },
    beforeDestroy: function () {
      $(window).off("scroll", this.scroll);
    }
  }
</script>
