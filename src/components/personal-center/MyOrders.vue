<template>
  <div class="my-orders">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>我的订单</p>
    </header>
    <ul class="nav-bar">
      <li class="item" v-for="item in msg_nav" :class="{'active':active===item.id}" @click="setActive(item.id)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/my-orders.scss";
  export default{
    name: "MyOrders",
    data(){
      return {
        active: 1,
        msg_nav: [
          {id: 1, name: "未付款"},
          {id: 2, name: "待发货"},
          {id: 3, name: "未收货"},
          {id: 4, name: "未评价"},
          {id: 5, name: "已完成"}
        ],
        msg:""
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setActive: function (id) {
        this.active = id;
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/user/orders",
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
                  name: "儿童全实木上下床CQ3A-C",
                  pic: "/static/images/personal-center/goods_pic.png"
                },
                {
                  id: 1,
                  name: "厉害极了的舞蹈课",
                  status: "待上课",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png"
                },
                {
                  id: 1,
                  name: "厉害极了的舞蹈课",
                  status: "待上课",
                  time: "2017-11-12",
                  subject: "美术",
                  teacher: "王老师",
                  pic: "/static/images/personal-center/course_pic.png"
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
    created:function(){
//        this.getData();
    }
  }
</script>
