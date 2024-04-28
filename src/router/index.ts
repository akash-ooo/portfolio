import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '@/views/IntroView.vue'
import CompleteEcommerce from '@/views/CompleteEcommerce.vue'
import LaravelCdrView from '@/views/LaravelCdrView.vue'
import CrossCdrView from '@/views/CrossCdrView.vue'
import GamingView from '@/views/GamingView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ExperimentView from '@/views/ExperimentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'link-active',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView
    },
    {
      path: '/ecommerce',
      name: 'ecommerce',
      component: CompleteEcommerce
    },
    {
      path: '/laravel-cdr-analyzer',
      name: 'lc',
      component: LaravelCdrView
    },
    {
      path: '/cross-platform-cdr-analyzer',
      name: 'cca',
      component: CrossCdrView
    },
    {
      path: '/gaming',
      name: 'gaming',
      component: GamingView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/experiments',
      name: 'experiments',
      component: ExperimentView
    },
  ]
})

export default router
