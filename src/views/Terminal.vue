<template>
  <div class="warpper">
    <div id="terminal">
      <div id="server-message">
        <!-- Insert Message from server -->
      </div>
      <div class="input-wrapper">
        <p class="prefix">anson server %</p>
        <input
          id="inputField"
          class="input-field"
          type="text"
          v-model="input"
          @focus="isFocus = true"
          @blur="isFocus = false"
          @keydown.enter="sendMessage"
          autocomplete="off"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { ComponentData } from '@/models/componentData'
import { Logger, now } from '@/utils/logger'

interface TerminalComponentData extends ComponentData {
  socket: WebSocket
  isFocus: boolean
  input: string
}

export default {
  name: 'Terminal',
  data(): TerminalComponentData {
    return {
      logger: new Logger('Terminal'),
      socket: new WebSocket('ws://localhost:8080/ws'),
      isFocus: false,
      input: ''
    }
  },
  methods: {
    sendMessage() {
      if (!this.isFocus) {
        return
      }
      document.getElementById('server-message')!.innerHTML +=
        `<div>[${now(new Date())}] ${this.input}</div>`
      this.socket.send(this.input)
      this.input = ''
      setTimeout(this.scrollToBottom, 100)
    },
    scrollToBottom() {
      const container: HTMLElement = document.getElementById('terminal')!
      container.scrollTo(0, container.scrollHeight)
    }
  },
  mounted() {
    const inputField = document.getElementById('inputField')
    inputField?.focus()

    this.socket.onopen = () => {
      this.logger.info('WebSocket connection established')
    }
    this.socket.onmessage = (event: MessageEvent) => {
      this.logger.info(`Message Resceived from Websocket: ${event.data}`)
      document.getElementById('server-message')!.innerHTML += `<div>${event.data}</div>`
    }
    this.socket.onclose = () => {
      this.logger.info('WebSocket connection closed')
    }
    this.socket.onerror = (error) => {
      this.logger.info(`Error occurred during Websocket connection: ${error}`)
    }
  }
}
</script>

<style scoped>
@import '../assets//base.css';

.warpper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;
}

#terminal {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 10px;
  background-color: black;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.input-field {
  flex: 1;
  height: 30px;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  font-size: 16px;
}

.prefix {
  flex-shrink: none;
  flex-grow: none;
  flex-wrap: none;
  color: white;
  margin-right: 2px;
}

.input-wrapper {
  display: flex;
  align-items: center;
}

#server-message {
  display: flex;
  flex-direction: column;
  color: white;
}
</style>
