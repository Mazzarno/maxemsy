<template>
  <div class="bg-black w-screen h-screen -z-40 snap-y snap-proximity container">
    <!-- Dots Navigation -->
    <div
      class="fixed top-1/2 right-10 transform -translate-y-1/2 flex-col items-center space-y-5 z-50 m-5 hidden md:flex"
    >
      <div
        v-for="(work, index) in works.slice(0, 20)"
        :key="'dot-' + index"
        class="relative flex items-center"
      >
        <div
          class="flex absolute right-8 opacity-0 whitespace-nowrap text-white"
          :id="'dot-label-' + index"
        >
          <h4 class="z-50 hero glitch" :data-text="work.brand">
            <span>{{ work.brand }}</span>
          </h4>
          <h4
            v-if="work.name"
            class="z-50 hero glitch"
            :data-text="`&nbsp;- ${work.name}`"
          >
            <span>{{ `&nbsp;- ${work.name}` }}</span>
          </h4>
        </div>
        <div
          @mouseover="showLabel(index)"
          @mouseleave="hideLabel(index)"
          @click="scrollToSection(index)"
          class="w-2 h-2 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-150"
          :class="{
            'bg-slate-800': currentSection === index,
            'bg-white': currentSection !== index,
          }"
        ></div>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="fixed top-0 right-0 w-0.5 h-full bg-transparent z-50">
      <div
        class="bg-white w-full h-0 shadow-2xl drop-shadow-2xl rounded-b-2xl"
        :style="{ height: progressHeight + '%' }"
      ></div>
    </div>

    <!-- Sections with Video -->
    <section
      v-for="(work, index) in works.slice(0, 20)"
      :key="index"
      :id="'section-' + index"
      class="relative flex items-center justify-center h-screen overflow-hidden w-screen snap-center section"
      :class="{ 'section-active': index === currentSection }"
      :style="{ 'z-index': index === currentSection ? 10 : 5 }"
    >
      <div
        class="z-40 absolute left-5 transform sm:left-1/4 top-1/2 animate-from-top"
        :id="'section-content-' + index"
      >
        <NuxtLink :to="'/film/' + index">
          <div id="title" class="flex cursor-pointer animate_underline">
            <h1
              class="z-50 hero glitch layers brandname"
              :data-text="work.brand"
            >
              <span class="brandname">{{ `${work.brand}` }}</span>
            </h1>
            <h1
              v-if="work.name"
              class="z-50 hero glitch layers brandname"
              :data-text="`&nbsp;- ${work.name}`"
            >
              <span>{{ `&nbsp;- ${work.name}` }}</span>
            </h1>
          </div>
        </NuxtLink>
        <h2
          v-if="work.production"
          class="layers indextext prodcrew"
          id="production"
        >
          {{ work.production }}
        </h2>
        <h2 v-if="work.crew" class="z-50 layers indextext prodcrew" id="crew">
          {{ work.crew }}
        </h2>
      </div>
      <video
        class="video no_controls absolute z-10 w-auto min-w-screen min-h-screen max-w-none aspect-video pointer-events-none"
        muted
        :src="work.preview"
        autoplay
        webkit-playsinline
        loop
        :aria-label="work.brand"
      ></video>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from "vue";
import { useProjectsStore } from "@/store/projects";
const projectsStore = useProjectsStore();
const works = projectsStore.projects.works.data;
const { $gsap, $Observer } = useNuxtApp();

const currentSection = ref(0);
const progressHeight = ref(0);
let autoScrollInterval: number;
let progressInterval: number;
let isTransitioning = false;

const animateTextIn = (index: number) => {
  const title = document.querySelector(`#section-content-${index} #title`);
  const production = document.querySelector(
    `#section-content-${index} #production`
  );
  const crew = document.querySelector(`#section-content-${index} #crew`);

  $gsap.fromTo(
    title,
    { y: -200, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 1 }
  );

  $gsap.fromTo(
    production,
    { y: -200, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 1.5 }
  );

  $gsap.fromTo(
    crew,
    { y: -200, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 1.5 }
  );
};

const animateTextOut = (index: number, callback: () => void) => {
  const title = document.querySelector(`#section-content-${index} #title`);
  const production = document.querySelector(
    `#section-content-${index} #production`
  );
  const crew = document.querySelector(`#section-content-${index} #crew`);

  const timeline = $gsap.timeline({
    onComplete: callback,
  });

  timeline.to(title, { y: -200, opacity: 0, duration: 1 });
  timeline.to(production, { y: 200, opacity: 0, duration: 1 }, "-=0.5");
  timeline.to(crew, { y: 200, opacity: 0, duration: 1 }, "-=0.5");
};

const scrollToSection = (index: number) => {
  if (isTransitioning || index === currentSection.value) return;

  isTransitioning = true;

  animateTextOut(currentSection.value, () => {
    const currentElement = document.getElementById(
      `section-${currentSection.value}`
    );
    const nextElement = document.getElementById(`section-${index}`);

    if (currentElement && nextElement) {
      nextElement.style.display = "flex";
      nextElement.style.opacity = "0";
      nextElement.style.zIndex = "10";

      $gsap.to(currentElement, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          currentElement.style.zIndex = "5";
          currentSection.value = index;
          currentElement.style.display = "none";
          currentElement.style.opacity = "1";
        },
      });

      $gsap.to(nextElement, {
        opacity: 1,
        duration: 1,
        onComplete: async () => {
          await nextTick();
          animateTextIn(index);
          isTransitioning = false;
        },
      });
    }

    resetAutoScroll();
  });
};

const nextSection = () => {
  if (currentSection.value < works.length - 1) {
    scrollToSection(currentSection.value + 1);
  } else {
    scrollToSection(0); // Scroll back to the first section
  }
};

const previousSection = () => {
  if (currentSection.value > 0) {
    scrollToSection(currentSection.value - 1);
  }
};

const resetAutoScroll = () => {
  clearInterval(autoScrollInterval);
  clearInterval(progressInterval);
  progressHeight.value = 0;
  autoScrollInterval = setInterval(nextSection, 10000);
  progressInterval = setInterval(() => {
    if (progressHeight.value < 100) {
      progressHeight.value += 0.1; // Adjust the speed of progress bar increase
    }
  }, 10);
};

// Watch for changes in currentSection to reset auto scroll
watch(currentSection, () => {
  resetAutoScroll();
});

const showLabel = (index: number) => {
  $gsap.to(`#dot-label-${index}`, { opacity: 1, x: -10, duration: 0.5 });
};

const hideLabel = (index: number) => {
  $gsap.to(`#dot-label-${index}`, { opacity: 0, x: 0, duration: 0.5 });
};

onMounted(() => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    if (index !== currentSection.value) {
      section.style.display = "none";
    }
  });

  const videos = document.querySelectorAll(".video");
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  });
  videos.forEach((video) => videoObserver.observe(video));

  resetAutoScroll();

  // Create the Observer for scroll and touch events
  $Observer.create({
    target: window,
    type: "wheel,touch,scroll",
    onUp: previousSection,
    onDown: nextSection,
    tolerance: 10,
    preventDefault: true,
  });
});
</script>

<style scoped>
.video::-webkit-media-controls,
.video::-moz-media-controls,
.video::-o-media-controls,
.video::-ms-media-controls {
  display: none !important;
  pointer-events: none;
}

.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.section-active {
  z-index: 10;
}
</style>
