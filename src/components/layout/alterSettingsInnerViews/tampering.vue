<template>
    <section class="overflow-y-auto max-h-[70vh] pb-[3rem] px-6">
      <div class="border-b-[1px] pb-8 border-[#707070]">
        <div class="flex justify-between">
          <div class="w-full">
            <h1 class="font-[700] text-2xl">Tampering</h1>
            <p class="py-3">
                Device Removed or Disconnected 
            </p>
            <div class="flex space-x-3 pt-6">
                <div>
                    <button
                      class="border-[1.5px] border-[#636363] p-2 px-6 rounded-lg uppercase text-[#636363]">
                      Cancel
                    </button>
                  </div>
                  <div>
                    <button
                      class="bg-[#636363] border-[1.5px] border-[#636363] p-2 px-10 rounded-lg uppercase text-[white]">
                      Save
                    </button>
                  </div>
              </div>
          </div>
          <div class="w-[20%]">
           <div class="flex justify-end">
            <div class="button b2" id="button-13">
                <input type="checkbox" class="checkbox" />
                <div class="knobs">
                  <span></span>
                </div>
                <div class="layer"></div>
              </div>
           </div>
          </div>
        </div>
      </div>
      <div class="pt-12">
        <h1 class="font-[700] text-2xl pb-3">Vehicles Applied</h1>
      <div class="border-b-[1px] pb-16 border-[#707070]">
        <div
        class="table-container border-2 rounded-lg">
        <table class="w-full">
          <thead class="border-gray-300">
            <tr class="text-xs text-left">
              <th class="border-r-2 border-b-2 p-2 py-6">Alert #</th>
              <th class="border-r-2 border-b-2 p-2">Vehicle ID</th>
              <th class="border-r-2 border-b-2 p-2 w-1/2">Description</th>
              <th class="border-r-2 border-b-2 p-2">Date Time</th>
              <th class="border-b-2 p-2">Action</th>                 
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
              <td class="border-r-2 border-b-2 p-2">{{ item.description }}</td>
              <td class="border-r-2 border-b-2 p-2">
                  <div> {{ item.date }} </div>
                  <div> {{ item.time }} </div>
              </td>
              <td class="border-b-2 p-2">
               <div class="flex justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9A9A" class="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg> 
               </div>                     
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      </div>
      <div class="w-full py-6 pb-[10rem]">
        <div class="flex justify-end space-x-4">
          <div>
            <button
              class="border-[1.5px] border-[#636363] p-2 px-6 rounded-lg uppercase text-[#636363]">
              Cancel
            </button>
          </div>
          <div>
            <button
              class="bg-[#636363] border-[1.5px] border-[#636363] p-2 px-10 rounded-lg uppercase text-[white]">
              Save
            </button>
          </div>
          <div>
            <button
              class="bg-[#D63D4A] border-[1.5px] border-[#D63D4A] p-2 px-10 rounded-lg uppercase text-[white]">
              Apply all
            </button>
          </div>
          <div>
            <div class="relative">
              <div
                class="p-2 rounded-lg border-2 w-[200px] bg-white cursor-pointer flex items-center justify-between"
                @click="toggleDropdown">
                <span>{{ selectedOption }}</span>
                <span
                  class="transform transition-transform duration-300"
                  :class="isDropdownOpen ? 'rotate-180' : 'rotate-0'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#707070"
                    class="size-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                  </svg>
                </span>
              </div>
              <transition name="dropdown">
                <ul
                  v-if="isDropdownOpen"
                  class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all duration-300 max-h-[200px] overflow-y-auto">
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
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const isDropdownOpen = ref(false);
  const selectedOption = ref("Select Vehicles");
  const options = ref(["Vehicles One", "Vehicles Two", "Vehicles Three"]);
  
  // Toggle dropdown open/close
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  // Select option and close dropdown
  const selectOption = (option) => {
    selectedOption.value = option;
    isDropdownOpen.value = false;
  };
  const tableData = ref([
      {
        alterNo :'01',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
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
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'03',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'04',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'05',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
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
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'07',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
  ]);
  </script>
  
  <style scoped>
  .knobs,
  .layer {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  
  .button {
    position: relative;
    width: 100px;
    height: 36px;
    overflow: hidden;
  }
  
  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }
  
  .knobs {
    z-index: 2;
  }
  
  .layer {
    width: 100%;
    background-color: #DCDCDC;
    transition: 0.3s ease all;
    z-index: 1;
    border-radius: 20px;
  }
  
  #button-13 .knobs:before,
  #button-13 .knobs:after,
  #button-13 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 7px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
  }
  
  #button-13 .knobs:before,
  #button-13 .knobs:after {
    z-index: 1;
  }
  
  #button-13 .knobs:before {
    content: "ON";
    left: 4px;
    color: #8E8E8E;
    font-size: 16px;
  }
  
  #button-13 .knobs:after {
    content: "OFF";
    right: -75px;
    color: #8E8E8E;
    font-size: 16px;
  }
  
  #button-13 .knobs span {
    width: 40px;
    height: 27px;
    left: 55px;
    background-color: #ffffff;
    z-index: 2;
    border-radius: 20px;
  }
  
  #button-13 .checkbox:checked + .knobs span {
    left: 5px;
    background-color: #ffffff;
    border-radius: 20px;
  }
  
  #button-13 .checkbox:checked ~ .layer {
    background-color: #DCDCDC;
  }
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>
  