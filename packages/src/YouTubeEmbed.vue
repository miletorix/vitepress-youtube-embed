<template>
  <div class="video-container">
    <iframe
      :src="computedSrc"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="YouTube video player"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  }
})

const computedSrc = computed(() => {
  const base = `https://www.youtube.com/embed/${props.videoId}`
  const params = '?modestbranding=1&rel=0'
  return base + params
})
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: auto;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>