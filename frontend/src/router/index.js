import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'trainer',
    component: () => import('../components/Trainer/Index.vue')
  },
  {
    path: '/trainer',
    name: 'trainer',
    component: () => import('../components/Trainer/Index.vue')
  },
  {
    path: '/pitch',
    name: 'pitch',
    component: () => import('../components/Pitch/PitchTrainer.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
