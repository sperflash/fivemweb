<template>
  <div>
    <nav-bar></nav-bar>
    <div class="slidePic">
      <template class="pic" >
        <el-carousel :interval="5000" arrow="always" style="height: 530px;">
          <el-carousel-item v-for="(item, index) in picList" :key="index">
            <img :src="item.path" mode="aspectFill" style="height: 530px; width: 100%">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <div class="hotel_content">
      <div class="all_middle">
        <div class="search">
          <!-- <div class="placeSele">
              <div class="block" >
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  style="height: 68px; width: 400px;"
                  end-placeholder="结束日期">
                </el-date-picker>
              </div>
          </div> -->
          <!-- <div class="dateTro"> -->
            <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
            <!-- <div class="placeSele">
              <div class="block" >
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  style="height: 68px; width: 400px;"
                  end-placeholder="结束日期">
                </el-date-picker>
              </div>
            </div> -->
          <!-- </div> -->
          <!-- <div class="peopleAmo">
          </!-->
        </div>
        <div class="five-select">
          <el-row>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;" @click="tolineTai">泰山</el-button>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;" @click="tolineHua">华山</el-button>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;">衡山</el-button>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;">恒山</el-button>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;">嵩山</el-button>
          </el-row>
        </div>

        <!-- 这里是关于华山时间轴的代码 -->
        <div class="timelineHua" v-if="isShow">
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top" color="#409EFF">
                <el-card>
                  <h4>更新游记</h4>
                  <p>仗剑游天涯 提交于 2018/4/12 20:46</p>
                  <img src="http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo2.jpg">
                  <p>
                    第一个目的地是回民街，晚上的街道，有店家的叫卖声，人潮涌动。肉夹馍，凉皮，羊肉泡馍，石榴汁...那天晚上，吃撑了才回到民宿。回民街很有港风的感觉，个家店面都挂着旗号，张灯结彩，适合拍照。
                  </p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top" color="#409EFF">
                <el-card>
                  <h4>更新游记</h4>
                  <p>仗剑游天涯 提交于 2018/4/3 20:46</p>
                  <img src="http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo1.jpg">
                  <p>
                    第二站是大唐芙蓉园与大雁塔。从心底说，大唐芙蓉园去的人并不多，但其中的建筑风格还是值得一看，有些可惜的是，园内摆放了过年的彩灯，晚上去应该会更美。大雁塔塔顶的风景，很惊艳，是一定要去的景点之一。就在大雁塔的边上，是大悦城，和朋友吃了biangbiang面，太管饱了。
                  </p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top" color="#409EFF">
                <el-card>
                  <h4>更新游记</h4>
                  <p>仗剑游天涯 提交于 2018/4/2 20:46</p>
                  <img src="http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo5.jpg">
                  <p>
                    第三天起床，冲上了西安城墙，本想看日出，没赶上，但余晖也很美，城墙北门出口有一家非常暖心的咖啡书屋，里面的设计感叫人印象深刻。下午去了秦皇陵，记得一定要先去秦皇陵再去博物馆，个人推荐。那里有免费的讲解，就不用再花钱找一个讲解员啦。秦皇陵的故事太多了，当时的感想就是:回去一定要恶补历史，历史可太有趣了。
                  </p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top" color="#409EFF">
                <el-card>
                  <h4>更新游记</h4>
                  <p>仗剑游天涯 提交于 2018/4/2 20:46</p>
                  <img src="http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo4.jpg">
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
        <!-- 这里是关于泰山时间轴的代码 -->
        <div class="timelineTai" v-else>
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top" color="#409EFF">
                <el-card>
                  <h4>更新游记</h4>
                  <p>单身贵族 提交于 2018/4/12 20:46</p>
                  <img src="http://profive.oss-cn-beijing.aliyuncs.com/hotel/hotelLunBo.jpg">
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top" color="#409EFF">
                <el-card>
                  <h4>更新游记</h4>
                  <p>单身贵族 提交于 2018/4/3 20:46</p>
                  <img src="http://profive.oss-cn-beijing.aliyuncs.com/hotel/hotelLunBo2.jpg">
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top" color="#409EFF">
                <el-card>
                  <h4>更新游记</h4>
                  <p>单身贵族 提交于 2018/4/2 20:46</p>
                  <img src="http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo5.jpg">
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top" color="#409EFF">
                <el-card>
                  <h4>更新游记</h4>
                  <p>单身贵族 提交于 2018/4/2 20:46</p>
                  <img src="http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo4.jpg">
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
          <div class="otherGonglue">
            <!-- <el-button type="primary" plain @click="addNew()">添加新游记</el-button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="disscussPart">
      <el-button type="primary" icon="el-icon-s-comment" @click="toaddPlan()">进入讨论区</el-button>
    </div>
    <bottomAnother></bottomAnother>
  </div>
