<template>
    <div class="flex items-center flex-col lg:flex-row gap-10 bg-[url('@/assets/background.png')] md:px-32 px-5 bg-no-repeat w-full h-auto py-10 bg-cover ">
        <section class="flex-1 flex justify-center items-center relative">
            <div class="md:w-[29rem] w-[100%] md:h-[24rem] h-[18rem]">
                <img src="@/assets/circle.png" class="w-full h-full" alt="circle" data-aos="fade-up">
                
            </div>
            <div class="md:w-[26rem] md:h-[20rem] w-[22rem] absolute md:left-44 left-16 sm:left-24 top-20">
                <img src="@/assets/man-sitting.png" class="w-full h-full" alt="circle" data-aos="zoom-in-right"  data-aos-delay="200">
                
            </div>
        </section>
        <section class="flex-1 flex justify-center flex-col gap-4">
            <h2 class="font-bold md:text-3xl text-2xl font-heading" data-aos="fade-up">Features for improved experience</h2>
            <div v-for="(feature, index) of features" :key="index">
                <div class="flex gap-3 items-center" data-aos="zoom-in">
                    <img :src="feature.img" alt="chat-bubble">
                    <span class="font-semibold text-xl">{{ feature.title}}</span>
                </div>
                <p class="px-10 mt-5" data-aos="zoom-in" data-aos-delay="400">
                    {{ feature.Content }}
                </p>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from "vue";
import img from '@/assets/chat-bubble.png'
const features = ref([
  {
    title: "Choose your language",
    img:img,
    Content:
      "Start chatting in your preferred language. Gool Vibes supports multiple languages to ensure everyone can connect comfortably.",
  },
  {
    title: "End to End encryption",
    img:img,
    Content:
      "Your privacy is our priority. All your conversations are protected with end-to-end encryption, ensuring that only you and the person you're communicating with can read or listen to your messages.",
  },
  {
    title: "Media sharing",
    img:img,
    Content:
      "Share photos, videos, and documents effortlessly. Our app supports various media formats, ensuring you can send and receive important files without any hassle.",
  },
]);
</script>