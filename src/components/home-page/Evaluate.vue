<template>
  <div class="evaluate">
    <div class="score-box" v-if="msg.score">
      <ul class="stars">
        <li class="item" v-for="item in msg.stars" :class="{'active':!item}">
        </li>
      </ul>
      <div class="score">
        <span>{{msg.score}}</span>
        <span>分</span>
      </div>
      <p class="describe">非常满意，无可挑剔</p>
    </div>
    <ul class="contents">
      <li class="item clearfix" v-for="item in msg.msg_remark">
        <router-link class="pic" to="/user-data">
          <img v-lazy="item.pic" alt="">
        </router-link>
        <div class="eva-data">
          <p class="name">{{item.name}}</p>
          <p class="eva-content">{{item.eva_content}}</p>
        </div>
        <span class="time">{{item.time}}</span>
        <span class="date">{{item.date}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import "@/assets/style/home-page/evaluate.scss";
  export default{
    name: "Evaluate",
    props: ["msg"],
    data(){
      return {}
    }
  }
</script>
