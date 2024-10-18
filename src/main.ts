import '@/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCheck,
  faMinus,
  faPlus,
  faTerminal,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faGears } from '@fortawesome/free-solid-svg-icons/faGears'

library.add(
  faTerminal,
  faXmark,
  faHouse,
  faGears,
  faAngleUp,
  faBars,
  faCheck,
  faAngleDown,
  faMinus,
  faPlus
)
const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
