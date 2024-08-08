<template>
  <div
    class="flex justify-center items-center gap-2 pt-20 bg-[#E2CEF4] flex-col lg:px-44 md:px-10 px-5 text-center"
  >
    <h1 class="text-xl font-extrabold">FAQS</h1>
    <h2 class="md:text-2xl text-xl">Have a Question? Scan through our Frequently Asked</h2>
    <p class="lg:px-52 md:px-32">
      If you can't find what you're looking for, feel free to reach out to our
      support team. We're here to help you with any queries or issues you might
      have, ensuring you get the most out of your experience with our app.
    </p>
    <main id="faqs" class="lg:px-[10%] md:px-[5%]  pb-10 md:pb-0 bg-pattern relative w-full md:h-[700px] h-auto">
      <div class="md:px-20">
        <div class="accordion">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="accordion-item rounded-lg shadow-indigo-800 transition-all"
            :class="{'bg-[#624DF3] transition-all': item.open}"
            
          >
            <div
              class="flex justify-between mt-4 cursor-pointer title items-center font-semibold text-base py-5 rounded-sm  text-black px-5"
               :class="{'text-white': item.open}"
              @click="toggleItem(index)"
            >
              <section>
                {{ item.title }}
              </section>
              <section>
                <span v-if="item.open" class="accordion-icon w-6 h-6"><img src="@/assets/angle-up.png" alt="angle up" class="w-full h-full"></span>
                <span v-else class="accordion-icon w-6 h-6"><img src="@/assets/angle-down.png" alt="angle down" class="w-full h-full"></span>
              </section>
            </div>
            <transition name="accordion">
              <div
                v-if="item.open"
                class="accordion-content px-5 py-5 text-black"
                :class="{'text-white': item.open}"
              >
                {{ item.content }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        title: "Lorem ipsum",
        content:
          "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sapiente quidem reiciendis minima aperiam nobis perspiciatis vero alias ea magnam sed illo commodi veniam nihil corporis, molestiae hic eligendi. Exercitationem.",
        open: false,
      },
      {
        title: "Lorem ipsum",
        content:
          "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sapiente quidem reiciendis minima aperiam nobis perspiciatis vero alias ea magnam sed illo commodi veniam nihil corporis, molestiae hic eligendi. Exercitationem.",
        open: false,
      },
      {
        title: "Lorem ipsum",
        content:
          "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sapiente quidem reiciendis minima aperiam nobis perspiciatis vero alias ea magnam sed illo commodi veniam nihil corporis, molestiae hic eligendi. Exercitationem.",
        open: false,
      },
      {
        title: "Lorem ipsum",
        content:
          "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sapiente quidem reiciendis minima aperiam nobis perspiciatis vero alias ea magnam sed illo commodi veniam nihil corporis, molestiae hic eligendi. Exercitationem.",
        open: false,
      },
      {
        title: "Lorem ipsum",
        content:
          "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sapiente quidem reiciendis minima aperiam nobis perspiciatis vero alias ea magnam sed illo commodi veniam nihil corporis, molestiae hic eligendi. Exercitationem.",
        open: false,
      },
      {
        title: "Lorem ipsum",
        content:
          "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sapiente quidem reiciendis minima aperiam nobis perspiciatis vero alias ea magnam sed illo commodi veniam nihil corporis, molestiae hic eligendi. Exercitationem.",
        open: false,
      },
    ]);

    const toggleItem = (index) => {
      items.value.forEach((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
    };

    return {
      items,
      toggleItem,
    };
  },
};
</script>

<style>
.accordion {
  width: 100%;
}

.accordion-item {
  margin-bottom: 5px;
}
.title{
  border-bottom: 1px solid gray;
}
/* .accordion-content {
  padding: 10px; 
} */

.accordion-icon {
  float: right;
  
}

.accordion-enter-active,
.accordion-leave-active {
  max-height: 400px;
  transition: max-height 0.3s ease-in-out;
}

.accordion-enter,
.accordion-leave-to {
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}
</style>
