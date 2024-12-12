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
                  <div v-if="filteredVehicles.length === 0" class=" mt-4 text-center text-[#434343]">
                    <div class="flex justify-center pb-5">
                      <svg fill="none" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#b21d27d3">
                          <path d="m44.7574 13.5858c-.781-.7811-.781-2.0474 0-2.8284.7811-.78109 2.0474-.78109 2.8284 0l1.4142 1.4141 1.4142-1.4141c.781-.78109 2.0473-.78109 2.8284 0 .781.781.781 2.0473 0 2.8284l-1.4142 1.4141 1.4143 1.4143c.781.7811.781 2.0474 0 2.8284-.781.7811-2.0474.7811-2.8284 0l-1.4143-1.4142-1.4143 1.4142c-.781.7811-2.0474.7811-2.8284 0-.781-.781-.781-2.0473 0-2.8284l1.4143-1.4143z"/><path clip-rule="evenodd" d="m36 15c0-7.1797 5.8203-13 13-13s13 5.8203 13 13-5.8203 13-13 13-13-5.8203-13-13zm13-9c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9 9-4.0294 9-9-4.0294-9-9-9z" fill-rule="evenodd"/>
                        <path d="m2 20c0-7.732 6.26801-14 14-14h16c1.1046 0 2 .89543 2 2s-.8954 2-2 2h-16c-5.5228 0-10 4.4772-10 10v13c0 1.1046-.89543 2-2 2s-2-.8954-2-2z"/>
                        <path d="m56 30c1.1046 0 2 .8954 2 2v16c0 7.732-6.268 14-14 14h-3c-1.1046 0-2-.8954-2-2s.8954-2 2-2h3c5.5229 0 10-4.4772 10-10v-16c0-1.1046.8954-2 2-2z"/><path d="m9.89286 49.6364c-1.10457 0-2 .8954-2 2 0 1.1045.89543 2 2 2h2.14284c1.1046 0 2-.8955 2-2 0-1.1046-.8954-2-2-2z"/>
                        <path d="m25.4286 49.6364c-1.1046 0-2 .8954-2 2 0 1.1045.8954 2 2 2h2.1428c1.1046 0 2-.8955 2-2 0-1.1046-.8954-2-2-2z"/>
                        <path clip-rule="evenodd" d="m12.2096 35c-2.21297 0-4.21963 1.3835-4.94197 3.498l-1.23621 3.6187c-.93976-.4438-2.0767-.0919-2.59483.8278-.54215.9623-.2015 2.182.76086 2.7242l.16502.0929c-1.43327 1.1252-2.36247 2.8573-2.36247 4.8293v6.2727c0 2.8828 2.38107 5.1364 5.21429 5.1364 2.32642 0 4.34801-1.5195 4.99681-3.6591h13.5778c.6488 2.1396 2.6704 3.6591 4.9968 3.6591 2.8332 0 5.2143-2.2536 5.2143-5.1364v-6.2727c0-1.9926-.9488-3.7404-2.4077-4.8645l.1026-.0577c.9624-.5422 1.303-1.7619.7609-2.7242-.5011-.8894-1.5808-1.2478-2.5013-.8691l-1.2221-3.5774c-.7224-2.1145-2.729-3.498-4.942-3.498zm-1.1567 4.7911-1.57762 4.618h19.04942l-1.5776-4.618c-.1526-.4469-.6026-.7911-1.1567-.7911h-13.5808c-.5541 0-1.0041.3442-1.1567.7911zm-5.0529 10.7998c0-1.159.9768-2.1818 2.28571-2.1818h21.42859c1.3089 0 2.2857 1.0228 2.2857 2.1818v6.2727c0 .5816-.4971 1.1364-1.2143 1.1364s-1.2143-.5548-1.2143-1.1364v-.5227c0-1.1046-.8954-2-2-2h-17.1428c-1.1046 0-2.00003.8954-2.00003 2v.5227c0 .5816-.4971 1.1364-1.21428 1.1364-.71719 0-1.21429-.5548-1.21429-1.1364z" fill-rule="evenodd"/></g></svg>
                    </div>
                    No vehicle found!
                  </div>
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

  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
};
const userId = getCookie('user-id')

  const fetchVehicles = async () => {

    const headers = {
    'user-id' : userId,
    'Content-Type' : 'application/json'
  };
    try {
      const response = await fetch(`${apiUrl}/vehicles/getMe`, {headers});
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
  