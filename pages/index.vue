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
          class="flex absolute right-6 opacity-0 whitespace-nowrap text-white"
          :id="'dot-label-' + index"
        >
          <h4 class="z-50 hero glitch" :data-text="work.brand">
            <span>{{ work.brand }}</span>
          </h4>
          <h4
            v-if="work.name"
            class="z-50 hero glitch"
            :data-text="'&nbsp' + '-' + '&nbsp' + work.name"
          >
            <span>{{ "&nbsp" + "-" + "&nbsp" + work.name }}</span>
          </h4>
        </div>
        <div
          @mouseover="showLabel(index)"
          @mouseleave="hideLabel(index)"
          @click="scrollToSection(index)"
          class="w-1 h-1 rounded-full cursor-pointer hover:w-2 hover:h-2"
          :class="{
            'bg-slate-800 w-2 h-2 hero': currentSection === index,
            'bg-white hero': currentSection !== index,
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
      class="relative flex items-center justify-center h-screen overflow-hidden w-screen snap-center section"
      v-for="(work, index) in works.slice(0, 20)"
      :key="index"
      :id="'section-' + index"
    >
      <div
        class="z-40 absolute left-5 transform -translate-y-1/2 sm:left-1/4 top-1/2 animate-from-top"
        :id="'section-content-' + index"
      >
        <NuxtLink :to="'/film/' + index">
          <div id="title" class="flex cursor-pointer animate_underline">
            <h1
              class="z-50 hero glitch layers brandname"
              :data-text="work.brand"
            >
              <span class="brandname">{{ work.brand }}</span>
            </h1>
            <h1
              v-if="work.name"
              class="z-50 hero glitch layers brandname"
              :data-text="'&nbsp; -' + work.name"
            >
              <span>{{ "&nbsp; -" + work.name }}</span>
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
import { ref, onMounted, watch } from "vue";
import { useProjectsStore } from "@/store/projects";
const projectsStore = useProjectsStore();
const works = projectsStore.projects.works.data;
const { $gsap, $ScrollTrigger, $TextPlugin } = useNuxtApp();

const currentSection = ref(0);
const progressHeight = ref(0);
let autoScrollInterval: number;
let progressInterval: number;

const scrollToSection = (index: number) => {
  const section = document.getElementById("section-" + index);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    currentSection.value = index;
    resetAutoScroll();
  }
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          if (currentSection.value !== index) {
            currentSection.value = index;
          }
          // Animate section content with random characters
          $gsap.fromTo(
            `#section-content-${index}`,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
          );

          // GSAP text animation with random characters
          const elements = document.querySelectorAll(
            `#section-content-${index} .brandname, #section-content-${index} .prodcrew`
          );
          elements.forEach((el) => {
            const originalText = el.innerText;
            $gsap.fromTo(
              el,
              {
                text: {
                  value: getRandomChars(originalText.length),
                  scrambleText: {
                    chars: "0123456789!@#$%^&*()_+{}[]",
                    speed: 0.2,
                  },
                },
              },
              {
                text: {
                  value: originalText,
                  scrambleText: { chars: originalText, revealDelay: 0.2 },
                },
                duration: 1,
              }
            );
          });
        }
      });
    },
    {
      threshold: 0.6, // Adjust threshold to ensure section is mostly visible
    }
  );

  sections.forEach((section) => observer.observe(section));

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
});

const getRandomChars = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
</script>

<style scoped>
.video::-webkit-media-controls,
.video::-moz-media-controls,
.video::-o-media-controls,
.video::-ms-media-controls {
  display: none !important;
  pointer-events: none !important;
  touch-action: none !important;
}
.video {
  pointer-events: none !important;
  touch-action: none !important;
}
.animate-from-top {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
