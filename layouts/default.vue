<template>
  <div>
    <nav class="bg-transparent fixed w-screen top-0 z-50">
      <div
        class="container mx-24 flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <NuxtLink
          to="/"
          class="z-50 flex layer title-font font-medium items-center mb-4 md:mb-0 animate_underline"
        >
          <h2 class="hero glitch layers" data-text="Maxime CARO">
            <span>Maxime CARO</span>
          </h2>
        </NuxtLink>
      </div>
    </nav>

    <slot />

    <transition name="fade">
      <footer
        v-show="projectsStore.showName"
        class="bg-transparent w-screen bottom-0 fixed z-50"
      >
        <div
          class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col"
        >
          <a
            href="https://www.ice-cream.tv/"
            target="_blank"
            class="flex title-font font-medium items-center md:justify-start justify-center ice-cream"
          >
            <h2
              class="text-lg hero glitch layers transition ease-in-out delay-150 hover:animate-pulse hover:text-[#ff0000]"
              data-text="Ice Cream"
            >
              <span class="hover:text-[#ff0000]"> Ice Cream </span>
            </h2>
          </a>
          <p
            class="text-base text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4"
          >
            © 2024
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <a
              class="text-gray-400"
              href="https://www.instagram.com/maxime___caro/"
              target="_blank"
            >
              <h2
                class="hero glitch layers mdi-instagram mdi mdi-24px"
                data-text="Instagram"
              >
                <span class="mdi-instagram mdi mdi-24px"></span>
              </h2>
            </a>
          </span>
        </div>
      </footer>
    </transition>
  </div>
</template>

<script setup>
import { useProjectsStore } from "@/store/projects";
const projectsStore = useProjectsStore();
onMounted(() => {
  projectsStore.initMouseMoveListener(); // Démarrer le listener
});
onUnmounted(() => {
  projectsStore.removeMouseMoveListener(); // Nettoyer le listener
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
