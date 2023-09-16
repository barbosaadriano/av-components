import { createApp } from 'vue'
import App from './App.vue'
import AvComponents from '.'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPenToSquare, faXmark, faSquareCheck, faBroom, faCheck, faBan } from '@fortawesome/free-solid-svg-icons'

library.add(faPenToSquare)
library.add(faXmark)
library.add(faSquareCheck)
library.add(faBroom)
library.add(faCheck)
library.add(faBan)

import './scss/style.scss'
import { Popover } from 'bootstrap'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(AvComponents)
.mount('#app')

document.querySelectorAll('[data-bs-toggle="popover"]')
.forEach(popover=>{
    new Popover(popover)
})
