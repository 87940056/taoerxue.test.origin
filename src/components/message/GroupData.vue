<template>
  <div class="group-data">
    <header>
      <div class="return" @click="goBack()"></div>
      <p>群资料</p>
    </header>
    <ul class="content">
      <li class="item item-one clearfix">
        <span class="item-type">群名称</span>
        <div class="come-in clearfix">
          <span>淘儿学交流群</span>
          <router-link to="/data-set/1/1" class="icon"></router-link>
        </div>
      </li>
      <li class="item item-two clearfix">
        <span class="item-type">群主</span>
        <ul class="item-contents">
          <li class="item-content">
            <img :src="msg.founder.pic" alt="" class="pic">
            <p>{{msg.founder.name}}</p>
            <router-link to="/user-data" class="mask"></router-link>
          </li>
        </ul>
      </li>
      <li class="item item-two clearfix">
        <span class="item-type">管理员</span>
        <ul class="item-contents clearfix">
          <li class="item-content" v-for="item in msg.managers">
            <img :src="msg.founder.pic" alt="" class="pic">
            <p>{{msg.founder.name}}</p>
            <router-link to="/user-data" class="mask"></router-link>
          </li>
          <li class="item-content">
            <img src="/static/images/message/add.png" alt="" class="pic">
            <p>添加</p>
          </li>
          <li class="item-content">
            <img src="/static/images/message/s.png" alt="" class="pic">
            <p>删除</p>
          </li>
        </ul>
      </li>
      <li class="item item-one clearfix">
        <span class="item-type">群成员</span>
        <div class="come-in clearfix">
          <span>{{msg.members.length}}人</span>
        </div>
      </li>
      <li class="item item-three">
        <ul class="item-contents clearfix">
          <li class="item-content" v-for="item in msg.members">
            <img :src="item.pic" alt="" class="pic">
            <p>{{item.name}}</p>
            <router-link to="/user-data" class="mask"></router-link>
          </li>
          <li class="item-content">
            <img src="/static/images/message/add.png" alt="" class="pic">
            <p>添加</p>
          </li>
          <li class="item-content">
            <img src="/static/images/message/s.png" alt="" class="pic">
            <p>删除</p>
          </li>
        </ul>
      </li>
      <li class="item item-one clearfix">
        <span class="item-type">我在本群的昵称</span>
        <div class="come-in clearfix">
          <span>王大剑</span>
          <router-link to="/data-set/1/2" class="icon"></router-link>
        </div>
      </li>
      <li class="item item-one clearfix">
        <span class="item-type">群公告</span>
        <div class="come-in clearfix">
          <span>欢迎加入</span>
          <router-link to="/data-set/1/3" class="icon"></router-link>
        </div>
      </li>
    </ul>
    <div class="quit-button" @click="setQuit(true)">退出群聊</div>
    <div class="quit-confirm" v-show="quit_status">
      <div class="shadow" @click="setQuit(false)"></div>
      <div class="quit-content">
        <p>退出后将不再接收此群消息</p>
        <p @click="quit(personal_id,msg.id)">退出</p>
        <p @click="setQuit(false)">取消</p>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index";
  import "../../assets/style/message/group-data.scss";
  export default{
    name: "GroupData",
    data(){
      return {
        personal_id: 1,
        msg: {
          id: 1,
          name: "淘儿学工作群",
          founder: {id: 1, name: "王大剑", pic: "/static/images/message/linkman_pic.png"},
          managers: [
            {id: 1, name: "王二剑", pic: "/static/images/message/linkman_pic.png"},
            {id: 2, name: "王三剑", pic: "/static/images/message/linkman_pic.png"}
          ],
          members: [
            {id: 1, name: "王二剑", pic: "/static/images/message/linkman_pic.png"},
            {id: 2, name: "王三剑", pic: "/static/images/message/linkman_pic.png"},
            {id: 3, name: "王四剑", pic: "/static/images/message/linkman_pic.png"},
            {id: 4, name: "王四剑", pic: "/static/images/message/linkman_pic.png"},
            {id: 5, name: "王四剑", pic: "/static/images/message/linkman_pic.png"},
            {id: 6, name: "王四剑", pic: "/static/images/message/linkman_pic.png"},
          ],
          notice: "欢迎入群",
          nickname_here: "王小剑"
        },
        quit_status: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setQuit: function (para) {
        this.quit_status = para;
      },
      quit: function (user_id, group_id) {
        console.log(user_id, group_id);
      }
    }
  }
</script>
