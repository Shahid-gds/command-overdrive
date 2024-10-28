<template>
    <section>
       <div class="fixed w-full z-40">
        <navBar />
       </div>
       <div class="flex h-screen fixed z-30 mt-[5rem]">
        <div>
            <leftMenu />
           </div>
       </div>
       <div class="w-full">
        <Map />
       </div>
    </section>
</template>

<script setup>
import navBar from '@/views/installers/navBar.vue';
import leftMenu from '@/views/installers/leftMenu.vue';
import Map from '@/views/installers/map.vue';
</script>