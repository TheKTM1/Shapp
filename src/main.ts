import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faClipboard, faCreditCard } from '@fortawesome/free-regular-svg-icons'

library.add(faClipboard, faCalendar, faCreditCard)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
