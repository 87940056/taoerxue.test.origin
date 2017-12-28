<template>
  <div class="login-by-code">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>{{title}}</p>
    </header>
    <div class="content" v-show="!status_password">
      <input class="phone" type="text"
             v-show="!status_code"
             :placeholder="placeholder"
             @focus="setPlaceholder('')"
             @blur="setPlaceholder('请输入手机号码')"
             v-model="msg.phone">
      <p class="hint" v-show="!status_code">我们会向该号码发送短信验证码</p>
      <ul class="identify-code" v-show="status_code">
        <li class="item">
          <input type="text" @click="codeRemove()" @input="codeInput(1)" v-model="arr_identifyCode[0]">
        </li>
        <li class="item">
          <input type="text" @click="codeRemove()" @input="codeInput(2)" v-model="arr_identifyCode[1]">
        </li>
        <li class="item">
          <input type="text" @click="codeRemove()" @input="codeInput(3)" v-model="arr_identifyCode[2]">
        </li>
        <li class="item">
          <input type="text" @click="codeRemove()" @input="codeInput(4)" v-model="arr_identifyCode[3]">
        </li>
        <li class="item">
          <input type="text" @click="codeRemove()" @input="codeInput(5)" v-model="arr_identifyCode[4]">
        </li>
        <li class="item">
          <input type="text" @click="codeRemove()" @input="codeInput(6)" v-model="arr_identifyCode[5]">
        </li>
      </ul>
      <p class="hint" v-show="status_code">请填写 {{phone}} 收到的短信验证码</p>
      <div class="agreement-button">
        <div class="pick-button" :class="{'active':status_agreement}" @click="setStatus(2)"></div>
        <span>我已阅读并同意</span>
        <router-link to="/agreement">《淘儿学用户服务协议》</router-link>
      </div>
      <p class="hint false-hint">{{false_hint}}</p>
      <div class="send-code" @click="getCodeButton()" v-show="!status_code">获取验证码</div>
      <ul class="send-code_" v-show="status_code">
        <li class="item" @click="getCodeButton()">{{countdown > 0 ? countdown + "秒后重发" : "获取验证码"}}</li>
        <li class="item" @click="setStatus(3,true)">语音接听验证码</li>
      </ul>
      <div class="too-much" v-show="status_tooMuch" @click="setStatus(3,false)">
        <div class="error-content" @click.stop="">
          <div class="p-box">
            <p>出错了</p>
            <p>您在登陆过程中遇到了问题，请咨询客服</p>
            <p>客服电话：400-888-8888</p>
          </div>
          <ul class="select-box">
            <li class="item" @click="setStatus(3,false)">取消</li>
            <li class="item">拨打</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content-password" v-show="status_password">
      <input class="password" type="password" v-model="msg.password">
      <p class="hint">请设置8-16位由数字，字母，特殊字符组成的密码</p>
      <p class="hint false-hint">{{false_hint}}</p>
      <div class="save-password" @click="savePasswordButton()">保存</div>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/personal-center/login-by-code.scss";
  export default{
    name: 'LoginByCode',
    data(){
      return {
        title: "验证码登陆",
        status_code: false,
        status_agreement: true,
        status_tooMuch: false,
        status_password: false,
        placeholder: "请输入手机号码",
        false_hint: "",
        countdown: 60,
        fn_countdown: "",
        arr_identifyCode: ["", "", "", "", "", ""],
        msg: {
          phone: "",
          identifyCode: "",
          password: ""
        }
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setStatus: function (fn_index, fn_item) {
        if (fn_index === 3) {
          this.status_agreement = this.status_code ? true : !this.status_agreement;
        }
        if (fn_index === 3) {
          this.status_tooMuch = fn_item;
        }
      },
      setPlaceholder: function (para) {
        this.placeholder = para;
      },
      getCode: function () {
        $.ajax({
          type: "get",
          url: "/user/code",
          data: {
            phone: this.msg.phone
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
      },
      getCodeButton: function () {
        if (!this.status_code) {
          var reg = /^1[3|4|5|7|8][0-9]{9}$/;
          if (reg.test(this.msg.phone)) {
            if (this.status_agreement) {
              this.status_code = true;
              this.fn_countdown = setInterval(function () {
                this.countdown -= 1;
              }.bind(this), 1000);
              this.getCode();
            } else {
              this.false_hint = "请阅读并勾选用户服务协议";
            }
          } else {
            this.false_hint = "请输入正确的手机号码";
          }
        } else {
          if (this.countdown <= 0) {
            this.status_code = true;
            this.countdown = 60;
            this.fn_countdown = setInterval(function () {
              this.countdown -= 1;
            }.bind(this), 1000);
            this.getCode();
          }
        }
      },
      sendCode: function () {
        $.ajax({
          type: "get",
          url: "/user/code",
          data: {
            phone: this.msg.phone,
            identifyCode: this.msg.identifyCode
          },
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              msg: ""
            };
            if (data.code === 0) {
              this.title = "设置密码";
              this.status_password = true;
            } else {
              this.false_hint = "验证码错误"
            }
          }.bind(this)
        })
      },
      codeRemove: function () {
        this.arr_identifyCode = ["", "", "", "", "", ""];
        $(".login-by-code .content .identify-code li.item input")[0].focus();
      },
      codeInput: function (para) {
        var fn_value;
        fn_value = this.arr_identifyCode[para - 1];
        if (Number(fn_value) || fn_value === "0") {
          if (para < 6) {
            $(".login-by-code .content .identify-code li.item input")[para].focus();
          } else {
            $(".login-by-code .content .identify-code li.item input")[para - 1].blur();
            this.msg.identifyCode = this.identifyCode;
            this.sendCode();
          }
        } else {
          this.arr_identifyCode[para - 1] = ""
        }
      },
      savePassword: function () {
        $.ajax({
          type: "get",
          url: "/user/password",
          data: {
            phone: this.msg.phone,
            password: this.msg.password
          },
          dataType: "json",
          success: function (data) {

          }.bind(this),
          error: function () {
            var data = {
              code: 0,
              msg: ""
            };
            if (data.code === 0) {
              this.setToken("c74eea61c1bc4b9382c89775f10a5075");
              router.push("/personal-center");
            }
          }.bind(this)
        })
      },
      savePasswordButton: function () {
        var reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){8,16}$/;
        if (this.msg.password) {
          if (reg_password.test(this.msg.password)) {
            this.savePassword();
          } else {
            this.false_hint = "密码格式错误";
          }
        } else {
          this.false_hint = "请设置密码";
        }
      }
    },
    computed: {
      identifyCode: function () {
        return this.arr_identifyCode.join("");
      },
      phone: function () {
        return this.msg.phone.slice(0, 3) + " " + this.msg.phone.slice(3, 7) + " " + this.msg.phone.slice(7)
      }
    },
    watch: {
      false_hint: function (para) {
        if (para) {
          setTimeout(function () {
            this.false_hint = "";
          }.bind(this), 3000)
        }
      },
      countdown: function (para) {
        if (para <= 0) {
          clearInterval(this.fn_countdown);
        }
      }
    },
    created: function () {

    }
  }
</script>
