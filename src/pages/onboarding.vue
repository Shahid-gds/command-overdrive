<template>
  <section class="main-bg">
    <div class="fixed px-6 py-4 w-full">
      <topHeader />
    </div>
    <div class="w-full container mx-auto flex items-center justify-center min-h-screen">
      <div class="w-[60%]">
        <choiseBoard v-if="currentStep === 1" @next="currentStep = 2" />
        <selectingBoard v-if="currentStep === 2" @next="currentStep = 3" />
        <stepOne v-if="currentStep === 3" @next="currentStep = 4" />
        <stepTwo v-if="currentStep === 4" @previous="currentStep = 3" @next="currentStep = 5" />
        <stepThree v-if="currentStep === 5" @ready="currentStep = 'ready'" />
        <ready v-if="currentStep === 'ready'" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import topHeader from '@/views/onboardingSteps/header.vue';
import choiseBoard from '@/views/onboardingSteps/choiseBoard.vue';
import selectingBoard from '@/views/onboardingSteps/selectingBoard.vue';
import stepOne from '@/views/onboardingSteps/stepOne.vue';
import stepTwo from '@/views/onboardingSteps/stepTwo.vue';
import stepThree from '@/views/onboardingSteps/stepThree.vue';
import ready from '@/views/onboardingSteps/ready.vue';

// Track the current step
const currentStep = ref(1);
</script>

<style scoped>
.main-bg {
  background: url("@/assets/images/bgs/main-login.svg") center center no-repeat;
  background-size: cover;
}
</style>