</template>


<script>
import  navBar  from '@/components/navBar';
import  introduceCard  from '@/components/introduceCard';
import  threePic  from '@/components/threePic';
import  threeSimple  from '@/components/threeSimple';
import  daoYou  from '@/components/daoYou';
import mcPic from '@/components/mcPic';
import mccPic from '@/components/mccPic';
import bottomAnother from "@/components/bottomAnother";

export default {
  components: {
    navBar,
    introduceCard,
    threePic,
    mcPic,
    threeSimple,
    daoYou,
    mccPic,
    bottomAnother
  },
  // name: "HelloWorld",
  data() {
    return {
      Nowtime: new Date(),
      picList: [
        {
          path: 'http://profive.oss-cn-beijing.aliyuncs.com/hotel/hotelLunBo.jpg'
        },
        {
          path: 'http://profive.oss-cn-beijing.aliyuncs.com/hotel/hotelLunBo2.jpg',
        },
        {
          path: 'http://profive.oss-cn-beijing.aliyuncs.com/hotel/hotelLunBo.jpg',
        },
        {
          path: 'http://profive.oss-cn-beijing.aliyuncs.com/hotel/hotelLunBo2.jpg',
        },
       {
          path: 'http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo5.jpg',
        }
      ],
       num: 1,
      isShow: true,
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
    };
  },
   methods: {
      handleChange(value) {
        console.log(value);
      },
      tolineTai(){
        this.isShow = true;
      },
      tolineHua(){
        this.isShow = false;
      },
      toaddPlan() {
        this.$router.push("addPlan");
      }
  },
  created() {

  }

};
</script>

<style lang="scss" scoped>
.top_part{
  height: auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 530px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  height: 530px;
}
.el-carousel__item:nth-child(2n+1) {
  height: 530px;
}
.el-carousel__arrow{
  width: 50px;
  height: 50px;
  top:80%;
  background-color: black;
  font-size: 20px;
  opacity: 0.6;
}
.all_middle{
  // background-color: aquamarine;
  height: 2100px;
  width: 1048px;
  margin-top: -50px;
  z-index: 3;
}
.hotel_content{
  display: flex;
  justify-content: center;
  align-items: center;
}
.search{
  height: 100px;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  .placeSele{
    // background-color: blue;
    width: 40%;
    height: 60%;
    .el-range-separator{
      padding-top: 26px;
      font-size: 20px;
      color: grey;
    }
  }
  .dateTro{
    width: 40%;
    // background-color: green;
    height:60%;
  }
  .peopleAmo{
    // background-color: greenyellow;
    width: 20%;
    height: 60%;
  }
}
.five-select{
  // background-color: yellow;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content:center;
}
.el-input el-input--suffix is-focus {
  height: 100px;
}
.timelineTai{
  height: 500px;
  // background-color:red;
  margin-top: 50px;
  img{
    height:160px;
    width:auto;
  }
  p{
    font-size: 18px !important;
    font-weight: 300 !important;
    line-height: 1.7em !important;
    color: #565a5c !important;
  }
}
.timelineHua{
 height: 500px;
  // background-color:red;
  margin-top: 50px;
  img{
    height:160px;
    width:auto;
  }
  p{
    font-size: 18px !important;
    font-weight: 300 !important;
    line-height: 1.7em !important;
    color: #565a5c !important;
  }
}
.otherGonglue{
  height:100px;
  // background-color:red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.disscussPart{
  height: 100px;
  // background-color: red;
  width: 60%;
  margin-left: 300px;
  font-size: 28px !important;
  font-weight: 300 !important;
  line-height: 1.7em !important;
  color: #565a5c !important;
  .el-button--primary {
    width: 1000px;
    height: 70px;
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
}
margin-bottom: 60px;
}
</style>
