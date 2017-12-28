// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "@/assets/jquery.min.js"
import "./assets/base.css";
import lazyload from "vue-lazyload";
import '@/assets/swiper-3.4.2.min.css';

Vue.config.productionTip = false;

//懒加载
Vue.use(lazyload, {
  preload: 1.5,
  loading: "/static/images/lazy_state.jpg",
});

//功能函数

Vue.prototype.isWeChat = function () {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
};

Vue.prototype.setToken = function (token) {
  sessionStorage.setItem("token", token);
};

Vue.prototype.getTime = function (str) {
  var oDate = new Date(str),
    oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate(),
    oYear = oDate.getFullYear(),
    oTime = oYear + '-' + oMonth + '-' + oDay; //最后拼接时间
  return oTime;
};

Vue.prototype.returnTop = function () {
  $("body").scrollTop(0);
};

Vue.prototype.inputMonitor = function (ev) {
  if (ev.keyCode === 13) {
    this.search();
  }
};

//设置rem
function refreshRem() {
  var docEl = window.document.documentElement;
  var width = docEl.getBoundingClientRect().width;

  var rootSize = width / 7.5;
  docEl.style.fontSize = rootSize + 'px';
}
refreshRem();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});



