<template>
  <div>
    <section class="panel red h-screen">
      <p>This is page 1</p>
    </section>
    <section class="panel green h-screen">
      <p>This is page 2</p>
    </section>
    <section class="panel blue h-screen">
      <p>This is page 3</p>
    </section>
    <section class="panel orange h-screen">
      <p>This is page 4</p>
    </section>
  </div>
</template>
<script lang="ts" setup>
const { $gsap, $ScrollTrigger } = useNuxtApp()
onMounted(() => {
  let sections = $gsap.utils.toArray('.panel')
  console.log(sections)
  function goToSection(i) {
    $gsap.to(window, {
      scrollTo: {
        y: i * innerHeight,
        autoKill: false,
        ease: 'Power3.easeInOut',
      },
      duration: 0.85,
    })
  }

  $ScrollTrigger.defaults({
    markers: true,
  })

  sections.forEach((eachPanel, i) => {
    $ScrollTrigger.create({
      trigger: eachPanel,
      onEnter: () => goToSection(i),
    })

    $ScrollTrigger.create({
      trigger: eachPanel,
      start: 'bottom bottom',
      onEnterBack: () => goToSection(i),
    })
  })
})
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: sans-serif;
}

html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

.panel {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel p {
  font-size: 6vw;
}

.red {
  background: red;
}

.blue {
  background: blue;
}

.green {
  background: green;
}

.orange {
  background: orange;
}
</style>
