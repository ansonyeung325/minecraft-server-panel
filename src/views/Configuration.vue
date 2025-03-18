<template>
  <div class="wrapper">
    <!-- SideBar -->
    <div class="sidebar">
      <ul class="nav-list">
        <li
          @click="navigateTo('general')"
          class="nav-item caption"
          :class="{ sectionActive: currentSection == 'general' }"
        >
          General
        </li>
        <li
          @click="navigateTo('advanced')"
          class="nav-item caption"
          :class="{ sectionActive: currentSection === 'advanced' }"
        >
          Advanced
        </li>
      </ul>
    </div>

    <div id="scrollView" class="main">
      <!-- General Section -->
      <div id="general">
        <div class="headline6">General</div>

        <ConfigPropertySection
          :title="'Allow Flight'"
          :sub-title="'allow-flight'"
          :discription="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea nihil recusandae saepeplaceat,'"
        >
          <template v-slot:input>
            <SwitchButton :default-value="false" :callback="(bool) => {}" />
          </template>
        </ConfigPropertySection>

        <ConfigPropertySection
          :title="'Difficulty'"
          :sub-title="'Difficulty'"
          :discription="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea nihil recusandae saepeplaceat,'"
        >
          <template v-slot:input>
            <DropDownMenu
              :options="['Peacful', 'Easy', 'Normal', 'Hard']"
              :callback="(value) => {}"
            />
          </template>
        </ConfigPropertySection>

        <div class="section">
          <div class="control-item">
            <div class="item-title">
              <div class="body2">Difficulty</div>
              <div class="caption key-name">difficulty</div>
            </div>
            <TextInput :callback="(value) => {}" :default-value="''" />
          </div>
          <div class="caption discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea nihil recusandae saepe
            placeat, sed odio est nesciunt mollitia nemo laborum eos veniam esse, nostrum doloribus
            quibusdam error qui voluptatem?
          </div>
        </div>
        <div class="section">
          <div class="control-item">
            <div class="item-title">
              <div class="body2">View distance</div>
              <div class="caption key-name">view-distance</div>
            </div>
            <NumberInput :callback="(value) => {}" :default-value="0" />
          </div>
          <div class="caption discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea nihil recusandae saepe
            placeat, sed odio est nesciunt mollitia nemo laborum eos veniam esse, nostrum doloribus
            quibusdam error qui voluptatem?
          </div>
        </div>
      </div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div style="height: 100px"></div>
      <div id="advanced">
        <div class="headline6">Advanced</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  DropDownMenu,
  NumberInput,
  SwitchButton,
  TextInput,
  ConfigPropertySection
} from '@/component'
import type { ComponentData } from '@/model'
import appStore from '@/store'
import { Logger } from '@/utils/logger'

interface ConfigurationData extends ComponentData {
  click: boolean
  currentSection: string
}

export default {
  name: 'Configuration',
  components: {
    SwitchButton,
    DropDownMenu,
    TextInput,
    NumberInput,
    ConfigPropertySection
  },
  data(): ConfigurationData {
    return {
      logger: new Logger('Configuration'),
      appStore: appStore,
      click: false,
      currentSection: ''
    }
  },
  mounted() {
    this.scrollListener()
  },
  methods: {
    scrollListener() {
      const container = document.getElementById('scrollView')
      const general = document.getElementById('general')
      const advanced = document.getElementById('advanced')
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.currentSection = entry.target.id
            }
          })
        },
        {
          root: container,
          threshold: [0]
        }
      )
      if (advanced) {
        observer.observe(advanced)
      }

      if (general) {
        observer.observe(general)
      }
    },
    navigateTo(id: string): void {
      this.logger.info(`navigating to ${id}`)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.sidebar {
  width: var(--sidemenu-width);
  height: 100%;
  border-right: 1px solid var(--color-disable);
  background-color: var(--color-primary-light);
}

.main {
  flex: 1;
  height: 100%;
  padding: 40px;
  overflow-y: auto;
}

.section {
  width: 100%;
  height: 100%;
  padding: 20px;
}

.control-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.item-title {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.discription {
  margin-top: 10px;
  color: grey;
}

.key-name {
  color: rgb(236, 166, 86);
}

.sidebar {
  padding: 20px;
}

.nav-list {
  width: 100%;
  height: 100%;
  list-style: none;
}

.nav-item {
  padding: 10px;
  margin: 5px 0;
  text-align: start;
  cursor: pointer;
  border-radius: var(--button-border-radius);
}

.sectionActive {
  background-color: var(--color-hover);
}

.nav-item:hover {
  background-color: var(--color-hover);
}

@media screen and (max-width: 768px) {
}
</style>
