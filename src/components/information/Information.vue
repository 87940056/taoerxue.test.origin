<template>
  <div class="information">
    <header>
      <div class="item" v-for="item in msg_nav" :class="{'active':active==item.id}" @click="setActive(item.id)">
        <p class="name">{{item.name}}</p>
        <div></div>
      </div>
    </header>
    <ul class="contents" v-if="msg">
      <li class="item clearfix" v-for="item in msg">
        <img v-lazy="item.pic" alt="" class="pic">
        <div class="pic-right">
          <p class="name">{{item.name}}</p>
          <div class="source-date clearfix">
            <span class="source">{{item.source}}</span>
            <span class="date">{{item.date}}</span>
          </div>
          <ul class="achievement clearfix">
            <li class="item_read clearfix">
              <div class="icon"></div>
              <span>{{item.num_read}}</span>
            </li>
            <li class="item_comment clearfix">
              <div class="icon"></div>
              <span>{{item.num_comment}}</span>
            </li>
          </ul>
        </div>
        <router-link :to="`/information-details?active=${active}&id=${item.id}`"></router-link>
      </li>
    </ul>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import "../../assets/style/information/information.scss";
  import TabBar from "@/components/func-components/TabBar";
  export default {
    name: 'Information',
    components: {
      TabBar
    },
    data () {
      return {
        active: 1,
        msg_nav: [
          {id: 1, name: "推荐"},
          {id: 2, name: "经验分享"},
          {id: 3, name: "育儿教育"},
          {id: 4, name: "教育热点"}
        ],
        msg: ""
      }
    },
    methods: {
      setActive: function (id) {
        this.active = id;
      },
      getData: function (para) {
        $.ajax({
          type: "post",
          url: "/information",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            pageNum: 1,
            pageSize: 2
          },
          dataType: "json",
          success: function (data) {

          },
          error: function () {
            var data = {
              code: 0,
              msg: [
                {
                  id: 1,
                  name: "如何让孩子增强自控力",
                  pic: "/static/images/information/information_pic.jpg",
                  source: "天天教育",
                  date: "2017-11-15",
                  num_read: 121,
                  num_comment: 15
                },
                {
                  id: 2,
                  name: "如何让孩子增强自控力",
                  pic: "/static/images/information/information_pic.jpg",
                  source: "天天教育",
                  date: "2017-11-15",
                  num_read: 121,
                  num_comment: 15
                },
                {
                  id: 3,
                  name: "如何让孩子增强自控力",
                  pic: "/static/images/information/information_pic.jpg",
                  source: "天天教育",
                  date: "2017-11-15",
                  num_read: 121,
                  num_comment: 15
                },
                {
                  id: 4,
                  name: "如何让孩子增强自控力",
                  pic: "/static/images/information/information_pic.jpg",
                  source: "天天教育",
                  date: "2017-11-15",
                  num_read: 121,
                  num_comment: 15
                }
              ]
            };
            this.msg = data.msg.slice(0, para);
          }.bind(this)
        })
      }
    },
    watch: {
      active: function () {
        this.getData(this.active);
      }
    },
    created: function () {
      this.getData(this.active);
      if (this.$route.query.active) {
        this.active = this.$route.query.active;
      }
    }
  }
</script>
