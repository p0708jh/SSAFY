<template>
  <div>
    <div><h1>보드 입니다</h1></div>
    <div> <router-link to="/board/1"> 1번 게시글 </router-link> </div>
    <div> <router-link to="/board/2"> 2번 게시글 </router-link> </div>
    <div> <router-link to="/board/3"> 3번 게시글 </router-link> </div>
    <div> <router-link to="/board/4"> 4번 게시글 </router-link> </div>

    <button @click="go789">Go 789</button>
  </div>
</template>

<script>
export default {
  methods:{
    go789(){
      this.$router.push("/board/789");
    }
  }
};
</script>

<style>
</style>