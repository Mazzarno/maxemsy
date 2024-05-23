// https://nuxt.com/docs/api/configuration/nuxt-config

import { useProjectsStore } from './store/projects';
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles.css", "@mdi/font/css/materialdesignicons.min.css"],
  app: {
    head: {
      titleTemplate: "Maxime Caro",
      htmlAttrs: {
        lang: "fr",
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "",
        },
        { hid: "language", name: "language", content: "French" },
        { hid: "revisit-after", name: "revisit-after", content: "1 days" },
        { name: "format-detection", content: "telephone=no" },
        // Open Graph / Facebook
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "",
        },
        // Twitter
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "",
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  nitro: { preset: "netlify-edge" },
  modules: ["@nuxtjs/tailwindcss", '@vueuse/nuxt', "nuxt-swiper", "@pinia/nuxt"],
    swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
     styleLang: 'css',
     modules: ['navigation',"mousewheel","autoplay","effect-creative","free-mode", "grid"], // all modules are imported by default
  }
});