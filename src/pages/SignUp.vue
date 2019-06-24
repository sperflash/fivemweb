<template>
  <div>
    <navBar></navBar>
    <div class="Sign_all">
      <div class="left">
        <img style="height:400px;" src="http://profive.oss-cn-beijing.aliyuncs.com/SignUpLogin/SignUp.jpg" mode="aspectFill">
      </div>
      <div class="right">
        <div class="form">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model.number="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <el-button @click="toLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHotel } from "@/api/hotel.js";
import { signUpApi, getThoughts } from "@/api/SignUp.js";
import navBar from "@/components/navBar";

export default {
  components: {
    navBar
  },
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: 0,
        name: "",
        userName: "",
        phoneNumber: "",
        password: "",
        userId : 1
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }]
      }
    };
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入11位手机号码"));
        } else {
          if (value < 10000000000) {
            callback(new Error("号码格式不正确"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        callback();
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
  },
  methods: {
    getThought() {
      console.log("jjjj");
      getThoughts( this.userId ).then(res => {
        console.log("jjjjxdzgDFjj");
        console.log(res);
      });
    },
    // postSignUp() {
    //   console.log("jjjj");
    //   signUpApi( this.ruleForm.name, this.ruleForm.age, ruleForm.pass ).then(res => {
    //     console.log("jjjjxdzgDFjj");
    //     console.log(res);
    //   });
    // },
    submitForm(formName) {
      // this.postSignUp();
      signUpApi( this.ruleForm.name, this.ruleForm.age, ruleForm.pass ).then(res => {
        console.log("jjjjxdzgDFjj");
        console.log(res);
      });
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("注册成功!");
      //   } else {
      //     console.log("注册未成功!!");
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toLogin() {
      this.$router.push("Login");
    }
  },
  created() {
    console.log()
    this.getThought();
  }
};
</script>

<style scoped lang="scss" scoped>
.Sign_all {
  // background-color: blueviolet;
  height: 600px;
  width: 100%;
  display: flex;
  .left {
    width: 60%;
    // background-color: aqua;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .right {
    width: 40%;
    display: flex;
    // background-color: bisque;
    align-items: center;
    justify-content: center;
    .form {
      height: 400px;
      width: 70%;
      // background-color: red;
      border-radius: 25px;
      border: 2px solid #72b4ee;
      display: flex;
      align-items: center;
      padding-left: 25px;
      // justify-content: center;
    }
  }
}
</style>
