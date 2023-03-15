<template>
  <div>
    <h1>손자</h1>
    {{halbaeData}}
    <button @click="changeHalbaeDataFromChildChild">바꿔봐</button>
  </div>
</template>

<script>

export default{
  components:{
  },
  props:["halbaeData"],
  methods:{
    changeHalbaeDataFromChildChild(){
      this.$emit("changeHalbaeDataFromChildChild","랄랄라라라라라");
    }
  }
}

</script>

<style>

</style>