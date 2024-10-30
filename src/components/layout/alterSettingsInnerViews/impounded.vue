<template>
    <section class="overflow-y-auto max-h-[70vh] pb-[3rem] px-6">
      <div class="flex space-x-24 border-b-[1px] pb-16 border-[#707070] px-6">
        <div class="w-full">
          <div class="flex justify-between pb-6">
            <div class="w-full">
              <h1 class="font-[700] text-2xl">Impounded </h1>
              <p class="">
                Notify when vehicle is within distance of impound yard 
              </p>
            </div>
            <div class="2xl:w-[10%]">
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
          <div class="slider-container pt-[3rem]">
            <div class="slider-track" ref="track">
              <div
                class="fill black-fill"
                :style="{ width: `${blackPercent}%` }"></div>
              <div
                class="fill orange-fill"
                :style="{ width: `${orangePercent - minPercent}%`, left: `${minPercent}%` }"></div>
              <div
                class="fill blue-fill"
                :style="{ width: `${blackPercent - orangePercent}%`, left: `${orangePercent}%` }"></div>  
              <div
                class="slider-handle blue"
                :style="{ left: `${minPercent}%` }"
                @mousedown="startDrag('min')">
                <div class="bg-white mt-1 text-[14px] text-center rounded-full text-[#757575] font-[600]">
                    <span class="flag text-center w-[100px] border-2 bottom-[30px] -right-[40px] p-2 rounded-lg text-[#757575] font-[700]">
                        {{ min }} <span class="uppercase">Feet</span>
                    </span>
                </div>
              </div>
              <div
                class="slider-handle orange"
                :style="{ left: `${orangePercent}%` }"
                @mousedown="startDrag('orange')">
                <span class="flag text-center w-[100px] border-2 bottom-[30px] -right-[35px] p-2 rounded-lg text-[#757575] font-[700]">
                    {{ orange }} <span class="uppercase">Feet</span>
                </span>
              </div>
              <div
                class="slider-handle black"
                :style="{ left: `${blackPercent}%` }"
                @mousedown="startDrag('black')">
                <div class="bg-white mt-1 text-[14px] text-center rounded-full text-[#757575] font-[600]">
                    <span class="flag text-center w-[100px] border-2 bottom-[30px] -right-[35px] p-2 rounded-lg text-[#757575] font-[700]">
                        {{ black }} <span class="uppercase">Feet</span>
                    </span>
                </div>
              </div>
            </div>
         
          </div>
            <div class="flex space-x-3 pt-14">
              <div>
                  <button
                    class="border-[1.5px] border-[#636363] p-2 px-6 rounded-lg uppercase text-[#636363]">
                    Cancel
                  </button>
                </div>
                <div class="">
                  <button
                    class="bg-[#636363] border-[1.5px] border-[#636363] p-2 px-10 rounded-lg uppercase text-[white]">
                    Save
                  </button>
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

const minValue = 0;
const maxValue = 100;

const min = ref(minValue);
const max = ref(maxValue);
const orange = ref(50);
const black = ref(75);
const selectedColor = ref("rgb(255, 0, 0)");
const hexColor = ref("#FF0000");
const minPercent = ref(0);
const orangePercent = ref(50);
const blackPercent = ref(75);
const maxPercent = ref(100);

const draggingPosition = ref([0, 0, 0]);
const track = ref(null);
let isDragging = ref(false);
let currentHandle = ref("");
let currentDrag = ref(null);

