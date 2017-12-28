<template>
  <div class="feedback">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="submit" @click="setActive()">提交</div>
      <p>意见反馈</p>
    </header>
    <textarea name="" id="" cols="30" rows="10" :placeholder="placeholder"></textarea>
    <div class="has-been-sent" v-show="active"></div>
    <p class="none-submit">{{none_hint}}</p>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/feedback.scss";
  export default{
    name: "Feedback",
    data(){
      return {
        placeholder: "如果您对我们有什么建议、想法和期望，清告诉我们！",
        active: false,
        none_hint: ""
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
        var value = $(".feedback textarea").val();
        if (value) {
          this.active = true;
          setTimeout(function () {
            this.active = false;
          }.bind(this), 1000)
        } else {
          this.none_hint = "内容不能为空";
          setTimeout(function () {
            this.none_hint = "";
          }.bind(this), 1000)
        }
      }
    }
  }
</script>
