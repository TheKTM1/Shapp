import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faClipboard, faCreditCard } from '@fortawesome/free-regular-svg-icons'
import router from './router'

library.add(faClipboard, faCalendar, faCreditCard)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
