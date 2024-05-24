<script setup lang="ts">
import { useRouter } from "vue-router";
import { useProjectsStore } from "@/store/projects";
const router = useRouter();
const projectsStore = useProjectsStore();
const works = projectsStore.projects.works.data;
const commercials = projectsStore.projects.commercials.data;
const musicVideos = projectsStore.projects.musicVideos.data;
const progress = ref(0);
const timer = ref("");
const onAutoplayTimeLeft = (
  swiper: any,
  timeLeft: number,
  percentage: number
) => {
  progress.value = 100 - percentage * 100;
};
const navigateToWork = (index) => {
  router.push({
    path: `/film/${index}`,
  });
};
</script>
<template>
  <div class="relative">
    <div id="progress" class="fixed rounded w-0.5 z-50 right-0 top-0 h-full">
      <div
        class="bg-white w-0.5 rounded transition-all shadow-2xl drop-shadow-2xl opacity-75"
        :style="{ height: progress + '%' }"
      ></div>
    </div>
    <swiper
      :modules="[
        SwiperAutoplay,
        SwiperMousewheel,
        SwiperEffectCreative,
        SwiperFreeMode,
      ]"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="0"
      :rewind="true"
      :mousewheel="{
        sensitivity: 1,
      }"
      :freeMode="{
        sticky: true,
        momentum: false,
      }"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
      }"
      class="mySwiper w-screen h-screen relative"
    >
      <swiper-slide
        v-for="(work, index) in works.slice(0, 20)"
        :key="index"
        class="snap-center relative flex items-center justify-center h-screen overflow-hidden"
      >
        <div class="z-40 absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <div
            @click="navigateToWork(index)"
            class="flex cursor-pointer hover:animate-pulse text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
          >
            <h1
              class="text-white z-50 text-4xl hero glitch layers transition ease-in-out delay-150 text-left group-hover:underline-offset-0 group-hover:animate-pulse"
              :data-text="work.brand"
            >
              <span>{{ work.brand }}</span>
            </h1>
            <h1
              v-if="work.name"
              class="text-white z-50 text-4xl hero glitch layers transition ease-in-out delay-150 text-left group-hover:underline-offset-0 group-hover:animate-pulse"
              :data-text="'&nbsp-&nbsp' + work.name"
            >
              <span>{{ "&nbsp-&nbsp" + work.name }}</span>
            </h1>
          </div>
          <h2
            v-if="work.production"
            class="text-white z-50 text-2xl layers indextext text-left"
          >
            {{ work.production }}
          </h2>
          <h2
            v-if="work.crew"
            class="text-white z-50 text-2xl layers indextext text-left"
          >
            {{ work.crew }}
          </h2>
        </div>
        <video
          class="no_controls absolute z-10 w-auto min-w-full min-h-full max-w-none aspect-video"
          muted
          controls="false"
          :src="work.preview"
          autoplay
          webkit-playsinline
          playsinline
          loop
        ></video
      ></swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
::-webkit-media-controls {
  display: none;
}
</style>
