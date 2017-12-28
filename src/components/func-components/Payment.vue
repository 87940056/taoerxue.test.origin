<template>
  <div class="payment">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>支付订单</p>
    </header>
    <div class="payment-info clearfix">
      <div class="icon"></div>
      <div class="payment-content">
        <div class="amount clearfix">
          <span>订单总额：</span>
          <span class="amount-content">￥2.5</span>
        </div>
        <div class="payee clearfix">
          <span>收款方：</span>
          <span>浙江尔学教育科技有限公司</span>
        </div>
      </div>
    </div>
    <ul class="payment-methods">
      <li class="item" :class="{'active':active==1}" @click="setActive(1)">
        <div class="icon"></div>
        <div class="method-info">
          <p class="name">支付宝支付</p>
          <p class="prompt">推荐已安装支付宝的用户使用</p>
        </div>
        <div class="select"></div>
      </li>
      <li class="item" :class="{'active':active==2}" @click="setActive(2)">
        <div class="icon"></div>
        <div class="method-info">
          <p class="name">微信支付</p>
          <p class="prompt">已安装微信5.0以上版本可使用</p>
        </div>
        <div class="select"></div>
      </li>
      <li class="item" :class="{'active':active==3}" @click="setActive(3)">
        <div class="icon"></div>
        <div class="method-info">
          <p class="name">银行卡支付</p>
          <p class="prompt">储蓄卡或信用卡，无需开通网银</p>
        </div>
        <div class="select"></div>
      </li>
    </ul>
    <div class="submit">
      <span>确认支付</span>
      <span>￥</span>
      <span>2.5</span>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "@/assets/style/func-components/payment.scss";
  export default{
    name: "Payment",
    data(){
      return {
        active: 0
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setActive: function (id) {
        this.active = id;
      }
    }
  }
</script>
