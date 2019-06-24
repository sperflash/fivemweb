<template>
      <div class="amap-wrapper">
      <el-amap vid="amapDemo"
        :center="center"
        :zoom="zoom"
        class="amap-demo">
        <el-amap-marker vid="marker"
          :position="center"
          :label="label"
           >
        </el-amap-marker>
        <el-amap-marker vid="marker"
          :position="a"
          :label="label"
           >
        </el-amap-marker>
      </el-amap>
    </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";

export default {
  name: "HelloWorld",
  data() {
    return {
      list:[
        {
          label:{
            content:'钦汇园',
            offset:[10,12]
          },
          label:{
            content:'haha汇园',
            offset:[9,11]
          },
        }
      ],
      zoom: 12,
      a: [121.59555, 31.19456],
      center: [121.59996, 31.197646],
      label:{
        content:'钦汇园',
        offset:[10,12]
      },
    };
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
hr{
  border-color: red;
  border-style: dashed;
}
.amap-wrapper{
  height: 700px;
}
</style>
