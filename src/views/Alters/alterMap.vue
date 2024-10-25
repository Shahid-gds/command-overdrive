<template>
    <section class="w-full">
        <div class="relative 2xl:h-[500px] h-[300px]">
            <div ref="mapContainer" class="absolute top-0 left-0 z-0 w-full 2xl:h-[500px] h-[300px]"></div>
          </div>
    </section>
</template>

<script setup>
 import { ref, onMounted, onUnmounted } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import carIconUrl from '@/assets/images/car-img-red.svg';
  
  const mapContainer = ref(null);
  const showDetails = ref(true);
  
  const toggleDetails = () => {
    showDetails.value = !showDetails.value;
  };
  
  onMounted(() => {
    if (mapContainer.value) {
      const map = L.map(mapContainer.value).setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      const vehicleIcon = L.icon({
        iconUrl: carIconUrl,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
      });
      L.marker([51.505, -0.09], { icon: vehicleIcon }).addTo(map);
    }
  });
</script>