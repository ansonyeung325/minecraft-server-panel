import '@/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faAngleUp,
  faArrowRightArrowLeft,
  faBars,
  faCheck,
  faMinus,
  faPlus,
  faRightFromBracket,
  faTerminal,
  faXmark,
  faPowerOff
} from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faGears } from '@fortawesome/free-solid-svg-icons/faGears'

library.add(
  faPowerOff,
  faTerminal,
  faXmark,
  faHouse,
  faGears,
  faAngleUp,
  faBars,
  faCheck,
  faAngleDown,
  faMinus,
  faPlus,
  faArrowRightArrowLeft,
  faRightFromBracket
)
const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
