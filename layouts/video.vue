<template>
  <div class="scroll-smooth">
    <nav class="bg-transparent fixed w-screen top-0 z-50">
      <div
        class="container md:ml-20 flex flex-wrap m-5 flex-col md:flex-row items-center"
      >
        <transition name="fade">
          <div v-show="projectsStore.showName" class="md:block">
            <NuxtLink
              to="/"
              class="z-50 flex layer title-font font-medium items-center animate_underline"
            >
              <h2 class="hero glitch layers" data-text="Maxime CARO">
                <span class="animate_underline">Maxime CARO</span>
              </h2>
            </NuxtLink>
            <div class="hidden mt-5 md:flex">
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
              class="text-lg text-white glitch hero hidden md:flex"
              :data-text="currentProject?.production"
            >
              <span>{{ currentProject?.production }}</span>
            </h2>
            <h2
              class="text-lg text-white glitch hero hidden md:flex"
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

onMounted(() => {
  const index = $route.params.slug;
  const project = projectsStore.projects.works.data[index];
  if (project) {
    currentProject.value = project;
    projectsStore.setCurrentProject(project);
  }
  projectsStore.initMouseMoveListener();
});
onUnmounted(() => {
  projectsStore.removeMouseMoveListener();
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
