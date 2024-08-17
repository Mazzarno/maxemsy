<template>
  <div>
    <div v-if="loading" class="loading-overlay">
      <Loading :progress="progress" />
    </div>
    <nav class="bg-transparent fixed w-screen top-0 z-50">
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
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div
            class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
          >
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="https://dummyimage.com/542x460"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p class="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div
            class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
          >
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="https://dummyimage.com/542x420"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p class="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <slot />

    <transition name="fade">
      <footer class="bg-transparent w-screen bottom-0 fixed z-50">
        <div
          class="container m-5 md:ml-20 mx-auto flex items-center sm:flex-row flex-col"
        >
          <a
            href="https://www.ice-cream.tv/"
            target="_blank"
            class="flex title-font font-medium items-center md:justify-start justify-center ice-cream"
          >
            <h2
              class="md:text-base text-sm hero glitch layers transition ease-in-out delay-150 hover:animate-pulse hover:text-[#ff0000]"
              data-text="Ice Cream"
            >
              <span class="hover:text-[#ff0000]">Ice Cream</span>
            </h2>
          </a>
          <p
            class="text-base text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4 md:flex hidden"
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
                class="hero glitch layers mdi-instagram mdi md:mdi-24px mdi-16px"
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
import { useProjectsStore } from '@/store/projects'
import { gsap } from 'gsap'
import Loading from '~/components/Loading.vue'
const projectsStore = useProjectsStore()
const loading = ref(true)
const progress = ref(0)

onMounted(() => {
  console.log(projectsStore.autoScrollEnabled)
  let loadedVideos = 0
  const videos = Array.from(document.querySelectorAll('video')).slice(0, 1)
  const totalVideos = videos.length

  // console.log(`Tracking the loading of ${totalVideos} videos`);

  const updateProgress = () => {
    loadedVideos++
    const newProgress = Math.floor((loadedVideos / totalVideos) * 100)
    console.log(
      `Video loaded: ${loadedVideos}/${totalVideos}, Target Progress: ${newProgress}%`,
    )
    gsap.to(progress, {
      value: newProgress,
      duration: 0.5,
      onUpdate: () => {
        progress.value = Math.floor(progress.value)
        console.log(`Progress animated to: ${progress.value}%`)
      },
      onComplete: () => {
        if (progress.value >= 100) {
          //console.log("Initial videos are loaded. Hiding the loader.");
          loading.value = false
          console.log(projectsStore.autoScrollEnabled)
          projectsStore.autoScrollEnabled = true
          console.log(projectsStore.autoScrollEnabled)
        }
      },
    })
  }

  videos.forEach((video) => {
    if (video.readyState >= 4) {
      //  console.log(`Video ready (already loaded): ${video.src}`);
      updateProgress()
    } else {
      video.addEventListener('canplaythrough', () => {
        //  console.log(`Video ready (canplaythrough): ${video.src}`);
        updateProgress()
      })
      video.addEventListener('error', () => {
        //  console.log(`Error loading video: ${video.src}`);
        updateProgress()
      })
    }
  })
})
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
