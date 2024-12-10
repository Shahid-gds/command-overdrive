<template>
    <section class="">
        <div class="screen-height max-h-[80vh] overflow-y-scroll pr-4 mt-6">
           <div class="flex justify-between items-center border-b-[1px] pb-4 border-[#9F9F9F]" >
            <div class="uppercase font-[700]">Vehicle Details</div>
            <div class="flex items-center cursor-pointer">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#A1A1A1" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  </div>
                  <div class="text-[#A1A1A1] uppercase font-[600]">Edit</div>
            </div>
           </div>
         <div class="mt-5 border-b-[1px] pb-6 border-[#292929]">
            <div class="flex justify-between">
                <div>
                    <div class="font-[600] uppercase">Vehicle</div>
                    <div class="">Make: {{ vehicle.make }}</div>
                    <div class="">Model: {{ vehicle.model }}</div>
                    <div class="">Year: {{ vehicle.year }}</div>
                </div>
                <div>
                    <div class="font-[600] uppercase">License Plate</div>
                    <div class="">{{ vehicle.license_plate }}</div>
                    <div class="font-[600] uppercase mt-6">Odometer</div>
                    <div class="">{{ vehicle.mileage}} miles</div>
                </div>
               </div>
               <div class="flex justify-between">
                <div class="w-full">
                    <div class="font-[600] uppercase">Nickname</div>
                    <div class="">{{ vehicle.nickname }}</div>
                </div>
               </div>
               <div class="flex justify-between mt-5">
                <div class="w-full">
                    <div class="font-[600] uppercase">VIN</div>
                    <div class="">{{ vehicle.vin }}</div>
                </div>
                <div class="w-[40%]">
                    <div class="font-[600] uppercase">Engine</div>
                    <div class="">None</div>
                </div>
               </div>
               <div class="flex justify-between mt-5">
                <div class="w-full">
                    <div class="font-[600] uppercase">Body Style</div>
                    <div class="">{{ vehicle.bodyClass }}</div>
                </div>
               </div>
         </div>
           <div class="flex justify-between items-center border-b-[1px] pb-4 border-[#9F9F9F] pt-5" >
            <div class="uppercase font-[700]">Device</div>
            <div class="flex items-center cursor-pointer">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#A1A1A1" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  </div>
                  <div class="text-[#A1A1A1] uppercase font-[600]">Edit</div>
            </div>
           </div>
         <div class="mt-5 border-b-[1px] pb-6 border-[#292929]">
            <div class="flex justify-between">
                <div class="w-full">
                    <div class="font-[600] uppercase">Serial #</div>
                    <div class="">None</div>
                </div>
               </div>
            <div class="flex justify-between mt-5">
                <div class="w-full">
                    <div class="font-[600] uppercase">Plan</div>
                   <div class="flex space-x-10">
                    <div class="">Standard Plan</div>
                    <div class="uppercase text-[#D63D4A] font-[600]">Upgrade Plan</div>
                   </div>
                </div>
               </div>
         </div>
           <div class="flex justify-between items-center border-b-[1px] pb-4 border-[#9F9F9F] pt-5" >
            <div class="uppercase font-[700]">Insurance Connected</div>
            <div class="flex items-center cursor-pointer">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#A1A1A1" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  </div>
                  <div class="text-[#A1A1A1] uppercase font-[600]">Edit</div>
            </div>
           </div>
         <div class="mt-5 border-b-[1px] pb-6 border-[#292929]">
            <div class="flex justify-between">
                <div class="w-full">
                    <div class="font-[600] uppercase">Insurance Provider </div>
                    <div class="">Insurance Provider Here </div>
                </div>
               </div>
            <div class="flex justify-between mt-5">
                <div class="w-full">
                    <div class="font-[600] uppercase">Policy #  </div>
                    <div class="">M1HS578778</div>
                </div>
               </div>
            <div class="flex justify-between mt-5">
                <div class="w-full">
                    <div class="uppercase">Rental Program Miles Driven Off Rent </div>
                </div>
               </div>
         </div>
           <div class="flex justify-between items-center border-b-[1px] pb-4 border-[#9F9F9F] pt-5" >
            <div class="uppercase font-[700]">Connected Accounts </div>
           </div>
         <div class="mt-5 border-b-[1px] pb-6 border-[#292929]">
            <div class="flex justify-between pb-6">
                <div class="">
                    <div class="font-[600] uppercase">Turo</div>
                </div>
                <div class="">
                    <div class="font-[600] uppercase flex space-x-1 cursor-pointer items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#D63D4A" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          </div>
                          <div class="text-[#A1A1A1]">Add</div>
                    </div>
                </div>
               </div>
            <div class="flex justify-between pb-6">
                <div class="">
                    <div class="font-[600] uppercase">Get-Around</div>
                </div>
                <div class="">
                    <div class="font-[600] uppercase flex space-x-1 cursor-pointer items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#D63D4A" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          </div>
                          <div class="text-[#A1A1A1]">Add</div>
                    </div>
                </div>
               </div>
            <div class="flex justify-between pb-6">
                <div class="">
                    <div class="font-[600] uppercase">Tint</div>
                </div>
                <div class="">
                    <div class="font-[600] uppercase flex space-x-1 cursor-pointer items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#D63D4A" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          </div>
                          <div class="text-[#A1A1A1]">Add</div>
                    </div>
                </div>
               </div>
            <div class="flex justify-between pb-6">
                <div class="">
                    <div class="font-[600] uppercase">ABI</div>
                </div>
                <div class="">
                    <div class="font-[600] uppercase flex space-x-1 cursor-pointer items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#D63D4A" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          </div>
                          <div class="text-[#A1A1A1]">Add</div>
                    </div>
                </div>
               </div>
            <div class="flex justify-between">
                <div class="">
                    <div class="font-[600] uppercase">Backyard </div>
                </div>
                <div class="">
                    <div class="font-[600] uppercase flex space-x-1 cursor-pointer items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#D63D4A" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          </div>
                          <div class="text-[#A1A1A1]">Add</div>
                    </div>
                </div>
               </div>
         </div>
         <div class="flex justify-center mt-4">
            <button @click="showDeleteModal = true" class="hover-btn text-white p-3 px-8 rounded-lg bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
              Delete Vehicle
            </button>
          </div>
          
      <!-- Modal for Confirmation -->
      <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h3 class="text-lg font-semibold mb-4">Are you sure you want to delete this vehicle?</h3>
          <div class="flex justify-between">
            <button @click="deleteVehicle" class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Yes, Delete
            </button>
            <button @click="showDeleteModal = false" class="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
              No, Cancel
            </button>
          </div>
        </div>
      </div>
      <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-10 rounded-lg text-center relative">
          <svg v-if="showPopup" class="animate-tick h-10 w-10 border-2 rounded-full text-green-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M6 12l4 4L18 8" />
          </svg>
          <h2 class="text-xl font-bold text-green-600">Vehicle Deleted Successfully</h2>
        </div>
      </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { useApi } from '@/components/api/useApi';
  
  const { getApiUrl } = useApi();
  const apiUrl = getApiUrl();

