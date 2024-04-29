// FIRST BUSINESS PRODUCT INITIALIZED, Job -> Course -> Digital Product -> Branding
// Credit: osorina (codepen), custom-cursor (custom-cursor-logo), Animista
import './assets/css/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import customScrollBar from '@/directives/customScrollBar'
import textTypingAnimation from '@/directives/textTypingAnimation'

// Vue setup
const app = createApp(App)
app.use(createPinia())
app.use(router)

// Directives
app.directive('custom-scroll-bar', customScrollBar)
app.directive('typing-animation', textTypingAnimation)

app.mount('#app')