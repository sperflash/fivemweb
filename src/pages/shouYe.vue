<template>
  <div class="shouye_all">
    <nav-bar></nav-bar>
    <div class="slidePic">
      <template class="pic" >
        <el-carousel :interval="5000" arrow="always" style="height: 500px;">
          <el-carousel-item v-for="(item, index) in picList" :key="index">
            <img :src="item.path" mode="aspectFill" style="height: 500px; width: 100%">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <div style="background-color: #72b4ee; height: 100px; width:100%">
      <el-row>
        <el-col :span="8">
          <div class="grid-content">
            <i class='iconfont icon-lvyou1-copy'></i>
            <div class="icon_text">
              <div class="icon_font">简便</div>
              <div class="icon_font">给您最优的旅游攻略</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class='iconfont icon-lvyou01-copy'></i>
            <div class="icon_text">
              <div class="icon_font">精准</div>
              <div class="icon_font">提供最为精准的定位服务</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class='iconfont icon-lvyou-copy'></i>
            <div class="icon_text">
              <div class="icon_font">快速</div>
              <div class="icon_font">叫车、订房服务快速高效</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="person_ser">
      <div class="person_ser_text">
        <div class="person_ser_textB">
          个性服务   专属您的旅行
        </div>
        <div class="person_ser_textS">
          我们为您提供与众不同的旅行方案，从路线设计开始着手为您打造专属您的旅行。为您提供私人旅行个性化、专属化、“一对一”式的高品质定制旅行服务。
        </div>
      </div>
    </div>
    <introduce-card></introduce-card>
    <div class="xingCheng">
      <div class="middle">
        <div class="title">
          <div class="title-font">行程</div>
        </div>
        <div class="logo">
          <div class="logo_buju">
            <div class="logo_display">
              <i class="iconfont icon-lvyou-xingc1" style="color:#72b4ee;font-size:80px;"></i>
            </div>
            <div class="logo_display">
              <i class="iconfont icon-lvyou-xingc2" style="color:#72b4ee;font-size:80px;"></i>
            </div>
            <div class="logo_display">
              <i class="iconfont icon-lvyou-xingc3" style="color:#72b4ee;font-size:80px;"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <three-pic></three-pic>
    <div class="blue_part">
      <div class="middle">
        <div class="logo">
         <i class='iconfont icon-lvyou1-copy'></i>
        </div>
        <div class="font_lineOne">
          我们希望打造成喜欢五岳的游客们最信赖的优质网站
        </div>
        <div class="font_lineTwo">
          您的鼓励将成为我们最大的动力
        </div>
        <div class="button">
          <el-button style=" opacity: 0.7" type="primary" plain>进入网站</el-button>
        </div>
      </div>
    </div>
    <div class="person_ser">
      <div class="person_ser_text">
        <div class="person_ser_textB">
          关于打车
        </div>
        <div class="person_ser_textS">
          我们对接了专业的、安全的滴滴打车API旨在为您打造最简单快捷的订车方式。在这里您可以提前预约车辆为您的出行提供最大的便利，提前预定好目的地至酒店 的车辆。
        </div>
      </div>
    </div>
    <div class="aboutCar">
      <div class="middle">
        <div class="left">
          <div class="top">
            <div class="text">
              选车型
            </div>
            <div class="logo">
              <i class='iconfont icon-lvyou1-copy'></i>
            </div>
          </div>
          <div class="bottom">
            <div class="text">
              出发地
            </div>
            <div class="logo">
              <i class='iconfont icon-lvyou-copy'></i>
            </div>
          </div>
        </div>
        <div class="pic">
          <img src="https://profive.oss-cn-beijing.aliyuncs.com/shouye/shouye-dache.jpg" mode="scaleToFill">
        </div>
        <div class="right">
          <div class="top">
            <div class="logo">
              <i class='iconfont icon-lvyou1-copy'></i>
            </div>
            <div class="text">
              租车
            </div>
          </div>
          <div class="bottom">
            <div class="logo">
              <i class='iconfont icon-lvyou-copy'></i>
            </div>
            <div class="text">
              终点
            </div>
          </div>
        </div>
      </div>
    </div>
    <mc-pic></mc-pic>
    <div class="aboutUs">
      <div class="top">
        <div class="title">
          关于我们
        </div>
      </div>
      <div class="bottom">
        <div class="line">
          <div class="left">
            <div class="text">
              <div class="big">
                加入我们
              </div>
              <div class="small">
                如果您认可我们的网站并想加入我们、请与我们的网站管理者联系：15650582160
              </div>
            </div>
          </div>
          <div class="right">
            <div class="text">
              <div class="big">
                怎样联系我们
              </div>
              <div class="small">
                您可以在网站最上方找到联系我们、给我们留言或者拨打客服电话
              </div>
            </div>
          </div>
        </div>
        <div class="line">
           <div class="left">
            <div class="text">
              <div class="big">
                网站特色终旨
              </div>
              <div class="small">
                快速、便捷、一键式服务
              </div>
            </div>
          </div>
          <div class="right">
            <div class="text">
              <div class="big">
                遇到问题怎么办
              </div>
              <div class="small">
                请联系我们的客服51908716
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <three-simple></three-simple>
    <mcc-pic></mcc-pic>
    <dao-you></dao-you>
    <bottom></bottom>
  </div>
