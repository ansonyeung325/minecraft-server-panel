import type { Logger } from '@/utils/logger'
import type { AppStore } from '@/model'

export interface ComponentData {
  logger: Logger
  appStore: AppStore
}
