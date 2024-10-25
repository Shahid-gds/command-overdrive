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
                    <div class="uppercase">Add Vehicle</div>
                </div>
            </div>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex flex-col space-y-4">
                <div v-for="invoice in paginatedInvoices" :key="invoice.id" class="flex justify-between space-x-10">
                  <div class="w-full flex justify-between items-center pt-4 border-b-2 border-[#AEAEAE] space-x-2">
                    <div class="flex items-center space-x-2 pb-3">
                        <div>
                            <img src="../../assets/images/car-img-red.svg" alt="">
                        </div>
                      <div>
                        <div class="font-[600]">Serial #{{ invoice.sNo }}</div>
                        <div class="pb-2">
                            <span>{{ invoice.nickName }} | </span> <span>{{invoice.made}} | </span> <span>{{invoice.model}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="bg-[white] p-2 rounded-full px-6 font-[600] uppercase">
                        {{ invoice.btnAdvanced }}
                    </div>
                    <div v-if="invoice.status === 'Inactive'" class="bg-[#FFB5BB] text-[#78171F] p-2 rounded-full px-6 font-[600] uppercase">
                        {{ invoice.status }}
                    </div>
                    <div v-if="invoice.status === 'Active'" class="bg-[#A6E99B] text-[#102D0C] p-2 rounded-full px-6 font-[600] uppercase">
                        {{ invoice.status }}
                    </div>
                    <div class="">
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
                        ]"
                    >
                        {{ page }}
                    </span>
                </div>
            </div>
        </div>
        <div class="w-full">
            <h1 class="font-[700] uppercase text-xl pb-2">Authorized User:</h1>
          <div class="bg-[#E8E8E8] p-4 rounded-lg ">
            <div v-for="user in paginatedUsers" :key="user.id"  class="flex space-x-10">
                  <div class="flex justify-between items-center border-b-2 border-[#AEAEAE] w-full py-2">
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
                  <div class="flex justify-between items-center border-b-2 border-[#AEAEAE] w-full py-2">
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
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                  <span></span>
                                </div>
                                <div class="layer"></div>
                              </div>
                              <div class="font-[700]">Miles/kilmoters</div>
                          </div>
                          <div class="flex items-center space-x-2 border-b-2 border-[#AEAEAE] py-3">
                            <div class="button b2" id="button-13">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                  <span></span>
                                </div>
                                <div class="layer"></div>
                              </div>
                              <div class="font-[700]">Date Format 12/24 </div>
                          </div>
                     </div>
                     <div class="w-full">
                        <div class="flex items-center space-x-2 border-b-2 border-[#AEAEAE] pb-3">
                            <div class="button b2" id="button-13">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                  <span></span>
                                </div>
                                <div class="layer"></div>
                              </div>
                              <div class="font-[700]">Timezone</div>
                          </div>
                          <div class="flex items-center space-x-2 border-b-2 border-[#AEAEAE] py-3">
                            <div class="button b2" id="button-13">
                                <input type="checkbox" class="checkbox">
                                <div class="knobs">
                                  <span></span>
                                </div>
                                <div class="layer"></div>
                              </div>
                              <div class="font-[700]">Currency </div>
                          </div>
                     </div>
            </div>
            <div class="mt-8">
                <button class="bg-[#D63D4A] flex space-x-1 items-center p-2 rounded-lg px-6 text-white">
                    <div>
                        <img src="@/components/icons/alter-setting.svg" alt="">
                    </div>
                    <div class="font-[600] uppercase">Alert Setting</div>
                </button>
            </div>
          </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const invoices = ref([
    { 
        id: 1, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Inactive', 
     },
    { 
        id: 2, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Inactive', 
     },
    { 
        id: 3, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Active', 
     },
    { 
        id: 4, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Active', 
     },
    { 
        id: 5, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Active', 
     },
    { 
        id: 6, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Active', 
     },
    { 
        id: 7, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Active', 
     },
    { 
        id: 8, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Active', 
     },
    { 
        id: 9, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Active', 
     },
    { 
        id: 10, 
        No: '123456789', 
        nickName: 'Nickname here',
        made: 'Chevy Cruze',
        model: '2021',
        btnAdvanced: 'Advanced',
        status: 'Active', 
     },
]);

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
.checkbox
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

#button-13 .checkbox:checked + .knobs span
{
    left: 4px;
    background-color: #D63D4A;
    border-radius: 5px;
}

#button-13 .checkbox:checked ~ .layer
{
    background-color: white;
}
  </style>