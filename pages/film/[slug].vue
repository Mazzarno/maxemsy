<template>
  <div class="h-screen w-screen relative">
    <header class="bg-transparent fixed w-screen top-0 z-50">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <div class="relative">
          <transition name="fade">
            <div v-show="showName">
              <div class="flex mt-10">
                <h2
                  class="text-white glitch hero"
                  :data-text="currentProject?.brand"
                >
                  <span>{{ currentProject?.brand }}</span>
                </h2>
                <h3
                  v-if="currentProject?.name"
                  class="text-white glitch hero"
                  :data-text="'&nbsp-&nbsp' + currentProject?.name"
                >
                  <span>{{ '&nbsp-&nbsp' + currentProject?.name }}</span>
                </h3>
              </div>
              <h3 class="glitch hero" :data-text="currentProject?.production">
                <span>{{ currentProject?.production }}</span>
              </h3>
              <h2 class="glitch hero" :data-text="currentProject?.crew">
                <span>{{ currentProject?.crew }}</span>
              </h2>
            </div>
          </transition>
        </div>
      </div>
    </header>
    <div class="aspect-video w-screen h-screen">
      <video
        class="w-full h-full"
        muted
        controls
        autoplay
        webkit-playsinline
        playsinline
        loop
        :src="currentProject?.film"
      ></video>
    </div>
  </div>
</template>
<script setup>
import { useProjectsStore } from '@/store/projects'
const $route = useRoute()
const projectsStore = useProjectsStore()
const currentProject = ref(null)
const showName = ref(true)
let mouseTimeout

const handleMouseMove = () => {
  showName.value = true
  clearTimeout(mouseTimeout)
  mouseTimeout = setTimeout(() => {
    showName.value = false
  }, 3000)
}
onMounted(() => {
  const index = $route.params.slug
  const project = projectsStore.projects.works.data[index]
  if (project) {
    currentProject.value = project
    projectsStore.setCurrentProject(project)
  } else {
    // Handle project not found, maybe redirect to a 404 page
  }
  window.addEventListener('mousemove', handleMouseMove)
  handleMouseMove() // Ensure footer is visible on initial load
})
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
<style scoped>
::-webkit-media-controls {
  display: block;
}
</style>
