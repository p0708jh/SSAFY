<template>
  <div>
    <h1>리스트</h1>
    <div v-for="list in lists" :key="list.id">{{list.title}}</div>
  </div>
</template>

<script>
import {api} from "../../utils/api"

export default {
  data(){
    return{
      lists:[]
    }
  },

  async created(){
    this.$store.commit("SET_LOADING",true);
    const result= await api.jsonplaceholder.findAll();
    console.log(result);
    this.lists=result.data;
    this.$store.commit("SET_LOADING",false);
  },


}
</script>

<style>

</style>