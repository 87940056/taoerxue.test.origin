<template>
  <ul class="subjects-list">
    <li class="item" v-for="item in msg">
      <div class="content">
        <img class="pic" v-lazy="item.pic">
        <div class="details">
          <p class="name">{{item.name}}</p>
          <div class="others">
            <div class="subject-name">{{item.subject}}</div>
            <div class="seniority">
              <span>{{item.seniority}}</span>
              <span>年教龄</span>
            </div>
            <div class="address-box">
              <div class="icon"></div>
              <span class="address">{{item.address}}</span>
              <span>{{item.distance}}</span>
              <span>km</span>
            </div>
          </div>
        </div>
      </div>
      <p class="describe">{{item.describe}}</p>
      <!--<div class="score">-->
        <!--<span>{{item.score}}</span>-->
        <!--<span>分</span>-->
      <!--</div>-->
      <router-link class="mask" :to="`/teacher-details/courses?id=${item.id}`"></router-link>
    </li>
  </ul>
</template>

<script>
  import "../../assets/style/home-page/subjects-list.scss";
  export default{
    name: "SubjectsList",
    props: ["msg"],
    data(){
      return {}
    }
  }
</script>
