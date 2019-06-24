<template>
  <div>
    <div class="contact_bottom">
      <img src="https://profive.oss-cn-beijing.aliyuncs.com/helpPage/help_bottom2.png" mode="aspectFill">
    </div>
    <div style="margin-top: 45px;" class="items">
      <el-row :gutter="20">
        <el-col :span="6" style="text-align: center;" >
          <div class="grid-content1 bg-purple1">工作机会</div>
          <div class="grid-content1 bg-purple1">新闻</div>
          <div class="grid-content1 bg-purple1">政策</div>
          <div class="grid-content1 bg-purple1">帮助</div>
        </el-col>
        <el-col :span="6" style="text-align: center;">
          <div class="grid-content1 bg-purple1">注册</div>
          <div class="grid-content1 bg-purple1">登录</div>
          <div class="grid-content1 bg-purple1">攻略</div>
          <div class="grid-content1 bg-purple1">帮助中心</div>
        </el-col>
        <el-col :span="6" style="text-align: center;">
          <div class="grid-content1 bg-purple1">首页</div>
          <div class="grid-content1 bg-purple1">信任于安全</div>
          <div class="grid-content1 bg-purple1">旅游指南</div>
          <div class="grid-content1 bg-purple1">隐私政策</div>
        </el-col>
        <el-col :span="6" style="text-align: center;">
          <div class="grid-content1 bg-purple1">待客之道</div>
          <div class="grid-content1 bg-purple1">多元化与归属感</div>
          <div class="grid-content1 bg-purple1">开展体验</div>
          <div class="grid-content1 bg-purple1">条款</div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom-text">
      <div class="text">
        京ICP备16017121号-3 京ICP证 160773号 中国公安局标志 京公网安备 11010502032345号 五岳旅游（北京）有限公司
© 2019 Airbnb, Inc. All rights reserved.
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.contact_bottom img {
  width: 1505px;
}
.bottom-text {
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: rgb(207, 206, 206) 1px solid;
  margin-top: 35px;
  .text {
    height: 80px;
    width: 70%;
    text-align: center;
    color: rgb(72, 72, 72);
    font-size: 14px !important;
    font-weight: 600 !important;
    font-family: "微软雅黑";
    margin-top: 50px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.items .el-col {
  border-radius: 4px;
  display: block;
}
.grid-content1 {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
.items {
  color: rgb(72, 72, 72);
  font-size: 14px !important;
  font-weight: 600 !important;
  font-family: "微软雅黑";
}
</style>
