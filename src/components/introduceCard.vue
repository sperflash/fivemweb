<template>
  <div>
    <div class="left_pic">
      <div class="pic">
        <img src="http://profive.oss-cn-beijing.aliyuncs.com/shouye/shouye1.jpg" mode="aspectFill">
      </div>
      <div class="text">
        <div class="text_top">
          <div class="text_top_mid">
            <i class="iconfont icon-lvyou-dianZan" style="color: #72b4ee; font-size:30px;"></i>
            <div class="text_top_i_right">
              <div class="text_big">注册登录</div>
              <div class="text_small">我们的注册登录可以通过QQ、微信、手机号注册登录。时间一键式登录注册。</div>
            </div>
          </div>
          <div class="text_top_mid">
            <i class="iconfont icon-lvyou-dianZan" style="color: #72b4ee; font-size:30px;"></i>
            <div class="text_top_i_right">
              <div class="text_big">存储您的专属导游</div>
              <div class="text_small">在个人中心查看收藏的心仪导游、关注的大神旅游贴</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="left_pic">
      <div class="text">
        <div class="text_top">
          <div class="text_top_mid">
            <i class="iconfont icon-lvyou-dianZan" style="color: #72b4ee; font-size:30px;"></i>
            <div class="text_top_i_right">
              <div class="text_big">攻略</div>
              <div class="text_small">攻略中满满是大神们的旅游心得、您可以尽情的浏览上面的各式各样的攻略

我们的目的是在最大程度上优化您的旅游体验。</div>
            </div>
          </div>
          <div class="text_top_mid">
            <i class="iconfont icon-lvyou-dianZan" style="color: #72b4ee; font-size:30px;"></i>
            <div class="text_top_i_right">
              <div class="text_big">论坛</div>
              <div class="text_small">当您成为最终征服五岳的勇者、也可以在网站尽情描述您的体验、给后来者安利各式各样的景点、美食。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="pic">
        <img src="http://profive.oss-cn-beijing.aliyuncs.com/shouye/shouye2.jpg" mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return{

      }
    }
  }
</script>

<style scoped lang="scss">
.left_pic{
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .pic{
    width: 36%;
    height: 300px;
    img{
      height: 100%;
    }
  }
  .text{
    width: 64%;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .text_top{
      display: grid;
      flex-direction: row;
      align-items: center;
      height: 80%;
      width: 80%;
      .text_top_mid{
        display: flex;
        align-items: center;
        height: 40%;
        width: 90%;
        margin-left: 30px;
        .text_top_i_right{
          margin-left: 30px;
          .text_big{
            font-size: 24px;
            margin-bottom: 3px;
          }
          .text_small{
            font-size: 14px;
            color: #777777;
          }
        }
      }
    }
  }
}
</style>
</style>
