<template>
    <section class="main-bg w-full h-screen flex">
      <div class="w-full">
       <forgotPassword />
      </div>
    </section>
  </template>
  
  <script setup>
  import forgotPassword from '@/components/auth/forgotPasswordForm.vue';
  </script>
  
  <style scoped>
  .main-bg {
    background: url("@/assets/images/bgs/main-login.svg") center center no-repeat;
    background-size: cover;
  }
  </style>
  