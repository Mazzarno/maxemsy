<template>
  <div class="select-none">
    <!--<Loading v-if="loading" />-->
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'fade',
          mode: 'out-in',
        }"
      />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
/*const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  window.setTimeout(() => {
    loading.value = false;
  }, 1000);
}); */
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
/* TRANSITION ANIMATION PAGE  */
</style>
