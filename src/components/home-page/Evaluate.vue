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
        <router-link class="pic" to="">
          <img :src="item.pic" alt="">
        </router-link>
        <div class="pic-right">
          <div class="name-time clearfix">
            <span class="user-name">{{item.name}}</span>
            <span class="time">5天前</span>
          </div>
          <p class="text-content">{{item.eva_content}}</p>
        </div>
      </li>
    </ul>
    <div class="more" @click="more(1)">
      <span>查看更多评论</span>
      <div class="icon"></div>
    </div>
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
