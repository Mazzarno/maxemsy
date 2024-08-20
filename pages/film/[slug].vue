<template>
  <div class="h-full w-full relative">
    <div class="aspect-video h-full w-full" :aria-label="currentProject?.aria">
      <video
        class="w-full h-full fixed md:block"
        controls
        :src="currentProject?.film"
      ></video>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "video",
});
import { useProjectsStore } from "@/store/projects";
const $route = useRoute();
const projectsStore = useProjectsStore();
const currentProject = ref();

onMounted(() => {
  const index = $route.params.slug;
  const project = projectsStore.projects.works.data[index];
  if (project) {
    currentProject.value = project;
    projectsStore.setCurrentProject(project);
  }
});
</script>
<style scoped>
video::-webkit-media-controls,
video::-moz-media-controls,
video::-o-media-controls,
video::-ms-media-controls {
  display: block !important;
}
</style>
