<template>
  <ul class="institutions-list">
    <li class="item clearfix" v-for="item in msg">
      <img v-lazy="item.pic" alt="" class="pic">
      <ul class="pic-right">
        <li class="name">{{item.name}}</li>
        <li class="subject-box clearfix">
          <div class="item-subject" v-for="item_subject in item.subject">{{item_subject}}</div>
        </li>
        <li class="teacher-num clearfix">
          <span>{{item.teacher_num}}</span>
          <span>位老师</span>
        </li>
        <li class="address">{{item.address}}</li>
      </ul>
      <router-link class="mask" to="/institution-details/courses-list"></router-link>
    </li>
  </ul>
</template>

<script>
  import "@/assets/style/home-page/institutions-list.scss";
  export default{
    name: "InstitutionsList",
    props: ["msg"],
    data(){
      return {}
    }
  }
</script>
