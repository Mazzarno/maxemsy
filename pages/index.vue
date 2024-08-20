<template>
  <div class="bg-black w-screen h-screen -z-40 snap-y snap-proximity container">
    <!-- Dots Navigation -->
    <div
      class="fixed top-1/2 right-10 transform -translate-y-1/2 flex-col md:space-y-8 z-50 hidden md:flex"
    >
      <div
        v-for="(work, index) in works.slice(0, 20)"
        :key="`dot-${index}`"
        class="relative flex items-center"
        @click="scrollToSection(index, 'down')"
      >
        <!-- Trigger Area with Padding -->
        <div
          @mouseover="showLabel(index)"
          @mouseleave="hideLabel(index)"
          class="relative cursor-pointer"
          style="padding-left: 2rem"
        >
          <!-- Dot Label -->
          <div
            :id="`dot-label-${index}`"
            class="absolute right-8 opacity-0 whitespace-nowrap text-white -top-2.5"
            style="white-space: nowrap"
          >
            <h4 class="z-50 hero glitch inline-block" :data-text="work.brand">
              <span>{{ work.brand }}</span>
            </h4>
            <h4
              v-if="work.name"
              class="z-50 hero glitch inline-block"
              :data-text="`&nbsp;- ${work.name}`"
            >
              <span>{{ `&nbsp;- ${work.name}` }}</span>
            </h4>
          </div>
          <!-- Dot -->
          <div
            :aria-label="'Navigation vers : ' + work.aria"
            :class="{
              'bg-slate-800': currentSection === index,
              'bg-white': currentSection !== index,
            }"
            class="dot w-1 h-1 rounded-full transition-transform duration-300 hover:scale-150"
          ></div>
        </div>
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
        :aria-label="'Preview de la vidéo : ' + work.aria"
        class="z-40 absolute left-0 ml-5 md:ml-20 transform top-1/2 animate-from-top -translate-y-1/2"
        :id="'section-content-' + index"
      >
        <NuxtLink :to="'/film/' + index">
          <div
            id="title"
            class="flex cursor-pointer animate_underline"
            :aria-label="'titre de la vidéo : ' + work.aria"
          >
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
          style="opacity: 0"
        >
          {{ work.production }}
        </h2>
        <h2
          v-if="work.crew"
          class="z-50 layers indextext prodcrew"
          id="crew"
          style="opacity: 0"
        >
          {{ work.crew }}
        </h2>
      </div>
      <video
        class="video no_controls absolute z-10 w-auto min-w-screen min-h-screen max-w-none aspect-video pointer-events-none"
        muted
        :src="work.preview"
        autoplay
        webkit-playsinline
        playsinline
        loop
        :aria-label="work.brand"
      ></video>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick, onUnmounted } from "vue";
import { useProjectsStore } from "@/store/projects";

const projectsStore = useProjectsStore();
const works = projectsStore.projects.works.data;
const { $gsap, $Observer } = useNuxtApp();

const currentSection = ref(0);
const progressHeight = ref(0);
const isTransitioning = ref(false);
const isAnimatingText = ref(false);

