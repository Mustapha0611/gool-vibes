<template>
  <div class="">
    <div class="bg-black lg:px-32 px-10 text-white flex flex-wrap items-center justify-center md:h-80 h-auto py-10 md:py-0 gap-10">
    <section class="flex-1 flex flex-col gap-6">
      <div class="flex items-center gap-4">
        <span class="w-10 h-10"><img src="@/assets/footer-logo.png" class="w-full h-full" alt="footer logo" /></span>
        <h3 class="font-bold text-2xl font-heading">GOOL VIBES</h3>
      </div>
      <div>
        Feel the joy of staying in touch with those who matter most. Our app
        enhances your social interactions, ensuring you never miss a moment of
        connection and delight.
      </div>
    </section>
    <section class="flex-1 flex gap-7 justify-center">
      <span v-for="(social, index) of socials" :key="index" class="w-10 h-10" data-aos="zoom-in" data-aos-delay="300">
        <img :src="social.logo" alt="social links" class="w-full h-full" />
      </span>
    </section>
    <section class="flex-1 flex flex-col gap-4">
      <h2 class="font-semibold text-[20px] font-heading">Sign up for our Newsletter</h2>
      <p class="text-[13px]">
        Don't miss out on the latest updates, exclusive offers, and tips to
        enhance your experience. Enter your email here
      </p>
      <form action="" class="relative" >
            <input type="email" name="email" class="lg:py-2 lg:px-5 md:px-4 md:py-2 py-3 px-4 w-[100%] bg-slate-900  rounded-lg h-12 border-2 md:text-base text-sm border-purple-500" placeholder="Enter your email" required/>
            <button type="submit"  class="font-semibold lg:py-6 py-2 px-3 absolute right-[2px] lg:-top-2 top-2"><img src="@/assets/send.png" alt="send" class="w-full h-full"></button>
        </form>
    </section>
    </div>
    <div class="flex py-10 lg:px-56 md:px-32 text-xs lg:text-base px-5 justify-between text-gray-400">
        <span>© Copyright 2022, All Rights Reserved</span>
        <section class="flex gap-20">
            <span>
                Privacy Policy
            </span>
            <span>
                Terms & Conditions
            </span>
        </section>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import fb from "@/assets/fb.png";
import tt from "@/assets/tt.png";
import ig from "@/assets/ig.png";
import linkedin from "@/assets/linkedin.png";
const socials = ref([
  {
    logo: fb,
  },
  {
    logo: ig,
  },
  {
    logo: tt,
  },
  {
    logo: linkedin,
  },
]);
</script>
