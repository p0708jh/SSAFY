<template>
  <div>
    <h1>주문리스트</h1>

    <ul>
      <li v-for="order in orders" :key="order.id">{{order.name}}</li>
    </ul>
  </div>
</template>

<script>


import { api } from "@/utils/axios";

export default {
  data() {
    return {
      orders: [],
    };
  },
  async created() {

    const result = await api.orders.findAll();
    this.orders = result.data;
  },
};
</script>
</script>

<style scoped>

</style>