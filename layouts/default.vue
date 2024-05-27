<template>
  <div class="scroll-smooth">
    <header class="bg-transparent fixed w-screen top-0 z-50">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <NuxtLink
          to="/"
          class="ml-3 flex layer title-font font-medium items-center text-white mb-4 md:mb-0 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
        >
          <h2
            class="text-xl hero glitch layers transition ease-in-out delay-150 hover:animate-pulse hover:scale-110"
            data-text="Maxime CARO"
          >
            <span
              class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-110"
              >Maxime CARO</span
            >
          </h2>
        </NuxtLink>
      </div>
    </header>

    <slot />

    <transition name="fade">
      <footer
        v-show="showFooter"
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
              class="ml-3 text-lg text- hero glitch layers transition ease-in-out delay-150 hover:animate-pulse hover:scale-110 hover:text-[#ff0000]"
              data-text="Ice Cream"
            >
              <span
                class="text-base transition ease-in-out delay-150 hover:animate-pulse hover:scale-110 hover:text-[#ff0000]"
                >Ice Cream</span
              >
            </h2>
          </a>
          <p
            class="text-base text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4"
          >
            © 2024 —
            <a
              href=""
              class="text-white ml-1"
              target="_blank"
              rel="noopener noreferrer"
              >@Mazzar</a
            >
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <a class="ml-3 text-gray-400">
              <h2
                class="transition ease-in-out delay-150 hover:scale-125 hover:animate-pulse hero glitch layers mdi-instagram mdi mdi-24px"
                data-text="Instagram"
              >
                <span
                  class="transition ease-in-out delay-150 hover:scale-125 hover:animate-pulse mdi-instagram mdi mdi-24px"
                ></span>
              </h2>
            </a>
          </span>
        </div>
      </footer>
    </transition>
  </div>
</template>

<script setup>
const showFooter = ref(true);
let mouseTimeout;

const handleMouseMove = () => {
  showFooter.value = true;
  clearTimeout(mouseTimeout);
  mouseTimeout = setTimeout(() => {
    showFooter.value = false;
  }, 3000);
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  handleMouseMove(); // Ensure footer is visible on initial load
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
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
