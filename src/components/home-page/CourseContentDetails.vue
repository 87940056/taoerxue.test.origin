<template>
  <div class="course-content-details">
    <div class="base-info">
      <p class="name">{{msg.name}}</p>
      <ul class="li-box">
        <li class="item">
          <div class="icon"></div>
          <span style="margin-left: 0.22rem">{{msg.teacher_resume}}</span>
        </li>
        <li class="item">
          <div class="icon"></div>
          <span style="margin-left: 0.22rem">{{msg.class_hour}}</span>
          <span>课时</span>
        </li>
        <li class="item">
          <div class="icon"></div>
          <span style="margin-left: 0.22rem">{{msg.play_count}}</span>
          <span>人已学习</span>
        </li>
      </ul>
      <div class="price clearfix pingfang-B">
        <span>￥</span>
        <span>{{msg.price}}</span>
      </div>
    </div>
    <ul class="course-label">
      <li class="item">
        <div class="icon"></div>
        <span>24小时内讲师答辩</span>
      </li>
      <li class="item">
        <div class="icon"></div>
        <span>永久观看</span>
      </li>
      <li class="item">
        <div class="icon"></div>
        <span>免费资料下载</span>
      </li>
    </ul>
    <div class="teacher-info">
      <div class="info-title">讲师</div>
      <div class="info-content">
        <div class="teacher-personal clearfix">
          <img :src="msg.teacher.pic" alt="" class="pic">
          <div class="pic-right">
            <div class="name clearfix">
              <span>{{msg.teacher.name}}</span>
              <div class="gold-medal"></div>
            </div>
            <p class="teacher-describe">{{msg.teacher.describe}}</p>
          </div>
        </div>
        <ul class="teacher-achievement">
          <li class="item">
            <span>学生：</span>
            <span>{{msg.teacher.students}}</span>
            <span>人</span>
          </li>
          <li class="item">
            <span>课程：</span>
            <span>{{msg.teacher.courseNum}}</span>
            <span>节</span>
          </li>
          <li class="item">
            <!--<span>好评：</span>-->
            <!--<span>{{msg.teacher.praiseRate}}</span>-->
          </li>
        </ul>
        <router-link class="mask" :to="`/teacher-details/courses?id=${msg.teacher.id}`"></router-link>
      </div>
    </div>
    <div class="institution-info">
      <div class="info-title">所属机构</div>
      <div class="info-content clearfix">
        <img :src="msg.institution_pic" alt="" class="pic">
        <div class="pic-right">
          <p class="name">{{msg.institution_name}}</p>
          <p class="describe">{{msg.institution_describe}}</p>
        </div>
        <div class="go-details"></div>
        <router-link class="mask" to="/institution-details/courses-list?id=122"></router-link>
      </div>
    </div>
    <div class="course-introduce">
      <div class="info-title">课程介绍</div>
    </div>
    <div class="course-evaluate">
      <div class="info-title">课程评价</div>
      <Evaluate :msg="msg.evaluate"></Evaluate>
    </div>
  </div>
</template>

<script>
  import Evaluate from "@/components/home-page/Evaluate";
  import "@/assets/style/home-page/course-content-details.scss";
  export default{
    name: "CourseContentDetails",
    components: {Evaluate},
    props: ["msg"],
    data(){
      return {
        a: []
      }
    }
  }
</script>
