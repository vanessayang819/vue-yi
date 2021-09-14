import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },

  {
    path: '/result',
    name: 'Result',
    component: () => import( '../views/Result.vue')
  },
  

]

const router = new VueRouter({
  routes
})

export default router
