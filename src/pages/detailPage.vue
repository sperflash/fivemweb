<template>
  <div>
    <nav-bar></nav-bar>
    <div class="detailPage_all">
      <div class="all_top">
        <div class="top_pic">
          <img  src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH1.jpg">
        </div>
        <div class="all_topTitle">
          <div class="introduce_top">
            晨
          </div>
          <div class="introduce_bottom">
            <div class="bottom_left">西安</div>
            <div class="bottom_right">四个月前</div>
          </div>
        </div>
      </div>
      <div class="all_middle">
        <div class="middle_pic">
          <div v-for="(item,index) in detailPicList" :key="index">
            <img :src="item.path" mode="aspectFill" style="height: 500px; width: 100%">
          </div>
        </div>
        <div class="middle_article">
          <div class="article_title">
            西安古城之旅
          </div>
          <div>
            <div class="article_fontStyle"><p class="_9j5k16">1.22日，飞机降下，到达咸阳机场.</p><p class="_9j5k16">机场距离市中心，打车有一个小时的路程。</p><p class="_9j5k16">去的第一天，非常兴奋。西安是一个年味很重的城市，刚进市中心，就能看到树上挂着彩灯，灯笼和各种装饰，把西安点缀的很温馨。</p><p class="_9j5k16">第一个目的地是回民街，晚上的街道，有店家的叫卖声，人潮涌动。肉夹馍，凉皮，羊肉泡馍，石榴汁...那天晚上，吃撑了才回到民宿。回民街很有港风的感觉，个家店面都挂着旗号，张灯结彩，适合拍照。</p><p class="_9j5k16">第二站是大唐芙蓉园与大雁塔。从心底说，大唐芙蓉园去的人并不多，但其中的建筑风格还是值得一看，有些可惜的是，园内摆放了过年的彩灯，晚上去应该会更美。大雁塔塔顶的风景，很惊艳，是一定要去的景点之一。就在大雁塔的边上，是大悦城，和朋友吃了biangbiang面，太管饱了。</p><p class="_9j5k16">第三天起床，冲上了西安城墙，本想看日出，没赶上，但余晖也很美，城墙北门出口有一家非常暖心的咖啡书屋，里面的设计感叫人印象深刻。下午去了秦皇陵，记得一定要先去秦皇陵再去博物馆，个人推荐。那里有免费的讲解，就不用再花钱找一个讲解员啦。秦皇陵的故事太多了，当时的感想就是:回去一定要恶补历史，历史可太有趣了。</p><p class="_9j5k16">第四天跟团去了华山。冬天华山的北峰会被封锁，长空栈道也关闭了，特别可惜没有玩成，因为期待了很久...所以夏天一定会再去一次，还要看山顶日出！华山很险峻，是真的险峻，我不当心摔了一跤，下面就是悬崖，不知道读者能不能感受到它的危险，一定要注意安全哦。晚上去看了死侍2我爱我家，大悦城有一家特产店特别好，很正宗也不骗人，推荐去。</p><p class="_9j5k16">第五天，睡懒觉，中午的飞机，回家啦~~~</p></div>
          </div>
        </div>
        <div class="middle_thought">
          <div class="thought_title">
            有什么感想？
          </div>
          <div class="thought_input">
            <div class="input_top">
              <div class="input_left">
                <div class="top_pic">
                  <img style="margin-top: 30px; margin-left:20px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH1.jpg">
                </div>
              </div>
              <div class="input_right">
                <el-input v-model="input" placeholder="说点什么..."></el-input>
              </div>
            </div>
            <div class="input_bottom">
              <div class="bottom_summit">
                <el-button plain>取消</el-button>
                <el-button type="primary" plain>提交</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="middle_show" v-if="showPingLun">
          <div class="all_top">
            <div class="top_pic">
              <img  src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH3.jpg">
            </div>
            <div class="all_topTitle">
              <div class="introduce_top">
                晨
              </div>
              <div class="introduce_bottom">
                <div class="bottom_left">西安</div>
                <div class="bottom_right">四个月前</div>
              </div>
            </div>

          </div>
          <div class="pingLun_Text">
            我觉得挺不错,就是不知道这些评价是否真实的
          </div>
          <div class="border_line"></div>
        </div>
        <div class="middle_show" v-if="showPingLun">
          <div class="all_top">
            <div class="top_pic">
              <img  src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH2.jpg">
            </div>
            <div class="all_topTitle">
              <div class="introduce_top">
                天天
              </div>
              <div class="introduce_bottom">
                <div class="bottom_left">西安</div>
                <div class="bottom_right">一个月前</div>
              </div>
            </div>

          </div>
          <div class="pingLun_Text">
            我觉得挺不错,很真实，期待我的旅途！
          </div>
          <div class="border_line"></div>
        </div>

        <div class="middle_example">
          <div class="example_title">相关故事</div>
          <div class="blockThree">
            <div class="block" @click="toDetailPage()">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story1.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">泰山</div>
                <div class="introduce_fontStyleTwo">观山落日</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang1.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story2.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">泰山</div>
                <div class="introduce_fontStyleTwo">很唯美的一次旅行</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang2.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story3.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">泰山</div>
                <div class="introduce_fontStyleTwo">说走就走的泰山之旅</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang3.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="blockThree">
            <div class="block">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story6.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">泰山</div>
                <div class="introduce_fontStyleTwo">记忆犹新的旅途</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang6.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story7.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">泰山</div>
                <div class="introduce_fontStyleTwo">难以忘记的。。。</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang7.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story8.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">泰山</div>
                <div class="introduce_fontStyleTwo">黄昏下的</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang8.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="blockThree">
            <div class="block">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/storyJhuashan2.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">西安</div>
                <div class="introduce_fontStyleTwo">西安古城之旅</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH2.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/storyJhuashan3.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">华山</div>
                <div class="introduce_fontStyleTwo">华山奇险惊天下</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH3.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="block_pic" >
                <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/storyJjuashan4.jpg&quot;);"></div>
              </div>
              <div class="introduce">
                <div class="introduce_fontStyle">西安</div>
                <div class="introduce_fontStyleTwo">西安之行</div>
              </div>
              <div class="details">
                <div class="details_pic">
                  <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH4.jpg">
                </div>
                <div style="margin-top: 3px; margin-right:20px;">
                  <i class="iconfont icon-icon-test" style="color: #72b4ee; font-size:20px;"></i>
                </div>
                <div style="margin-top: 7px;">
                  <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color: #72b4ee; font-size:18px;"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottomAnother></bottomAnother>
  </div>
