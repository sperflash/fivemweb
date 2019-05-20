<template>
  <div>
    <div class="aboutTravel">
      <div class="middle_two">
        <div class="title">
          关于行程
        </div>
      </div>
      <div >
        <el-row class="middle_one">
          <el-col class="middle_three" :span="8" v-for="(item, index) in aboutCardList" :key="index" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" class="card_width">
              <img :src="item.path" class="image" mode="aspectFill">
              <div style="padding: 14px;">
                <span style="color: #72b4ee">{{item.name}}</span>
                <div class="font_style">{{item.introduce}}</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">点击进入</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return{
        currentDate: new Date(),
        aboutCardList:[
          {
            path: 'http://profive.oss-cn-beijing.aliyuncs.com/shouye/shouye_minsu.jpg',
            name: '导游',
            introduce: '我们将为您提供优秀、可爱且有经验的导游们，在这里汇集了五岳景点中的优秀导游，您可以有很多选择。'
          },
          {
            path: 'http://profive.oss-cn-beijing.aliyuncs.com/shouye/shouye_minsu.jpg',
            name: '民宿',
            introduce: '在这里寻找合适您的住宿地点'
          },
          {
            path: 'http://profive.oss-cn-beijing.aliyuncs.com/shouye/shouye-dache.jpg',
            name: '定位.景点导航',
            introduce: '网站为您尽可能详细的显示五岳各景点的美景，以及路线，'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
.aboutTravel{
  height: 550px;
  width: 100%;
  align-items: center;
  justify-content: center;
  .middle_one{
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .middle_three{
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0 70px 0 70px;
      .card_width{
        width: 95%;
      }
      .font_style{
        font-size:12px;
        margin-top:5px;
        height:35px;
        color:#777777;
      }
      .time {
        font-size: 13px;
        color: #999;
      }
      .bottom {
        margin-top: 13px;
        line-height: 12px;
      }
      .button {
        padding: 0;
        margin-top: 10px;
        float: right;
      }
      .image {
        width: 100%;
        display: block;
      }
      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both
      }
    }
  }
  .middle_two{
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .title{
      font-size: 30px;
    }
  }
}
</style>
