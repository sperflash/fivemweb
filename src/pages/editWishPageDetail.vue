<template>
  <div>
    <nav-bar></nav-bar>
    <div class="edit_all">
      <div class="edit_allLeft" v-if="show">
        <div class="editLeft_title">
          <div class="editLeft_titleLeft" @click="toWishPage()">
            所有心愿单
          </div>
          <div class="edit_radius" @click="changeStatus()">
            <i class="iconfont icon-bianji " style="color: #72b4ee; font-size:30px;"></i>
          </div>
        </div>
        <div class="wishListText">
          <div class="title">
            五岳旅游小计划
          </div>
          <div class="title_detail">
            没有日期.一位房客
          </div>
          <div class="button" @click="toYaoQing()">
            <el-button plain>邀请其他人</el-button>
          </div>
          <div class="edit_line">
          </div>
          <div class="title_item">
            尚未收藏任何内容
          </div>
          <div class="title_detail">如果看到喜欢的心愿清单，您可以点击心形图标将其保存。如果您计划和其他人一起出行，也可以邀请他们一起来看看，请他们也保存并选出各自喜爱的清单。</div>
          <div class="review">
            <el-button type="primary" @click="toWishPage()">开始浏览</el-button>
          </div>
        </div>
      </div>
      <div class="edit_allLeft" v-if="showEdit">
        <div class="editLeft_title">
          <div class="editLeft_titleLeft" @click="returnPage()">
            取消
          </div>
          <div class="editLeft_edit">
            <el-button type="primary" plain @click="returnPage()">保存</el-button>
          </div>
        </div>
        <div class="setting">
          <div class="setting_title">
            设置
          </div>
          <div class="nameInput">
            <div style="font-weight:600; color: #484848; ">名称</div>
            <el-input style="margin-top: 30px;" v-model="input" placeholder="请输入内容"></el-input>
            <div class="InputLine"></div>
          </div>
          <div class="nameInput">
            <div style="font-weight:600; color: #484848; ">人数</div>
            <el-input style="margin-top: 30px;" v-model="input" placeholder="请输入内容"></el-input>
            <div class="InputLine"></div>
          </div>
          <div class="nameInput">
            <div style="font-weight:600; color: #484848; margin-bottom:30px;">出行日期</div>
            <div class="block">
              <span class="demonstration">默认</span>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
            <div class="InputLine"></div>
          </div>
          <div class="nameInput">
            <div class="review">
              <el-button type="primary" @click="toWishPage()" style="margin-top: -60px;">开始浏览</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="edit_allLeft" v-if="showYaoqing">
        <div class="editLeft_title" style="display:block">
          <div class="editLeft_titleLeft" @click="returnPage()">
            取消
          </div>
          <!-- <div class="editLeft_edit">
            <el-button type="primary" plain @click="returnPage()">保存</el-button>
          </div> -->
          <div class="yao_Content">
            <div class="setting_title" style="margin-top: 20px;">
              好友
            </div>
            <div style="font-weight:600; color: #484848; ">邀请好友和家人一起计划旅行</div>
            <div style="font-weight:600; color: #484848; margin-top:40px;">通过链接邀请</div>
            <el-input style="margin-top: 30px;" v-model="input" placeholder="https://www.airbnb.cn/wishlists/525558652/join?invite_code=IBQKPGMT&inviter_id=262321796"></el-input>
            <div class="InputLine"></div>
            <div class="yaoContent">
              通过电子邮件邀请
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="edit_allRight">
        <biao-qian></biao-qian>
      </div>
    </div>
    <bottomAnother></bottomAnother>
  </div>
</template>


<script>
import bottomAnother from "@/components/bottomAnother";
import navBar from "@/components/navBar";
import BiaoQian from "@/components/BiaoQian";

export default {
  components: {
    navBar,
    bottomAnother,
    BiaoQian
  },
  data() {
    return {
      showEdit: false,
      show: true,
      showYaoqing: false,
      input: "",
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
    changeStatus() {
      this.show = false;
      this.showYaoqing = false;
      this.showEdit = true;
    },
    returnPage() {
      this.showYaoqing = false;
      this.showEdit = false;
      this.show = true;

    },
    toWishPage() {
      this.$router.push("wishPage");
    },
    toYaoQing() {
      this.show = false;
      this.showEdit = false;
      this.showYaoqing = true;
    }
  },
  created() {}
};
</script>

<style lang="scss">
.edit_all {
  height: 700px;
  display: flex;
  .edit_allLeft {
    width: 40%;
    height: 700px;
    // background-color: pink;
  }
  .edit_allRight {
    width: 60%;
    height: 700px;
    // background-color: yellow;
  }
  .editLeft_title {
    height: 120px;
    // background-color: red;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .editLeft_titleLeft {
    margin-left: 50px;
    font-size: 20px;
    color: #5babf1;
    font-weight: 800;
  }
  .editLeft_edit {
    width: 50px;
    height: 50px;
    // background-color: blue;
    margin-left: 350px;
    display:flex;
    align-items: center;
    justify-content: center;
    .el-button{
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.12), 0 6px 6px rgba(0, 0, 0, 0.04);
    }

  }
  .edit_radius{
    width: 50px;
    height: 50px;
    // background-color: blue;
    margin-left: 350px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .wishListText{
    height: 300px;
    width: 85%;
    // background-color: aqua;
    margin-left: 50px;
    .title{
      font-size: 30px;
      color: #484848;
      font-weight: 800;
    }
    .title_detail{
      font-size: 15px;
      margin-top: 15px;
      color: #484848;
    }
    .button{
      height: 50px;
      // background-color: rebeccapurple;
      margin-top:50px;
    }
  }
  .edit_line{
    height: 50px;
    // background-color: red;
    border-bottom: rgb(212, 210, 210) 1px solid;
  }
  .title_item{
    color:#484848;
    font-weight: 600;
    margin-top: 50px;
  }
  .review{
    height: 100px;
    // background-color: red;
    margin-top: 50px;
    .el-button{
      height: 60px;
      widows: 80px;;
    }
  }
  .setting{
    height: 300px;
    // background-color: red;
    width: 80%;
    margin-left: 50px;
  }
  .setting_title{
    height: 70px;
    // background-color: pink;
    font-size: 30px;
    font-weight: 800;
    color:#484848;
  }
  .nameInput{
    height: 150px;
    // background-color: aqua;
  }
  .InputLine{
    height: 20px;
    border-bottom: #e9e5e5 1px solid;
  }
  .yao_Content{
    height: 700px;
    // background-color: red;
    width:84%;
    margin: auto;
  }
  .yaoContent{
    height: 300px;
    background-color: red;
    margin-top: 40px;
    font-size: 15px;
    font-weight: 800;
    color: #484848;
  }
}
</style>
