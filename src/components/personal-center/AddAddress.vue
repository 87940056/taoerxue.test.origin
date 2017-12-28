<template>
  <div class="add-address">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="operate">保存</span>
      <p>新增收货地址</p>
    </header>
    <ul class="content">
      <li class="item">
        <span class="item-name">收货人姓名</span>
        <input type="text">
      </li>
      <li class="item">
        <span class="item-name">手机号码</span>
        <input type="text">
      </li>
      <li class="item">
        <span class="item-name">邮政编码</span>
        <input type="text">
      </li>
      <li class="item">
        <span class="item-name">省、市、区选择</span>
        <div class="come-in" @click="setStatus(true)"></div>
      </li>
      <li class="item">
        <span class="item-name">详细地址</span>
        <input type="text">
      </li>
    </ul>
    <RegionalSelection v-if="status_region" :setStatus="setStatus"></RegionalSelection>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/add-address.scss";
  import RegionalSelection from "../func-components/RegionalSelection";
  export default{
    name: "AddAddress",
    components: {RegionalSelection},
    data(){
      return {
          status_region:false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setStatus: function (para) {
        this.status_region=para;
      }
    }
  }
</script>
