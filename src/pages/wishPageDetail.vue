<template>
  <div>
    <nav-bar></nav-bar>

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
    }
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>

</style>
