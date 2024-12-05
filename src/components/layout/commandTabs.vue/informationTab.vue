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
onMounted(fetchVehicleData);

watch(() => route.params.id, (newId, oldId)=>{
    if (newId !== oldId) {
        fetchVehicleData();
    }
})
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
  @media(max-width:1900px){
    .screen-height {
        height: 75vh;
    }
  }
</style>