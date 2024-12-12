<template> 
    <section class="2xl:flex 2xl:space-x-10 overflow-y-auto">
        <div class="w-full 2xl:pb-0 pb-10">
            <div class="flex justify-between pb-2">
                <div><h1 class="font-[700] uppercase text-xl">Subscription:</h1></div>
                <div class="flex items-center space-x-1 bg-[#D63D4A] p-1 px-4 font-[600] rounded-lg text-white cursor-pointer">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="6" stroke="white" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>                          
                    </div>
                    <router-link :to="{name : 'Onboarding'}" class="uppercase">Add Vehicle</router-link>
                </div>
            </div>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex flex-col space-y-4">
                <div v-for="invoice in paginatedInvoices" :key="invoice.id" class="flex justify-between space-x-10">
                  <div class="w-full flex justify-between items-center pt-4 border-b-2 border-[#AEAEAE] space-x-10">
                    <div class="w-full flex items-center space-x-2 pb-3">
                        <div>
                            <img src="../../assets/images/car-img-red.svg" alt="">
                        </div>
                      <div>
                        <div class="font-[600]">Serial #{{ invoice.sNo }}</div>
                        <div class="pb-2">
                            <span>{{ invoice.nickName }} | </span> <span>{{invoice.made}} | </span> <span>{{invoice.year}}</span>
                        </div>
                      </div>
                    </div>
                  <div class="w-1/2">
                    <div class="bg-[white] text-center p-2 rounded-full px-6 font-[600] uppercase">
                        {{ invoice.btnAdvanced }}
                    </div>
                  </div>
                   <div class="w-1/2 text-center">
                    <div v-if="invoice.status === 'Inactive'" class="bg-[#FFB5BB] text-[#78171F] p-2 rounded-full px-6 font-[600] uppercase">
                        {{ invoice.status }}
                    </div>
                    <div v-if="invoice.status === 'Active'" class="bg-[#A6E99B] text-[#102D0C] p-2 rounded-full px-6 font-[600] uppercase">
                        {{ invoice.status }}
                    </div>
                   </div>
                    <div class="w-1/2 text-center">
                        <div class="p-2 px-4 bg-[#D63D4A] font-[600] rounded-lg text-white cursor-pointer uppercase">Change</div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end mt-4 space-x-2">
                    <span
                        v-for="page in totalPages"
                        :key="page"
                        @click="currentPage = page"
                        :class="[
                            'cursor-pointer w-6 h-6 text-center rounded-full',
                            currentPage === page ? 'bg-[#D63D4A] text-white' : ''
                        ]">
                        {{ page }}
                    </span>
                </div>
            </div>
        </div>
        <div class="w-full">
            <h1 class="font-[700] uppercase text-xl pb-2">Authorized User:</h1>
          <div class="bg-[#E8E8E8] p-4 rounded-lg ">
            <div v-for="user in paginatedUsers" :key="user.id"  class="flex space-x-10">
                  <div class="flex justify-between space-x-4 items-center border-b-2 border-[#AEAEAE] w-full py-2">
                      <div class="flex items-center space-x-2">
                          <div class="">
                              <img class="h-[70px]" src="@/assets/images/car-img-red.svg" alt="">
                          </div>
                        <div>
                          <div>{{user.name}}</div>
                          <div>{{user.email}}</div>
                          <div>{{user.vehicle}}</div>                           
                        </div>
                      </div>
                      <div class="">
                          <div class="p-2 px-4 bg-[#D63D4A] font-[600] rounded-lg text-white cursor-pointer uppercase">Change</div>
                      </div>
                  </div>                     
                  <div class="flex justify-between space-x-4 items-center border-b-2 border-[#AEAEAE] w-full py-2">
                      <div class="flex items-center space-x-2">
                          <div class="">
                              <img class="h-[70px]" src="@/assets/images/car-img-red.svg" alt="">
                          </div>
                        <div>
                          <div>{{user.name}}</div>
                          <div>{{user.email}}</div>
                          <div>{{user.vehicle}}</div>                           
                        </div>
                      </div>
                      <div class="">
                          <div class="p-2 px-4 bg-[#D63D4A] font-[600] rounded-lg text-white cursor-pointer uppercase">Change</div>
                      </div>
                  </div>                     
              </div>
              <div class="flex justify-end mt-4 space-x-2">
                  <span
                      v-for="page in totalUsers"
                      :key="page"
                      @click="currentUsers = page"
                      :class="[
                          'cursor-pointer w-6 h-6 text-center rounded-full',
                          currentUsers === page ? 'bg-[#D63D4A] text-white' : ''
                      ]"
                  >
                      {{ page }}
                  </span>
              </div>
          </div>
          <div class="2xl:mt-[5rem] mt-10">
            <h1 class="font-[700] uppercase text-xl pb-2">Data Settings </h1>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex space-x-10 pb-10">
                     <div class="w-full">
                        <div class="flex items-center space-x-2 border-b-2 border-[#AEAEAE] pb-3">
                            <div class="button b2" id="button-13">
                                <input type="checkbox" class="toggle-checkbox" v-model="isMiles" />
                                <div class="knobs" :class="{ 'on': isMiles, 'off': !isMiles }">
                                    <span></span>
                                </div>
                                <div class="layer" :class="{ 'on-layer': isMiles, 'off-layer': !isMiles }"></div>
                            </div>
                            <div class="font-[700]" :class="{ 'text-black-500': isMiles, 'text-gray-500': !isMiles }">Miles/kilometers</div>
                        </div>
                          <div class="flex items-center space-x-2 border-b-2 border-[#AEAEAE] py-3">
                            <div class="button b2" id="button-13">
                                <input type="checkbox" class="toggle-checkbox" v-model="isDateFormat">
                                <div class="knobs" :class="{ 'on': isDateFormat, 'off': !isDateFormat }">
                                  <span></span>
                                </div>
                                <div class="layer" :class="{ 'on-layer': isDateFormat, 'off-layer': !isDateFormat }"></div>
                              </div>
                              <div class="font-[700]" :class="{ 'text-black-500': isDateFormat, 'text-gray-500': !isDateFormat }">Date Format 12/24 </div>
                          </div>
                     </div>
                     <div class="w-full">
                        <div class="checkbox-wrapper-45 flex items-center border-b-2 border-[#AEAEAE] pb-3">
                            <input id="cbx-timezone" type="checkbox" v-model="isTimezone"/>
                            <label class="cbx" for="cbx-timezone">
                                <div class="flip">
                                    <div class="front"></div>
                                    <div class="back">
                                        <svg width="16" height="14" viewBox="0 0 16 14">
                                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </label>
                            <label class="text-[#000000] cursor-pointer ml-1 font-[700]" for="cbx-timezone">Timezone</label>
                        </div>
                        <div class="checkbox-wrapper-45 flex items-center border-b-2 border-[#AEAEAE] py-3">
                            <input id="cbx-Currency" type="checkbox" />
                            <label class="cbx" for="cbx-Currency">
                                <div class="flip">
                                    <div class="front"></div>
                                    <div class="back">
                                        <svg width="16" height="14" viewBox="0 0 16 14">
                                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </label>
                            <label class="text-[#000000] cursor-pointer ml-1 font-[700]" for="cbx-Currency">USD</label>
                        </div>
                     </div>
            </div>
          <div class="mt-8">
            <router-link to="/alters?tab=alterSettings">
                <button class="bg-[#D63D4A] flex space-x-1 items-center p-2 rounded-lg px-6 text-white">
                    <div>
                        <img src="@/components/icons/alter-setting.svg" alt="">
                    </div>
                    <div class="font-[600] uppercase">Alert Setting</div>
                </button>
            </router-link>
          </div>
          </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const invoices = ref([]);

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
        invoices.value = data.data.vehicles.map((item) => ({
          id: item._id,
          nickName: item.nickname,
          made: item.make, 
          model: item.model, 
          year: item.year,
          btnAdvanced: 'Advanced',
          status: item.status || 'Inactive',
        }));
      } else {
        console.error('Unexpected API response format. "vehicles" array not found.', data);
      }
    } catch (error) {
      // console.error('Error fetching vehicles:', error);
    }
  };

