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
  // {
  //   path: '/pitch',
  //   name: 'pitch',
  //   component: () => import('../components/Pitch/PitchTrainer.vue')
  // },
  {
    path: '/exercises',
    name: 'exercises',
    component: () => import('../pages/Exercises.vue')
  },
  {
    path: '/pitch',
    name: 'pitch-training',
    component: () => import('../components/Exercises/PitchTraining.vue')
  },
  {
    path: '/intervals',
    name: 'interval-training',
    component: () => import('../components/Exercises/IntervalTraining.vue')
  },
  {
    path: '/training',
    name: 'training',
    component: () => import('../pages/ExercisePage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
