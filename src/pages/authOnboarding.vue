<template>
  <section class="main-bg w-full h-screen flex">
    <div class="container mx-auto flex items-center justify-center min-h-screen relative">
      <div class="text-center w-[75%]">
        <div class="flex justify-center">
          <img src="@/assets/images/logo.svg" alt="Logo" />
        </div>
        <h1 class="text-center uppercase text-[46px] font-[700] text-[#B92A32] tracking-[6px] py-10">
          Onboarding
        </h1>
        <p class="text-[#000000] h-[80px]">
          {{ slides[activeSlide] }}
        </p>
        <div class="flex justify-center items-center space-x-2 mt-6 relative">
          <span
            v-for="(slide, index) in slides"
            :key="index"
            class="rounded-full cursor-pointer transition-all duration-300"
            :class="{
              'w-4 h-4 bg-[#ED2E3E]': activeSlide === index,
              'w-3 h-3 bg-[#ED2E3E] opacity-70': activeSlide !== index }"
            @click="changeSlide(index)">
          </span>
            <!-- Previous Arrow -->
        <button
        class="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 px-3 rounded-lg bg-[#ED2E3E]"
        @click="previousSlide"
        :disabled="activeSlide === 0">
        <span class="text-white text-xl font-[800]">&larr;</span>
      </button>
           <!-- Next Arrow -->
           <button
           class="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 px-3 rounded-lg bg-[#ED2E3E]"
           @click="nextSlide">
           <span class="text-white text-xl font-[800]">&rarr;</span>
         </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const slides = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
];
const activeSlide = ref(0);
const router = useRouter();

const changeSlide = (index) => {
  activeSlide.value = index;
};

const previousSlide = () => {
  if (activeSlide.value > 0) {
    activeSlide.value -= 1;
  }
};

const nextSlide = () => {
  if (activeSlide.value < slides.length - 1) {
    activeSlide.value += 1;
  } else {
    router.push('/dashboard');
  }
};
</script>

<style scoped>
.main-bg {
  background: url("@/assets/images/bgs/main-login.svg") center center no-repeat;
  background-size: cover;
}
button:disabled {
  opacity: 0.5; /* Optional: to visually indicate the button is disabled */
}
</style>
