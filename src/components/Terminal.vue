<template>
  <div class="terminal-container">
    <div id="server-message">
      <!-- Insert Message from server -->
    </div>
    <div class="input-wrapper">
      <font-awesome-icon icon="terminal" class="prefix" />
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
</template>

<script lang="ts">
import type { ComponentData } from '@/model'
import appStore from '@/store/appStore'
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
      appStore: appStore,
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
    this.socket.onerror = (error: Event) => {
      this.logger.info(`Error occurred during Websocket connection: ${error}`)
    }
  }
}
</script>

<style scoped>
@import '../index.css';

.terminal-container {
  display: flex;
  flex-direction: column;
  border-radius: var(--card-border-radius);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.811);
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.input-field {
  flex: 1;
  height: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.input-wrapper {
  display: flex;
  padding: 6px 14px;
  border-radius: 4px;
  background-color: #7b7b7b;
  align-items: center;
}

#server-message {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  color: white;
}
</style>
