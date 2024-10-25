<template>
    <section class="main-bg w-full h-screen flex">
      <div class="w-full">
       <signUpForm />
      </div>
    </section>
  </template>
  
  <script setup>
  import signUpForm from '@/components/auth/signUpForm.vue'
  </script>
  
  <style scoped>
  .main-bg {
    background: url("@/assets/images/bgs/main-login.svg") center center no-repeat;
    background-size: cover;
  }
  </style>