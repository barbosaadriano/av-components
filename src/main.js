import { createApp } from 'vue'
import App from './App.vue'
import AvComponents from '.'

import './scss/style.scss'
import { Popover } from 'bootstrap'

createApp(App)
.use(AvComponents)
.mount('#app')

document.querySelectorAll('[data-bs-toggle="popover"]')
.forEach(popover=>{
    new Popover(popover)
})
