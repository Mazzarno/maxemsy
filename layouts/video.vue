<template>
  <div class="scroll-smooth">
    <nav class="bg-transparent fixed w-screen top-0 z-50">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <transition name="fade">
          <div v-show="showName" class="ml-3">
            <NuxtLink
              to="/"
              class="z-50 flex layer title-font font-medium items-center mb-4 md:mb-0"
            >
              <h2
                class="hero glitch layers animate_underline"
                data-text="Maxime CARO"
              >
                <span class="animate_underline">Maxime CARO</span>
              </h2>
            </NuxtLink>
            <div class="flex mt-5">
              <h1
                class="text-xl text-white glitch hero"
                :data-text="currentProject?.brand"
              >
                <span>{{ currentProject?.brand }}</span>
              </h1>
              <h2
                v-if="currentProject?.name"
                class="text-xl text-white glitch hero"
                :data-text="'&nbsp-&nbsp' + currentProject?.name"
              >
                <span>{{ "&nbsp-&nbsp" + currentProject?.name }}</span>
              </h2>
            </div>
            <h2
              class="text-lg text-white glitch hero"
              :data-text="currentProject?.production"
            >
              <span>{{ currentProject?.production }}</span>
            </h2>
            <h2
              class="text-lg text-white glitch hero"
              :data-text="currentProject?.crew"
            >
              <span>{{ currentProject?.crew }}</span>
            </h2>
          </div>
        </transition>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>
import { useProjectsStore } from "@/store/projects";
const $route = useRoute();
const projectsStore = useProjectsStore();
const currentProject = ref(null);
const showName = ref(true);
let mouseTimeout;

const handleMouseMove = () => {
  showName.value = true;
  clearTimeout(mouseTimeout);
  mouseTimeout = setTimeout(() => {
    showName.value = false;
  }, 3000);
};
onMounted(() => {
  const index = $route.params.slug;
  const project = projectsStore.projects.works.data[index];
  if (project) {
    currentProject.value = project;
    projectsStore.setCurrentProject(project);
  }
  window.addEventListener("mousemove", handleMouseMove);
  handleMouseMove(); // Ensure footer is visible on initial load
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