</template>


<script>
import navBar from "@/components/navBar";
import introduceCard from "@/components/introduceCard";
import threePic from "@/components/threePic";
import threeSimple from "@/components/threeSimple";
import daoYou from "@/components/daoYou";
import mcPic from "@/components/mcPic";
import mccPic from "@/components/mccPic";
import bottom from "@/components/bottom";

export default {
  components: {
    navBar,
    introduceCard,
    threePic,
    mcPic,
    threeSimple,
    daoYou,
    mccPic,
    bottom
  },
  // name: "HelloWorld",
  data() {
    return {
      picList: [
        {
          path: "http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo1.jpg"
        },
        {
          path: "http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo2.jpg"
        },
        {
          path: "http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo3.jpg"
        },
        {
          path: "http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo4.jpg"
        },
        {
          path: "http://profive.oss-cn-beijing.aliyuncs.com/lunbo/Mlunbo5.jpg"
        }
      ]
    };
  },
  methods: {
    reloadPage() {
      location = location;
    }
  },
  created() {
    this.reloadPage();
  }
};
</script>

<style lang="scss" scoped>
.shouye_all {
  .top_part {
    height: auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    height: 500px;
  }
  .el-carousel__item:nth-child(2n + 1) {
    height: 500px;
  }
  .el-carousel__arrow {
    width: 50px;
    height: 50px;
    top: 80%;
    background-color: black;
    font-size: 20px;
    opacity: 0.6;
  }
  .grid-content {
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .icon_font {
    height: 17px;
    width: 100%;
    color: #ffffff;
    font-size: 17px;
    padding-bottom: 3px;
  }
  .icon_text {
    margin-left: 10px;
    height: 34px;
    width: 200px;
    font-size: 17px;
  }
  .person_ser {
    height: 250px;
    width: 90%;
    margin: auto;
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .person_ser_text {
      width: 500px;
      height: auto;
      text-align: center;
      .person_ser_textB {
        font-size: 36px;
        width: auto;
        height: 40px;
        margin-bottom: 20px;
      }
      .person_ser_textS {
        font-size: 20px;
        color: #777;
        width: auto;
        height: 40px;
      }
    }
  }
  .xingCheng {
    width: 100%;
    height: 280px;
    background-color: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    .middle {
      width: 70%;
      height: 70%;
      .title {
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        .title-font {
          font-size: 36px;
        }
      }
      .logo {
        height: 85%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo_buju {
          display: flex;
          width: 85%;
          height: 80%;
          .logo_display {
            width: 33%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .blue_part {
    background-color: #72b4ee;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    .middle {
      height: 60%;
      width: 35%;
      .logo {
        width: 100%;
        height: 40%;
        i {
          display: flex;
          justify-content: center;
        }
      }
      .font_lineOne {
        font-size: 20px;
        color: #ffffff;
        height: 35px;
        display: flex;
        justify-content: center;
      }
      .font_lineTwo {
        font-size: 15px;
        color: #ffffff;
        height: 20px;
        display: flex;
        justify-content: center;
      }
      .button {
        margin-top: 10px;
        display: flex;
        justify-content: center;
      }
    }
  }
  .aboutCar {
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    .middle {
      width: 60%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      .left {
        width: 30%;
        height: 50%;
      }
      .pic {
        width: 40%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .right {
        height: 50%;
        width: 30%;
      }
    }
    .top {
      height: 50%;
      display: flex;
    }
    .text {
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo {
      height: 100%;
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bottom {
      height: 50%;
      display: flex;
    }
    i {
      font-size: 35px;
      color: #72b4ee;
    }
  }
  .aboutUs {
    height: 500px;
    .top {
      height: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .title {
        font-size: 30px;
      }
    }
    .bottom {
      height: 70%;
    }
    .line {
      height: 50%;
      width: 100%;
      display: flex;
    }
    .left {
      width: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .right {
      width: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .text {
      width: 50%;
      height: 50%;
      // display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .big {
      width: 100%;
      height: 50%;
      align-items: center;
      display: flex;
      justify-content: center;
      font-size: 20px;
    }
    .small {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #777777;
    }
  }
}
</style>
