<template>
  <div>
    <nav-bar></nav-bar>
    <div class="container">
      <div  class="content">
        <div class="hd">
          <img  class="logo" src="http://profive.oss-cn-beijing.aliyuncs.com/yindao/logo.png">
          <img  class="wave" src="http://profive.oss-cn-beijing.aliyuncs.com/yindao/wave.png" mode="aspectFill">
          <img class="wave wave-bg" src="http://profive.oss-cn-beijing.aliyuncs.com/yindao/wave.png" mode="aspectFill">
        </div>
        <div class="all"  onMouseMove="this.className='all_one'" onMouseOut="this.className='all'"  @click="toShouYe()">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>选择进入</span>
              <el-button style="float: right; padding: 3px 0; color: #ffffff" type="text">操作按钮</el-button>
            </div>
            <div v-for="(item, index) in cardListLeft" :key="index" class="text item">
              {{ item.name }}
            </div>
          </el-card>
        </div>
        <div class="allRight" onMouseMove="this.className='allRight_one'" onMouseOut="this.className='allRight'" @click="toShouYe()">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>选择进入</span>
              <el-button style="float: right; padding: 3px 0; color: #ffffff" type="text">操作按钮</el-button>
            </div>
            <div v-for="(item, index) in cardListRight" :key="index" class="text item">
              {{ item.name }}
            </div>
          </el-card>
        </div>
         <!-- <bottom></bottom> -->
      </div>

    </div>
      <!-- <div @click="toIndexPage()">点击进入indexPage页面</div> -->
      <bottom></bottom>
  </div>
</template>


<script>
import  navBar  from '@/components/navBar';
import bottom from "@/components/bottom";
export default {
  components: {
    navBar,
    bottom
  },
  // name: "HelloWorld",
  data() {
    return {
      cardListLeft:[
        {
          name: '首页',
        },
        {
          name: '行程',
        },
        {
          name: '攻略.论坛',
        }
      ],
      cardListRight:[
        {
          name: '个人中心',
        },
        {
          name: '联系我们',
        },
        {
          name: '注册登录',
        }
      ],
    };
  },
  methods: {
    toHelloWorld() {
      this.$router.push("/HelloWorld");
    },
    toShouYe() {
      this.activeIndex = "2";
      this.activeIndex2= "2";
      this.$router.push("/shouYe");
    },
  }
};
</script>

<style scoped lang="scss">
.container {
  margin-top: -150px;
  background: #72b4ee;
  align-items: stretch;
  padding: 0;
  height: 850px;
  overflow: hidden;
}
.content{
  flex: 1;
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  /* height: 100%; */
  padding-bottom: 900px;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(244,244,244,0)), color-stop(0.1, #f4f4f4), to(#f4f4f4));
  opacity: 0;
  transform: translate3d(0,100%,0);
  animation: rise 3s cubic-bezier(0.19, 1, 0.22, 1) .25s forwards;
}
@keyframes rise{
  0% {opacity: 0;transform: translate3d(0,100%,0);}
  50% {opacity: 1;}
  100% {opacity: 1;transform: translate3d(0,900px,0);}
}
.hd {
  /* position: relative; */
  position: absolute;
  top: 0;
  left: 50%;
  width: 2000px;
  margin-left: -1000px;
  /* height: 400px; */
  transition: all .35s ease;
}
.logo {
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 400px;
  width: 320px;
  height: 320px;
  margin-left: -160px;
  border-radius: 320px;
  animation: sway 10s ease-in-out infinite;
  opacity: .95;
}
@keyframes sway{
  0% {transform: translate3d(0,40px,0) rotate(-15deg); }
  17% {transform: translate3d(0,0px,0) rotate(25deg); }
  34% {transform: translate3d(0,-40px,0) rotate(-20deg); }
  50% {transform: translate3d(0,-20px,0) rotate(15deg); }
  67% {transform: translate3d(0,20px,0) rotate(-25deg); }
  84% {transform: translate3d(0,30px,0) rotate(15deg); }
  100% {transform: translate3d(0,40px,0) rotate(-15deg); }
}
 .wave {
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 0;
  opacity: 0.725;
  height: 540px;
  width: 4500px;
  animation: wave 10s linear infinite;
}
.wave-bg {
  z-index: 1;
  animation: wave-bg 10.25s linear infinite;
}
@keyframes wave {
  from {transform: translate3d(250px,0,0);}
  to {transform: translate3d(2250px,0,0);}
}
@keyframes wave-bg{
  from {transform: translate3d(750px,0,0);}
  to {transform: translate3d(2750px,0,0);}
}
.all{
  z-index: 3;
  position: absolute;
  height: 700px;
  margin-left: 24%;
}
.allRight{
  z-index: 3;
  position: absolute;
  height: 700px;
  margin-left: 57%;
}
.all_one{
  z-index: 3;
  position: absolute;
  height: 740px;
  margin-left: 24%;
}
.allRight_one{
  z-index: 3;
  position: absolute;
  height: 740px;
  margin-left: 57%;
}
/* 以下是卡片的样式 */
.text {
  font-size: 14px;
  color: grey;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  width: 280px;
  box-shadow: 5px 10px 19px 0 rgba(0,0,0,.1);
}
.box-card{
  background: -webkit-linear-gradient(#72b4ee,#ffffff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#72b4ee,#ffffff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#72b4ee,#ffffff); /* Firefox 3.6 - 15 */
  background: linear-gradient(#72b4ee,#ffffff); /* 标准的语法 */
  /* opacity: 0.7; */
}
</style>
