<template>
  <div class="comments-list">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="num">共{{num}}条</span>
      <p>{{title}}</p>
    </header>
    <ul class="contents" v-show="!status">
      <li class="content content-hot">
        <p class="title-text">热门评论</p>
        <ul class="items">
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
        <div class="more" @click="setStatus(1)">
          <span>查看更多热门评论</span>
          <div class="icon"></div>
        </div>
      </li>
      <li class="content content-new">
        <p class="title-text">最新评论</p>
        <ul class="items">
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
        <div class="more" @click="setStatus(2)">
          <span>查看更多评论</span>
          <div class="icon"></div>
        </div>
      </li>
    </ul>
    <ul class="contents_" v-show="status">
      <li class="item clearfix" v-for="item in msg">
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
    <div class="comment-now-box">
      <router-link to="/commenting" class="comment-now">
        <div class="icon"></div>
        <span>写评论</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "../../assets/style/func-components/comments-list.scss";
  export default{
    data(){
      return {
        status: false,
        title: "评论列表",
        num: 230,
        msg_hot: "",
        msg_new: "",
        msg: ""
      }
    },
    methods: {
      goBack: function () {
        if (!this.status) {
          router.go(-1);
        } else {
          this.status = false
        }
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/news/comments",
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
              data: {
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
                  },
                  {
                    id: 3,
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
                    text_content: "很棒很棒很棒很荒野行动东方物流棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
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
                  },
                  {
                    id: 3,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: false
                  }
                ]
              }
            };
            if (data.code === 0) {
              this.msg_hot = data.data.msg_hot;
              this.msg_new = data.data.msg_new;
            }
          }.bind(this)
        })
      },
      getData_: function () {
        $.ajax({
          type: "post",
          url: "/news/comments",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            pageNum: 1,
            pageSize: 8
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
                },
                {
                  id: 3,
                  user_name: "狮子头",
                  user_pic: "/static/images/information/user_pic.jpg",
                  text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
                  thumb: 111,
                  thumb_status: true
                }
              ]
            };
            if (data.code === 0) {
              this.msg = data.data;
            }
          }.bind(this)
        })
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
      setStatus: function (para) {
        this.status = para;
      }
    },
    watch: {
      status: function (para) {
        if (!para) {
          this.title = "评论列表";
        }
        if (para === 1) {
          this.title = "热门评论";
          this.getData_();
        }
        if (para === 2) {
          this.title = "所有评论";
          this.getData_();
        }
      }
    },
    created: function () {
      this.returnTop();
      this.getData();
    }
  }
</script>
