<template>
  <div id="app">
<h1>App</h1>
<h2>이름 : {{$store.state.name}}</h2>
    <h2>나이 : {{$store.state.age}}</h2>
    <AppChild></AppChild>

    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
import AppChild from './components/AppChild.vue'

export default ({
  components: {
    AppChild,
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
