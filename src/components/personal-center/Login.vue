<template>
  <div class="login">
    <header>
      <div class="return" @click="goBack()">取消</div>
    </header>
    <div class="logo"></div>
    <div class="login-box">
      <div class="phone item">
        <input type="text" placeholder="请输入您的手机号" v-model="phone" @blur="check(1)">
        <p class="false-hint" v-show="false_input.phone">{{false_input.phone === 1 ? "手机号码不能为空" : "请填写正确的手机号码"}}</p>
      </div>
      <div class="password item">
        <input type="password" placeholder="请输入您的密码" v-model="password" @blur="check(2)">
        <p class="false-hint" v-show="false_input.password">{{false_input.password === 1 ? "密码不能为空" : "密码格式错误"}}</p>
      </div>
      <router-link to="/login-by-code" class="login-no-password">手机验证码登录</router-link>
    </div>
    <ul class="button-box">
      <li class="item">
        <span>登</span>
        <span>陆</span>
        <div class="mask" @click="login()"></div>
      </li>
      <li class="item">
        <span>注</span>
        <span>册</span>
        <router-link class="mask" to="/register"></router-link>
      </li>
    </ul>
    <div class="error-login" v-show="status_loginError" @click="setStatus(false)">
      <div class="error-content" @click.stop="">
        <div class="p-box">
          <p>出错了</p>
          <p>手机号码或密码错误</p>
          <p>您可以使用验证码登录</p>
        </div>
        <ul class="select-box">
          <li class="item">验证码登录
            <router-link class="mask" to="/login-by-code"></router-link>
          </li>
          <li class="item" @click="setStatus(false)">我再试试</li>
        </ul>
      </div>
    </div>
    <!--<footer>-->
    <!--<div class="title">-->
    <!--<div class="line"></div>-->
    <!--<span>{{isWeChat() ? "微信登陆" : "其他登陆"}}</span>-->
    <!--<div class="line"></div>-->
    <!--</div>-->
    <!--<ul class="content">-->
    <!--<li class="item" v-show="!isWeChat()">-->
    <!--<div class="icon"></div>-->
    <!--<p>支付宝</p>-->
    <!--<router-link class="mask" to="/login-by-aliPay"></router-link>-->
    <!--</li>-->
    <!--<li class="item">-->
    <!--<div class="icon"></div>-->
    <!--<p>微博</p>-->
    <!--<router-link class="mask" to="/login-by-microBlog"></router-link>-->
    <!--</li>-->
    <!--<li class="item" v-show="!isWeChat()">-->
    <!--<div class="icon"></div>-->
    <!--<p>微信</p>-->
    <!--<router-link class="mask" to="/login-by-weChat"></router-link>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</footer>-->
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/login.scss";
  export default{
    name: "Login",
    data(){
      return {
        phone: "",
        password: "",
        false_input: {
          phone: false,
          password: false,
        },
        status_loginError: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      check: function (para) {
        var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
        if (para === 1) {
          if (this.phone) {
            if (regPhone.test(this.phone)) {
              this.false_input.phone = false;
            } else {
              this.false_input.phone = true;
            }
          } else {
            this.false_input.phone = false;
          }
        }
        if (para === 2) {
          if (!this.password) {
            this.false_input.password = false;
          }
        }
      },
      ajax: function () {
        $.ajax({
            type: "post",
            url: "/user/login",
            data: {
              phone: this.phone,
              password: this.password
            },
            dataType: "json",
            success: function (data) {
              if (data.code === 0) {
                this.setToken(data.msg);
                router.push("/personal-center");
              } else {
                this.status_loginError = true;
              }
            }.bind(this),
            error: function () {
              var data = {
                code: 0,
                msg: ""
              };
              if (data.code === 0) {
                this.setToken("c74eea61c1bc4b9382c89775f10a5075");
                router.push("/personal-center");
              } else {
                this.status_loginError = true;
                this.password = "";
              }
            }.bind(this)
          }
        )
      },
      login: function () {
        if (!this.phone) {
          this.false_input.phone = 1;
        } else {
          if (!this.false_input.phone) {
            if (this.password) {
              this.ajax();
            } else {
              this.false_input.password = 1;
            }
          }
        }
      },
      setStatus: function (para) {
        this.status_loginError = para;
      }
    }
  }
</script>
