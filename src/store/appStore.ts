import type { AppStore } from '@/model'
import { reactive } from 'vue'

const appStore = reactive<AppStore>({
  currentRoute: null,
  serverInfo: null
})

export default appStore