// Fetch vehicles when the component mounts
onMounted(() => {
    fetchVehicles();
});

const itemsPerPage = 9;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(invoices.value.length / itemsPerPage));

const paginatedInvoices = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return invoices.value.slice(start, start + itemsPerPage);
});

const users = ref([
    { 
        id: 1, 
        name: 'Jhon Smith', 
        email: 'jhonsmith@gmail.com',
        vehicle: 'Vehicle Here...',
     },
    { 
        id: 2, 
        name: 'Jhon Smith', 
        email: 'jhonsmith@gmail.com',
        vehicle: 'Vehicle Here...',
     },
    { 
        id: 3, 
        name: 'Jhon Smith', 
        email: 'jhonsmith@gmail.com',
        vehicle: 'Vehicle Here...',
     },
    { 
        id: 4, 
        name: 'Jhon Smith', 
        email: 'jhonsmith@gmail.com',
        vehicle: 'Vehicle Here...',
     },
    { 
        id: 5, 
        name: 'Jhon Smith', 
        email: 'jhonsmith@gmail.com',
        vehicle: 'Vehicle Here...',
     },
    { 
        id: 6, 
        name: 'Jhon Smith', 
        email: 'jhonsmith@gmail.com',
        vehicle: 'Vehicle Here...',
     },
    { 
        id: 7, 
        name: 'Jhon Smith', 
        email: 'jhonsmith@gmail.com',
        vehicle: 'Vehicle Here...',
     },
]);
const userPerPage = 6;
const currentUsers = ref(1);

