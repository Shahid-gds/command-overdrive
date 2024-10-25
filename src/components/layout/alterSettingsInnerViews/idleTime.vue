<template>
    <section class="px-6 h-[70vh] overflow-y-auto pb-[10rem]">
        <div>
            <idleEvent />
        </div>
        <div class="pt-16">
            <IdleTimeSection />
        </div>
        <div class="py-6">
            <vehicleApplied />
        </div>
    <div class="w-full">
        <div class="flex justify-end space-x-4">
            <div>
                <button class="border-[1.5px] border-[#636363] p-2 px-6 rounded-lg uppercase text-[#636363]">Cancel</button>
            </div>
            <div>
                <button class="bg-[#636363] border-[1.5px] border-[#636363] p-2 px-10 rounded-lg uppercase text-[white]">Save</button>
            </div>
            <div>
                <button class="bg-[#D63D4A] border-[1.5px] border-[#D63D4A] p-2 px-10 rounded-lg uppercase text-[white]">Apply all</button>
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
  import idleEvent from '../idleTimeSections/idleEvent.vue';
  import IdleTimeSection from '../idleTimeSections/idleTimeSection.vue';
  import vehicleApplied from '../idleTimeSections/vehicleApplied.vue';


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
  </script>
  
  <style scoped>
  .dropdown-enter-active, .dropdown-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .dropdown-enter-from, .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style> 