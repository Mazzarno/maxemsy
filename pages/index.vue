<template>
  <div class="bg-black w-screen h-screen -z-40 snap-y snap-proximity container">
    <div
      class="fixed top-1/2 right-10 transform -translate-y-1/2 flex-col items-center space-y-5 z-50 m-5 hidden md:flex"
    >
      <div
        v-for="(work, index) in works.slice(0, 20)"
        :key="'dot-' + index"
        @click="scrollToSection(index)"
        class="w-1.5 h-1.5 rounded-full cursor-pointer hero glitch layers hover:w-2 hover:h-2"
        :class="{
          'bg-white w-2.5 h-2.5': currentSection === index,
          'bg-slate-500': currentSection !== index,
        }"
      ></div>
    </div>

    <section
      class="relative flex items-center justify-center h-screen overflow-hidden w-screen snap-center section"
      v-for="(work, index) in works.slice(0, 20)"
      :key="index"
      :id="'section-' + index"
    >
      <div
        class="z-40 absolute left-5 transform -translate-y-1/2 sm:left-1/4 top-1/2"
      >
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
        class="video no_controls absolute z-10 w-auto min-w-screen min-h-screen max-w-none aspect-video pointer-events-none"
        muted
        :src="work.preview"
        autoplay
        webkit-playsinline
        playsinline
        loop
        :aria-label="work.brand"
      ></video>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/store/projects'
const projectsStore = useProjectsStore()
const works = projectsStore.projects.works.data
const { $gsap, $ScrollTrigger, $ScrollTo, $Observer } = useNuxtApp()

const currentSection = ref(0)

const scrollToSection = (index: number) => {
  const section = document.getElementById('section-' + index)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    currentSection.value = index
  }
}

const nextSection = () => {
  if (currentSection.value < works.length - 1) {
    scrollToSection(currentSection.value + 1)
  }
}

const previousSection = () => {
  if (currentSection.value > 0) {
    scrollToSection(currentSection.value - 1)
  }
}

onMounted(() => {
  const sections = document.querySelectorAll('section')

  sections.forEach((section, index) => {
    $ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => (currentSection.value = index),
      onEnterBack: () => (currentSection.value = index),
    })
  })

  // Use GSAP Observer to detect scroll up and down
  $Observer.create({
    target: window,
    type: 'wheel,touch',
    onUp: previousSection,
    onDown: nextSection,
  })

  $gsap.to('#section-1 h1', {
    scrollTrigger: '#section-1',
    duration: 1,
    rotation: 360,
  })

  const videos = document.querySelectorAll('.video')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play()
      } else {
        entry.target.pause()
      }
    })
  })
  videos.forEach((video) => observer.observe(video))
})
</script>

<style scoped>
video::-webkit-media-controls,
video::-moz-media-controls,
video::-o-media-controls,
video::-ms-media-controls {
  display: none !important;
  pointer-events: none !important;
  touch-action: none !important;
}
video {
  pointer-events: none !important;
  touch-action: none !important;
}
</style>
