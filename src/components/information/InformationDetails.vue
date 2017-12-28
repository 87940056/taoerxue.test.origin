<template>
  <div class="information-details">
    <header>
      <div class="return" @click="goBack()"></div>
      <div class="share" @click="setShare()"></div>
      <div class="collect" :class="{'active':msg.status_collect}" @click="setCollectStatus()"></div>
      <p>资讯详情</p>
    </header>
    <div class="content">
      <p class="title">{{msg.title}}</p>
      <div class="source-date clearfix">
        <div class="source">
          <span>转自：</span>
          <span>{{msg.source}}</span>
        </div>
        <span class="date">{{msg.date}}</span>
      </div>
      <!--<div class="html-box" v-html="msg.riches"></div>-->
      <div class="content-bottom">
        <div class="read-info clearfix">
          <span>阅读</span>
          <span>{{msg.num_read}}</span>
        </div>
      </div>
    </div>
    <div class="relevant">
      <div class="relevant-head">
        <p class="section-title">相关阅读</p>
        <ul class="keyword">
          <li class="item" v-for="item in msg.keyword">{{item}}</li>
        </ul>
      </div>
      <ul class="relevant-content">
        <li class="item" v-for="item in msg.relevant_articles">
          <router-link :to="`/information-details?id=${item.id}`">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="comment clearfix">
      <router-link to="/information-commenting" class="comment-now">
        <div class="icon"></div>
        <span>写评论</span>
      </router-link>
      <router-link to="/information-comments" class="comment-exist"></router-link>
    </div>
    <div class="shadow" v-show="share">
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
        share: false
      }
    },
    methods: {
      goBack: function () {
        router.push("/information?active="+this.$route.query.active);
      },
      setCollectStatus: function () {
        this.msg.status_collect = !this.msg.status_collect;
      },
      setShare: function () {
        this.share = !this.share;
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
        var data = [
          {
            id: 1,
            title: "山东习近平一月：10月关键词——十九大",
            source: "天天教育",
            date: "2017-11-15",
            riches: "",
            num_read: 121,
            keyword: ["大大", "关键", "小康", "会议"],
            relevant_articles: [
              {id: 1, title: "孩子不吃饭怎么办？灌药"},
              {id: 2, title: "孩子不吃饭怎么办？灌药"},
              {id: 3, title: "孩子不吃饭怎么办？灌药"}
            ],
            status_collect: false
          },
          {
            id: 2,
            title: "看见快接啊圣诞快乐，地煞符",
            source: "天天教育",
            date: "2017-11-15",
            riches: "",
            num_read: 121,
            keyword: ["大大", "关键", "小康", "会议"],
            relevant_articles: [
              {id: 1, title: "孩子不吃饭怎么办？灌药"},
              {id: 2, title: "孩子不吃饭怎么办？灌药"},
              {id: 3, title: "孩子不吃饭怎么办？灌药"}
            ],
            status_collect: false
          },
          {
            id: 1,
            title: "点卡岁的卡萨克拉，副科级的思考",
            source: "天天教育",
            date: "2017-11-15",
            riches: "",
            num_read: 121,
            keyword: ["大大", "关键", "小康", "会议"],
            relevant_articles: [
              {id: 1, title: "孩子不吃饭怎么办？灌药"},
              {id: 2, title: "孩子不吃饭怎么办？灌药"},
              {id: 3, title: "孩子不吃饭怎么办？灌药"}
            ],
            status_collect: false
          }
        ];
        this.msg = data[this.$route.query.id - 1];
      }
    },
    created: function () {
      var data = [
        {
          id: 1,
          title: "山东习近平一月：10月关键词——十九大",
          source: "天天教育",
          date: "2017-11-15",
          riches: '<html>↵<head>↵	<title></title>↵</head>↵<body>↵<p>大家对于这一大家人应该再熟悉不过了，小猪佩奇的形象早已经深入孩子们的心里。现在，她又火了。这次是因为一位宝妈的吐槽&hellip;&hellip;</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/5c11ed997f5b453dbc91dd3fc12776a0.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>因为看完这只粉红色的小猪，她家宝宝沉迷于模仿小猪佩奇无法自拔。和乔治跳床、跳沙发、跳水坑、哪都跳，还天天学猪叫，hong hong hong 叫了一年多，也是学得很到位了！</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/308ab38363c846b5a6d0f0cc63b60a76.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>吐槽一出，立马引发广大家长的共鸣：原来不是我自己<br /><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/e2ad898dc6154072be27ac3dbc3cc434.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/9aaf2856c5f64ab3874649a5dd883bbe.jpeg" /></p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/f25ad5b9d0ac4507bb696e493f099488.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>甚至还有家长不太理解&quot;干嘛整天要看这几个吹风机&quot;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/a6592b9f362547269257eba82f529cce.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>不信邪的小Q专门找来自己看了，结果，刚看了一集就中毒了。每句话自动＋猪叫，也是相当有魔性了</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/6dfe38766c9348d4a7839bd5bd37dfba.jpeg" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>可是，为什么小猪佩奇在孩子们心里有这么高的地位呢？ </strong></p>↵↵<p><br />&nbsp;</p>↵↵<p><strong>有一个幸福的家</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>看了小猪佩奇都知道，佩奇的爸爸妈妈非常相爱，从来不会吵架。猪妈妈耐心且有智慧，猪爸爸慈祥老实，是孩子们崇拜的对象。除了爸爸妈妈，弟弟乔治和佩奇的感情也非常好，一家人像朋友一样相处着。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/9712f326ff7445029b92d26295932aff.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>有许多优秀的朋友</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>佩奇在幼儿园有一群优秀的好朋友，小狗丹尼、小羊苏西、小兔瑞贝卡还有他的弟弟乔治....他们一起玩耍，一起冒险，有朋友的陪伴，让佩奇的童年不孤单。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/cbee349529a74d5aa5a4bc25382e5f7f.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>有足够的关注和鼓励</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>猪爸爸和猪妈妈都非常关注佩奇的心理变化，他们总是认真倾听佩奇的心声，然后用巧妙的方法帮她化解，并鼓励她继续前进。关注和鼓励，给佩奇的童年生活大大加分。</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img max-width="600" src="http://5b0988e595225.cdn.sohucs.com/images/20171108/d6f98b2b6c784049a275854799f51acc.gif" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p>其实，动画片是一本没有写成文字的教科书。如果你还在把动画片当做是哄孩子的一种工具，那一定是你在找借口偷懒了。家长不能让孩子一个人看而撒手不管，而应该陪伴孩子一起看，在观看的同时去教育和引导，帮助孩子理解动画片中的情节，避免孩子模仿不合适的内容。</p>↵</body>↵</html>',
          num_read: 121,
          keyword: ["大大", "关键", "小康", "会议"],
          relevant_articles: [
            {id: 1, title: "孩子不吃饭怎么办？灌药"},
            {id: 2, title: "孩子不吃饭怎么办？灌药"},
            {id: 3, title: "孩子不吃饭怎么办？灌药"}
          ],
          status_collect: false
        },
        {
          id: 2,
          title: "看见快接啊圣诞快乐，地煞符",
          source: "天天教育",
          date: "2017-11-15",
          riches: '<html>↵<head>↵	<title></title>↵</head>↵<body>↵<p>有人说家排是神秘的，通灵的，其实家庭系统排列并不神秘，也并不沉重，相反它是非常轻松、具有创造力的，它是一种疏通关系的有效工具，一门支持生命成长、朝向幸福和谐的学问&hellip;&hellip;</p>↵↵<p><br />&nbsp;</p>↵↵<p><strong>家庭系统排列到底是什么？</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>&ldquo;家庭系统排列&rdquo; 是德国心理治疗大师伯特&middot;海灵格经30年的研究发展起来的一个新的家庭治疗方法。通过现象学探究问题的引发根源，呈现隐藏在现实背后的影响因素。在当今的欧美广泛地应用于康复、教育、商业、组织发展（如企业重组、企业并购、企业文化改变）等方面，在心理治疗方面则多应用于家庭治疗。</p>↵↵<p><br />&nbsp;</p>↵↵<p>家庭系统排列最早是从家庭治疗开始，但是发展到今天已经远远超越了这个领域，已经从人与家庭系统的关系，发展到人与自然、人与宇宙的关系&hellip;&hellip;</p>↵↵<p><br />&nbsp;</p>↵↵<p style="text-align: center;"><img alt="" src="http://image.taoerxue.com/999b7dc51f4c471a8a9fddafbf51a399.jpg" style="width: 490px; height: 326px;" /></p>↵↵<p style="text-align: center;"><br />&nbsp;</p>↵↵<p><strong>家庭系统排列的原理</strong></p>↵↵<p><br />&nbsp;</p>↵↵<p>作为社会性的生命，每个人都隶属于某些系统：他会是一个家庭的成员、某个社区的居民、某个组织的一员&hellip;&hellip;而且他本人就是一个系统，一个身、心各要素构成的系统。这些大大小小的系统相互联系，结构成一个完整的社会系统。社会中的每个人就是在这样一个社会系统中孕育、出生、成长起来的。</p>↵↵<p><br />&nbsp;</p>↵↵<p>从人的发展来说，家庭是基本，且重要的一个系统。海灵格发现在家庭系统中，有一些隐藏的、不易被人们意识觉察到的动力操控着家庭成员之间的关系&mdash;&mdash;爱的序位，并不跟随社会及文化的标准或规则运行，而是在这些标准或规则之上运行。如果我们跟随&ldquo;爱的序位&rdquo;和家人相处，关系就会很好，大家都能够快乐和健康的成长；如果我们忽略了它，家人会受困扰，这些困扰就是&ldquo;牵连&rdquo;。</p>↵↵<p><br />&nbsp;</p>↵↵<p>海灵格发现，很多人的身心问题，其实都是&ldquo;牵连&rdquo;造成的。&ldquo;牵连&rdquo;可以说是&ldquo;重复着一个之前的家族成员的命运&rdquo;。而很多&ldquo;牵连&rdquo;的开始，是儿童早期凭着对父母单纯的&ldquo;爱&rdquo;，企图接过父母的问题引起的。用当今精神分析理念来说，是一个人没有顺利完成与父母的分离造成的。在一个家庭中，这种未完成的分离还可能是家族中一连串的&ldquo;牵连&rdquo;关系。&ldquo;牵连&rdquo;会使一个家庭成员从幼年开始就产生不能理解的思想、情绪、行为以及人际关系欠佳、疾病和心理问题，并延续在其生命中。</p>↵↵<p><br />&nbsp;</p>↵↵<p>这些隐藏的动力影响或控制着我们，而我们又难以觉察到它的存在，但我们可能实实在在地因没有尊重它而感受到伤害。因此，我们可以从这些伤害中知晓它的存在。海灵格的&ldquo;家庭系统排列&rdquo;治疗，就是借由他所发展出来的方法，将&ldquo;牵连&rdquo;的原因显露出来，而且往往能找出化解的可能。</p>↵↵<p><br />&nbsp;</p>↵↵<p>系统排列是新发展出来的应用学问，它隶属于现象学，是通过个案代表的方式呈现出来我们当下的状态，进而能够帮助人去取得系统里隐藏的资料，因而对事情的处理有更清晰的了解。系统排列的技巧，用在企业管理、人事纠纷、未来选择等需要中，称为&ldquo;组织系统排列&rdquo;；用在心理治疗方面，则能够把一些深层的家族 困扰找出和化解，称为&ldquo;家庭系统排列&rdquo;。</p>↵</body>↵</html>',
          num_read: 121,
          keyword: ["大大", "关键", "小康", "会议"],
          relevant_articles: [
            {id: 1, title: "孩子不吃饭怎么办？灌药"},
            {id: 2, title: "孩子不吃饭怎么办？灌药"},
            {id: 3, title: "孩子不吃饭怎么办？灌药"}
          ],
          status_collect: false
        },
        {
          id: 1,
          title: "点卡岁的卡萨克拉，副科级的思考",
          source: "天天教育",
          date: "2017-11-15",
          riches: '小宇是我手上的一个新生，才来一个星期的时间，他高高壮壮，咋一看上去与他初三的身份实在不符，联想到我之前带过的一个学生，他们体型相似，所以我本以为这个小伙子也是很健谈，也是很自信的，但是与他简单交流过后，才发现，这是个害羞的男孩儿，细声细语，也不太敢正视我的眼睛，生怕惊扰了这一片宁静。↵↵&nbsp;↵↵与小宇接触多了之后，他渐渐打开了自己，笑容没那么羞涩了，开始和我聊他最喜欢的汽车，聊他精通的计算机，聊他们班上的同学和老师，也问我很多问题，这个在两个培优老师看来很聪明的学生，逐渐在展示着他的优势。↵↵&nbsp;↵↵↵↵&nbsp;↵↵小宇家住黄陂，就读黄陂实验中学，周末两天的时间都在尖锋，妈妈希望小宇在这里的时间，将学校作业和培优作业全部完成，并再安排其它的内容，用一句话说，就是不要让他闲着。小宇来的第一天，午饭是我们带他出去的，第二天，小宇说自己可以单独出去。↵↵&nbsp;↵↵这些在我们看来，并没有什么不妥，因为这已经是一个初三的大男孩了，很多事情他可以自己安排。↵↵&nbsp;↵↵后来妈妈说，小宇在小学的时候从楼上摔下来过，所以在安全问题上他们很注意，希望避免一切危险发生，不要让他单独出去，更别谈独自做什么事情，就连每天放学后的时间，也是妈妈全权安排的，家长完全将小宇的生活和学习与外界隔离了，他们以为这样是给他最好的保护，殊不知这样的过度照顾，使得小宇基本没有自己的想法和处事的能力，在父母的特殊羽翼下，就算小宇心底想反抗，但也只是想想而已。↵↵&nbsp;↵↵↵↵&nbsp;↵↵写到这里，我不得不将小宇和我另外一个学生作个对比。↵↵&nbsp;↵↵他是一个新初一的学生，瘦瘦小小，但是人小鬼大，家长将学生作为一个个体，而不是附属品，只要是学生能做的，都尽量让他自己去处理，在小学阶段，他可以一个人坐轻轨坐地铁去爷爷家，一个人逛公园，一个人去万达吃饭看电影。↵↵&nbsp;↵↵他是一个新初三的学生，高高壮壮，但是很害羞，家长将学生作为一个没有自主生活能力的人来看待，生怕他一个人会受骗，会受伤，只要可以，什么都替学生做了。这种表面上的过度保护，实际上掩盖的是对孩子权利的剥夺。↵↵&nbsp;↵↵小宇来的时间不长，还有更多需要我去了解，虽然现在有问题出现了，但是我一点都不害怕，我相信，我所学习到的知识，一定会影响到小宇，影响到小宇的家庭。',
          num_read: 121,
          keyword: ["大大", "关键", "小康", "会议"],
          relevant_articles: [
            {id: 1, title: "孩子不吃饭怎么办？灌药"},
            {id: 2, title: "孩子不吃饭怎么办？灌药"},
            {id: 3, title: "孩子不吃饭怎么办？灌药"}
          ],
          status_collect: false
        }
      ];
      this.msg = data[this.$route.query.id - 1];
      this.msg.riches = this.richesHandle(this.msg.riches);
    }
  }
</script>
