import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '@/views/IntroView.vue'
import CompleteEcommerceView from '@/views/CompleteEcommerceView.vue'
import AnalyzerView from '@/views/AnalyzerView.vue'
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
    component: CompleteEcommerceView
  },
  {
    path: '/analyzer',
    name: 'analyzer',
    component: AnalyzerView
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
