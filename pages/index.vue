<template>
  <div
    class="bg-black snap-y snap-mandatory scroll-smooth snap-proximity absolute w-screen h-screen -z-40"
  >
    <section
      id="page-1"
      class="snap-center relative flex items-center justify-center h-screen overflow-hidden"
    >
      <div class="z-50"><h1 class="text-white z-50">titre de la video</h1></div>
      <video
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        muted
        preload
        controls="false"
        src="@/assets/videos/adidas.mp4"
        autoplay
        webkit-playsinline="true"
        playsinline="true"
        loop="true"
      ></video>
      <div><h1 class="text-white z-50">titre de la video</h1></div>
    </section>
    <section
      id="page-2"
      class="snap-center relative flex items-center justify-center h-screen overflow-hidden"
    >
      <video
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        muted
        preload
        controls="false"
        src="@/assets/videos/preview_rainbow.mp4"
        autoplay
        webkit-playsinline="true"
        playsinline="true"
        loop="true"
      ></video>
    </section>
    <section
      id="page-3"
      class="h-screen snap-center flex justify-center content-center"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 m-16 object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />
    </section>
    <section
      id="page-4"
      class="h-screen snap-center flex justify-center content-center"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 m-16 object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />
    </section>
  </div>
</template>

<script setup>
</script>



<style>
</style>
