<template>
  <div class="id-authenticate">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>实名认证</p>
    </header>
    <div class="content content-false" v-show="!status">
      <p class="hint-text">拍摄您的第二代身份证原件，请确保图片清晰，四角完整</p>
      <div class="hint-pic">
        <p>身份证正面</p>
        <div class="pic">
          <div></div>
        </div>
      </div>
    </div>
    <div class="content content-true" v-show="status">
      <div class="hint">
        <div class="icon"></div>
        <span>认证成功</span>
      </div>
      <div class="data">
        <p>姓名：{{msg.name}}</p>
        <p>身份证号码：{{msg.id_number}}</p>
      </div>
    </div>
    <div class="submitButton-bottom" v-show="!status">实名认证</div>
    <div class="submitButton-bottom" v-show="status" @click="goBack()">返回</div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/id-authenticate.scss";
  export default{
    name: "IdAuthenticate",
    data(){
      return {
        status: false,
        msg: {
          name: "李狗蛋",
          id_number: 322635897522366582
        }
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      }
    }
  }
</script>
