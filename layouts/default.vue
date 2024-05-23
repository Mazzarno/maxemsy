<template>
  <div class="scroll-smooth">
    <header class="text-slate-300 bg-transparent fixed w-screen top-0 z-50">
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
        <nav
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        >
          <a
            class="mr-10 hover:text-white hero glitch layers transition ease-in-out delay-150 hover:animate-pulse text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
          >
            <span
              class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-110 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
              data-text="Work"
              >Work</span
            ></a
          >
          <a
            class="mr-10 hover:text-white hero glitch layers transition ease-in-out delay-150 hover:animate-pulse text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
          >
            <span
              class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-110 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
              data-text="Commercial"
              >Commercial</span
            ></a
          >
          <a
            class="mr-10 hover:text-white hero glitch layers transition ease-in-out delay-150 hover:animate-pulse text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
            data-text="Music Vidéo"
          >
            <span
              class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-110 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"
              >Music Video</span
            ></a
          >
        </nav>

        <h2
          class="transition ease-in-out delay-150 hover:scale-125 hover:animate-pulse hero glitch layers mdi-menu mdi mdi-24px"
          data-text=""
        >
          <!--
          <span
            class="transition ease-in-out delay-150 hover:animate-pulse hover:scale-125 mdi-menu mdi mdi-24px"
          ></span> -->
        </h2>
      </div>
    </header>

    <slot />
    <footer class="bg-transparent w-screen bottom-0 fixed z-50">
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
  </div>
</template>

<script setup></script>
