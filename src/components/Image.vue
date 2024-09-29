<template>
  <img :src="imgsrc" :alt="alt" />
</template>
<script lang="ts">
import defaultImg from '@/assets/default-server-icon.png'

export default {
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
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
