<template>
  <section class="overflow-y-auto max-h-[70vh] pb-[3rem] px-6">
    <div class="border-b-[1px] pb-8 border-[#707070]">
      <div class="flex justify-between">
        <div class="w-full">
          <h1 class="font-[700] text-2xl pb-3">Impact Detection</h1>
          <button
            class="border-[2px] border-[#636363] p-2 px-6 rounded-lg font-[600] uppercase">
            Add +
          </button>
          <p class="py-3">
            Crash Detection and Notification may be unavailable in certain
            instances, such as when the Bouncie Adapter is damaged or dislodged,
            or when cellular or other signals are unavailable or intermittent.
            If the Adapter experiences a loss of wireless service, then no data
            will be transmitted. Please refer to the
            <span class="text-[#D63D4A]">Terms of Service</span> for more
            information.
          </p>
          <p class="pb-3">
            By enabling this feature, you agree to OverDrive
            <span class="text-[#D63D4A]">Terms of Service</span> and
            <span class="text-[#D63D4A]">Privacy Policy.</span>
          </p>
          <p class="pb-3">
            <span class="text-[#D63D4A]"
              >Learn more about Impact Detection</span>
          </p>
          <p class="pb-3">Who should receive Accident SMS Alerts?</p>
          <div class="flex space-x-3 pb-3">
          <div>
            <button
            class="border-[2px] border-[#636363] p-2 px-6 rounded-lg uppercase">
            SMS Alerts
          </button>
          </div>
         <div>
            <button
            class="border-[2px] border-[#636363] p-2 px-6 rounded-lg uppercase">
            No Recipients
          </button>
         </div>
          </div>
          <p class="pb-3">Select the recipients you want to alert in the event of an impact.</p>
          <div class="bg-[#E2E2E2] w-[360px] p-6 rounded-lg flex justify-between items-center">
           <div>
            <div class="font-[600]">Joshua Carr (me)</div>
            <div class="font-[600]">+1 417-818-9258</div>
           </div>
           <div>
            <div class="button b2" id="button-13">
                <input type="checkbox" class="checkbox" />
                <div class="knobs">
                  <span></span>
                </div>
                <div class="layer"></div>
              </div>
           </div>
          </div>
          <div class="pt-3">
            <button
            class="bg-[#636363] text-white border-[2px] border-[#636363] p-2 px-6 rounded-lg uppercase">
            Add Recipient
          </button>
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
                  @click="selectOption(option)"
                >
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
</style>
