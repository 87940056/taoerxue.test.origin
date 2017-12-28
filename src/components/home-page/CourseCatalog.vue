<template>
  <div class="course-catalog">
    <div class="title">
      <span>共</span>
      <span>{{msg.section_num}}</span>
      <span>节课</span>
    </div>
    <ul class="contents">
      <li class="item clearfix" v-for="item in msg.details">
        <div class="index">{{item.id}}</div>
        <div class="details">
          <p class="section-title">{{item.title}}</p>
          <div class="span-box">
            <span class="duration">{{item.duration}}</span>
            <span>已观看</span>
            <span class="watched">{{item.watched}}</span>
          </div>
        </div>
        <div class="play-button"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import "@/assets/style/home-page/course-catalog.scss";
  export default{
    name: "CourseCatalog",
    props: ['msg'],
    data(){
      return {}
    }
  }
</script>
