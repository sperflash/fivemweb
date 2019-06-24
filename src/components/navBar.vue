<template>
  <div>
    <div class="allBar">
      <div class="blank">

      </div>
      <div class="logo_pic">
        <img src="http://profive.oss-cn-beijing.aliyuncs.com/yindao/navPic.png" mode="scaleToFill" style="width: 100%">
      </div>
      <div class="nav">
        <div class="nav_content" >
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click="toYinDao()">引导页</el-menu-item>
            <el-menu-item index="2" @click="toShouYe()">首页</el-menu-item>
            <el-submenu index="3">
              <template slot="title" @click="toShouYe()">功能</template>
              <el-menu-item index="2-1" @click="toHotel()">客服</el-menu-item>
              <el-menu-item index="2-2" @click="toAddPlan()">讨论房间</el-menu-item>
              <el-menu-item index="2-3" @click="toWishPage()">心愿单</el-menu-item>
              <!-- <el-submenu index="2-4">
                <template slot="title" @click="toShouYe()">攻略</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu> -->
            </el-submenu>
            <el-menu-item index="4" @click="toGongLue()">攻略</el-menu-item>
            <!-- <el-menu-item index="5" @click="toShouYe()"><a href="https://www.ele.me" target="_blank">个人中心</a></el-menu-item> -->
            <el-menu-item index="5" @click="toPersonCenter()">个人中心</el-menu-item>
            <el-menu-item index="6" @click="toContactUs()">联系我们</el-menu-item>
            <el-menu-item index="7" @click="toSignUp()">注册</el-menu-item>
            <el-menu-item index="8" @click="toLogin()">登录</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <div v-if="show" class="popText">
      <div >
        <i class="el-icon-close" @click="closePop()"></i>
        <div class="help-Title">
          推荐帮助
        </div>
        <div class="help-search">
          <div>
            <el-autocomplete
            clearable = true
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入搜索内容"
              @select="handleSelect"
            ></el-autocomplete>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </div>
        <div class="help-example">
          <div class="title-style">推荐文章</div>
          <div class="examples">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="如何创建账号" name="1" >
                <div style="font-size: 15px;">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div style="font-size: 15px;">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="如何联系客服" name="2">
                <div style="font-size: 15px;">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div style="font-size: 15px;">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="预定和申请" name="3">
                <div style="font-size: 15px;">简化流程：设计简洁直观的操作流程；</div>
                <div style="font-size: 15px;">清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div style="font-size: 15px;">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="更改和取消" name="4">
                <div style="font-size: 15px;">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div style="font-size: 15px;">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div style="margin-top:20px;">
          <el-button type="primary" style="width:300px; margin-left:50px; height: 45px;" @click="toAnotherPage()">
            <div style="font-size:20px;">
              访问帮助中心
            </div>
          </el-button>
        </div>
        <div style="height:55px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      activeIndex: "",
      activeIndex2: "",
      show: false,
      restaurants: [],
      state: "",
      timeout: null,
      activeName: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toShouYe() {
      this.activeIndex = "2";
      this.activeIndex2= "2";
      this.$router.push("/shouYe");
    },
    toYinDao() {
      this.activeIndex = "1";
      this.activeIndex2= "1";
      this.$router.push("/");
    },
    toHotel() {
      this.$router.push("hotel");
    },
    toSignUp() {
      this.activeIndex = "7";
      this.activeIndex2= "7";
      this.$router.push("SignUp");
    },
    toLogin() {
      this.activeIndex = "8";
      this.activeIndex2= "8";
      this.$router.push("Login");
    },
    toGongLue() {
      this.activeIndex = "4";
      this.activeIndex2= "4";
      this.$router.push("gongLue");
    },
    toContactUs() {
      this.activeIndex = "6";
      this.activeIndex2= "6";
      this.show = true;
    },
    toAnotherPage() {
      this.activeIndex = "6";
      this.activeIndex2= "6";
      this.show = false;
      this.$router.push("contactUs");
    },
    toPersonCenter() {
      this.activeIndex = "5";
      this.activeIndex2= "5";
      this.$router.push("personCenter");
    },
    toAddPlan() {
      this.$router.push("addPlan");
    },
    toWishPage() {
      this.$router.push("wishPage");
    },
    closePop() {
      this.show = false;
    },
    loadAll() {
      return [
        {
          value: "我能否查看预订更改申请的状态？",
          address: "长宁区新渔路144号"
        },
        {
          value: "房客该如何查看预订状态？",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "登录注册出现问题怎么办？",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang="scss" scoped>
.allBar {
  width: 100%;
  position: relative;
  margin-top: -10px;
  display: flex;
}
.blank {
  width: 10%;
  background-color: #ffffff;
}
.logo_pic {
  width: 13.5%;
  background-color: #ffffff;
}
.nav {
  width: 76.5%;
  background-color: #ffffff;
  display: flex;
}
.nav_content {
  background-color: #ffffff;
  width: 80%;
  margin-left: 40%;
}
a {
  text-decoration: none;
}
.el-menu::after {
  clear: none;
}
.popText {
  /* background-color: aquamarine; */
  height: auto;
  width: 400px;
  display: flex;
  right: 5px;
  z-index: 12;
  position: absolute;
  // border: #eee 2px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  .el-icon-close {
    right: 5px;
    display: flex;
    width: 26px;
    height: 26px;
    position: absolute;
  }
  .help-Title {
    border-bottom: rgb(184, 182, 182) 1px solid;
    // background-color: red;
    height: 70px;
    width: 400px;
    display: flex;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    // overflow-wrap: break-word !important;
    font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑,
      "Microsoft YaHei", "Heiti SC" !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
    margin: 0px !important;
  }
  .help-search {
    // background-color: yellow;
    height: 60px;
    width: 400px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .help-example{
    margin-top: 25px;
    // background-color: aqua;
    height:400px;
    .title-style{
      font-size: 13px;
      color: grey;
      margin-left: 20px;
    }
    .examples{
      // background-color: red;
      height: 300px;
      margin-top: 20px;
      margin-left: 20px;
      div{
        font-size: 20px;
        font-family: "微软雅黑";
      }
    }

  }
}
</style>
