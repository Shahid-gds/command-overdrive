<template>
    <section>
       <div class="fixed w-full z-40">
        <navBar />
       </div>
       <div class="flex h-screen fixed z-40 mt-[5rem]">
        <div>
            <leftMenu />
           </div>
           <div>
            <tabsMenu />
           </div>
       </div>
       <div class="w-full">
        <Map />
       </div>
    </section>
</template>

<script setup>
import navBar from '@/views/command/navBar.vue';
import leftMenu from '@/views/command/leftMenu.vue';
import tabsMenu from '@/views/command/tabsMenu.vue';
import Map from '@/views/command/map.vue';
</script>