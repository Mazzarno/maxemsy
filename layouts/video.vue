<template>
  <div>
    <div class="absolute top-4  right-4 md:right-20 z-50">
      <NuxtLink to="/">
        <h2
          class="hero glitch layers text-white  hover:scale-125 transition-colors duration-300 ease-in-out"
        >
          <span
            class="mdi-close mdi mdi-24px text-white  hover:scale-125 transition-colors duration-300 ease-in-out"
          ></span>
        </h2>
      </NuxtLink>
    </div>
    <nav class="bg-transparent md:fixed md:z-40 flex w-screen top-0">
      <div
        class="md:ml-20 flex flex-wrap m-5 flex-col md:flex-row items-center"
      >
        <div class="md:block z-50 flex layer title-font font-medium">
          <NuxtLink to="/">
            <h2
              class="hero glitch layers text-lg sm:text-xl tracking-widest font-semibold"
              data-text="Maxime CARO"
            >
              <span class="text-lg sm:text-xl tracking-widest font-semibold">
                Maxime CARO
              </span>
            </h2>
          </NuxtLink>

          <transition name="fade">
            <div v-show="projectsStore.showName">
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
                  <span>{{ '&nbsp-&nbsp' + currentProject?.name }}</span>
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
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>
import { useProjectsStore } from '@/store/projects'
const $route = useRoute()
const projectsStore = useProjectsStore()
const currentProject = ref(null)

onMounted(() => {
  const index = $route.params.slug
  const project = projectsStore.projects.works.data[index]
  if (project) {
    currentProject.value = project
    projectsStore.setCurrentProject(project)
  }
  projectsStore.initMouseMoveListener()
})
onUnmounted(() => {
  projectsStore.removeMouseMoveListener()
})
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
