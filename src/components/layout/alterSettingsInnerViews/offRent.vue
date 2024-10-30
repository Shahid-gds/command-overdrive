<template>
    <section class="screen-height overflow-y-auto max-h-[70vh] px-6">
        <div
        class="border-b-[1px] pb-8 border-[#707070]">
          <div class="flex justify-between">
            <div class="w-full">
              <h1 class="font-[700] text-2xl pb-3">Off Rent Mileage Tracking</h1>
              <div>
                <div class="w-full">
                    Keep track of when your vehicle is on the road. Curfew alerts notify you anytime the vehicle is being driven during the set time and day.
                 </div>
              </div>
            </div>
          <div class="w-[20%] flex justify-end">
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
      <div class="pt-6">
        <div class="">
            <button class="border-2 border-[#636363] rounded-lg p-2 px-6 font-[600]">Add +</button>
        </div>
       <div class="flex items-center space-x-4 justify-between pt-6">
        <div class="w-full">
            <h1 class="font-[600] uppercase">
                Select Insurance Provider 
            </h1>
            <div class="relative">
                <div
                  class="p-2 rounded-lg border-2 w-full bg-white cursor-pointer flex items-center justify-between"
                  @click="toggleInsuDropdown">
                  <span>{{ selectedInsuOption }}</span>
                  <span
                    class="transform transition-transform duration-300"
                    :class="isDropdownOpenInsu ? 'rotate-180' : 'rotate-0'">
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
                    v-if="isDropdownOpenInsu"
                    class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all duration-300 max-h-[200px] overflow-y-auto">
                    <li
                      v-for="(option, index) in Insuoptions"
                      :key="index"
                      class="p-3 cursor-pointer hover:bg-gray-200"
                      @click="selectInsuOption(option)">
                      {{ option }}
                    </li>
                  </ul>
                </transition>
              </div>
        </div>
        <div class="w-full">
            <h1 class="font-[600] uppercase">
                Select Vehicles 
            </h1>
            <div class="relative">
                <div
                  class="p-2 rounded-lg border-2 w-full bg-white cursor-pointer flex items-center justify-between"
                  @click="toggleVehicleDropdown">
                  <span>{{ selectedVehicleOption }}</span>
                  <span
                    class="transform transition-transform duration-300"
                    :class="isDropdownOpenVehicle ? 'rotate-180' : 'rotate-0'">
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
                    v-if="isDropdownOpenVehicle"
                    class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all duration-300 max-h-[200px] overflow-y-auto">
                    <li
                      v-for="(option, index) in Vehicleoptions"
                      :key="index"
                      class="p-3 cursor-pointer hover:bg-gray-200"
                      @click="selectVehicleOption(option)">
                      {{ option }}
                    </li>
                  </ul>
                </transition>
              </div>
        </div>
        <div class="w-full">
            <h1 class="font-[600] uppercase">
                Select Platform
            </h1>
            <div class="relative">
                <div
                  class="p-2 rounded-lg border-2 w-full bg-white cursor-pointer flex items-center justify-between"
                  @click="togglePlatformDropdown">
                  <span>{{ selectedPlatformOption }}</span>
                  <span
                    class="transform transition-transform duration-300"
                    :class="isDropdownOpenPlatform ? 'rotate-180' : 'rotate-0'">
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
                    v-if="isDropdownOpenPlatform"
                    class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all duration-300 max-h-[200px] overflow-y-auto">
                    <li
                      v-for="(option, index) in Platformoptions"
                      :key="index"
                      class="p-3 cursor-pointer hover:bg-gray-200"
                      @click="selectPlatformOption(option)">
                      {{ option }}
                    </li>
                  </ul>
                </transition>
              </div>
        </div>
       </div>
      </div>
      <div class="large-screen flex space-x-4 pt-6 border-b-[1px] pb-8 border-[#707070]">
        <div>
            <h1 class="font-[600] uppercase">
                Notify
            </h1>
            <p>Notify over xxx Miles off-trip in a xxx time period </p>
            <div class="slider-container pt-[7rem] w-full flex items-center space-x-4">
                <div class="slider-track w-full" ref="track">
                  <div class="fill gray-fill" :style="{ width: `${minPercent}%` }"></div>
                  <div class="fill red-fill" :style="{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }"></div>
                  <div
                    class="slider-handle red"
                    :style="{ left: `${minPercent}%` }"
                    @mousedown="startDrag('min')">
                    <span class="flag w-[50px] text-center text-[12px] border-2 bottom-[30px] -right-3 z-20 p-2 rounded-lg text-[#757575] font-[700]">{{ min }}</span>
                  </div>
                  <div
                    class="slider-handle red"
                    :style="{ left: `${maxPercent}%` }"
                    @mousedown="startDrag('max')">
                    <span class="flag w-[50px] text-center text-[12px] border-2 bottom-[30px] -right-3 z-20 p-2 rounded-lg text-[#757575] font-[700]">{{ max }}</span>
                  </div>
                </div>
              </div>
        </div>
        <div class="">
            <h1 class="font-[700] text-[16px] uppercase pb-3">DAYS ACTIVE</h1>
            <div class="bg-[#D63D4A] text-white text-center uppercase font-[600] rounded-lg flex items-center">
              <div class="w-full p-3 px-4  border-r-[1px] border-white">Sun</div>
              <div class="w-full p-3 px-4  border-r-[1px] border-white">Mon</div>
              <div class="w-full p-3 px-4  border-r-[1px] border-white">Tue</div>
              <div class="w-full p-3 px-4  border-r-[1px] border-white">Wed</div>
              <div class="w-full p-3 px-4  border-r-[1px] border-white">Thu</div>
              <div class="w-full p-3 px-4  border-r-[1px] border-white">Fri</div>
              <div class="w-full p-3 px-4 ">Sat</div>
            </div>
            <div class="flex space-x-4 pt-12">
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
          <div class="">
            <div class="flex justify-between space-x-10">
                <div class="font-[700] text-[16px] w-full uppercase pb-3">START TIME</div>
                <div class="font-[700] text-[16px] w-full uppercase pb-3 text-left">End TIME</div>
            </div>
             <div class="flex justify-between">
                <div>
                    <input type="text" class="border-2 p-2 px-4 rounded-lg outline-none text-[#979797] text-[18px] font-[500]" v-model="startTime">
                  </div>
                  <div class="text-[18px] p-2">To</div>
                  <div>
                    <input type="text" class="border-2 p-2 px-4 rounded-lg outline-none text-[#979797] text-[18px] font-[500]" v-model="endTime">
                  </div>
             </div>
           </div>
      </div>
      <!-- This for max-screen 1900 -->
      <div class="notify-container pt-6 border-b-[1px] pb-8 border-[#707070]">
        <div>
            <h1 class="font-[600] uppercase">
                Notify
            </h1>
            <p>Notify over xxx Miles off-trip in a xxx time period </p>
            <div class="slider-container pt-[4rem] pb-[2rem] w-full flex items-center space-x-4">
                <div class="slider-track w-full" ref="track">
                  <div class="fill gray-fill" :style="{ width: `${minPercent}%` }"></div>
                  <div class="fill red-fill" :style="{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }"></div>
                  <div
                    class="slider-handle red"
                    :style="{ left: `${minPercent}%` }"
                    @mousedown="startDrag('min')">
                    <span class="flag w-[50px] text-center text-[12px] border-2 bottom-[30px] -right-3 z-20 p-2 rounded-lg text-[#757575] font-[700]">{{ min }}</span>
                  </div>
                  <div
                    class="slider-handle red"
                    :style="{ left: `${maxPercent}%` }"
                    @mousedown="startDrag('max')">
                    <span class="flag w-[50px] text-center text-[12px] border-2 bottom-[30px] -right-3 z-20 p-2 rounded-lg text-[#757575] font-[700]">{{ max }}</span>
                  </div>
                </div>
              </div>
        </div>
     <div class="2xl:flex 2xl:space-x-5">
      <div class="w-full pb-4">
        <h1 class="font-[700] text-[16px] uppercase pb-3">DAYS ACTIVE</h1>
        <div class="bg-[#D63D4A] text-white text-center uppercase font-[600] rounded-lg flex items-center">
          <div class="w-full p-3 px-4  border-r-[1px] border-white">Sun</div>
          <div class="w-full p-3 px-4  border-r-[1px] border-white">Mon</div>
          <div class="w-full p-3 px-4  border-r-[1px] border-white">Tue</div>
          <div class="w-full p-3 px-4  border-r-[1px] border-white">Wed</div>
          <div class="w-full p-3 px-4  border-r-[1px] border-white">Thu</div>
          <div class="w-full p-3 px-4  border-r-[1px] border-white">Fri</div>
          <div class="w-full p-3 px-4 ">Sat</div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-between space-x-10">
            <div class="font-[700] text-[16px] w-full uppercase pb-3">START TIME</div>
            <div class="font-[700] text-[16px] w-full uppercase pb-3 text-left">End TIME</div>
        </div>
         <div class="flex justify-between">
            <div class="w-full">
                <input type="text" class="w-full border-2 p-2 px-4 rounded-lg outline-none text-[#979797] text-[18px] font-[500]" v-model="startTime">
              </div>
              <div class="text-[18px] p-2">To</div>
              <div class="w-full">
                <input type="text" class="w-full border-2 p-2 px-4 rounded-lg outline-none text-[#979797] text-[18px] font-[500]" v-model="endTime">
              </div>
         </div>
       </div>
     </div>
     <div class="flex space-x-4 pt-12">
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
import { ref, onMounted, onUnmounted } from 'vue';
const startTime = ref('12:00 AM')
const endTime = ref('11:59 PM')

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

 const isDropdownOpenInsu = ref(false);
  const selectedInsuOption = ref("ABI");
  const Insuoptions = ref(["ABI", "ABC", "XYZ"]);
  
  // Toggle dropdown open/close
  const toggleInsuDropdown = () => {
    isDropdownOpenInsu.value = !isDropdownOpenInsu.value;
  };
  
  // Select option and close dropdown
  const selectInsuOption = (option) => {
    selectedInsuOption.value = option;
    isDropdownOpenInsu.value = false;
  };
