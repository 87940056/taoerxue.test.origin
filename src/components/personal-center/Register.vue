<template>
  <div class="register">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>新用户注册</p>
    </header>
    <ul class="content">
      <li class="item">
        <input type="text" class="phone" placeholder="请输入您的手机号" @blur="check(1)" v-model="phone">
        <p class="false-hint" v-show="false_input.phone">{{false_input.phone === 1 ? "手机号码不能为空" : "请填写正确的手机号码"}}</p>
      </li>
      <li class="item">
        <input type="text" class="code" placeholder="请输入您的短信验证码" @blur="check(2)" v-model="code">
        <div class="send-button" @click="getCode()">{{countdown > 0 ? countdown + "秒后重发" : "获取验证码"}}</div>
        <p class="false-hint" v-show="false_input.code">请填写验证码</p>
      </li>
      <li class="item">
        <input type="password" class="password" placeholder="请设置8-16位的密码" @blur="check(3)" v-model="password">
        <p class="false-hint" v-show="false_input.password">{{false_input.password === 1 ? "密码不能为空" : "密码格式错误"}}</p>
      </li>
      <li class="item">
        <input type="password" class="password-again" placeholder="请确认密码" @blur="check(4)" v-model="password_again">
        <p class="false-hint" v-show="false_input.password_again">两次输入不一致</p>
      </li>
    </ul>
    <div class="submit" @click="submit()">完成</div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/register.scss";
  export default{
    name: "Register",
    data(){
      return {
        phone: "",
        code: "",
        password: "",
        password_again: "",
        countdown: 0,
        fn_countdown: "",
        false_input: {
          phone: false,
          code: false,
          password: false,
          password_again: false
        }
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      check: function (para) {
        var reg_phone = /^1[3|4|5|7|8][0-9]{9}$/;
        //8-16位数字，字母，符号至少任意两种混搭
        var reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){8,16}$/;
        if (para === 1) {
          if (this.phone) {
            if (reg_phone.test(this.phone)) {
              this.false_input.phone = 0;
            } else {
              this.false_input.phone = true;
            }
          } else {
            this.false_input.phone = false;
          }
        }
        if (para === 2) {
          if (this.code) {
            this.false_input.code = false;
          }
        }
        if (para === 3) {
          if (this.password) {
            if (reg_password.test(this.password)) {
              this.false_input.password = 0;
            } else {
              this.false_input.password = true;
            }
          } else {
            this.false_input.password = false;
          }
        }
        if (para === 4) {
          if (this.password_again) {
            if (this.password_again === this.password) {
              this.false_input.password_again = 0;
            } else {
              this.false_input.password_again = true;
            }
          } else {
            this.false_input.password_again = false;
          }
        }
      },
      getCode: function () {
        if (this.false_input.phone) {
          console.log("false");
        } else {
          if (this.phone) {
            this.countdown = 60;
            this.fn_countdown = setInterval(function () {
              this.countdown -= 1;
            }.bind(this), 1000);
            $.ajax({
              type: "get",
              url: "/user/code",
              data: {
                phone: this.phone
              },
              dataType: "json",
              success: function (data) {

              }.bind(this),
              error: function () {
                var data = {
                  code: 0,
                  msg: ""
                };
              }.bind(this)
            })
          } else {
            this.false_input.phone = 1;
          }
        }
      },
      submit: function () {
        if (this.false_input.phone === 0) {
          if (this.code) {
            if (this.false_input.password === 0) {
              if (this.false_input.password_again === 0) {
                console.log("success");
              } else {
                this.false_input.password_again = true;
              }
            } else {
              if (this.password) {
                this.false_input.password = true;
              } else {
                this.false_input.password = 1;
              }
            }
          } else {
            this.false_input.code = true;
          }
        } else {
          if (this.phone) {
            this.false_input.phone = true;
          } else {
            this.false_input.phone = 1;
          }
        }
      }
    }
  }
</script>
