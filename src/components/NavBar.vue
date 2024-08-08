<template>
  <header class="flex justify-between items-center lg:px-32 px-5 h-[15dvh]">
    <section>
      <div class="logo w-10 h-10">
        <img src="../assets/logo.svg" alt="logo" class="w-full h-full" />
      </div>
    </section>
    <section
      class="flex items-center md:flex-row flex-col justify-center transition-all duration-300 md:justify-start lg:gap-32 gap-24 absolute top-0 right-0 border-0 bg-indigo-900 md:bg-transparent h-[100dvh] w-0 overflow-hidden md:w-auto z-20 md:relative md:pt-0"
      :class="{showMenu:menuOpen}"
    >
      <div
        class="flex self-end justify-self-start absolute top-8 cursor-pointer md:hidden right-5"
        @click="showMenu"
      >
        <img src="@/assets/cross.png" alt="close" class="w-10 h-10" />
      </div>
      <ul
        class="flex lg:gap-8 md:gap-4 gap-8 md:flex-row flex-col text-base text-white font-light"
      >
        <li>
          <RouterLink to="" data-aos="fade-in" data-aos-delay="200" class="flex items-center gap-2"
            ><span class="border-2 border-slate-50 px-2 py-1.5 rounded-full"
              >01</span
            >Feature</RouterLink
          >
        </li>
        <li>
          <RouterLink to="" data-aos="fade-in" data-aos-delay="300" class="flex items-center gap-2"
            ><span class="border-2 border-slate-50 px-2 py-1.5 rounded-full"
              >02</span
            >Feature</RouterLink
          >
        </li>
        <li>
          <RouterLink to="" data-aos="fade-in" data-aos-delay="400" class="flex items-center gap-2"
            >Feature<span
              class="border-2 border-slate-50 px-2 py-1.5 rounded-full"
              >03</span
            ></RouterLink
          >
        </li>
        <li>
          <RouterLink to="" data-aos="fade-in" data-aos-delay="500" class="flex items-center gap-2"
            ><span class=""
              ><img src="@/assets/faq.png" alt="faq" class="w-7 h-7" /></span
            ><span>FAQ</span></RouterLink
          >
        </li>
      </ul>
      <div>
        <button
          class="border-2 border-slate-50 rounded-lg lg:px-3 md:px-2 px-3 text-xs md-text-base py-3 text-white"
        >
          Download App now
        </button>
      </div>
    </section>
    <div class="w-10 h-8 md:hidden flex cursor-pointer" @click="showMenu">
      <img src="@/assets/menu.png" alt="menu" class="w-full h-full" />
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { ref } from 'vue';

const menuOpen = ref(false)
const showMenu = () => {
    console.log('hello')
    menuOpen.value = !menuOpen.value
    console.log(menuOpen.value)
}
</script>
<style scoped>
.showMenu{
    width: 100%;
    
}
</style>
