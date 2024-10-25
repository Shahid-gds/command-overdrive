<template>
  <section>
    <div
      class="bg-[#E8E8E8] w-full p-2 px-4 rounded-xl flex items-center justify-end mt-2">
      <div class="flex items-center space-x-4">
        <div class="flex space-x-3 items-center">
          <div>Edit:</div>
          <div class="relative">
            <div
              class="p-3 rounded-xl w-[150px] bg-white cursor-pointer flex items-center justify-between"
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
        <div class="flex items-center space-x-2 cursor-pointer">
          <div>
            <img src="@/components/icons/three-settings.svg" alt="" />
          </div>
          <div class="text-[#272727]">Settings</div>
        </div>
      </div>
    </div>
    <div>
            <alterSettingsLeftRoutes />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import alterSettingsLeftRoutes from "./alterSettingsLeftRoutes.vue";

const isDropdownOpen = ref(false);
const selectedOption = ref("Clear");
const options = ref(["Clear", "Archive", "Export"]);

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