<template>
  <div class="relation-select">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>与孩子的关系</p>
    </header>
    <ul class="content">
      <li class="item" v-for="(item,index) in msg">
        <div class="select" :class="{'active':active===index+1}" @click="setActive(index+1)"></div>
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/relation-select.scss";
  export default{
    name: "relation-select",
    data(){
      return {
        active: 0,
        msg: ["爸爸", "妈妈", "爷爷", "奶奶", "外公", "外婆", "其他"]
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setActive: function (index) {
        this.active = index;
      }
    }
  }
</script>
