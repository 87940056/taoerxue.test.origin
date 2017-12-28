<template>
  <div class="my-addresses">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>地址管理</p>
    </header>
    <ul class="content" v-if="msg">
      <li class="item" v-for="item in msg">
        <div class="part-one_two">
          <div class="part-one clearfix">
            <span class="consignee">收货人：{{item.consignee}}</span>
            <span class="phone">{{item.phone}}</span>
          </div>
          <div class="part-two">
            <span>收货地址：</span>
            <span class="address">{{item.address}}</span>
          </div>
        </div>
        <ul class="part-three clearfix">
          <li class="clearfix">
            <div class="icon"></div>
            <span>删除</span>
          </li>
          <li class="clearfix">
            <div class="icon"></div>
            <span>编辑</span>
            <router-link class="mask" to="/address-editing"></router-link>
          </li>
        </ul>
      </li>
    </ul>
    <router-link to="/add-address" class="add-address-button">新增地址</router-link>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/my-addresses.scss";
  export default{
    name: "MyAddresses",
    data(){
      return {
        msg: ""
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/user/courses",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            keyword: this.keyword
          },
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              msg: [
                {
                  id: 1,
                  consignee: "王大剑",
                  phone: "18888888888",
                  address: "浙江省杭州市余杭区梦想小镇仓溢东苑15幢1单元701发生发生发萨斯个风格"
                },
                {
                  id: 2,
                  consignee: "王二剑",
                  phone: "18888888888",
                  address: "浙江省杭州市余杭区梦想小镇"
                },
                {
                  id: 3,
                  consignee: "王三剑",
                  phone: "18888888888",
                  address: "浙江省杭州市余杭区梦想小镇"
                },
                {
                  id: 4,
                  consignee: "王三剑",
                  phone: "18888888888",
                  address: "浙江省杭州市余杭区梦想小镇"
                },
                {
                  id: 5,
                  consignee: "王三剑",
                  phone: "18888888888",
                  address: "浙江省杭州市余杭区梦想小镇"
                }
              ]
            };
            if (data.code === 0) {
              this.msg = data.msg;
            }
          }.bind(this)
        });
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>
