import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '@/views/IntroView.vue'
import CompleteEcommerce from '@/views/CompleteEcommerce.vue'
import LaravelCdrView from '@/views/LaravelCdrView.vue'
import GamingView from '@/views/GamingView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import OtherView from '@/views/OtherView.vue'

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
    path: '/complete-ecommerce',
    name: 'ecommerce',
    component: CompleteEcommerce
  },
  {
    path: '/laravel-cdr-analyzer',
    name: 'lc',
    component: LaravelCdrView
  },
  {
    path: '/gaming-contest-platform',
    name: 'gaming',
    component: GamingView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/other-projects',
    name: 'others',
    component: OtherView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {name: 'intro'}
  }
]
})

export default router