const totalUsers = computed(() => Math.ceil(users.value.length / userPerPage));

const paginatedUsers = computed(() => {
    const start = (currentUsers.value - 1) * userPerPage;
    return users.value.slice(start, start + userPerPage);
});
</script>


<style scoped>
 .knobs, .layer
{
    position: absolute;
    top: 0;
    bottom: 0;
}

.button
{
    position: relative;
    width: 74px;
    height: 36px;
    overflow: hidden;
}
.toggle-checkbox
{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
}

.knobs
{
    z-index: 2;
}

.layer
{
    width: 100%;
    background-color: #ebf7fc;
    transition: 0.3s ease all;
    z-index: 1;
    border:2px solid #D63D4A;
    border-radius: 5px;
}


#button-13 .knobs:before, #button-13 .knobs:after, #button-13 .knobs span
{
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
}

#button-13 .knobs:before, #button-13 .knobs:after
{
    z-index: 1;
}

#button-13 .knobs:before
{
    content: 'ON';
    left: 4px;
    color: #D63D4A;
    font-weight: 700;
}

#button-13 .knobs:after
{
    content: 'OFF';
    right: -62px;
}

#button-13 .knobs span
{
    width: 35px;
    height: 27px;
    left: 35px;
    background-color: #D63D4A;
    z-index: 2;
    border-radius: 5px;
}

#button-13 .toggle-checkbox:checked + .knobs span
{
    left: 4px;
    background-color: #D63D4A;
    border-radius: 5px;
}

#button-13 .toggle-checkbox:checked ~ .layer
{
    background-color: white;
}
.checkbox-wrapper-45 {
    position: relative;
  }
  
  .checkbox-wrapper-45 input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }
  .checkbox-wrapper-45 .cbx {
    -webkit-perspective: 30;
    perspective: 30;
    display: inline-block;
    border: 2px solid #D63D4A;
    background: #e8e8eb;
    border-radius: 4px;
    transform: translate3d(0, 0, 0);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .checkbox-wrapper-45 .cbx:hover {
    border-color: #D63D4A;
  }
  .checkbox-wrapper-45 .flip {
    display: block;
    transition: all 0.4s ease;
    transform-style: preserve-3d;
    position: relative;
    width: 25px;
    height: 25px;
  }
  .checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx {
    border-color: #D63D4A;
  }
  .checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx .flip {
    transform: rotateY(180deg);
  }
  .checkbox-wrapper-45 .front,
  .checkbox-wrapper-45 .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 2px;
  }
  .checkbox-wrapper-45 .front {
    background: #fff;
    z-index: 1;
  }
  .checkbox-wrapper-45 .back {
    transform: rotateY(180deg);
    background: #D63D4A;
    text-align: center;
    color: #fff;
    line-height: 25px;
    box-shadow: 0 0 0 1px #D63D4A;
  }
  .checkbox-wrapper-45 .back svg {
    margin-top: 5px;
    margin-left: 5px;
    fill: none;
  }
  .checkbox-wrapper-45 .back svg path {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  </style>