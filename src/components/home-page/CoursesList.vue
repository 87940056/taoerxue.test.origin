<template>
  <ul class="courses-list">
    <li class="item" v-for="item in msg">
      <div class="part-one clearfix">
        <img v-lazy="item.pic" alt="" class="pic">
        <ul class="pic-right">
          <li class="name">{{item.name}}</li>
          <li class="describe">{{item.describe}}</li>
          <li class="others">
            <div class="subject-name">{{item.subject}}</div>
            <span>共</span>
            <span>{{item.class_hour}}</span>
            <span>节课</span>
          </li>
        </ul>
        <div class="price clearfix">
          <span>￥</span>
          <span>{{item.price}}</span>
        </div>
      </div>
      <div class="part-two">
        <div class="teacher clearfix" v-for="t in item.teacher">
          <div class="division">
            <div></div>
          </div>
          <img :src="t.pic" alt="" class="pic">
          <!--<div class="icon"></div>-->
          <span class="name">{{t.name}}</span>
          <!--<div class="score">-->
          <!--<span>{{item.score}}</span>-->
          <!--<span>分</span>-->
          <!--</div>-->
        </div>
        <div class="students-num">
          <span>{{item.students_num}}</span>
          <span>人学过</span>
        </div>
      </div>
      <router-link class="mask" :to="`/course-details/content?id=${item.id}`"></router-link>
    </li>
  </ul>
</template>

<script>
  import "@/assets/style/home-page/courses-list.scss";
  export default{
    name: "CoursesList",
    props: ["msg"],
    data(){
      return {}
    }
  }
</script>
