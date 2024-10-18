<template>
  <div id="skeleton">
    <div v-if="isLoading" class="overlay"></div>
    <div :class="class">
      <img :src="imgsrc" :alt="alt" style="object-fit: contain; width: 100%; height: 100%" />
    </div>
  </div>
</template>
<script lang="ts">
import defaultImg from '@/assets/default-server-icon.png'

export default {
  props: {
    class: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      imgsrc: defaultImg
    }
  },
  mounted() {
    if (this.src) {
      this.imgsrc = this.src
    }
  },
  methods: {},
  watch: {
    src(newsrc: string) {
      if (newsrc) {
        this.imgsrc = newsrc
      }
    }
  }
}
</script>

<style scoped>
#skeleton {
  width: fit-content;
  height: fit-content;
  position: relative;
  padding: 1px;
  border-radius: var(--card-border-radius);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--color-disable);
  z-index: 1;
}
</style>
