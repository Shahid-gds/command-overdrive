<template>
  <section class="flex">
    <div class="fixed w-full z-40">
      <navBar />
    </div>
    
    <div class="flex fixed z-40 mt-[5rem]">
      <div>
        <leftMenu />
      </div>
      <div>
        <heliTabsMenu />
      </div>
    </div>
    
    <div class="flex w-full mt-[5rem]">
      <div class="flex-grow p-4"></div>
      <div class="2xl:w-[60%] w-[80%]">
        <heliMap />
      </div>
    </div>
  </section>
</template>

<script setup>
import navBar from '@/views/command/navBar.vue';
import leftMenu from '@/views/command/leftMenu.vue';
import heliTabsMenu from '@/views/helicopterView/heliTabsMenu.vue';
import heliMap from '@/views/helicopterView/heliMap.vue';
</script>

<style scoped>

</style>
