<template>
  <div>
    <nav-bar></nav-bar>
    <div class="contact_top">
        <div style="width: 100%; height:200px;">
          <div class="top_title">
          您现在在讨论房间中。。。
          </div>
        </div>
    </div>

    <div class="room">

    </div>

    <bottomAnother></bottomAnother>
  </div>
</template>


<script>
import  navBar  from '@/components/navBar';
import bottomAnother from "@/components/bottomAnother";

export default {
  components: {
    navBar,
    bottomAnother
  },
  // name: "HelloWorld",
  data() {
    return {

    };
  },
   methods: {
      handleChange(value) {
        console.log(value);
      }
  },
  created() {

  }

};
</script>

<style lang="scss" scoped>
.contact_top {
  background-color: #2a6aa1;
  height: 330px;
  display: flex;
  .top_title {
    height: 80px;
    width: 40%;
    margin-top: 120px;
    margin-left: 250px;
    font-family: "微软雅黑";
    color: white;
    font-size: 40px;
    font-weight: 600;
  }
  .top_search {
    height: 80px;
    width: 100%;
    margin-top: 20px;
  }
}
.room{
  height: 700px;
  width: 80%;
  background-color: red;
  margin: auto;
  margin-top: 30px;
}
</style>
