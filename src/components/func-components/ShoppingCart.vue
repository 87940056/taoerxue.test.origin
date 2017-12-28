<template>
  <div class="shopping-cart">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="operate" @click="setOperationStatus()" v-show="active==1">
        <p class="false" v-show="!status_operate">编辑</p>
        <p class="true" v-show="status_operate">完成</p>
      </div>
      <p class="title-text">购物车</p>
    </header>
    <div class="content">
      <nav>
        <div class="item" :class="{'active':active==2}" @click="setNav('2')">我的课程</div>
        <div class="item" :class="{'active':active==1}" @click="setNav('1')">我的商品</div>
      </nav>
      <ul class="goods" v-show="active==='1'">
        <li class="item clearfix" v-for="item in goods">
          <div class="select" @click="select(active,item.id)" :class="{'active':item.status_select}"></div>
          <img v-lazy="item.pic" alt="" class="pic">
          <div class="pic-right">
            <p class="name">{{item.name}}</p>
            <div class="false" v-show="!status_operate">
              <div class="price clearfix">
                <span>单价：</span>
                <span>￥{{item.price}}</span>
              </div>
              <div class="num clearfix">
                <span>数量：</span>
                <span>{{item.num}}</span>
              </div>
            </div>
            <div class="true" v-show="status_operate">
              <div class="reduce" @click="setGoodsNum(0,item.id)">-</div>
              <div class="num">
                <input type="text" :placeholder="item.num">
              </div>
              <div class="add" @click="setGoodsNum(1,item.id)">+</div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="courses" v-show="active==='2'">
        <li class="item clearfix" v-for="item in courses">
          <div class="select" @click="select(active,item.id)" :class="{'active':item.status_select}"></div>
          <div class="item-content clearfix">
            <img v-lazy="item.pic" alt="" class="pic">
            <div class="pic-right">
              <p class="name">{{item.name}}</p>
              <p class="describe">{{item.describe}}</p>
              <div class="others clearfix">
                <span class="subject-type">{{item.subject_type}}</span>
                <div class="section-num">
                  <span>共</span>
                  <span>{{item.section_num}}</span>
                  <span>节课</span>
                </div>
                <span class="price">￥{{item.price}}</span>
              </div>
            </div>
            <router-link class="mask" to="/course-details/content"></router-link>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <div class="all-pick">
        <div class="select" @click="allPick(active)" :class="{'active':active_allPick}"></div>
        <span>全选</span>
      </div>
      <router-link to="/course-order/2" class="submit">立即购买</router-link>
      <div class="selected-num">
        <span>合计</span>
        <span>￥{{price_total}}</span>
      </div>
    </footer>
  </div>
</template>

<script>
  import router from "../../router/index"
  import "@/assets/style/func-components/shopping-cart.scss";
  export default{
    name: "ShoppingCart",
    data(){
      return {
        status_operate: false,
        active: "",
        goods: [
          {
            id: 1,
            name: "儿童床男孩全实木床松木上下床高低床双层床子母床CQ3A-C",
            pic: "/static/images/home-page/institution.jpg",
            price: "1.25",
            num: 2,
            status_select: false,
          },
          {
            id: 2,
            name: "新手该用什么素描工具",
            pic: "/static/images/home-page/institution.jpg",
            price: "1.25",
            num: 3,
            status_select: false,
          },
          {
            id: 3,
            name: "新手该用什么素描工具",
            pic: "/static/images/home-page/institution.jpg",
            price: "1.25",
            num: 2,
            status_select: false,
          }
        ],
        price_goods: "0",
        courses: [
          {
            id: 1,
            name: "音乐课",
            pic: "/static/images/home-page/institution.jpg",
            describe: "很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
            subject_type: "音乐",
            section_num: 3,
            price: "360.00",
            status_select: false
          },
          {
            id: 2,
            name: "音乐课",
            pic: "/static/images/home-page/institution.jpg",
            describe: "很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
            subject_type: "音乐",
            section_num: 3,
            price: "360.00",
            status_select: false,
          },
          {
            id: 3,
            name: "音乐课",
            pic: "/static/images/home-page/institution.jpg",
            describe: "很棒很棒很棒很棒很棒很棒很棒很棒的音乐课",
            subject_type: "音乐",
            section_num: 3,
            price: "360.00",
            status_select: false
          }
        ],
        price_courses: "0",
        price_total: "0",
        active_allPick: false,
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setOperationStatus: function () {
        this.status_operate = !this.status_operate;
      },
      setNav: function (id) {
        this.active = id;
      },
      select: function (active, id) {
        var fn_flag = true;
        if (active === "1") {
          this.goods[id - 1].status_select = !this.goods[id - 1].status_select;
          this.goods.forEach(function (item) {
            if (!item.status_select) {
              fn_flag = false;
            }
          });
          this.recount("1", this.goods);
        }
        if (active === "2") {
          this.courses[id - 1].status_select = !this.courses[id - 1].status_select;
          this.courses.forEach(function (item) {
            if (!item.status_select) {
              fn_flag = false;
            }
          });
          this.recount("2", this.courses);
        }
        if (fn_flag) {
          this.active_allPick = true;
        } else {
          this.active_allPick = false;
        }
      },
      setGoodsNum: function (type, id) {
        this.goods[id - 1].num = type ? this.goods[id - 1].num += 1 : this.goods[id - 1].num -= 1;
        this.goods[id - 1].num = this.goods[id - 1].num >= 0 ? this.goods[id - 1].num : 0;
      },
      allPick: function (active) {
        this.active_allPick = !this.active_allPick;
        if (active === "1") {
          if (this.active_allPick) {
            this.goods.forEach(function (item) {
              item.status_select = true;
            });
            this.recount("1", this.goods);
          } else {
            this.goods.forEach(function (item) {
              item.status_select = false;
            });
            this.recount("1", null);
          }
        }
        if (active === "2") {
          if (this.active_allPick) {
            this.courses.forEach(function (item) {
              item.status_select = true;
            });
            this.recount("2", this.courses);
          } else {
            this.courses.forEach(function (item) {
              item.status_select = false;
            });
            this.recount("2", null);
          }
        }
      },
      recount: function (active, data) {
        var fn_num = 0;
        if (active === "1") {
          if (data) {
            data.forEach(function (item) {
              if (item.status_select) {
                fn_num += item.price * item.num;
              }
            }.bind(this));
            this.price_goods = String(fn_num);
          } else {
            this.price_goods = "0";
          }
        }
        if (active === "2") {
          if (data) {
            data.forEach(function (item) {
              if (item.status_select) {
                fn_num += Number(item.price);
              }
            }.bind(this));
            this.price_courses = String(fn_num);
          } else {
            this.price_courses = "0";
          }
        }
      }
    },
    watch: {
      active: function (active) {
        var fn_flag = true;
        if (active === "1") {
          this.goods.forEach(function (item) {
            if (!item.status_select) {
              fn_flag = false;
            }
          })
        }
        if (active === "2") {
          this.courses.forEach(function (item) {
            if (!item.status_select) {
              fn_flag = false;
            }
          })
        }
        if (fn_flag) {
          this.active_allPick = true;
        } else {
          this.active_allPick = false;
        }
      },
      price_goods: function () {
        this.price_total = String(Number(this.price_goods) + Number(this.price_courses));
      },
      price_courses: function () {
        this.price_total = String(Number(this.price_goods) + Number(this.price_courses));
      }
    },
    created: function () {
      this.active = this.$route.params.active;
    }
  }
</script>
