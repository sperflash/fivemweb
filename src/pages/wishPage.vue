<template>
  <div>
    <nav-bar></nav-bar>
    <div class="wishPage_all">
      <div class="all_top">
        <div class="all_topTitle">
          心愿单
        </div>
        <div class="all_addWish">
          <div class="button">
            <el-button type="text" style="margin-left: 10px;" @click="dialogFormVisible = true">创建心愿单</el-button>
          </div>
        </div>
      </div>
      <div class="mine_title">您的心愿单</div>
      <div class="wishPage_mine" @click="toEditWishPageDetail()">
        <div class="myWish" v-for="(item,index) in myWishList" :key="index" >
          <div class="image_style">
            <img :src="item.path"  mode="aspectFill">
            <div class="image_title">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="mine_title">热门心愿单</div>
      <div class="wishPage_mine" @click="toWishPageDetail()">
        <div class="myWish" v-for="(item,index) in myWishListTwo" :key="index" >
          <div class="image_style">
            <img :src="item.path"  mode="aspectFill">
            <div class="image_title">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="wishPage_mine" @click="toWishPageDetail()">
        <div class="myWish" v-for="(item,index) in myWishList" :key="index" >
          <div class="image_style">
            <img :src="item.path"  mode="aspectFill">
            <div class="image_title">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog style="border: #72b4ee 2px solid;" title="创建心愿单" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="心愿单名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="隐私设置" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="每个人" value="shanghai"></el-option>
            <el-option label="仅限受邀用户" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="toEditWishPageDetail()">确 定</el-button>
      </div>
    </el-dialog>
    <bottomAnother></bottomAnother>
  </div>
</template>


<script>
import bottomAnother from "@/components/bottomAnother";
import navBar from "@/components/navBar";

export default {
  components: {
    navBar,
    bottomAnother
  },
  data() {
    return {
      myWishList: [
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage1.jpg",
          name: "五岳游"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage2.jpg",
          name: "泰山之旅"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage3.jpg",
          name: "景点雨季"
        }
      ],
      myWishListTwo: [
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage4.jpg",
          name: "难忘的回忆"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage5.jpg",
          name: "西安之旅"
        },
        {
          path:
            "https://profive.oss-cn-beijing.aliyuncs.com/detailPage/story/detailPage6.jpg",
          name: "兵马俑"
        }
      ],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    toWishPageDetail() {
      this.$router.push("wishPageDetail");
    },
    toEditWishPageDetail() {
      this.dialogFormVisible = false;
      this.$router.push("editWishPageDetail");
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.wishPage_all {
  height: auto;
  // background-color: antiquewhite;
  width: 70%;
  margin: auto;
  display: block;
  .all_top {
    height: 100px;
    width: 100%;
    // background-color: pink;
    margin-top: 30px;
    display: flex;
  }
  .all_topTitle {
    font-weight: 800;
    font-size: 30px;
    color: #484848;
    padding-top: 30px;
  }
  .all_addWish {
    height: 100px;
    width: 100px;
    // background-color: red;
    margin-left: 75%;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .button {
    display: flex;
    justify-items: center;
    align-items: center;
    // background-color: yellow;
    height: 40px;
    width: 100px;
    border: #72b4ee 2px solid;
  }
  .wishPage_mine {
    height: 300px;
    // background-color: yellow;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mine_title{
    font-size: 20px;
    font-weight: 600;
    color: #484848;
    margin-top: 50px;
  }
  .myWish {
    height: 222px;
    width: 333px;
    // background-color: red;
  }
  .image_style img{
    height: 222px;
    width: 333px;
  }
  .image_title{
    margin-top: -40px;
    color: aliceblue;
    font-weight: 1000;
    font-size: 15px;
    margin-left: 30px;

  }
}
</style>
