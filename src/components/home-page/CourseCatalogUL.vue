<template>
  <div class="course-catalog-UL">
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
            <span class="date">{{item.date}}</span>
            <span>{{item.date_}}</span>
            <span class="time">{{item.time}}</span>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  import "@/assets/style/home-page/course-catalog-UL.scss";
  export default{
    name: "CourseCatalogUL",
    props: ["msg"],
    data(){
      return {}
    }
  }
</script>
