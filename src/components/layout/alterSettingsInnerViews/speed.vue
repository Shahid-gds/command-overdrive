<template>
  <section class="screen-height max-h-[70vh] overflow-y-auto px-6">
    <div class="pb-6">
      <speedLimit />
    </div>
    <div class="pb-6">
        <speedDisplay />
    </div>
    <div>
        <speedingAlert />
    </div>
  </section>
</template>
<script setup>
import speedLimit from "../speedSections/speedLimit.vue";
import speedDisplay from "../speedSections/speedDisplay.vue";
import speedingAlert from "../speedSections/speedingAlert.vue";
</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 10px;
    background-color: #D63D4A;
  
  }
  @media (max-width: 1900px) {
    .screen-height {
      height: 73vh;
    }
    }
</style>