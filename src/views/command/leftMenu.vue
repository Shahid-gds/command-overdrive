<template>
    <section class="bg-[rgb(232,232,232)] pt-4">
      <div class="pl-4 pr-2">
        <div class="pb-2">
          <router-link :to="{name : 'Onboarding'}" class="flex space-x-2 text-white rounded-lg font-[600] cursor-pointer uppercase justify-center px-4 bg-[#D63D4A] p-2">
            <div>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
             </svg>          
            </div>
             <div>
              add device
            </div>
           </router-link>
         </div>
         <div class="relative pb-4">
          <input
            type="search" v-model="search"
            class="bg-[white] outline-none p-2 border-2 border-[#B9B9B9] rounded-lg w-full pl-12 placeholder:text-[#000000]"
            placeholder="Search Instailer"  />
          <div class="absolute top-3.5 left-4">
            <img src="@/components/icons/search.svg" alt="" />
          </div>
        </div>
        <div class="h-screen">
          <div class="main-rounters h-[76vh] overflow-y-scroll pr-3 pb-2">
            <router-link
              class="flex items-center justify-between space-x-2 py-3 px-1 transition-all duration-300 ease-in-out border-b-[1px] border-[#C2C2C2]"
              v-for="item in filteredVehicles"
              :key="item.id"
              :to="`/dashboard/${item.id}`"
              :class="{
                'bg-white rounded-lg':
                  $route.path === `/dashboard/${item.id}`,
                '' : $route.path !== `/dashboard/${item.id}`,}">
              <div class="relative">
                <span class="">
                  <img class="w-[12rem] border-2 border-[#B9B9B9] rounded-lg" :src="item.carImg">
                </span>
                <span v-if="item.active" class="w-4 h-4 border-white border-2 bg-[#E82031] absolute -top-1 -left-1.5 rounded-full"></span>
                <span v-if="item.unactive" class="w-4 h-4 border-white border-2 bg-[#2BE31E] absolute -top-1 -left-1.5 rounded-full"></span>
              </div>
              <div class="w-full">
                <div class="text-[#000000] text-[14px] font-[600]">
                  {{ item.name }}
                </div>
                <div class="text-[12px] text-[#434343]">
                  {{ item.made }} - {{ item.year }}
                </div>
              </div>
              <div class="h-[50px] w-[2px] bg-[#CCCCCC]"></div>
              <div class="flex w-[50%] justify-center">
                <div class="w-full">
                  <div class="flex justify-center">
                    Status
                  </div>
                  <div class="uppercase text-center text-[12px] text-[#E82031] font-[600]">
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
  </template>
  
  <script setup>
  import { RouterLink } from "vue-router";
  import { onMounted, ref, computed } from 'vue';
  import { useApi } from '@/components/api/useApi';
  
  const { getApiUrl } = useApi();
  const apiUrl = getApiUrl();
  
  const search = ref("");

const filteredVehicles = computed(() =>
menu.value.filter((vehicle) =>
  vehicle.name && vehicle.name.toLowerCase().includes(search.value.toLowerCase())
)
);

  const menu = ref([]);
  
  const fetchVehicles = async () => {
    try {
      const response = await fetch(`${apiUrl}/vehicles/getMe`);
      const data = await response.json();     
    
      if (data.data && Array.isArray(data.data.vehicles)) {
        menu.value = data.data.vehicles.map((item) => ({
          id: item._id,   
          carImg: item.photo,
          icon: item.photo,  
          name: item.nickname,   
          made: item.make,  
          model: item.model, 
          year: item.year,
          // status: item.license_plate,
          active: 'active',         
          unactive: '',
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
  </script>
  
  <style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-400px);
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #E8E8E8;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #C1C1C1;
    border-radius: 5px;
  }
  @media(max-width:1900px){
    .main-rounters {
      padding: 0.5rem;
      height: 70vh;
    }
  }
  @media (max-width: 1366px) and (max-height: 800px) {
    .main-rounters {
        padding: 0.5rem;
        height: 72vh;
    }
}
  @media (max-width: 1366px) and (max-height: 650px) {
    .main-rounters {
        padding: 0.5rem;
        height: 66vh;
    }
}
  </style>  