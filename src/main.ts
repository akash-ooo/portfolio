// BUSINESS STARTED, DREAMS COME TRUE
import './assets/css/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import customScrollBar from '@/directives/CustomScrollBar'
import textTypingAnimation from '@/directives/textTypingAnimation'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('custom-scroll-bar', customScrollBar)
app.directive('typing-animation', textTypingAnimation)

app.mount('#app')
