<script setup lang="ts">
import { useProjectsStore } from "@/store/projects";
const { $gsap } = useNuxtApp()
const projectsStore = useProjectsStore();
const works = projectsStore.projects.works.data;
const progress = ref();
const timer = ref();
const onAutoplayTimeLeft = (
  swiper: any,
  timeLeft: number,
  percentage: number
) => {
  progress.value = 100 - percentage * 100;
}; 
onMounted(() => {
  /*
    var tlText = $gsap.timeline({
      scrollTrigger: {
      },
    });
    tlText
      .fromTo(
        "#brand",
        { x: 0, y: 100, duration: 0, opacity: 0,  },
        { x: 0, y: 0, duration: 1, opacity: 1, }
      )
      .fromTo(
        "#name",
        { x: 0, y: 100, duration: 0, opacity: 0 },
        { x: 0, y: 0, duration: 1, opacity: 1 }
    )
        .fromTo(
        "#production",
        { x: 0, y: 100, duration: 0, opacity: 0 },
        { x: 0, y: 0, duration: 1, opacity: 1 }
      )
      .fromTo(
        "#crew",
        { x: 0, y: 100, duration: 0, opacity: 0 },
        { x: 0, y: 0, duration: 1, opacity: 1 }
      )
   */
});
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
        SwiperEffectCube
      ]"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      :direction="'vertical'"
      :slidesPerView="1"
      cssMode: true,
      :effect="'cube'"
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
          <NuxtLink :to="'/film/' + index" >
            <div
              class="flex cursor-pointer hover:animate-pulse hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
            >
              <h1
                class="z-50 hero glitch layers"
                :data-text="work.brand"
                id="brand"
              >
                <span id="brand">{{ work.brand }}</span>
              </h1>
              <h1
                v-if="work.name"
                class=" z-50 hero glitch layers"
                :data-text="'&nbsp-&nbsp' + work.name"
                id="name"
              >
                <span id="name">{{ "&nbsp-&nbsp" + work.name }}</span>
              </h1>
            </div>
          </NuxtLink>
          <h2
            v-if="work.production"
            class="layers indextext"
            id="production"
          >
            {{ work.production }}
          </h2>
          <h2
            v-if="work.crew"
            class="z-50 layers indextext"
              id="crew"
          >
            {{ work.crew }}
          </h2>
        </div>
        <video
        id="video"
          class="no_controls absolute z-10 w-auto min-w-screen min-h-screen max-w-none aspect-video"
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
