<template>
  <div class="information-commenting">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="num" @click="submit()">提交</span>
      <p>热门评论</p>
    </header>
    <textarea spellcheck="false" :placeholder="placeholder"
              @input="setNumWords()"
              @focus="setPlaceholder(false)"
              @blur="setPlaceholder(true)">
    </textarea>
    <div class="hint">{{num_words}}/140</div>
    <div class="submission" v-show="submission_status"></div>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "../../assets/style/information/information-commenting.scss";
  export default{
    name: "InformationCommenting",
    data(){
      return {
        num_words: 0,
        placeholder: "写点什么吧...",
        submission_status: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      submit: function () {
        if (this.num_words > 0 && this.num_words <= 140) {
          this.submission_status = true;
          document.querySelector(".information-commenting textarea").value = "";
          setTimeout(function () {
            this.submission_status = false;
          }.bind(this), 1000)
        } else if (this.num_words === 0) {
          alert("内容不能为空");
        } else {
          alert("超过字数限制");
        }
      },
      setNumWords: function () {
        this.num_words = document.querySelector(".information-commenting textarea").value.length;
      },
      setPlaceholder: function (type) {
        this.placeholder = type ? "写点什么吧..." : "";
      }
    },
    watch: {
      num_words: function () {

      }
    }
  }
</script>
