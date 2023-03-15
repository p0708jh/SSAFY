import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Board from '../views/Board.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/board',
    name: 'board',
    component: Board
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
