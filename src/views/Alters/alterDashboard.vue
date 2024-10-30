<template>
    <section>
      <div class="bg-[#E8E8E8] w-full p-2 px-4 rounded-xl flex items-center justify-between mt-2">
        <div class="flex space-x-4">
           <div class="relative">
            <input type="search" class="w-[400px] bg-[#fff] outline-none p-3 rounded-xl pr-14 placeholder:text-[#7A86A1]" placeholder="Type Search Here ….">
            <div class="absolute top-3.5 right-4">
                <img src="@/components/icons/search.svg" alt="">
            </div>
        </div>
        </div>
        <div class="flex items-center space-x-4">
            <div class="flex space-x-3 items-center">
                <div>
                  Filter:
                </div>
                <div class="relative">
                  <div
                    class="p-3 rounded-xl w-[150px] bg-white cursor-pointer flex items-center justify-between"
                    @click="toggleDropdown">
                    <span>{{ selectedOption }}</span>
                    <span
                      class="transform transition-transform duration-300"
                      :class="isDropdownOpen ? 'rotate-180' : 'rotate-0'">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#707070" class="size-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                        </span>
                  </div>
                 <transition name="dropdown">
                  <ul
                    v-if="isDropdownOpen"
                    class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all ease-in-out duration-300 max-h-[200px] overflow-y-auto">
                    <li
                      v-for="(option, index) in options"
                      :key="index"
                      class="p-3 cursor-pointer hover:bg-gray-200"
                      @click="selectOption(option)">
                      {{ option }}
                    </li>
                  </ul>
                 </transition>
                </div>
               </div>
           <div class="flex space-x-2 items-center cursor-pointer" >
            <div>
              <img src="@/components/icons/export.svg" alt="">
            </div>
            <div>
              Export
            </div>
           </div>
             <div class="flex items-center space-x-2 cursor-pointer">
               <div>
                   <img src="../../components/icons/three-settings.svg" alt="">
               </div>
               <div class="text-[#272727]">Settings</div>
             </div>
        </div>
      </div>
      <div class="screen-height mt-2 overflow-y-auto h-screen border-2 rounded-xl">
        <div
          class="table-container">
          <table class="w-full">
            <thead class="border-gray-300">
              <tr class="text-xs text-left">
                <th class="border-r-2 border-b-2 p-2 py-6">Alert #</th>
                <th class="border-r-2 border-b-2 p-2">Vehicle ID</th>
                <th class="border-r-2 border-b-2 p-2">Alert</th>
                <th class="border-r-2 border-b-2 p-2 w-[30%]">Description</th>
                <th class="border-r-2 border-b-2 p-2">Date Time Stamp</th>
                <th class="border-r-2 border-b-2 p-2">Action</th>
                <th class="border-r-2 border-b-2 p-2 2xl:w-[8%]">
                    <div class="flex items-center justify-end space-x-3">
                        <div class="">Select All</div>
                      <div class="checkbox-wrapper-45">
                        <input 
                          type="checkbox" 
                          :id="'select-all-checkbox'" 
                          :checked="areAllChecked" 
                          @change="toggleSelectAll" />
                        <label class="cbx" for="select-all-checkbox">
                          <div class="flip">
                            <div class="front"></div>
                            <div class="back">
                              <svg width="16" height="14" viewBox="0 0 16 14">
                                <path d="M2 8.5L6 12.5L14 1.5"></path>
                              </svg>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </th>                  
              </tr>
            </thead>
            <tbody>
              <tr
                class="text-xs text-left"
                v-for="item in tableData"
                :key="item.index">
                <td class="border-r-2 border-b-2 p-2 text-center">{{ item.alterNo }}</td>
                <td class="border-r-2 border-b-2 p-2">
                 <div class="flex space-x-2 items-center"> 
                 <div>
                    <img
                    src="@/assets/images/car-img-red.svg"
                    alt="Vehicle Photo"/>
                 </div>
                 <div>
                    <div class="font-[600]">{{item.vehicleId}}</div>
                    <div>{{item.made}} - <span>{{item.model}}</span> </div>
                    <div>{{item.nickname}}</div>
                 </div>
                </div>
                </td>
                <td class="border-r-2 border-b-2 p-2"> 
                    <div class="flex space-x-2 items-center">
                   <div>
                    <img
                    v-for="(imgSrc, idx) in item.statusImg"
                    :key="idx"
                    :src="imgSrc"
                    alt="Status Image"/>
                   </div>
                   <div> {{ item.status }} </div>
                  </div>
                </td>
                <td class="border-r-2 border-b-2 p-2">{{ item.description }}</td>
                <td class="border-r-2 border-b-2 p-2">
                    <div> {{ item.date }} </div>
                    <div> {{ item.time }} </div>
                </td>
                <td class="border-r-2 border-b-2 p-2">
                  <div class="flex justify-center cursor-pointer" @click="accontToggleShow(item.alterNo)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9A9A" class="size-10">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </div>
                  <TransitionGroup name="bounce" tag="ul" class="relative">
                    <div
                      v-if="currentOpenAlterNo === item.alterNo"
                      class="submenu w-[150px] absolute left-1 top-0 border-2 border-[#D9D9D9] z-20 bg-[#FFFFFF] shadow-xl p-4 rounded-xl transition-opacity 0.5 ease-in pointer-events-auto">
                      <div class="text-[#585858] font-[600] cursor-pointer hover:text-[#D63D4A] transition-all duration-300 border-b-[1px] border-[#BFBFBF] pb-2">Clear</div>
                      <div class="text-[#585858] font-[600] cursor-pointer hover:text-[#D63D4A] transition-all duration-300 border-b-[1px] py-4 border-[#BFBFBF]">Archive</div>
                      <div  class="text-[#585858] font-[600] cursor-pointer hover:text-[#D63D4A] transition-all duration-300 pt-4">Export</div>
                    </div>
                  </TransitionGroup>
                </td>
                <td class="border-r-2 border-b-2 p-2">
                    <div class="flex justify-end">
                      <div class="checkbox-wrapper-45">
                        <input 
                          :id="'cbx-' + item.alterNo" 
                          type="checkbox" 
                          v-model="item.checked" 
                          @change="checkIfAllChecked" />
                        <label class="cbx" :for="'cbx-' + item.alterNo">
                          <div class="flip">
                            <div class="front"></div>
                            <div class="back">
                              <svg width="16" height="14" viewBox="0 0 16 14">
                                <path d="M2 8.5L6 12.5L14 1.5"></path>
                              </svg>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue'
    const isDropdownOpen = ref(false);
  const selectedOption = ref('Select Filter');
  const options = ref(['Select Filter', 'Date', 'Name', 'Status']);
  const currentOpenAlterNo = ref(null);
    
    // Toggle dropdown open/close
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };
    
    // Select option and close dropdown
    const selectOption = (option) => {
      selectedOption.value = option;
      isDropdownOpen.value = false;
    };
  
    const areAllChecked = ref(false);

