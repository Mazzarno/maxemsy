<template>
  <div class="h-screen w-screen relative">
    <div class="aspect-video w-screen h-screen">
      <video class="w-full h-full" controls :src="currentProject?.film"></video>
    </div>
  </div>
</template>
definePageMeta({
  layout: 'video',
})
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
  }
  window.addEventListener('mousemove', handleMouseMove)
  handleMouseMove() // Ensure footer is visible on initial load
})
</script>
<style scoped>
video::-webkit-media-controls,
video::-moz-media-controls,
video::-o-media-controls,
video::-ms-media-controls {
  display: block !important;
}
</style>
