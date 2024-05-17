<template>
  <div class="h-screen w-screen relative">
    <header class="bg-transparent fixed w-screen top-0 z-50">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <div class="relative ml-3">
          <NuxtLink
            to="/"
            class="flex layer title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <h1
              class="text-xl hero glitch layers transition ease-in-out delay-150 hover:animate-pulse hover:scale-110"
              data-text="Maxime CARO"
            >
              <span
                class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-110"
                >Maxime CARO</span
              >
            </h1>
          </NuxtLink>
          <h1
            class="text-lg text-white glitch"
            :data-text="currentProject?.brand"
          >
            <span> {{ currentProject?.brand }}</span>
          </h1>
          <h2
            class="text-lg text-white glitch"
            :data-text="currentProject?.name"
          >
            <span>{{ currentProject?.name }}</span>
          </h2>
          <h2 class="text-lg text-white glitch">
            <span> {{ currentProject?.production }}</span>
          </h2>
          <h2 class="text-lg text-white glitch">
            <span> {{ currentProject?.crew }}</span>
          </h2>
        </div>
      </div>
    </header>
    <div
      class="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <video
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none aspect-video"
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
definePageMeta({
  layout: false,
});
import { useRoute } from "vue-router";
import { useProjectsStore } from "@/store/projects";
import { onMounted, ref } from "vue";

const $route = useRoute();
const projectsStore = useProjectsStore();
const currentProject = ref(null);

onMounted(() => {
  const index = $route.params.slug;
  const project = projectsStore.projects.works.data[index];
  if (project) {
    currentProject.value = project;
    projectsStore.setCurrentProject(project);
  } else {
    // Handle project not found, maybe redirect to a 404 page
  }
});
</script>
