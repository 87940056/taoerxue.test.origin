<template>
  <div class="add-apply">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="submit" @click="setActive()">发送</div>
      <p>加为好友</p>
    </header>
    <div class="content">
      <p class="title">请输入自我介绍</p>
      <input type="text" placeholder="荆轲刺秦王">
    </div>
    <div class="has-been-sent" v-show="active"></div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/add-apply.scss";
  export default{
    name: "AddApply",
    data(){
      return {
        active: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setActive: function () {
        if (this.active === true) {
          return;
        }
        this.active = true;
        setTimeout(function () {
          this.active = false;
        }.bind(this), 1000)
      }
    }
  }
</script>