//   This is for Select Vehicle
 const isDropdownOpenVehicle = ref(false);
  const selectedVehicleOption = ref("Select Vehicles");
  const Vehicleoptions = ref(["ABI", "ABC", "XYZ"]);
  
  // Toggle dropdown open/close
  const toggleVehicleDropdown = () => {
    isDropdownOpenVehicle.value = !isDropdownOpenVehicle.value;
  };
  
  // Select option and close dropdown
  const selectVehicleOption = (option) => {
    selectedVehicleOption.value = option;
    isDropdownOpenVehicle.value = false;
  };

//   This is for Select Platform
 const isDropdownOpenPlatform = ref(false);
  const selectedPlatformOption = ref("TURO");
  const Platformoptions = ref(["ABI", "ABC", "XYZ"]);
  
  // Toggle dropdown open/close
  const togglePlatformDropdown = () => {
    isDropdownOpenPlatform.value = !isDropdownOpenPlatform.value;
  };
  
  // Select option and close dropdown
  const selectPlatformOption = (option) => {
    selectedPlatformOption.value = option;
    isDropdownOpenPlatform.value = false;
  };

  const minValue = 0;
  const maxValue = 100;
  
  const min = ref(15);
  const max = ref(33);
  
  const minPercent = ref(0);
  const maxPercent = ref(100);
  
  const track = ref(null);
  let isDragging = ref(false);
  let currentHandle = ref('');
  
  onMounted(() => {
    updatePercentages();
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', onMouseMove);
  });
  
  onUnmounted(() => {
    window.removeEventListener('mouseup', stopDrag);
    window.removeEventListener('mousemove', onMouseMove);
  });
  
  function startDrag(handle) {
    isDragging.value = true;
    currentHandle.value = handle;
  }
  
  function stopDrag() {
    isDragging.value = false;
  }
  
  function onMouseMove(event) {
    if (!isDragging.value || !track.value) return;
  
    const rect = track.value.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percentage = Math.round((offsetX / rect.width) * 100);
  
    if (currentHandle.value === 'min') {
      min.value = Math.max(minValue, Math.min(max.value, Math.round((percentage / 100) * maxValue)));
      if (min.value > max.value) {
        min.value = max.value;
      }
      updatePercentages();
    } else if (currentHandle.value === 'max') {
      max.value = Math.max(min.value, Math.min(maxValue, Math.round((percentage / 100) * maxValue)));
      if (max.value < min.value) {
        max.value = min.value;
      }
      updatePercentages();
    }
  }
  
  function updatePercentages() {
    minPercent.value = ((min.value - minValue) / (maxValue - minValue)) * 100;
    maxPercent.value = ((max.value - minValue) / (maxValue - minValue)) * 100;
  }

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
        alterNo :'01',
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
  background-color: #D63D4A;
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
  color: white;
  font-size: 16px;
}

#button-13 .knobs:after {
  content: "OFF";
  right: -72px;
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
  .slider-container {
    position: relative;
    height: 50px;
  }
  
  .slider-track {
    position: relative;
    width: 100%;
    height: 10px;
    background: #BFBFBF;
    border-radius: 5px;
  }
  
  .fill {
    position: absolute;
    height: 100%;
    top: 0;
    border-radius: 5px;
  }
  
  .gray-fill {
    background: #BFBFBF;
  }
  
  .red-fill {
    background: #D63D4A;
  }
  
  .slider-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -5px;
    cursor: pointer;
    transform: translate(-50%, 0);
  }
  
  .red {
    width: 30px;
    height: 30px;
    background-color: #D63D4A;
    border: 2px solid white;
    top: -10px;
  }
  
  .flag {
    position: absolute;
  }
  .notify-container {
    display: none;
  }
  @media (max-width: 1900px) {
    .large-screen {
      display: none;
    }
   .notify-container {
    display: block;
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