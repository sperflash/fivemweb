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
          <div class="placeSele">
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
          </div>
          <div class="dateTro">
            <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
                      <div class="placeSele">
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
          </div>
          </div>
          <!-- <div class="peopleAmo">
          </div> -->
        </div>
        <div class="five-select">
          <el-row>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;">泰山</el-button>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;">华山</el-button>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;">衡山</el-button>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;">恒山</el-button>
            <el-button type="primary" plain style="width: 120px; height: 48px; box-shadow: darkgrey 10px 10px 30px 5px; margin:0 40px 0 40px; font-size: 20px;">嵩山</el-button>
          </el-row>
      </div>
      </div>
    </div>
    <bottomAnother></bottomAnother>
  </div>
</template>


<script>
import bottomAnother from "@/components/bottomAnother";
import  navBar  from '@/components/navBar';
import  introduceCard  from '@/components/introduceCard';
import  threePic  from '@/components/threePic';
import  threeSimple  from '@/components/threeSimple';
import  daoYou  from '@/components/daoYou';
import mcPic from '@/components/mcPic';
import mccPic from '@/components/mccPic';

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
  height: 2000px;
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
</style>
