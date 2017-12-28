<template>
  <div class="select-kid">
    <header>
      <div class="return" @click="goBack()"></div>
      <!--<span class="num" @click="submit()">完成</span>-->
      <p>选择孩子</p>
    </header>
    <div class="content">
      <p class="title-text">选择上课人</p>
      <ul class="items">
        <li class="item" v-for="item in msg">
          <div class="select" :class="{'active':item.status_select}" @click="setStatus(item.id)"></div>
          <div class="item-content">
            <img :src="item.pic" alt="" class="pic">
            <span class="name">{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/add-kidArchive" class="submitButton-bottom">添加上课人</router-link>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "../../assets/style/home-page/select-kid.scss";
  export default{
    name: "SelectKid",
    data(){
      return {
        msg: [
          {id: 1, name: "小仙女", pic: "/static/images/home-page/pic_.png", status_select: true},
          {id: 2, name: "小仙女", pic: "/static/images/home-page/pic_.png", status_select: false},
          {id: 3, name: "小仙女", pic: "/static/images/home-page/pic_.png", status_select: false}
        ]
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setStatus: function (index) {
        this.msg[index - 1].status_select = !this.msg[index - 1].status_select;
      }
    }
  }
</script>
