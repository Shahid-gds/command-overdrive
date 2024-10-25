<template>
    <section class="overflow-y-auto h-screen pb-[2rem]">
      <div class="fixed px-6 py-4 w-full bg-white z-50">
        <topHeader />
      </div>
      <div class="px-6 mt-[7rem]">
          <div class="pb-6"><userInformation /></div>
          <div class="pb-6"><paymentHistory /></div>
          <div><subscription /></div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import topHeader from '@/views/accountSettings/navBar.vue';
  import userInformation from '@/views/accountSettings/userInformation.vue';
  import paymentHistory from '@/views/accountSettings/paymentHistory.vue';
  import subscription from '@/views/accountSettings/subscription.vue';
  </script>
  
  <style scoped>
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #E8E8E8;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #C1C1C1;
    border-radius: 5px;
  }
  </style>
  