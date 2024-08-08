<template>
  <main class="lg:h-[100dvh]  h-auto w-full bg-gradient-to-r from-bg-start to-bg-end">
    <NavBar />
    <div class="flex flex-col md:flex-row items-center md:py-20 lg:py-0 px-5 lg:px-32 lg:h-[85dvh]">
      <section class="flex-1 text-white flex flex-col gap-8">
        <h1 class=" md:text-4xl text-2xl font-heading"  data-aos="fade-up">Stay Connected Samlessly with Gool Vibes</h1>
        <p class="md:text-xl text-base" data-aos="zoom-in">
          Connect with friends and family effortlessly. Our intuitive interface
          ensures that you can send messages, photos, and videos without any
          hassle.
        </p>
        <div class="flex gap-4 flex-wrap pb-4">
            <button class="md:w-48 w-32 bg-white text-black py-4 text-xs md:text-base rounded-lg border-2" data-aos="fade-right">Get it on PlayStore</button>
            <button class="md:w-48 w-32 py-4 rounded-lg border-2 text-xs md:text-base" data-aos="fade-left">Get it on AppStore</button>
        </div>
      </section>
      <section class="flex-1">
        <div class=" w-full lg:h-[450px] h-[350px] " data-aos="zoom-in" data-aos-duration="4000">
          <img src="@/assets/hero-img.png" alt="hero image" class="w-full h-full" />
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import NavBar from "./NavBar.vue";
</script>
<style scoped>
/* h1 {
    font-family: "Archivo Black", sans-serif;
} */
</style>