// Vehicle details state
const vehicle = ref({
  make: '',
  model: '',
  year: '',
  license_plate: '',
  odometer: '',
  nickname: '',
  mileage: '',
  vin: '',
  engine: '',
  bodyStyle: '',
});

const route = useRoute();

const fetchVehicleData = async () => {
    const vehicleId = route.params.id; 
  try {
    const response = await axios.get(`${apiUrl}/vehicles/me`, {
      headers: {
        'Vehicle-ID': vehicleId,
      },
    });
    vehicle.value = response.data.data.vehicle;
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
  }
};


const showDeleteModal = ref(false);
const showPopup = ref(false);

const deleteVehicle = async () => {
    const vehicleId = route.params.id;
    try {
      await axios.delete(`${apiUrl}/vehicles/deleteMe`, {
        headers: {
          'Vehicle-ID': vehicleId,
        },
      });
      showDeleteModal.value = false;
      showPopup.value = true;
      window.location.reload();
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };


onMounted(fetchVehicleData);

watch(() => route.params.id, (newId, oldId)=>{
    if (newId !== oldId) {
        fetchVehicleData();
    }
})
</script>

<style scoped>
.animate-tick {
    animation: tick 0.5s ease-in-out forwards;
  }
  
  @keyframes tick {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
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
    .screen-height {
        height: 75vh;
    }
  }
</style>