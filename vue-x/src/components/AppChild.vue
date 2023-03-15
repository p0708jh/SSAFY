<template>
  <div>
    <h1>AppChild</h1>
    <h2>이름 : {{$store.state.name}}</h2>
    <h2>나이 : {{$store.state.age}}</h2>

    <GrandChild></GrandChild>
    </div> 
</template>

<script>

import GrandChild from "./GrandChild.vue"

export default {
  components:{
    GrandChild
  }
}
</script>

<style>

</style>