</template>


<script>
import navBar from "@/components/navBar";
import bottomAnother from "@/components/bottomAnother";

export default {
  components: {
    navBar,
    bottomAnother
  },
  // name: "HelloWorld",
  data() {
    return {
      showPingLun: true,
      input: "",
      detailPicList: [
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage1.jpg"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage2.jpg"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage3.jpg"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage4.jpg"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage5.jpg"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage6.jpg"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage7.jpg"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage8.jpg"
        }
      ]
    };
  },
  methods: {
    toSignUp() {
      this.$router.push("SignUp");
    },

    reloadPage() {
      location = location;
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  created() {
    this.reloadPage();
  }
};
</script>

<style lang="scss">
.detailPage_all {
  height: auto;
  width: 45%;
  margin: auto;
  display: block;
  .all_top {
    height: 50px;
    width: 100%;
    margin-top: 50px;
    display: flex;
  }
  .top_pic {
    height: 50px;
    width: 50px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
  .all_topTitle {
    height: 50px;
    width: 50%;
  }
  .introduce_top {
    height: 50%;
    padding-left: 20px;
    font-weight: 600;
    color: #484848;
    font-family: "微软雅黑";
  }
  .introduce_bottom {
    height: 50%;
    padding-left: 20px;
    display: flex;
    font-weight: 400;
    color: #484848;
    font-family: "微软雅黑";
  }
  .bottom_left {
    width: 20%;
    height: 100%;
  }
  .bottom_right {
    width: 70%;
    height: 100%;
  }
  .all_middle {
    height: auto;
    width: 100%;
    margin-top: 80px;
  }
  .middle_pic {
    height: auto;
    width: 100%;
  }
  .middle_article {
    height: 1000px;
  }
  .article_title {
    height: 50px;
    margin-top: 50px;
    font-size: 30px;
    font-weight: 700px;
    color: #484848;
  }
  .article_fontStyle {
    font-size: 18px !important;
    font-weight: 300 !important;
    line-height: 1.7em !important;
    color: #565a5c !important;
    margin: 1.7em 0px !important;
  }
  .middle_thought {
    height: auto;
  }
  .thought_title {
    height: 50px;
    font-size: 25px;
    font-weight: 700px;
    color: #484848;
  }
  .thought_input {
    height: 220px;
    border: #dfdcdc 1px solid;
  }
  .input_top {
    height: 150px;
    display: flex;
  }
  .input_left {
    width: 80px;
    height: 150px;
  }
  .input_right {
    width: 600px;
  }
  .bottom_summit {
    width: 30%;
    margin-left: 450px;
    display: flex;
  }
  .input_bottom {
    height: 45px;
    display: flex;
  }
  .el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 150px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
  .middle_show {
    height: auto;
  }
  .pingLun_Text {
    height: 10px;
    margin-top: 10px;
    font-size: 18px !important;
    font-weight: 300 !important;
    line-height: 1.7em !important;
    color: #565a5c !important;
    margin: 1.7em 0px !important;
  }
  .border_line {
    height: 10px;
    border-bottom: rgb(235, 233, 233) 1px solid;
  }
  .middle_example {
    .example_title{
      font-size: 25px;
      color: #484848;
      font-weight: 700;
    }
    height: auto;
    width: 120%;
    margin-left: -60px;
    margin-top: 60px;
    margin-bottom: 100px;
    .blockThree {
      height: 310px;
      width: 100%;
      margin-top: 50px;
      justify-content: space-between;
      display: flex;
    }
    .block {
      height: 310px;
      width: 258px;
    }
    .block_pic {
      height: 258px;
      width: 258px;
      position: relative;

      img {
        height: 258px;
        width: 258px;
      }
    }
    .img_style {
      position: absolute;
      background-size: cover;
      background-position: 50% 50%;
      border-radius: 6px;
    }
    .details {
      height: 25px;
      width: 100%;
      display: flex;
      margin-left: 5px;
    }
    .introduce {
      height: 27px;
      width: 100%;
      display: flex;
      margin-left: 5px;
    }
    .introduce_fontStyle {
      font-weight: 800;
      font-size: 14px;
      color: #484848;
      padding-top: 5px;
      margin-right: 15px;
    }
    .introduce_fontStyleTwo {
      font-weight: 500;
      font-size: 14px;
      color: #484848;
      padding-top: 5px;
    }
    .details_pic {
      height: 25px;
      width: 25px;
      margin-right: 20px;
    }
  }
}
</style>
