<template>
  <img :src="imgsrc" :alt="alt" style="object-fit: contain; width: 100%; height: 100%" />
</template>
<script lang="ts">
import defaultImg from '@/assets/default-server-icon.png'

export default {
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
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
