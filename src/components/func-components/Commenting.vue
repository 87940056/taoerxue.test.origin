<template>
  <div class="commenting">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="num" @click="submit()">提交</span>
      <p>写评论</p>
    </header>
    <textarea spellcheck="false" :placeholder="placeholder"
              v-model="value"
              @focus="setPlaceholder(false)"
              @blur="setPlaceholder(true)">
    </textarea>
    <div class="hint-input">{{wordCount}}/140</div>
    <p class="hint">{{hint}}</p>
    <div class="submission" v-show="status_submission"></div>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "../../assets/style/func-components/commenting.scss";
  export default{
    name: "InformationCommenting",
    data(){
      return {
        wordCount: 0,
        placeholder: "写点什么吧...",
        value: "",
        hint: "",
        status_submission: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      submit: function () {
        if (this.wordCount > 0 && this.wordCount <= 140) {
          this.status_submission = true;
          this.value = "";
          setTimeout(function () {
            this.status_submission = false;
          }.bind(this), 3000)
        } else if (this.wordCount === 0) {
          this.hint = "内容不能为空";
          setTimeout(function () {
            this.hint = "";
          }.bind(this), 3000)
        } else {
          this.hint = "超过字数限制";
          setTimeout(function () {
            this.hint = "";
          }.bind(this), 3000)
        }
      },
      setPlaceholder: function (type) {
        this.placeholder = type ? "写点什么吧..." : "";
      }
    },
    watch: {
      value: function () {
        this.wordCount = this.value.length;
      }
    }
  }
</script>
