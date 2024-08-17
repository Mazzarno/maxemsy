<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        v-if="loading"
        key="loading-screen"
        class="fixed inset-0 bg-black flex justify-center items-center z-1000"
      >
        <div
          class="fixed inset-0 bg-black flex justify-center items-center z-1000"
        >
          <div class="text-center text-white">
            <h2 class="text-xl hero glitch layers" data-text="Maxime CARO">
              <span class="text-xl">Maxime CARO</span>
            </h2>
            <h2 class="text-lg hero glitch layers" data-text="Chargement ...">
              <span class="text-lg">Chargement ...</span>
            </h2>
          </div>
        </div>
      </div>
    </transition>

    <nav class="bg-transparent fixed w-full top-0 z-50">
      <div class="md:ml-20 flex flex-wrap m-5">
        <NuxtLink
          to="/"
          class="z-50 flex layer title-font font-medium items-center animate_underline"
        >
          <h2 class="hero glitch layers" data-text="Maxime CARO">
            <span>Maxime CARO</span>
          </h2>
        </NuxtLink>
      </div>
    </nav>

    <slot />

    <transition name="fade">
      <footer class="bg-transparent w-full bottom-0 fixed z-50">
        <div
          class="m-5 md:ml-20 mx-auto flex items-center sm:flex-row flex-col"
        >
          <a
            href="https://www.ice-cream.tv/"
            target="_blank"
            class="flex title-font font-medium items-center md:justify-start justify-center ice-cream"
          >
            <h2
              class="md:text-base text-sm hero glitch layers transition ease-in-out delay-150 hover:animate-pulse hover:text-red-500"
              data-text="Ice Cream"
            >
              <span class="hover:text-red-500">Ice Cream</span>
            </h2>
          </a>
          <p
            class="text-base text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4 hidden md:flex"
          >
            <a
              class="text-gray-400 mt-1"
              href="https://www.instagram.com/maxime___caro/"
              target="_blank"
            >
              <h2
                class="hero glitch layers mdi-instagram mdi md:mdi-24px mdi-16px"
                data-text="Instagram"
              >
                <span class="mdi-instagram mdi mdi-24px"></span>
              </h2>
            </a>
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start md:mr-20"
          >
          </span>
        </div>
      </footer>
    </transition>
  </div>
</template>
<script setup>
import { useProjectsStore } from "@/store/projects";
import { gsap } from "gsap";
const projectsStore = useProjectsStore();
const loading = ref(true);
const progress = ref(0);

onMounted(() => {
  let loadedVideos = 0;
  const videos = Array.from(document.querySelectorAll("video")).slice(0, 2);
  const totalVideos = videos.length;
  const updateProgress = () => {
    loadedVideos++;
    const newProgress = Math.floor((loadedVideos / totalVideos) * 100);
    gsap.to(progress, {
      value: newProgress,
      duration: 0.5,
      onUpdate: () => {
        progress.value = Math.floor(progress.value);
      },
      onComplete: () => {
        if (progress.value >= 100) {
          // Attendre 1 seconde avant de passer loading à false
          setTimeout(() => {
            loading.value = false;
            projectsStore.autoScrollEnabled = true;
          }, 1000);
        }
      },
    });
  };

  videos.forEach((video) => {
    if (video.readyState >= 4) {
      updateProgress();
    } else {
      video.addEventListener("canplaythrough", () => {
        updateProgress();
      });
      video.addEventListener("error", () => {
        updateProgress();
      });
    }
  });
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-1000; /* Transition sur 1 seconde */
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0; /* Rendre invisible l'élément */
}
</style>
