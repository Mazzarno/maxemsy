<template>
  <div class="bg-black scroll-smooth z-40">
    <header class="text-slate-300 bg-transparent fixed w-screen top-0">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex layer title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <h2
            class="ml-3 text-xl hero glitch layers transition ease-in-out delay-150 hover:animate-pulse hover:scale-110"
            data-text="Maxime CARO"
          >
            <span
              class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-110"
              >Maxime CARO</span
            >
          </h2>
        </a>
        <nav
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        >
          <a href="#page-1" class="mr-5 hover:text-white">First Link</a>
          <a href="#page-2" class="mr-5 hover:text-white">Second Link</a>
          <a href="#page-3" class="mr-5 hover:text-white">Third Link</a>
          <a href="#page-4" class="mr-5 hover:text-white">Fourth Link</a>
        </nav>

        <h2
          class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-125 hover:animate-pulse hero glitch layers mdi-menu mdi mdi-24px"
          data-text=""
        >
          <span
            class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-125 hover:animate-pulse mdi-menu mdi mdi-24px"
          ></span>
        </h2>
      </div>
    </header>

    <slot />
    <footer class="bg-transparent w-screen bottom-0 fixed">
      <div
        class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col"
      >
        <a
          class="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <h2
            class="ml-3 text-xl hero glitch layers transition ease-in-out delay-150 hover:animate-pulse hover:scale-110"
            data-text="Ice Cream"
          >
            <span
              class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-110"
              >Ice Cream</span
            >
          </h2>
        </a>
        <p
          class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4"
        >
          © 2023 —
          <a
            href=""
            class="text-gray-500 ml-1"
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
              class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-125 hover:animate-pulse hero glitch layers mdi-instagram mdi mdi-24px"
              data-text="Instagram"
            >
              <span
                class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-125 hover:animate-pulse mdi-instagram mdi mdi-24px"
              ></span>
            </h2>
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>



<style>
</style>