// Animation functions
const animateText = (index: number, direction: string, action: string) => {
  const title = document.querySelector(`#section-content-${index} #title`);
  const production = document.querySelector(
    `#section-content-${index} #production`
  );
  const crew = document.querySelector(`#section-content-${index} #crew`);

  const timeline = $gsap.timeline({
    onStart: () => (isAnimatingText.value = true),
    onComplete: () => (isAnimatingText.value = false),
  });

  if (action === "in") {
    if (direction === "down") {
      timeline.fromTo(
        title,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
      timeline.fromTo(
        production,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.25"
      );
      timeline.fromTo(
        crew,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.25"
      );
    } else {
      timeline.fromTo(
        crew,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.25"
      );
      timeline.fromTo(
        production,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
      timeline.fromTo(
        title,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.25"
      );
    }
  } else {
    if (direction === "down") {
      timeline.to(title, { y: -50, opacity: 0, duration: 0.5 });
      timeline.to(production, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25");
      timeline.to(crew, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25");
    } else {
      timeline.to(crew, { y: 50, opacity: 0, duration: 0.5 }, "-=0.25");
      timeline.to(production, { y: 50, opacity: 0, duration: 0.5 });
      timeline.to(title, { y: 50, opacity: 0, duration: 0.5 }, "-=0.25");
    }
  }

  return timeline;
};

const animateDots = (index: number) => {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    $gsap.to(dot, {
      backgroundColor: i === index ? "#1e293b" : "#ffffff",
      duration: 0.1,
    });
  });
};

// Navigation functions
const scrollToSection = (index: number, direction: string) => {
  if (
    isTransitioning.value ||
    index === currentSection.value ||
    isAnimatingText.value
  )
    return;

  isTransitioning.value = true;
  const outTimeline = animateText(currentSection.value, direction, "out");

  outTimeline.eventCallback("onComplete", () => {
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
        onStart: () => {
          animateDots(index);
          resetAutoScroll();
        },
        onComplete: async () => {
          await nextTick();
          animateText(index, direction, "in");
          isTransitioning.value = false;
        },
      });
    }
  });
};

const nextSection = () => {
  if (!isAnimatingText.value) {
    scrollToSection((currentSection.value + 1) % works.length, "down");
  }
};

const previousSection = () => {
  if (!isAnimatingText.value && currentSection.value > 0) {
    scrollToSection(currentSection.value - 1, "up");
  }
};

// Auto-scroll functions
let autoScrollInterval: number;
let progressInterval: number;

const resetAutoScroll = () => {
  clearInterval(autoScrollInterval);
  clearInterval(progressInterval);
  progressHeight.value = 0;
  autoScrollInterval = window.setInterval(nextSection, 10000);
  progressInterval = window.setInterval(() => {
    progressHeight.value = Math.min(progressHeight.value + 0.1, 100);
  }, 10);
};

// Touch event handlers
let startY = 0;

const handleTouchStart = (event: TouchEvent) => {
  startY = event.touches[0].clientY;
};

const handleTouchMove = (event: TouchEvent) => {
  const deltaY = event.touches[0].clientY - startY;
  if (Math.abs(deltaY) > 10) {
    deltaY < 0 ? nextSection() : previousSection();
  }
};

// Lifecycle hooks
onMounted(() => {
  document.querySelectorAll("section").forEach((section, index) => {
    if (index !== currentSection.value) section.style.display = "none";
  });

  animateDots(currentSection.value);
  animateText(currentSection.value, "down", "in");

  $Observer.create({
    target: window,
    type: "wheel,scroll",
    onUp: previousSection,
    onDown: nextSection,
    tolerance: 10,
    preventDefault: true,
  });

  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });

  resetAutoScroll();

  const setFullHeight = () =>
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  setFullHeight();
  window.addEventListener("resize", setFullHeight, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  clearInterval(autoScrollInterval);
  clearInterval(progressInterval);
});

// Expose necessary variables and functions to the template
const showLabel = (index: number) => {
  $gsap.to(`#dot-label-${index}`, { opacity: 1, x: -10, duration: 0.5 });
};

const hideLabel = (index: number) => {
  $gsap.to(`#dot-label-${index}`, { opacity: 0, x: 0, duration: 0.5 });
};
</script>
x
<style scoped>
.video,
body,
html {
  min-height: -webkit-fill-available !important;
}
.video::-webkit-media-controls,
.video::-moz-media-controls,
.video::-o-media-controls,
.video::-ms-media-controls {
  display: none !important;
  pointer-events: none !important;
  touch-action: none !important;
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

#section-content {
  opacity: 0; /* Make sure the content is hidden initially */
}

#title,
#production,
#crew {
  opacity: 0;
}
.dot {
  transition: background-color 0.5s ease;
}
body,
html {
  touch-action: none !important;
}
</style>
