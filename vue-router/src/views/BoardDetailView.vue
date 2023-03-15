<template>
  <div>
    <h1>Detail</h1>
    <h2>여기는 {{id}} 번의 게시글</h2>
  </div>
</template>

<script>
export default {
data(){
  return{
    id: null,
  }
},
created(){
    console.log(this.$router);
    this.id=this.$route.params.id;
  }
}
</script>

<style>

</style>