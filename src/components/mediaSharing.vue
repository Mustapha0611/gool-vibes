<template>
  <div class="flex items-center flex-col lg:flex-row justify-center lg:h-[100dvh]  w-full md:px-28">
    <section class="lg:w-[64%] w-[100%] md:h-[550px] h-[350px]">
      
        <img src="@/assets/phones.png" alt="phones" data-aos="zoom-in" data-aos-duration="1000" class="w-full h-full" />
      
    </section>
    <section class="flex-1 px-5 md:px-0"  >
        <div v-for="media of mediaContent" class="flex flex-col gap-5 mb-10">
            <h2 class="md:text-4xl text-3xl font-bold font-heading" data-aos="fade-up">{{ media.title }}</h2>
            <p class="text-base font-normal" data-aos="fade-up" data-aos-delay="100">{{ media.Content }}</p>
        </div>
    </section> 
  </div>
</template>
<script setup>
import { ref } from "vue";
const mediaContent = ref([
  {
    title: "Media Sharing",
    Content:
      "Share photos, videos, and documents effortlessly. Our app supports various media formats, ensuring you can send and receive important files without any hassle.",
  },
  {
    title: "Status Updates",
    Content:
      "Share your moments with status updates. Post photos, videos, and text updates that disappear after 24 hours, letting your contacts see what you're up to in a fun and temporary way.",
  },
]);
</script>
