<template>
    <div>
      <div>
        <nav-bar></nav-bar>
      </div>
      <div class="person_all">
        <div class="center_top">
          <div class="big_pic _1opbq4k4" aria-hidden="true">
            <img src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/hotel1.jpg" mode="widthFill">
            <!-- <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAIAAADUVFKvAAAAO0lEQVQIHQEwAM//AWRUSFdMSNna2Of5/+Tk5gFmXls1ODUE9dfg2ebT6wIBkHBh8QH6+fgN8/Ll5Ortgu8cx5yKXRcAAAAASUVORK5CYII=" class="_13fuxfxo"> -->
            <!-- <img alt="" height="505.3333333333333" src="https://z1.muscache.cn/im/pictures/65da2db3-b099-4e1f-a2f5-cc6be2b0379d.jpg?aki_policy=xx_large" width="758" class="_uttz43" style="top: 0px;"> -->
          </div>
          <div class="small_pic">
            <div class="small_left">
              <div class="left_top _1opbq4k5" >
                <img src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/hotel2.jpg" mode="widthFill">
              </div>
              <div class="left_bottom _1opbq4k5">
                <img src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/hotel3.jpg" mode="widthFill">
              </div>
            </div>
            <div class="small_right">
              <div class="right_top _1opbq4k5">
                <img src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/hotel4.jpg" mode="widthFill">
              </div>
              <div class="right_bottom _1opbq4k5">
                <img src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/hotel5.jpg" mode="widthFill">
              </div>
            </div>
          </div>
        </div>
        <div class="center_bottom">
          <div class="middle_title">
            <div class="title">故事</div>
          </div>
          <div class="middle_tab">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="景点" name="first">
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
                  <div class="block">
                    <div class="block_pic" >
                      <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story4.jpg&quot;);"></div>
                    </div>
                    <div class="introduce">
                      <div class="introduce_fontStyle">泰山</div>
                      <div class="introduce_fontStyleTwo">烟雾缭绕的泰山之旅</div>
                    </div>
                    <div class="details">
                      <div class="details_pic">
                        <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang4.jpg">
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
                      <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story5.jpg&quot;);"></div>
                    </div>
                    <div class="introduce">
                      <div class="introduce_fontStyle">泰山</div>
                      <div class="introduce_fontStyleTwo">拥抱海纳百川的世界</div>
                    </div>
                    <div class="details">
                      <div class="details_pic">
                        <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang5.jpg">
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
                      <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/storyJHuashan1.jpg&quot;);"></div>
                    </div>
                    <div class="introduce">
                      <div class="introduce_fontStyle">华山</div>
                      <div class="introduce_fontStyleTwo">自古华山一条道——勇者无畏</div>
                    </div>
                    <div class="details">
                      <div class="details_pic">
                        <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH1.jpg">
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
              </el-tab-pane>
              <el-tab-pane label="美食" name="second">
                <div class="blockThree">
                  <div class="block">
                    <div class="block_pic" >
                      <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/storyJHuashan1.jpg&quot;);"></div>
                    </div>
                    <div class="introduce">
                      <div class="introduce_fontStyle">华山</div>
                      <div class="introduce_fontStyleTwo">自古华山一条道——勇者无畏</div>
                    </div>
                    <div class="details">
                      <div class="details_pic">
                        <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/storyJhuashan/touxiangH1.jpg">
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

                <div class="blockThree">
                  <div class="block">
                    <div class="block_pic" >
                      <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story5.jpg&quot;);"></div>
                    </div>
                    <div class="introduce">
                      <div class="introduce_fontStyle">泰山</div>
                      <div class="introduce_fontStyleTwo">拥抱海纳百川的世界</div>
                    </div>
                    <div class="details">
                      <div class="details_pic">
                        <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang5.jpg">
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
                  <div class="block">
                    <div class="block_pic" >
                      <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story4.jpg&quot;);"></div>
                    </div>
                    <div class="introduce">
                      <div class="introduce_fontStyle">泰山</div>
                      <div class="introduce_fontStyleTwo">烟雾缭绕的泰山之旅</div>
                    </div>
                    <div class="details">
                      <div class="details_pic">
                        <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang4.jpg">
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
              </el-tab-pane>
              <el-tab-pane label="攻略" name="third">
                                <div class="blockThree">
                  <div class="block">
                    <div class="block_pic" >
                      <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story5.jpg&quot;);"></div>
                    </div>
                    <div class="introduce">
                      <div class="introduce_fontStyle">泰山</div>
                      <div class="introduce_fontStyleTwo">拥抱海纳百川的世界</div>
                    </div>
                    <div class="details">
                      <div class="details_pic">
                        <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang5.jpg">
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
                  <div class="block">
                    <div class="block_pic" >
                      <div class="img_style" style="width: 100%; height: 100%; background-image: url(&quot;https://profive.oss-cn-beijing.aliyuncs.com/personCenter/story4.jpg&quot;);"></div>
                    </div>
                    <div class="introduce">
                      <div class="introduce_fontStyle">泰山</div>
                      <div class="introduce_fontStyleTwo">烟雾缭绕的泰山之旅</div>
                    </div>
                    <div class="details">
                      <div class="details_pic">
                        <img style="width: 100%; height: 100%; border-radius:50px;" src="https://profive.oss-cn-beijing.aliyuncs.com/personCenter/touxiang4.jpg">
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
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <div>
        <bottom-another></bottom-another>
      </div>
    </div>
