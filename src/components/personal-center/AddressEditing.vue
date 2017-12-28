<template>
  <div class="address-editing">
    <header>
      <div class="return" @click="goBack()"></div>
      <span class="operate">保存</span>
      <p>编辑地址</p>
    </header>
    <ul class="content">
      <li class="item">
        <span class="item-name">收货人姓名</span>
        <input type="text" :placeholder="msg.consignee">
      </li>
      <li class="item">
        <span class="item-name">手机号码</span>
        <input type="text" :placeholder="msg.phone">
      </li>
      <li class="item">
        <span class="item-name">邮政编码</span>
        <input type="text">
      </li>
      <li class="item">
        <span class="item-name">省、市、区选择</span>
        <span>{{msg.address.one}}</span>
        <div class="come-in" @click="setStatus(true)"></div>
      </li>
      <li class="item">
        <span class="item-name">详细地址</span>
        <input type="text" :placeholder="msg.address.two">
      </li>
    </ul>
    <RegionalSelection v-if="status_region" :setStatus="setStatus"></RegionalSelection>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/address-editing.scss";
  import RegionalSelection from "../func-components/RegionalSelection";
  export default{
    name: "AddAddress",
    components: {RegionalSelection},
    data(){
      return {
        msg: {
          id: 1,
          consignee: "王大剑",
          phone: "18888888888",
          address: {one: "浙江省杭州市余杭区", two: "梦想小镇仓溢东苑15幢1单元701发生发生发萨斯个风格"}
        },
        status_region: false
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
