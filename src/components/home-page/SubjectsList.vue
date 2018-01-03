<template>
  <ul class="subjects-list">
    <li class="item" v-for="item in msg">
      <div class="content">
        <img class="pic" v-lazy="item.photo">
        <div class="details">
          <p class="name">{{item.name}}</p>
          <div class="others">
            <div class="subject-name">{{item.parentTypeName}}</div>
            <div class="seniority">
              <span>{{item.experienceAge}}</span>
              <span>年教龄</span>
            </div>
            <div class="address-box" v-if="!(parentComponent==='institutionDetails')">
              <div class="icon"></div>
              <span class="address">{{item.address}}</span>
              <span>{{item.distance}}</span>
              <span>km</span>
            </div>
          </div>
        </div>
      </div>
      <p class="describe">{{item.description}}</p>
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
    props: ["msg","parentComponent"],
    data(){
      return {}
    }
  }
</script>
