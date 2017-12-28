<template>
  <div class="download-management" :class="{'active':operation_status}">
    <header>
      <div class="return"></div>
      <div class="operate" @click="setOperationStatus()">
        <p class="false" v-show="!operation_status">编辑</p>
        <p class="true" v-show="operation_status">完成</p>
      </div>
      <p class="header-text">下载课程</p>
    </header>
    <div class="content-box">
      <nav>
        <div class="item" :class="{'active':active==1}" @click="setNav(1)">正在下载</div>
        <div class="item" :class="{'active':active==2}" @click="setNav(2)">已经下载</div>
      </nav>
      <ul class="downloading" v-if="active==1">
        <li class="item clearfix" v-for="item in downloading">
          <div class="select" @click="select(active,item.id)" :class="{'active':item.select_status}"></div>
          <div class="pic" @click="setDownloadingStatus(item.id)">
            <img :src="item.pic" alt="">
            <div class="shadow"></div>
            <div class="downloading-status downloading-true" v-show="item.downloading_status">
              <div class="icon"></div>
              <p>下载中</p>
            </div>
            <div class="downloading-status downloading-false" v-show="!item.downloading_status">
              <div class="icon"></div>
              <p>已暂停</p>
            </div>
          </div>
          <div class="pic-right">
            <p class="name">{{item.name}}</p>
            <div class="item-details clearfix">
              <div class="span-box-left">
                <span>已下载</span>
                <span>{{item.completed_percent}}</span>
              </div>
              <div class="span-box-right">
                <span>{{item.completed_amount}}/</span>
                <span>{{item.size}}</span>
              </div>
            </div>
            <div class="progress-bar">
              <div class="bar-completed"></div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="downloaded" v-if="active==2">
        <li class="item clearfix" v-for="item in downloaded">
          <div class="select" @click="select(active,item.id)" :class="{'active':item.select_status}"></div>
          <img :src="item.pic" alt="" class="pic">
          <div class="pic-right">
            <p class="name">{{item.name}}</p>
            <div class="item-details clearfix">
              <div class="watched">
                <span>已观看</span>
                <span>60%</span>
              </div>
              <div class="segment"></div>
              <span class="duration">{{item.duration}}</span>
              <div class="segment"></div>
              <span class="size">{{item.size}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <div class="storage-space" v-show="!operation_status">
        <div class="used-space"></div>
        <div class="span-box">
          <span>总空间</span>
          <span>16.88G</span>
          <span>/剩余</span>
          <span>1.22G</span>
        </div>
      </div>
      <div class="operate" v-show="operation_status">
        <div class="all-pick">
          <div class="select" @click="allPick(active)" :class="{'active':active_allPick}"></div>
          <span>全选</span>
        </div>
        <div class="submit">删除</div>
        <div class="selected-num">
          <span>已选</span>
          <span>{{selected_num}}</span>
          <span>个课程</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import "@/assets/style/home-page/download-management.scss";
  export default{
    name: 'DownLoadManagement',
    data(){
      return {
        operation_status: false,
        active: 1,
        downloading: [
          {
            id: 1,
            name: "新手该用什么素描工具",
            pic: "/static/images/home-page/institution.jpg",
            completed_percent: "60%",
            completed_amount: "54M",
            size: "90M",
            select_status: false,
            downloading_status: false,
          },
          {
            id: 2,
            name: "新手该用什么素描工具",
            pic: "/static/images/home-page/institution.jpg",
            completed_percent: "60%",
            completed_amount: "54M",
            size: "90M",
            select_status: false,
            downloading_status: false,
          },
          {
            id: 3,
            name: "新手该用什么素描工具",
            pic: "/static/images/home-page/institution.jpg",
            completed_percent: "60%",
            completed_amount: "54M",
            size: "90M",
            select_status: false,
            downloading_status: false,
          },
        ],
        downloading_selected: [],
        downloaded: [
          {
            id: 1,
            name: "新手该用什么素描工具？",
            pic: "/static/images/home-page/institution.jpg",
            watched: "60%",
            duration: "25分钟",
            size: "90M",
            select_status: false
          },
          {
            id: 2,
            name: "详情",
            pic: "/static/images/home-page/institution.jpg",
            watched: "60%",
            duration: "25分钟",
            size: "90M",
            select_status: false
          },
          {
            id: 3,
            name: "详情",
            pic: "/static/images/home-page/institution.jpg",
            watched: "60%",
            duration: "25分钟",
            size: "90M",
            select_status: false
          },
        ],
        downloaded_selected: [],
        active_allPick: false,
        selected_num: 0
      }
    },
    methods: {
      setOperationStatus: function () {
        this.operation_status = !this.operation_status;
      },
      setNav: function (id) {
        this.active = id;
      },
      select: function (active, id) {
        if (active == 2) {
          var fn_index = false;
          this.downloaded[id - 1].select_status = !this.downloaded[id - 1].select_status;
          this.downloaded_selected.forEach(function (item, index) {
            if (item == id) {
              fn_index = index;
            }
          });
          if (fn_index || fn_index === 0) {
            this.downloaded_selected.splice(fn_index, 1);
          } else {
            this.downloaded_selected.push(id);
          }
        } else if (active == 1) {
          var fn_index = false;
          this.downloading[id - 1].select_status = !this.downloading[id - 1].select_status;
          this.downloading_selected.forEach(function (item, index) {
            if (item == id) {
              fn_index = index;
            }
          });
          if (fn_index || fn_index === 0) {
            this.downloading_selected.splice(fn_index, 1);
          } else {
            this.downloading_selected.push(id);
          }
        }
      },
      setDownloadingStatus: function (id) {
        this.downloading[id - 1].downloading_status = !this.downloading[id - 1].downloading_status;
      },
      allPick: function (active) {
        this.active_allPick = !this.active_allPick;
        if (active == 1) {
          if (this.active_allPick) {
            this.downloading_selected = [];
            this.downloading.forEach(function (item) {
              item.select_status = true;
              this.downloading_selected.push(item.id);
            }.bind(this));
          } else {
            this.downloading_selected = [];
            this.downloading.forEach(function (item) {
              item.select_status = false;
            });
          }
        }
        if (active == 2) {
          if (this.active_allPick) {
            this.downloaded_selected = [];
            this.downloaded.forEach(function (item) {
              item.select_status = true;
              this.downloaded_selected.push(item.id);
            }.bind(this));
          } else {
            this.downloaded_selected = [];
            this.downloaded.forEach(function (item) {
              item.select_status = false;
            });
          }
        }
      }
    },
    watch: {
      active: function () {
        if (this.active == 1) {
          this.selected_num = this.downloading_selected.length;
        } else if (this.active == 2) {
          this.selected_num = this.downloaded_selected.length;
        }
      },
      downloading_selected: function (arr) {
        if (arr.length == this.downloading.length) {
          this.active_allPick = true;
        } else {
          this.active_allPick = false;
        }
        this.selected_num = arr.length;
      },
      downloaded_selected: function (arr) {
        if (arr.length == this.downloaded.length) {
          this.active_allPick = true;
        } else {
          this.active_allPick = false;
        }
        this.selected_num = arr.length;
      }
    }
  }
</script>
