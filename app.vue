<template>
  <div class="select-none">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div v-if="loading" class="loading-overlay">
      <Loading :progress="progress" />
    </div>
  </div>
</template>

<script setup>
import { useProjectsStore } from "@/store/projects";
import { gsap } from "gsap";
import Loading from "~/components/Loading.vue";
const projectsStore = useProjectsStore();
const loading = ref(true);
const progress = ref(0);

onMounted(() => {
  console.log(projectsStore.autoScrollEnabled);
  let loadedVideos = 0;
  const videos = Array.from(document.querySelectorAll("video")).slice(0, 1);
  const totalVideos = videos.length;

  // console.log(`Tracking the loading of ${totalVideos} videos`);

  const updateProgress = () => {
    loadedVideos++;
    const newProgress = Math.floor((loadedVideos / totalVideos) * 100);
    console.log(
      `Video loaded: ${loadedVideos}/${totalVideos}, Target Progress: ${newProgress}%`
    );
    gsap.to(progress, {
      value: newProgress,
      duration: 0.5,
      onUpdate: () => {
        progress.value = Math.floor(progress.value);
        console.log(`Progress animated to: ${progress.value}%`);
      },
      onComplete: () => {
        if (progress.value >= 100) {
          //console.log("Initial videos are loaded. Hiding the loader.");
          loading.value = false;
          console.log(projectsStore.autoScrollEnabled);
          projectsStore.autoScrollEnabled = true;
          console.log(projectsStore.autoScrollEnabled);
        }
      },
    });
  };

  videos.forEach((video) => {
    if (video.readyState >= 4) {
      //  console.log(`Video ready (already loaded): ${video.src}`);
      updateProgress();
    } else {
      video.addEventListener("canplaythrough", () => {
        //  console.log(`Video ready (canplaythrough): ${video.src}`);
        updateProgress();
      });
      video.addEventListener("error", () => {
        //  console.log(`Error loading video: ${video.src}`);
        updateProgress();
      });
    }
  });
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
