export interface ServerInfo {
  ip: string
  port: number
  debug: {
    ping: boolean
    query: boolean
    srv: boolean
    querymismatch: boolean
    ipinsrv: boolean
    cnameinsrv: boolean
    animatedmotd: boolean
    cacheit: boolean
    cachetime: number
    cacheexpire: number
    apiversion: number
    error: {
      query: string
    }
  }
  motd: {
    raw: Array<string>
    clean: Array<string>
    html: Array<string>
  }
  players: {
    online: number
    max: number
    list: Array<Player> | null
  }
  version: string
  online: boolean
  protocol: {
    version: number
    name: string
  }
  icon: string
  mods: Array<Mod>
  eula_blocked: boolean
}

interface Mod {
  name: string
  version: string
}

interface Player {
  uuid: string
  name: string
}
