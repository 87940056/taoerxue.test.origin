<template>
  <div class="kid-data">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>添加孩子</p>
    </header>
    <ul class="content">
      <li class="item">
        <span class="item-name">头像</span>
        <div class="item-content">
          <img :src="msg.pic" alt="" class="pic">
          <!--<span>选择头像</span>-->
          <div class="come-in"></div>
          <div class="mask" @click="setStatus(1)"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">实名认证</span>
        <div class="item-content">
          <span>去认证</span>
          <div class="come-in"></div>
          <router-link to="/id-authenticate" class="mask"></router-link>
        </div>
      </li>
      <li class="item">
        <span class="item-name">性别</span>
        <div class="item-content">
          <span>{{this.msg.gender || "选择性别"}}</span>
          <div class="come-in" v-if="!msg.status_auth"></div>
          <div class="mask" @click="setStatus(3)"  v-if="!msg.status_auth"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">生日</span>
        <div class="item-content">
          <span>{{this.msg.birthday || "设置生日"}}</span>
          <div class="come-in" v-if="!msg.status_auth"></div>
          <div class="mask" @click="setStatus(4)" v-if="!msg.status_auth"></div>
        </div>
      </li>
      <li class="item">
        <span class="item-name">与宝宝的关系</span>
        <div class="item-content">
          <span>{{this.msg.relationship || "选择关系"}}</span>
          <div class="come-in"></div>
          <div class="mask" @click="setStatus(5)"></div>
        </div>
      </li>
    </ul>
    <div class="submitButton-bottom">确定</div>
    <!--头像选择-->
    <div class="pic-set set-one" v-show="status===1">
      <div class="shadow" @click="setStatus(0)"></div>
      <div class="section-bottom">
        <p>拍照</p>
        <p>从相册选择</p>
        <p @click="setStatus(0)">取消</p>
      </div>
    </div>
    <!--性别选择-->
    <div class="gender-set set-one" v-show="status===3">
      <div class="shadow" @click="setStatus(0)"></div>
      <div class="section-bottom">
        <p @click="setData(3,'男')">男</p>
        <p @click="setData(3,'女')">女</p>
        <p @click="setStatus(0)">取消</p>
      </div>
    </div>
    <!--选择出生日期-->
    <Calendar v-if="status===4" :setStatus="setStatus" :setData="setData"></Calendar>
    <!--关系选择-->
    <div class="gender-set set-one" v-show="status===5">
      <div class="shadow" @click="setStatus(0)"></div>
      <div class="section-bottom">
        <p @click="setData(5,'爸爸')">爸爸</p>
        <p @click="setData(5,'妈妈')">妈妈</p>
        <ul class="more" v-show="!status_relation" @click="relationMore()">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p @click="setData(5,'爷爷')" v-show="status_relation">爷爷</p>
        <p @click="setData(5,'奶奶')" v-show="status_relation">奶奶</p>
        <p @click="setData(5,'外公')" v-show="status_relation">外公</p>
        <p @click="setData(5,'外婆')" v-show="status_relation">外婆</p>
        <p @click="setData(5,'其他')" v-show="status_relation">其他</p>
        <p @click="setStatus(false)">取消</p>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import Calendar from '../func-components/Calendar';
  import "../../assets/style/personal-center/add-kidArchive.scss";
  export default{
    components: {Calendar},
    data(){
      return {
        msg: {
          id: 0,
          name: "",
          gender: "",
          birthday: "",
          relationship: "",
          status_auth: false,
          pic: "/static/images/personal-center/my_pic.png",
        },
        status: false,
        status_relation: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setStatus: function (para) {
        this.status = para;
        this.status_relation = false;
      },
      setData: function (index, msg) {
        if (index === 3) {
          this.msg.gender = msg
        }
        if (index === 4) {
          this.msg.birthday = msg
        }
        if (index === 5) {
          this.msg.relationship = msg
        }
        this.status = 0
      },
      relationMore: function () {
        this.status_relation = true;
      }
    }
  }
</script>
