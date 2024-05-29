<template>
  <div class="bg-black w-screen h-screen -z-40 snap-y snap-proximity">
    <section
      class="relative flex items-center justify-center h-screen overflow-hidden w-screen snap-center"
      v-for="(work, index) in works.slice(0, 20)"
      :key="index"
      :id="'section-' + index"
    >
      <div class="z-40 absolute top-1/2 left-1/4 transform -translate-y-1/2">
        <NuxtLink :to="'/film/' + index">
          <div id="title" class="flex cursor-pointer animate_underline">
            <h1 class="z-50 hero glitch layers" :data-text="work.brand">
              <span>{{ work.brand }}</span>
            </h1>
            <h1
              v-if="work.name"
              class="z-50 hero glitch layers"
              :data-text="'&nbsp-&nbsp' + work.name"
              id="name"
            >
              <span id="name">{{ '&nbsp-&nbsp' + work.name }}</span>
            </h1>
          </div>
        </NuxtLink>
        <h2 v-if="work.production" class="layers indextext" id="production">
          {{ work.production }}
        </h2>
        <h2 v-if="work.crew" class="z-50 layers indextext" id="crew">
          {{ work.crew }}
        </h2>
      </div>
      <video
        id="video"
        class="no_controls absolute z-10 w-auto min-w-screen min-h-screen max-w-none aspect-video"
        muted
        :src="work.preview"
        autoplay
        webkit-playsinline
        loop
      ></video>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/store/projects'
const projectsStore = useProjectsStore()
const works = projectsStore.projects.works.data
</script>
<style scoped>
video::-webkit-media-controls,
video::-moz-media-controls,
video::-o-media-controls,
video::-ms-media-controls {
  display: none !important;
}
video {
  pointer-events: none !important;
}
</style>
