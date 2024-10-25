<template>
    <section>
       <div class="fixed w-full z-50">
        <navBar />
       </div>
       <div>
        <leftMenu />
       </div>
       <div class="w-full">
        <Map />
       </div>
    </section>
</template>

<script setup>
import navBar from '@/views/dashboard/navBar.vue';
import leftMenu from '@/views/dashboard/leftMenu.vue';
import Map from '@/views/dashboard/map.vue';
</script>