import type { RouteRecordNameGeneric } from 'vue-router'
import type { ServerInfo } from '@/model'

export interface AppStore {
  currentRoute: RouteRecordNameGeneric | null
  serverInfo: ServerInfo | null
  openSidemenu: boolean
}
