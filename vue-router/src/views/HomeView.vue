<template>
  <div class="home">
    <h1>Home</h1>
    <h1>할배</h1>
    <div>{{ halbaeData }}</div>
    <HomeChild
      :halbaeData="halbaeData"
      :halbaeData2="halbaeData2"
      @changeHalbaeData="changeHalbaeData"
    ></HomeChild>
  </div>
</template>

<script>
import HomeChild from "@/components/HomeChild.vue";

export default {
  components: {
    HomeChild,
  },
  data() {
    return {
      halbaeData: "나는 할배데이터!",
      halbaeData2: "나는 두번째 할배 데이터!",
    };
  },
  methods: {
    changeHalbaeData(text) {
      this.halbaeData=text;
    },
  },
};
</script>