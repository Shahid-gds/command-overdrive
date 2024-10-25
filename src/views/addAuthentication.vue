<template>
    <section class="main-bg w-full h-screen flex">
      <div class="w-full">
       <addAuthentication />
      </div>
    </section>
  </template>
  
  <script setup>
  import addAuthentication from '@/components/layout/UI/addAuthenticationBoard.vue'
  </script>
  
  <style scoped>
  .main-bg {
    background: url("@/assets/images/bgs/main-login.svg") center center no-repeat;
    background-size: cover;
  }
  </style>
  