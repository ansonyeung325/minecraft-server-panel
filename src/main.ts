import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faGears } from '@fortawesome/free-solid-svg-icons/faGears'

library.add(faTerminal)
library.add(faHouse)
library.add(faGears)
library.add(faAngleUp)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
