<template>
  <div class="personal-data">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>个人资料</p>
    </header>
    <ul class="content">
      <li class="item">
        <span class="item-name">头像</span>
        <div class="item-content">
          <img :src="msg.pic" alt="" class="pic">
          <div class="come-in"></div>
          <div class="mask" @click="setStatus(1)"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">昵称</span>
        <div class="item-content">
          <span>{{msg.name}}</span>
          <div class="come-in"></div>
          <router-link to="/data-set/2/1" class="mask"></router-link>
        </div>
      </li>
      <li class="item">
        <span class="item-name">性别</span>
        <div class="item-content">
          <span>{{msg.gender}}</span>
          <div class="come-in"></div>
          <div class="mask" @click="setStatus(3)"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">生日</span>
        <div class="item-content">
          <span>{{msg.birthday}}</span>
          <div class="come-in"></div>
          <div class="mask" @click="setStatus(4)"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">联系电话</span>
        <div class="item-content">
          <span>{{msg.phone}}</span>
          <!--<div class="come-in"></div>-->
          <!--<router-link to="/data-set/2/2" class="mask"></router-link>-->
        </div>
      </li>
    </ul>
    <div class="submitButton-bottom">确定</div>
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
  import "../../assets/style/personal-center/personal-data.scss";
  export default{
    components: {Calendar},
    data()
    {
      return {
        status: 0,
        msg: {
          id: 122,
          name: "王大剑",
          gender: "男",
          birthday: "2011-11-11",
          phone: "13888888888",
          status: true,
          pic: "/static/images/personal-center/my_pic.png",
        }
      }
    }
    ,
    methods: {
      goBack: function () {
        router.go(-1);
      }
      ,
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
    }
  }
</script>
