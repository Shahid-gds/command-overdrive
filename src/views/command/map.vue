<template>
  <section class="w-full">
    <div class="relative h-screen">
      <div ref="mapContainer" class="absolute top-0 left-0 z-0 w-full h-screen"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import carIconUrl from '@/assets/images/car-img-white.svg';

import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();


const mapContainer = ref(null);

const fetchVehicleData = async () => {
  try {
    const response = await fetch(`${apiUrl}/vehicles/getMe`);
    const data = await response.json();
    return data.data.vehicles;
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
  }
};

const generateRandomCoordinates = (baseLat, baseLng) => {
  const latOffset = (Math.random() - 0.5) * 0.1;
  const lngOffset = (Math.random() - 0.5) * 0.1;
  return [baseLat + latOffset, baseLng + lngOffset];
};

onMounted(async () => {
  if (mapContainer.value) {
    const map = L.map(mapContainer.value).setView([39.8283, -98.5795], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    const vehicles = await fetchVehicleData();

    vehicles.forEach(vehicle => {
      let latitude = vehicle.latitude;
      let longitude = vehicle.longitude;
      if (typeof latitude === 'undefined' || typeof longitude === 'undefined') {
        [latitude, longitude] = generateRandomCoordinates(40.708822935916444, -73.99342576821509);
      }

      const vehicleIcon = L.divIcon({
  className: 'vehicle-icon',
  html: `
    <div style="background-color: white; border: 2px solid black; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
      <img src="${vehicle.photo || carIconUrl}" alt="${vehicle.nickname}" style="width: 40px; height: 30px;"/>
    </div>
  `,
  iconSize: [50, 50], 
  iconAnchor: [25, 50],  
  popupAnchor: [0, -50],
});

      const popupContent = `
        <div>
          <h3>${vehicle.nickname}</h3>
          <p>${vehicle.make} ${vehicle.model} (${vehicle.year})</p>
          <p>License Plate: ${vehicle.license_plate}</p>
          <p>Mileage: ${vehicle.mileage}</p>
          <img src="${vehicle.photo || carIconUrl}" alt="${vehicle.nickname}" style="width: 100px; height: 80px;" />
        </div>
      `;

      L.marker([latitude, longitude], { icon: vehicleIcon })
        .addTo(map)
        .bindPopup(popupContent);
    });
  }
});
</script>

<style scoped>

</style>
