<template>
  <div>
    <div class="mc_pic">
      <img src="http://profive.oss-cn-beijing.aliyuncs.com/shouye/shouye_minsudatu.jpg" alt="" />
      <div class="meng_ceng" style="position:absolute;width:100%;height:100%;z-indent:2;left:0;top:0;background-color: #72b4ee; opacity:0.4;">
      </div>
      <div class="text" style="position:absolute;width:100%;height:100%;z-indent:4;left:0;top:0;">
        <div>幸福的旅途从五岳开启......</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  }
}
</script>

 <style lang="scss" scoped>
.mc_pic{
  position:relative;
  width:100%;
  height:100%;
  img{
    width: 100%;
    height:400px;
    z-index: -1;
  }
  .meng_ceng{
    display: flex;
  }
  .text{
    color: #ffffff;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>
