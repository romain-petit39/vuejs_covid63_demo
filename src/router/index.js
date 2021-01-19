import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CenterDetails from '../components/CenterDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/center/:gid',
    name:"CenterDetails",
    component: CenterDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
