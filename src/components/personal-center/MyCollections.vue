<template>
  <div class="my-collections">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="operate" @click="setStatus(0)" :class="{'active':status}">{{status ? "完成" : "编辑"}}</span>
      <p>我的收藏</p>
    </header>
    <ul class="content" v-if="msg">
      <li class="item clearfix" v-for="item in msg">
        <div class="select" :class="{'active':item.select_status}" v-show="status" @click="setStatus(item.id)"></div>
        <img v-lazy="item.pic" alt="" class="pic">
        <div class="pic-right">
          <p class="name">{{item.name}}</p>
          <div class="status">
            <p>{{item.status}}</p>
            <p>时间：{{item.time}}</p>
          </div>
          <div class="subject-teacher clearfix">
            <p class="subject-name">{{item.subject}}</p>
            <p class="teacher">{{item.teacher}}</p>
          </div>
        </div>
        <router-link class="mask" to="/course-details/content" v-show="!status"></router-link>
      </li>
    </ul>
    <p class="content-none" v-show="!msg.length">暂无内容</p>
    <footer v-show="status">
      <div class="all-pick">
        <div class="select" :class="{'active':status_allPick}" @click="setAllPick()"></div>
        <span>全选</span>
      </div>
      <div class="delete" @click="deleteItem()">删除</div>
      <div class="selected-num">
        <span>已选</span>
        <span>{{selected_num}}</span>
        <span>个课程</span>
      </div>
    </footer>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/my-collections.scss";
  export default{
    name: "MyCourses",
    data(){
      return {
        status: false,
        msg: "",
        status_allPick: false,
        selected_num: 0
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/user/collections",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            keyword: this.keyword
          },
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              msg: [
                {
                  id: 1,
                  name: "厉害极了的舞蹈课01",
                  status: "待上课",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png",
                  select_status: false
                },
                {
                  id: 2,
                  name: "厉害极了的舞蹈课02",
                  status: "待上课",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png",
                  select_status: false
                },
                {
                  id: 3,
                  name: "厉害极了的舞蹈课03",
                  status: "待上课",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png",
                  select_status: false
                }
              ]
            };
            if (data.code === 0) {
              this.msg = data.msg;
            }
          }.bind(this)
        });
      },
      setStatus: function (id) {
        if (!id) {
          this.status = this.msg.length ? !this.status : false;
        } else {
          this.msg[id - 1].select_status = !this.msg[id - 1].select_status;
          var num = 0;
          this.msg.forEach(function (item) {
            if (item.select_status) {
              num += 1;
            }
          });
          this.selected_num = num;
          if (this.selected_num === this.msg.length) {
            this.status_allPick = true;
          } else {
            this.status_allPick = false;
          }
        }
      },
      setAllPick: function () {
        this.status_allPick = !this.status_allPick;
        if (this.status_allPick) {
          this.msg.forEach(function (item) {
            item.select_status = true;
          });
          this.selected_num = this.msg.length;
        } else {
          this.msg.forEach(function (item) {
            item.select_status = false;
          });
          this.selected_num = 0;
        }
      },
      deleteItem: function () {
        for (var i = 0; i < this.msg.length; i++) {
          if (this.msg[i].select_status) {
            this.msg.splice(i, 1);
            i--;
          }
        }
        this.selected_num = 0;
        this.status_allPick = false;
        if (!this.msg.length) {
          this.status = false;
        }
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>
