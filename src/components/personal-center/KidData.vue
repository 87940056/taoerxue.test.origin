<template>
  <div class="kid-data">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="save">保存</span>
      <p>孩子详情</p>
    </header>
    <ul class="content" v-if="msg">
      <li class="item">
        <span class="item-name">头像</span>
        <div class="item-content">
          <img :src="msg.pic" alt="" class="pic">
          <div class="come-in"></div>
          <div class="mask" @click="setStatus(1)"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">姓名</span>
        <div class="item-content">
          <span>{{msg.name}}</span>
          <div class="come-in" v-if="!msg.status_auth"></div>
          <router-link to="/data-set/3/1" class="mask" v-if="!msg.status_auth"></router-link>
        </div>
      </li>
      <li class="item">
        <span class="item-name">性别</span>
        <div class="item-content">
          <span>{{msg.gender}}</span>
          <div class="come-in" v-if="!msg.status_auth"></div>
          <div class="mask" @click="setStatus(3)" v-if="!msg.status_auth"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">出生日期</span>
        <div class="item-content">
          <span>{{msg.birthday}}</span>
          <div class="come-in" v-if="!msg.status_auth"></div>
          <div class="mask" @click="setStatus(4)" v-if="!msg.status_auth"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">与宝宝的关系</span>
        <div class="item-content">
          <span>{{msg.relationship}}</span>
        </div>
      </li>
    </ul>
    <div class="submitButton-bottom">删除</div>
    <div class="pic-set item-set" v-show="status===1">
      <div class="shadow" @click="setStatus(0)"></div>
      <div class="part-content">
        <p>拍照</p>
        <p>从相册选择</p>
        <p @click="setStatus(0)">取消</p>
      </div>
    </div>
    <div class="gender-set item-set" v-show="status===3">
      <div class="shadow" @click="setStatus(0)"></div>
      <div class="part-content">
        <p @click="setData(3,'男')">男</p>
        <p @click="setData(3,'女')">女</p>
        <p @click="setStatus(0)">取消</p>
      </div>
    </div>
    <Calendar v-if="status===4" :setStatus="setStatus" :setData="setData"></Calendar>
  </div>
</template>

<script>
  import router from "@/router/index";
  import Calendar from '../func-components/Calendar';
  import "../../assets/style/personal-center/kid-data.scss";
  export default{
    components: {Calendar},
    data(){
      return {
        msg: "",
        status: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/user/courses",
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
              msg: {
                id: 122,
                name: "王大剑",
                gender: "男",
                birthday: "2011-11-11",
                relationship: "妈妈",
                status_auth: true,
                pic: "/static/images/personal-center/my_pic.png",
              }
            };
            if (data.code === 0) {
              this.msg = data.msg;
            }
          }.bind(this)
        });
      },
      setStatus: function (para) {
        this.status = para;
      },
      setData: function (index, msg) {
        if (index === 3) {
          this.msg.gender = msg
        }
        if (index === 4) {
          this.msg.birthday = msg
        }
        this.status = 0
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>
