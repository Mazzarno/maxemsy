<template>
  <div class="loading-container">
    <div class="loading-content">
      <h2>Chargement...</h2>
      <div class="loader">
        <div class="loader-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <p>{{ progress }}%</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.loading-container {
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

.loading-content {
  text-align: center;
  color: white;
}

.loader {
  width: 80%;
  height: 10px;
  background-color: white;
  margin: 20px 0;
  border-radius: 5px;
}

.loader-bar {
  height: 100%;
  background-color: #ff6347;
  border-radius: 5px;
  transition: width 0.3s ease;
}
</style>