onMounted(() => {
  updatePercentages();
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("mousemove", onMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mouseup", stopDrag);
  window.removeEventListener("mousemove", onMouseMove);
});

function startDrag(handle) {
  isDragging.value = true;
  currentHandle.value = handle;
}

function stopDrag() {
  isDragging.value = false;
  currentDrag.value = null;
}

function onMouseMove(event) {
  if (!isDragging.value || !track.value) return;

  const rect = track.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const percentage = Math.round((offsetX / rect.width) * 100);

  if (currentHandle.value === "min") {
    if (percentage < orangePercent.value) {
      min.value = Math.max(minValue, Math.min(maxValue, percentage));
      updatePercentages();
    }
  } else if (currentHandle.value === "orange") {
    if (percentage > minPercent.value && percentage < blackPercent.value) {
      orange.value = Math.max(minValue, Math.min(maxValue, percentage));
      updatePercentages();
    }
  } else if (currentHandle.value === "black") {
    if (percentage > orangePercent.value && percentage < maxPercent.value) {
      black.value = Math.max(minValue, Math.min(maxValue, percentage));
      updatePercentages();
    }
  } else if (currentHandle.value === "max") {
    if (percentage > blackPercent.value) {
      max.value = Math.max(minValue, Math.min(maxValue, percentage));
      updatePercentages();
    }
  }
}

function onGradientMouseMove(event) {
  if (!isDragging.value || currentDrag.value === null) return;

  const gradientLines = document.querySelectorAll('.gradient-line');
  const line = gradientLines[currentDrag.value];
  const rect = line.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const percentage = Math.round((offsetX / rect.width) * 100);
  draggingPosition.value[currentDrag.value] = Math.min(Math.max(percentage, 0), 100);
  updateColor(event, currentDrag.value);
}

function updateColor(event, gradientIndex) {
  if (!isDragging.value) return;

  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const width = rect.width;

  let color;
  if (gradientIndex === 0) {
    const percentage = x / width;
    const r = Math.round(255 * (1 - percentage));
    const g = Math.round(255 * percentage);
    color = `rgb(${r}, ${g}, 0)`; // Red to yellow
  } else if (gradientIndex === 1) {
    const percentage = x / width;
    const r = Math.round(255 * (1 - percentage));
    const b = Math.round(255 * percentage);
    color = `rgb(0, 0, ${b})`; // Blue to magenta
  } else {
    const percentage = x / width;
    const gray = Math.round(255 * percentage);
    color = `rgb(${gray}, ${gray}, ${gray})`; // Grayscale
  }

  selectedColor.value = color;
  hexColor.value = rgbToHex(color);
}

function startGradientDrag(event) {
  isDragging.value = true;
  updateColor(event, 0); // Start with the first gradient
  window.addEventListener("mousemove", onGradientMouseMove); // Use new function for dragger
}

function stopGradientDrag() {
  isDragging.value = false;
  window.removeEventListener("mousemove", onGradientMouseMove); // Clean up
}

function startDragging(index) {
  currentDrag.value = index;
}

function updatePercentages() {
  minPercent.value = ((min.value - minValue) / (maxValue - minValue)) * 100;
  orangePercent.value = ((orange.value - minValue) / (maxValue - minValue)) * 100;
  blackPercent.value = ((black.value - minValue) / (maxValue - minValue)) * 100;
  maxPercent.value = ((max.value - minValue) / (maxValue - minValue)) * 100;
}

function rgbToHex(rgb) {
  const rgbValues = rgb.match(/\d+/g);
  return `#${((1 << 24) + (parseInt(rgbValues[0]) << 16) + (parseInt(rgbValues[1]) << 8) + parseInt(rgbValues[2])).toString(16).slice(1).toUpperCase()}`;
}
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
  
  .blue-fill {
    background: #D63D4A;
  }
  
  .orange-fill {
    background: #D6673D;
  }
  
  .black-fill {
    background: #D6B23D;
  }
  
  .red-fill {
    background: #d63d4a;
  }
  
  .slider-handle {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: -10px;
    cursor: pointer;
    transform: translate(-50%, 0);
  }
  
  .blue {
    background-color: #D6B23D;
    border: 2px solid white;
  }
  
  .orange {
    background-color: #D6673D;
    border: 2px solid white;
  }
  
  .black {
    background-color: #D63D4A;
    border: 2px solid white;
  }
  
  .flag {
    position: absolute;
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