<template>
  <div class="information-details" :class="{'active':status_share}">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="share" @click="setShare()"></div>
      <div class="collect" :class="{'active':msg.status_collect}" @click="collect()"></div>
      <p>资讯详情</p>
    </header>
    <div class="content">
      <p class="title">{{msg.title}}</p>
      <div class="source-date clearfix">
        <div class="source">
          <span>转自：</span>
          <span>{{msg.author}}</span>
        </div>
        <span class="date">{{msg.date}}</span>
      </div>
      <div class="html-box" v-html="msg.riches"></div>
      <div class="content-bottom">
        <div class="read-info clearfix">
          <span>阅读</span>
          <span>{{msg.views}}</span>
        </div>
      </div>
    </div>
    <div class="relevant">
      <div class="relevant-head">
        <p class="section-title">相关阅读</p>
        <ul class="keyword">
          <li class="item" v-for="item in msg.keyWord">
            <router-link :to="'/information-list?keyword='+item" class="mask"></router-link>
            {{item}}
          </li>
        </ul>
      </div>
      <ul class="relevant-content">
        <li class="item" v-for="item in msg.recommendList">
          <router-link :to="`/information-details?id=${item.id}`">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="comments-box">
      <div class="comment-buttons clearfix">
        <router-link to="/commenting" class="comment-now">
          <div class="icon"></div>
          <span>写评论</span>
        </router-link>
        <router-link to="/comments-list" class="comment-exist">
          <div>{{msg.commentsNum}}</div>
        </router-link>
      </div>
      <ul class="comments-content">
        <li class="item clearfix" v-for="item in msg.comments">
          <router-link class="pic" to="">
            <img :src="item.user_pic" alt="">
          </router-link>
          <div class="pic-right">
            <div class="name-time clearfix">
              <span class="user-name">{{item.user_name}}</span>
              <span class="time">5天前</span>
            </div>
            <p class="text-content">{{item.text_content}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="shadow" v-show="status_share">
      <div class="occupy" @click="setShare()"></div>
      <div class="section-share">
        <p class="title-word">分享至：</p>
        <ul class="share-list">
          <li class="item">
            <div class="icon"></div>
            <p>微博</p>
          </li>
          <li class="item">
            <div class="icon"></div>
            <p>朋友圈</p>
          </li>
          <li class="item">
            <div class="icon"></div>
            <p>微信</p>
          </li>
          <li class="item">
            <div class="icon"></div>
            <p>复制链接</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "@/router/index"
  import "../../assets/style/information/information-details.scss";
  export default{
    name: "InformationDetails",
    data(){
      return {
        msg: {},
        status_share: false
      }
    },
    methods: {
      goBack: function () {
        router.go(-1);
      },
      setAlreadyRead: function (para) {
        if (sessionStorage.alreadyRead) {
          if (sessionStorage.alreadyRead.indexOf(para) === -1) {
            sessionStorage.alreadyRead += "," + para;
          }
        } else {
          sessionStorage.alreadyRead += para;
        }
      },
      getData: function () {
        $.ajax({
          type: "post",
          url: "/news/detail",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            id: this.$route.query.id
          },
          dataType: "json",
          success: (data) => {

          },
          error: () => {
            var data = {
              code: 0,
              data: {
                id: 22,
                title: "山东习近平一月：10月关键词——十九大",
                author: "天天教育",
                date: "2017-11-15",
//                riches: '<html>↵<head>↵	<title></title>↵</head>↵<body>↵<p>大家对于这一大家人应该再熟悉不过了，小猪佩奇的形象早已经深入孩子们的心里。现在，她又火了。这次是因为一位宝妈的吐槽&hellip;&hellip;</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/5c11ed997f5b453dbc91dd3fc12776a0.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>因为看完这只粉红色的小猪，她家宝宝沉迷于模仿小猪佩奇无法自拔。和乔治跳床、跳沙发、跳水坑、哪都跳，还天天学猪叫，hong hong hong 叫了一年多，也是学得很到位了！</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/308ab38363c846b5a6d0f0cc63b60a76.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>吐槽一出，立马引发广大家长的共鸣：原来不是我自己<br /><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/e2ad898dc6154072be27ac3dbc3cc434.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/9aaf2856c5f64ab3874649a5dd883bbe.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/f25ad5b9d0ac4507bb696e493f099488.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>甚至还有家长不太理解&quot;干嘛整天要看这几个吹风机&quot;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/a6592b9f362547269257eba82f529cce.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>不信邪的小Q专门找来自己看了，结果，刚看了一集就中毒了。每句话自动＋猪叫，也是相当有魔性了</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/6dfe38766c9348d4a7839bd5bd37dfba.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>可是，为什么小猪佩奇在孩子们心里有这么高的地位呢？ </strong></p>↵↵<p><br />&nbsp;</p>↵↵<p><strong>有一个幸福的家</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>看了小猪佩奇都知道，佩奇的爸爸妈妈非常相爱，从来不会吵架。猪妈妈耐心且有智慧，猪爸爸慈祥老实，是孩子们崇拜的对象。除了爸爸妈妈，弟弟乔治和佩奇的感情也非常好，一家人像朋友一样相处着。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/9712f326ff7445029b92d26295932aff.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>有许多优秀的朋友</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>佩奇在幼儿园有一群优秀的好朋友，小狗丹尼、小羊苏西、小兔瑞贝卡还有他的弟弟乔治....他们一起玩耍，一起冒险，有朋友的陪伴，让佩奇的童年不孤单。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/cbee349529a74d5aa5a4bc25382e5f7f.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>有足够的关注和鼓励</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>猪爸爸和猪妈妈都非常关注佩奇的心理变化，他们总是认真倾听佩奇的心声，然后用巧妙的方法帮她化解，并鼓励她继续前进。关注和鼓励，给佩奇的童年生活大大加分。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/d6f98b2b6c784049a275854799f51acc.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>其实，动画片是一本没有写成文字的教科书。如果你还在把动画片当做是哄孩子的一种工具，那一定是你在找借口偷懒了。家长不能让孩子一个人看而撒手不管，而应该陪伴孩子一起看，在观看的同时去教育和引导，帮助孩子理解动画片中的情节，避免孩子模仿不合适的内容。</p>↵</body>↵</html>',
                riches: '<html>↵<head>↵	<title></title>↵</head>↵<body>↵<p>熊孩子们&ldquo;无所畏惧&rdquo;，能下定决心连划29辆车，也敢在11楼窗台上飞檐走壁&hellip;大部分孩子没有这么&ldquo;熊&rdquo;，但也难免犯错，家长该怎样教育惩罚呢？惩罚要讲求方式，一旦处理不当，不但起不到规范作用，还可能使宝宝变得叛逆。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/24062c38e0534d9d9aab573576a9ae27.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/a7cba71fb3434950800edbab06e195dc.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/9b0bef6b02714b49985c24068f687503.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/667d4554a29644ae9ae7006953daee58.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/2140439a547546c1bd06980720b26578.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/37a12b2d324c46158e4b23ec97c0b749.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/3134b70974334380a53609c21456f7e0.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/924c4675be15497d854b5c82f27bb79e.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/dd660e921979492b87696101283b39a8.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>这些方法对于熊孩子来说是再好不过了，妈妈们get到了吗？</p>↵</body>↵</html>',
//                riches: '<html>↵<head>↵	<title></title>↵</head>↵<body>↵<p>&ldquo;这孩子挺好的，懂事听话。&rdquo;很多爸妈最爱听到这句话，但是，孩子懂事真是一件好事吗？</p>↵↵<p><br />&nbsp;</p>↵↵<p>最近，一位妈妈在网上讲述了自己的经历：儿子在儿童医院住院，护工、护士都夸他懂事，妈妈听着却有些心酸&mdash;&mdash;被要求吃药、打针、坐在床上不要动，都乖乖地一件件照做，没有一点哭闹和迟疑。那些本该有的害怕、痛苦、恐惧去哪儿了？当然没有消失，只是被小小年纪的他封存在了心里，一个人默默承受。</p>↵↵<p><br />&nbsp;</p>↵↵<p>作家张悦然在《樱桃之远》中这样写道：&ldquo;孩子是最坚忍的人群，他们还不懂得用逃脱抵制痛苦，也不懂得用宣泄反抗折磨。他们只能伸着冰冷的小手小脚，甚至根本不会有人察觉到他们久久不能平息的心悸。&rdquo;</p>↵↵<p><br />&nbsp;</p>↵↵<p><strong>而孩子的沉默，隐忍，恐惧，以及讨好，在麻木的大人眼中，便是：懂事。</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>可怕的是，懂事像基因一样，一旦被大人植入到孩子的观念里，一辈子可能都会习惯性地懂事。就像，下面这组漫画里所描绘的那个女子，一辈子懂父母、懂丈夫、懂孩子，唯独忘记了自己。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/e7679bd8c8114fa8afee5699f3a891bb.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/d5d7aa99794c40028654935267440665.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/480eeeeaea3741b9a4ddbb91592f6ae1.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/0e9bc7787f4a424c94132fd731454f50.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/0f935a5691534382a4c518b1d961fbdb.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/a38c4e7f8717424aa1345f3dcb09877a.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/c56a91b95e904b59bae91976ecbfc7ae.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/5b5fedd9a6eb44a58b10105aef7b1355.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/eec540ac64e744218ca455b028a52333.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/821939d8a0f14dee859b14ec2d9d185c.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/5d6681293bc7491caa6f2dba55b8d0b2.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/0f18e5ceac034c1c87ab90d78dc84cbd.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/89987a4b9d5d4bd69bb94f43bed59851.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/f38076400fcb471f95af37e6e6c8b077.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/75e85e6b5fa842258d1ca0e88096ad5b.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/ee959d4c695e452ba616dd2e64500522.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/353ce394e2e94dd5a3cc9c8713885269.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/861a238fcfad46418b87caeca75b58e8.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/fcebd6d1951943e4aeb62ad53a1b4e36.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/71d69459993c407b8cc73833211108bb.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/84986a0fc2764e63a20235eeb32577c5.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/5126d24daf8e41ba8a3fcc2adacfd064.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/841a81ea1db0497dae5154545eb273b1.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>从这个女子身上，不少人看到了自己的影子。</p>↵↵<p><br />&nbsp;</p>↵↵<p>也许小时候，父母第1次、第2次要求我们懂事的时候，我们的内心有反抗。但100、1000次之后，我们就习惯了懂事，习惯了牺牲自我、满足别人的要求。不平、委屈、痛苦都隐忍在心里，慢慢地将自己变成了一个没有自我、舍己为人的人。</p>↵↵<p><br />&nbsp;</p>↵↵<p>伟大吗？那是对别人而言，对自己，只有可怜。</p>↵↵<p><br />&nbsp;</p>↵↵<p>诚然，生活需要相互理解、善解人意，不可能没有委屈和痛苦，但还是要告诉孩子&mdash;&mdash;<strong>记得爱自己、倾听自己的声音、勇于表达自己，永远不要让自己对自己失望、不要委屈自己。</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>人生只有一次，这一次是我们自己的，也是孩子自己的。</p>↵</body>↵</html>',
                views: 121,
                commentsNum: 99,
                keyWord: ["大大", "关键", "小康", "会议"],
                recommendList: [
                  {id: 11, title: "孩子不吃饭怎么办？灌药"},
                  {id: 21, title: "孩子不吃饭怎么办？灌药"},
                  {id: 31, title: "孩子不吃饭怎么办？灌药"}
                ],
                comments: [
                  {
                    id: 1,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: false
                  },
                  {
                    id: 2,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: true
                  },
                  {
                    id: 2,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: true
                  },
                  {
                    id: 2,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: true
                  },
                  {
                    id: 2,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: true
                  }
                ],
                status_collect: false
              }
            };
            if (data.code === 0) {
              this.setAlreadyRead(data.data.id);
              console.log(sessionStorage.alreadyRead);
              data.data.riches = this.richesHandle(data.data.riches);
              this.msg = data.data;
            }
          }
        })
      },
      collect: function () {
        $.ajax({
          type: "post",
          url: "/news/collectionNews",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            newId: this.$route.query.id
          },
          dataType: "json",
          success: (data) => {

          },
          error: () => {
            var data = {
              code: 0,
              data: {}
            };
            if (data.code === 0) {
              this.msg.status_collect = !this.msg.status_collect;
            }
          }
        });
      },
      setShare: function () {
        this.status_share = !this.status_share;
      },
      richesHandle: function (data) {
        var fn_result = data;
        fn_result = fn_result.replace(/(↵)/g, "");
        fn_result = fn_result.replace(/(&nbsp;)/g, "");
        fn_result = fn_result.replace("<html><head>	<title></title></head><body>", "");
        fn_result = fn_result.replace("</body></html>", "");
        return fn_result;
      }
    },
    watch: {
      $route: function () {
        $.ajax({
          type: "post",
          url: "/news/detail",
          headers: {
            Authorization: sessionStorage.token || ""
          },
          data: {
            id: this.$route.query.id
          },
          dataType: "json",
          success: (data) => {

          },
          error: () => {
            var data = {
              code: 0,
              data: {
                id: 26,
                title: "山东习近平一月：10月",
                author: "天天教育",
                date: "2017-11-15",
                riches: '<html>↵<head>↵	<title></title>↵</head>↵<body>↵<p>大家对于这一大家人应该再熟悉不过了，小猪佩奇的形象早已经深入孩子们的心里。现在，她又火了。这次是因为一位宝妈的吐槽&hellip;&hellip;</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/5c11ed997f5b453dbc91dd3fc12776a0.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>因为看完这只粉红色的小猪，她家宝宝沉迷于模仿小猪佩奇无法自拔。和乔治跳床、跳沙发、跳水坑、哪都跳，还天天学猪叫，hong hong hong 叫了一年多，也是学得很到位了！</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/308ab38363c846b5a6d0f0cc63b60a76.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>吐槽一出，立马引发广大家长的共鸣：原来不是我自己<br /><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/e2ad898dc6154072be27ac3dbc3cc434.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/9aaf2856c5f64ab3874649a5dd883bbe.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/f25ad5b9d0ac4507bb696e493f099488.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>甚至还有家长不太理解&quot;干嘛整天要看这几个吹风机&quot;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/a6592b9f362547269257eba82f529cce.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>不信邪的小Q专门找来自己看了，结果，刚看了一集就中毒了。每句话自动＋猪叫，也是相当有魔性了</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/6dfe38766c9348d4a7839bd5bd37dfba.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>可是，为什么小猪佩奇在孩子们心里有这么高的地位呢？ </strong></p>↵↵<p><br />&nbsp;</p>↵↵<p><strong>有一个幸福的家</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>看了小猪佩奇都知道，佩奇的爸爸妈妈非常相爱，从来不会吵架。猪妈妈耐心且有智慧，猪爸爸慈祥老实，是孩子们崇拜的对象。除了爸爸妈妈，弟弟乔治和佩奇的感情也非常好，一家人像朋友一样相处着。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/9712f326ff7445029b92d26295932aff.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>有许多优秀的朋友</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>佩奇在幼儿园有一群优秀的好朋友，小狗丹尼、小羊苏西、小兔瑞贝卡还有他的弟弟乔治....他们一起玩耍，一起冒险，有朋友的陪伴，让佩奇的童年不孤单。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/cbee349529a74d5aa5a4bc25382e5f7f.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>有足够的关注和鼓励</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>猪爸爸和猪妈妈都非常关注佩奇的心理变化，他们总是认真倾听佩奇的心声，然后用巧妙的方法帮她化解，并鼓励她继续前进。关注和鼓励，给佩奇的童年生活大大加分。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/d6f98b2b6c784049a275854799f51acc.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>其实，动画片是一本没有写成文字的教科书。如果你还在把动画片当做是哄孩子的一种工具，那一定是你在找借口偷懒了。家长不能让孩子一个人看而撒手不管，而应该陪伴孩子一起看，在观看的同时去教育和引导，帮助孩子理解动画片中的情节，避免孩子模仿不合适的内容。</p>↵</body>↵</html>',
//                riches: '<html>↵<head>↵	<title></title>↵</head>↵<body>↵<p>熊孩子们&ldquo;无所畏惧&rdquo;，能下定决心连划29辆车，也敢在11楼窗台上飞檐走壁&hellip;大部分孩子没有这么&ldquo;熊&rdquo;，但也难免犯错，家长该怎样教育惩罚呢？惩罚要讲求方式，一旦处理不当，不但起不到规范作用，还可能使宝宝变得叛逆。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/24062c38e0534d9d9aab573576a9ae27.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/a7cba71fb3434950800edbab06e195dc.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/9b0bef6b02714b49985c24068f687503.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/667d4554a29644ae9ae7006953daee58.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/2140439a547546c1bd06980720b26578.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/37a12b2d324c46158e4b23ec97c0b749.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/3134b70974334380a53609c21456f7e0.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/924c4675be15497d854b5c82f27bb79e.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/dd660e921979492b87696101283b39a8.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>这些方法对于熊孩子来说是再好不过了，妈妈们get到了吗？</p>↵</body>↵</html>',
//                riches: '<html>↵<head>↵	<title></title>↵</head>↵<body>↵<p>&ldquo;这孩子挺好的，懂事听话。&rdquo;很多爸妈最爱听到这句话，但是，孩子懂事真是一件好事吗？</p>↵↵<p><br />&nbsp;</p>↵↵<p>最近，一位妈妈在网上讲述了自己的经历：儿子在儿童医院住院，护工、护士都夸他懂事，妈妈听着却有些心酸&mdash;&mdash;被要求吃药、打针、坐在床上不要动，都乖乖地一件件照做，没有一点哭闹和迟疑。那些本该有的害怕、痛苦、恐惧去哪儿了？当然没有消失，只是被小小年纪的他封存在了心里，一个人默默承受。</p>↵↵<p><br />&nbsp;</p>↵↵<p>作家张悦然在《樱桃之远》中这样写道：&ldquo;孩子是最坚忍的人群，他们还不懂得用逃脱抵制痛苦，也不懂得用宣泄反抗折磨。他们只能伸着冰冷的小手小脚，甚至根本不会有人察觉到他们久久不能平息的心悸。&rdquo;</p>↵↵<p><br />&nbsp;</p>↵↵<p><strong>而孩子的沉默，隐忍，恐惧，以及讨好，在麻木的大人眼中，便是：懂事。</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>可怕的是，懂事像基因一样，一旦被大人植入到孩子的观念里，一辈子可能都会习惯性地懂事。就像，下面这组漫画里所描绘的那个女子，一辈子懂父母、懂丈夫、懂孩子，唯独忘记了自己。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/e7679bd8c8114fa8afee5699f3a891bb.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/d5d7aa99794c40028654935267440665.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/480eeeeaea3741b9a4ddbb91592f6ae1.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/0e9bc7787f4a424c94132fd731454f50.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/0f935a5691534382a4c518b1d961fbdb.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/a38c4e7f8717424aa1345f3dcb09877a.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/c56a91b95e904b59bae91976ecbfc7ae.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/5b5fedd9a6eb44a58b10105aef7b1355.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/eec540ac64e744218ca455b028a52333.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/821939d8a0f14dee859b14ec2d9d185c.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/5d6681293bc7491caa6f2dba55b8d0b2.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/0f18e5ceac034c1c87ab90d78dc84cbd.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/89987a4b9d5d4bd69bb94f43bed59851.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/f38076400fcb471f95af37e6e6c8b077.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/75e85e6b5fa842258d1ca0e88096ad5b.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/ee959d4c695e452ba616dd2e64500522.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/353ce394e2e94dd5a3cc9c8713885269.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/861a238fcfad46418b87caeca75b58e8.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/fcebd6d1951943e4aeb62ad53a1b4e36.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/71d69459993c407b8cc73833211108bb.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/84986a0fc2764e63a20235eeb32577c5.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/5126d24daf8e41ba8a3fcc2adacfd064.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171227/841a81ea1db0497dae5154545eb273b1.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>从这个女子身上，不少人看到了自己的影子。</p>↵↵<p><br />&nbsp;</p>↵↵<p>也许小时候，父母第1次、第2次要求我们懂事的时候，我们的内心有反抗。但100、1000次之后，我们就习惯了懂事，习惯了牺牲自我、满足别人的要求。不平、委屈、痛苦都隐忍在心里，慢慢地将自己变成了一个没有自我、舍己为人的人。</p>↵↵<p><br />&nbsp;</p>↵↵<p>伟大吗？那是对别人而言，对自己，只有可怜。</p>↵↵<p><br />&nbsp;</p>↵↵<p>诚然，生活需要相互理解、善解人意，不可能没有委屈和痛苦，但还是要告诉孩子&mdash;&mdash;<strong>记得爱自己、倾听自己的声音、勇于表达自己，永远不要让自己对自己失望、不要委屈自己。</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>人生只有一次，这一次是我们自己的，也是孩子自己的。</p>↵</body>↵</html>',
                views: 121,
                commentsNum: 99,
                keyWord: ["大大", "关键", "小康", "会议"],
                recommendList: [
                  {id: 11, title: "孩子不吃饭怎么办？灌药"},
                  {id: 21, title: "孩子不吃饭怎么办？灌药"},
                  {id: 31, title: "孩子不吃饭怎么办？灌药"}
                ],
                comments: [
                  {
                    id: 1,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: false
                  },
                  {
                    id: 2,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: true
                  },
                  {
                    id: 2,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: true
                  },
                  {
                    id: 2,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: true
                  },
                  {
                    id: 2,
                    user_name: "狮子头",
                    user_pic: "/static/images/information/user_pic.jpg",
                    text_content: "很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒很棒的文章",
                    thumb: 111,
                    thumb_status: true
                  }
                ],
                status_collect: false
              }
            };
            if (data.code === 0) {
              this.setAlreadyRead(data.data.id);
              this.returnTop();
              data.data.riches = this.richesHandle(data.data.riches);
              this.msg = data.data;
              console.log(sessionStorage.alreadyRead);
            }
          }
        })
      }
    },
    created: function () {
      this.returnTop();
      this.getData();
    }
  }
</script>
