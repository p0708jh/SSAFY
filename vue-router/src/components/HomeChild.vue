<template>
  <div>
    <h1>자식</h1>
    {{ halbaeData }}
    {{ halbaeData2 }}

    <HomeChildChild
      :halbaeData="halbaeData"
      :halbaeData2="halbaeData2"
     @changeHalbaeDataFromChildChild="changeHalbaeData"
    ></HomeChildChild>
  </div>
</template>

<script>
import HomeChildChild from "./HomeChildChild.vue";

export default {
  components: {
    HomeChildChild,
  },
  props: ["halbaeData", "halbaeData2"],
    methods:{
    changeHalbaeData(text){
      this.$emit("changeHalbaeData",text);
    }
  }
};
</script>

<style>
</style>