</template>

<script>
import bottomAnother from "@/components/bottomAnother";
import navBar from "@/components/navBar";

export default {
  name: "HelloWorld",
  components: {
    bottomAnother,
    navBar
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toDetailPage() {
      this.$router.push("detailPage");
    }
  }
};
</script>

<style scoped lang="scss" scoped>
.person_all {
  height: 2000px;
  .center_top {
    height: 500px;
    display: flex;
    .big_pic {
      width: 50%;
      height: 502px;
      img {
        width: 100%;
        transition: All 0.4s ease-in-out;
        -webkit-transition: All 0.4s ease-in-out;
        -moz-transition: All 0.4s ease-in-out;
        -o-transition: All 0.4s ease-in-out;
      }
      img:hover {
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2);
      }
    }
    .small_pic {
      width: 50%;
      height: 500px;
      display: flex;
      .small_left {
        height: 500px;
        width: 50%;
        .left_top {
          height: 50%;
          width: 100%;
          img {
            width: 100%;
            transition: All 0.4s ease-in-out;
            -webkit-transition: All 0.4s ease-in-out;
            -moz-transition: All 0.4s ease-in-out;
            -o-transition: All 0.4s ease-in-out;
          }
          img:hover {
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
          }
        }
        .left_bottom {
          height: 50%;
          width: 100%;
          img {
            width: 100%;
            transition: All 0.4s ease-in-out;
            -webkit-transition: All 0.4s ease-in-out;
            -moz-transition: All 0.4s ease-in-out;
            -o-transition: All 0.4s ease-in-out;
          }
          img:hover {
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
          }
        }
      }
      .small_right {
        height: 500px;
        width: 50%;
        .right_top {
          height: 50%;
          width: 100%;
          img {
            width: 100%;
            transition: All 0.4s ease-in-out;
            -webkit-transition: All 0.4s ease-in-out;
            -moz-transition: All 0.4s ease-in-out;
            -o-transition: All 0.4s ease-in-out;
          }
          img:hover {
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
          }
        }
        .right_bottom {
          height: 50%;
          width: 100%;
          img {
            width: 100%;
            transition: All 0.4s ease-in-out;
            -webkit-transition: All 0.4s ease-in-out;
            -moz-transition: All 0.4s ease-in-out;
            -o-transition: All 0.4s ease-in-out;
          }
          img:hover {
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
          }
        }
      }
    }
  }
}
._1opbq4k4 {
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background-color: rgb(0, 0, 0);
  position: relative;
  width: 67%;
  height: 500px;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
}
._1opbq4k5 {
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background-color: rgb(0, 0, 0);
  position: relative;
  width: 67%;
  height: 500px;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
}
.center_bottom{
  height: 1200px;
  // background-color: red;
  width: 70%;
  margin: auto;
  .middle_title{
    width: 100%;
    display: flex;
    height: 120px;
    .title{
      width: 100%;
      font-family: "微软雅黑";
      font-size: 32px;
      font-weight: 800;
      color: #484848;
      margin-top: 50px;
    }
  }
  .middle_tab{
    height: 200px;
    // background-color: green;
    width: 100%;
    .el-tabs__item is-top{
      font-family: "微软雅黑";
      font-size: 12px;
      font-weight: 800;
      color: #484848;
    }
  }
}

.blockThree{
  height: 310px;
  width: 100%;
  // background-color: red;
  margin-top: 50px;
  justify-content: space-between;
  display: flex;
}
.block{
  height: 310px;
  width: 258px;
  // background-color: yellow;
}
.block_pic{
  height: 258px;
  width: 258px;
  // background-color: pink;
  position: relative;

  img{
    height: 258px;
    width: 258px;

  }
}
.img_style {
    position: absolute;
    // animation-name: keyframe_18jn58a;
    // animation-duration: 300ms;
    // animation-timing-function: ease-out;
    background-size: cover;
    background-position: 50% 50%;
    // background-repeat: no-repeat;
    border-radius: 6px;
}
.details{
  height:25px;
  // background-color:blue;
  width:100%;
  display: flex;
  margin-left: 5px;

}
.introduce{
  height:27px;
  // background-color:green;
  width:100%;
  display: flex;
  margin-left: 5px;
}
.introduce_fontStyle{
  font-weight:800;
  font-size: 14px;
  color: #484848;
  padding-top: 5px;
  margin-right: 15px;
}
.introduce_fontStyleTwo{
  font-weight:500;
  font-size: 14px;
  color: #484848;
  padding-top: 5px;
}
.details_pic{
  height: 25px;
  width: 25px;
  // background-color: red;
  margin-right: 20px;
}
</style>
