<template>

    <!-- <div @click="toBiaoqian()">点击进入BiaoQian页面</div> -->
    <!-- <div @click="toIndexPage()">点击进入indexPage页面</div> -->
    <el-container>

      <el-header>
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
      </el-header>

      <el-main>
        <div>
          <el-carousel :interval="3500" type="card" height="350px">
            <!-- <el-carousel-item v-for="item in piclist" :key="item">
              <img :src="piclist">
              <h3>{{ item }}</h3>
            </el-carousel-item> -->
            <el-carousel-item v-for="img in list" :key="img">
              <img v-lazy="img" mode="widthFix" width="140%">
              <!-- <h3>{{ item }}</h3> -->
            </el-carousel-item>
          </el-carousel>
        </div>

      </el-main>

      <el-footer>Footer</el-footer>
      <biao-qian></biao-qian>
    </el-container>

</template>

<script>

import BiaoQian from "@/components/BiaoQian";
export default {
  name: "HelloWorld",
  components: {
    BiaoQian
  },
  data() {
    return {
      list: [
        "http://47.107.140.8/image/home/banner1.jpg",
        "http://47.107.140.8/image/home/banner2.jpg",
        "http://47.107.140.8/image/home/banner3.jpg",
        "http://47.107.140.8/image/home/banner4.jpg"
      ],
      // list: [
      //   "http://47.107.140.8/image/home/banner1.jpg",
      //   "http://47.107.140.8/image/home/banner2.jpg",
      //   "http://47.107.140.8/image/home/banner3.jpg",
      //   "http://47.107.140.8/image/home/banner4.jpg"
      // ],
      currentDate: new Date()
    };
  },
  methods: {
    // toBiaoqian() {
    //   this.$router.push('/BiaoQian');
    // },
    // toIndexPage() {
    //   this.$router.push('/indexPage')
    // }
  }
}
</script>

<style scoped lang="scss">
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: auto;
  }


  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
    height: 60px;
    width: 1000px;
    margin-left: 200px
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 350px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }



</style>
