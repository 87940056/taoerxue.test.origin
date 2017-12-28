<template>
  <div class="data-set">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="save">保存</span>
      <p>{{title}}</p>
    </header>
    <div class="content">
      <p class="title-text">请输入{{content_title}}</p>
      <input type="text" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/func-components/data-set.scss";
  export default{
    name: "DataSet",
    data(){
      return {
        title: "",
        content_title: "",
        placeholder: "",
        msg: {
          name: "淘儿学工作群",
          notice: "欢迎加入",
          nickname: "王大剑"
        }
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      }
    },
    created: function () {
      if (this.$route.params.type === "1") {
        if (this.$route.params.id === "1") {
          this.title = "群名称";
          this.content_title = "群名称";
          this.placeholder = this.msg.name;
        }
        if (this.$route.params.id === "2") {
          this.title = "我的群昵称";
          this.content_title = "群昵称";
          this.placeholder = this.msg.nickname;
        }
        if (this.$route.params.id === "3") {
          this.title = "群公告";
          this.content_title = "群公告";
          this.placeholder = this.msg.notice;
        }
      }
      if (this.$route.params.type === "2") {
        if (this.$route.params.id === "1") {
          this.title = "设置昵称";
          this.content_title = "昵称";
          this.placeholder = this.msg.nickname;
        }
        if (this.$route.params.id === "2") {
          this.title = "设置手机号码";
          this.content_title = "手机号码";
        }
      }
      if (this.$route.params.type === "3") {
        if (this.$route.params.id === "1") {
          this.title = "设置名字";
          this.content_title = "名字";
          this.placeholder = this.msg.nickname;
        }
      }
    }
  }
</script>
