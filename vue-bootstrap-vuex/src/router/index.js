import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import TodoListView from '../views/todos/TodoListView.vue'
import TodoDetailView from '../views/todos/TodoDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainView 
  },
  {
    path: '/todos',
    component:TodoListView
  },
  {
    path: '/todos/:id',
    component:TodoDetailView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