const toggleSelectAll = () => {
  areAllChecked.value = !areAllChecked.value;
  tableData.value.forEach(item => {
    item.checked = areAllChecked.value;
  });
};

const checkIfAllChecked = () => {
  areAllChecked.value = tableData.value.every(item => item.checked);
};

const isSettingsVisible = ref(false);

  const accontToggleShow = (alterNo) => {
    currentOpenAlterNo.value = currentOpenAlterNo.value === alterNo ? null : alterNo;
  };
  
  const showSettings = () => {
    isSettingsVisible.value = true;
    currentOpenAlterNo.value = null;
  };
    const getStatusImage = (status) => {
      switch (status) {
        case 'Excessive Speed':
         return Promise.all([
          import('@/components/icons/speedo-meter.svg').then((module) => module.default),
         ])
        case 'Geo-Fence':
         return Promise.all([
          import('@/components/icons/location.svg').then((module) => module.default),
         ])
        case 'Impact Detection':
         return Promise.all([
          import('@/components/icons/impact-direction.svg').then((module) => module.default),
         ])
        case 'Rapid Acceleration':
         return Promise.all([
          import('@/components/icons/rapid.svg').then((module) => module.default),
         ])
      
        default:
          return import('@/components/icons/speedo-meter.svg').then(
            (module) => [module.default],
          )
      }
    }
  
    const tableData = ref([
      {
        alterNo :'01',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        status:'Excessive Speed',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'02',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        status:'Geo-Fence',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am'
      },
      {
        alterNo :'03',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        status:'Impact Detection',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am'
      },
      {
        alterNo :'04',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        status:'Rapid Acceleration',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am'
      },
      {
        alterNo :'05',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        status:'Excessive Speed',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'06',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        status:'Geo-Fence',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am'
      },
      {
        alterNo :'07',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        status:'Impact Detection',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am'
      },
      {
        alterNo :'08',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        status:'Rapid Acceleration',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am'
      },
   

  ]);
  
  
    onMounted(async () => {
      const resolvedData = await Promise.all(
        tableData.value.map(async (item) => ({
          ...item,
          statusImg: await getStatusImage(item.status),
        })),
      )
      tableData.value = resolvedData
    })
  </script>
  
  <style scoped>
  .dropdown-enter-active, .dropdown-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .dropdown-enter-from, .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
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
  .submenu::before {
    content: "";
    position: absolute;
    top: -9px;
    left: 20px;
    width: 15px;
    height: 15px;
    background: #ffffff;
    border-left: 2px solid #D9D9D9 ;
    border-top: 2px solid #D9D9D9 ;
    transform: rotate(45deg);
    z-index: -3;
  }
  .list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  50% {
    transform: scale(1);
  }
}
  ::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  
  }
  @media (max-width: 1900px) {
    .screen-height {
      height: 68vh;
    }
    }
    @media (max-width: 1366px) and (max-height: 800px) {
      .screen-height {
          height: 68vh;
      }
  }
    @media (max-width: 1366px) and (max-height: 650px) {
      .screen-height {
          height: 60vh;
      }
  }
  </style>
  