export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles.css", "@mdi/font/css/materialdesignicons.min.css"],
  nitro: { preset: "netlify-edge" },
    ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-gsap",
    "@pinia/nuxt",
    "nuxt-lazy-load",
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      observer: true,
      scrollTo: true,
      text: true,
    },
  },
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in", // default
    },
    layoutTransition: {
      name: "fade",
      mode: "out-in", // default
    },
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
});
