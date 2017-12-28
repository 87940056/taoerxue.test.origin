<template>
  <div class="information-comments">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="num">共{{num}}条</span>
      <p>{{title}}</p>
    </header>
    <ul class="contents">
      <li class="content content-hot">
        <p class="title-text">热门评论</p>
        <ul class="comments">
          <li class="item clearfix" v-for="item in msg_hot">
            <router-link class="pic" to="/user-data">
              <img :src="item.user_pic" alt="">
            </router-link>
            <div class="pic-right">
              <p class="user-name">{{item.user_name}}</p>
              <p class="text-content">{{item.text_content}}</p>
              <div class="time-thumb">
                <span class="time">5分钟前</span>
                <div class="thumb clearfix">
                  <div class="icon" :class="{'active':item.thumb_status}"
                       @click="setThumb('hot',item.id,item.thumb_status)"></div>
                  <span>{{item.thumb}}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="more" @click="more(1)">
          <span>查看更多热门评论</span>
          <div class="icon"></div>
        </div>
      </li>
      <li class="content content-new">
        <p class="title-text">最新评论</p>
        <ul class="comments">
          <li class="item clearfix" v-for="item in msg_new">
            <router-link class="pic" to="/user-data">
              <img :src="item.user_pic" alt="">
            </router-link>
            <div class="pic-right">
              <p class="user-name">{{item.user_name}}</p>
              <p class="text-content">{{item.text_content}}</p>
              <div class="time-thumb">
                <span class="time">5分钟前</span>
                <div class="thumb clearfix">
                  <div class="icon" :class="{'active':item.thumb_status}"
                       @click="setThumb('new',item.id,item.thumb_status)"></div>
                  <span>{{item.thumb}}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="more" @click="more(2)">
          <span>查看更多最新评论</span>
          <div class="icon"></div>
        </div>
      </li>
    </ul>
    <div class="comment-now-box">
      <router-link to="/information-commenting" class="comment-now">
        <div class="icon"></div>
        <span>写评论</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "../../assets/style/information/information-comments.scss";
  export default{
    name: "Comments",
    data(){
      return {
        active: false,
        title: "评论详情",
        num: 230,
        msg_hot: [
          {
            id: 1,
            user_name: "狮子头",
            user_pic: "/static/images/information/user_pic.jpg",
            text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
            thumb: 111,
            thumb_status: false
          },
          {
            id: 2,
            user_name: "狮子头",
            user_pic: "/static/images/information/user_pic.jpg",
            text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
            thumb: 111,
            thumb_status: true
          }
        ],
        msg_new: [
          {
            id: 1,
            user_name: "狮子头",
            user_pic: "/static/images/information/user_pic.jpg",
            text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
            thumb: 111,
            thumb_status: false
          },
          {
            id: 2,
            user_name: "狮子头",
            user_pic: "/static/images/information/user_pic.jpg",
            text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
            thumb: 111,
            thumb_status: false
          }
        ]
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setThumb: function (type, id, status) {
        if (type === "hot") {
          this.msg_hot[id - 1].thumb_status = !status;
          this.msg_hot[id - 1].thumb = status ? this.msg_hot[id - 1].thumb - 1 : this.msg_hot[id - 1].thumb + 1;
        }
        if (type === "new") {
          this.msg_new[id - 1].thumb_status = !status;
          this.msg_new[id - 1].thumb = status ? this.msg_new[id - 1].thumb - 1 : this.msg_new[id - 1].thumb + 1;
        }
      },
      more: function (para) {
        this.active = para;
      }
    },
    watch: {
      active: function (para) {
        if (!para) {
          this.title = "评论详情";
        }
        if (para === 1) {
          this.title = "热门评论";
        }
        if (para === 2) {
          this.title = "最新评论";
        }
      }
    }
  }
</script>
