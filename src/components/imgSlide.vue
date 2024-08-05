<template>
  <main>
    <Splide :options="options" :hasTracker="false">
      <SplideSlide v-for="img of imgs" class="h-auto text-white">
        <img :src="img.avatar" alt="slider images" class="w-full h-full" data-aos="zoom-out"  data-aos-delay="300" />
        <!-- <h3 class="text-center font-semibold text-2xl play">{{ review.title }}</h3> -->
      </SplideSlide>
    </Splide>
  </main>
</template>
<script setup>
import { ref } from "vue";
import one from "@/assets/black-woman.png";
import two from "@/assets/white-man.png";
import three from "@/assets/white-woman.png";
import four from "@/assets/black-man.png";
import "@splidejs/splide/css";
const imgs = ref([
  {
    avatar: one,
  },
  {
    avatar: two,
  },
  {
    avatar: three,
  },
  {
    avatar: four,
  },
  {
    avatar: one,
  },
  {
    avatar: two,
  },
  {
    avatar: three,
  },
]);
const options = {
  hasTrack: true,
  type: "loop",
  rewind: true,
  pagination: false,
//   gap: "1rem",
  perPage: 4,
  autoplay: true,
  interval: 3000,
  // focus:0,
  arrows: false,
  breakpoints: {
    1240: {
      perPage: 3,
    },
    880: {
      perPage: 2,
    },
    640: {
      perPage: 1,
    },
  },
};
</script>
