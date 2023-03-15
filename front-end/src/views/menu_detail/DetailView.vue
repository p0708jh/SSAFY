<template>
  <div>
    <h1>디테일</h1>
    <div>
    {{menuId}} 번 메뉴 디테일 페이지 입니다.
    </div>
    <div>
    이름: {{menuDetail.name}}
    </div>
    <div>
    설명: {{menuDetail.description}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      menuId:-1,
      menuDetail:{},
    }
  },
  async created(){
    this.menuId=this.$route.params.id;
    try {
      const response = await axios.get(`http://localhost:8080/api/menus/${this.menuId}`);
      this.menuDetail = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    
  }
}
</script>

<style>

</style>