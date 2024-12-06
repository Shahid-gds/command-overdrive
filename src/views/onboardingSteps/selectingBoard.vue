<template>
    <div class="flex justify-between space-x-10 items-center">
          <div>
              <div class="">
                  <button
                    @click="goToNext" :disabled="processing"
                    class="hover-btn text-xl text-center w-full h-[200px] p-8 rounded-lg text-[#962d34] border-2  border-[#962d34] font-[700] uppercase">
                            <div>
                                Add Vehicle
                            </div>
                            <div class="flex justify-center pt-5">
                                <img class="w-1/2" src="@/assets/images/onboarding-steps-car.png" alt="">                         
                            </div>
                  </button>
                </div>
          </div>
          <div class="uppercase text-[35px] text-[#A8A8A8]">
            or
          </div>
          <div class="p-4 bg-white border rounded-md shadow-md max-w-md">
            <h2 class="text-md font-semibold mb-4">Select the vehicle from which you want to add the device IMEI.</h2>
            <div class="mb-4">
              <input
                v-model="search"
                type="text"
                placeholder="Search Vehicles"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"/>
            </div>
            <div class="overflow-y-auto h-60">
                <ul class="">
                    <router-link
                      v-for="vehicle in filteredVehicles"
                      :key="vehicle.id"
                      :to="`/enter-imei/${vehicle.id}`"
                      class="">
                      <li class="flex items-center p-2 hover:bg-gray-100 transition-all duration-300 rounded-lg cursor-pointer">
                        <img  :src="vehicle.carImg" alt="vehicle" class="w-16 border-2 rounded-lg mr-4" />
                        <div>
                          <p class="font-medium">{{ vehicle.name }}</p>
                          <p class="text-sm text-gray-500">{{ vehicle.year }} {{ vehicle.made }}</p>
                        </div>
                      </li>
                    </router-link>
                  </ul>
            </div>
          </div>
    </div>
  <!-- <div class="flex justify-center">
    <a href=""
    class="hover-btn text-center w-1/3 mt-6 p-2 text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] rounded-lg">
    Skip
  </a>
  </div> -->
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";

  import { useApi } from '@/components/api/useApi';
  
  const { getApiUrl } = useApi();
  const apiUrl = getApiUrl();
  
  const search = ref("");
  const vehicles = ref([]);

  const fetchVehicles = async () => {
    try {
      const response = await fetch(`${apiUrl}/vehicles/getMe`);
      const data = await response.json();     
    
      if (data.data && Array.isArray(data.data.vehicles)) {
        vehicles.value = data.data.vehicles.map((item) => ({
          id: item._id,   
          carImg: item.photo,
          icon: item.photo,  
          name: item.nickname,   
          made: item.make,  
          model: item.model, 
          year: item.year,
        }));
      } else {
        console.error('Unexpected API response format. "vehicles" array not found.', data);
      }
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };
  
  onMounted(() => {
    fetchVehicles();
  });
  
  const filteredVehicles = computed(() =>
  vehicles.value.filter((vehicle) =>
    vehicle.name && vehicle.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
  const emit = defineEmits(['next']);

const goToNext = () => {
    emit('next');
};
  </script>
  
  <style scoped>
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #E8E8E8;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #C1C1C1;
    border-radius: 5px;
  }
  </style>
  