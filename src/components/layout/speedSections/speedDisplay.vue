<template>
    <section>
      <div class="2xl:flex 2xl:space-x-24 border-b-[1px] pb-16 border-[#707070]">
        <div class="w-full">
          <div class="flex justify-between">
            <div class="w-full">
              <h1 class="font-[700] text-2xl">Speed Display</h1>
              <p class="w-[80%]">
                Color coded indicators that will appear along the route of your
                trip showing you a range of how fast a vehicle was traveling
                during that section. Customizable with the ability to set the
                range and the corresponding color in the app.
              </p>
            </div>
            <div class="">
              <div class="button b2" id="button-13">
                <input type="checkbox" class="checkbox" />
                <div class="knobs">
                  <span></span>
                </div>
                <div class="layer"></div>
              </div>
            </div>
          </div>
          <div class="slider-container pt-[3rem] 2xl:pb-0 pb-[5rem] 2xl:pr-0 pr-6 w-full">
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
                class="fill red-fill"
                :style="{ width: `${100 - maxPercent}%`, left: `${maxPercent}%` }"></div>
  
              <div
                class="slider-handle blue"
                :style="{ left: `${minPercent}%` }"
                @mousedown="startDrag('min')">
                <div class="bg-white mt-1 text-[14px] text-center rounded-full text-[#757575] font-[600]">
                  {{ min }}
                </div>
              </div>
              <div
                class="slider-handle orange"
                :style="{ left: `${orangePercent}%` }"
                @mousedown="startDrag('orange')">
                <div class="bg-white mt-1 text-[14px] text-center rounded-full text-[#757575] font-[600]">
                  {{ orange }}
                </div>
              </div>
              <div
                class="slider-handle black"
                :style="{ left: `${blackPercent}%` }"
                @mousedown="startDrag('black')">
                <div class="bg-white mt-1 text-[14px] text-center rounded-full text-[#757575] font-[600]">
                  {{ black }}
                </div>
              </div>
              <div
                class="slider-handle red"
                :style="{ left: `${maxPercent}%` }"
                @mousedown="startDrag('max')">
                <span class="flag text-center w-[70px] border-2 bottom-[30px] -right-[20px] p-2 rounded-lg text-[#757575] font-[700]">
                  {{ max }}
                </span>
              </div>
            </div>
            <div class="flex justify-between pt-4">
              <div class="flex items-center space-x-2">
                <button class="text-[white] font-[700] w-[30px] h-[30px] rounded-full text-center bg-[#D63D4A] text-2xl">+</button>
                <div class="text-[#828282] uppercase">Add Speed Display</div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="text-[white] font-[700] w-[30px] h-[30px] rounded-full text-center bg-[#D63D4A] text-2xl">-</button>
                <div class="text-[#828282] uppercase">Delete Speed Display</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-end space-x-6">
          <div class="w-full border-2 p-6 rounded-lg">
            <div class="w-full h-[80px] border-2 rounded-lg" :style="{ backgroundColor: selectedColor }"></div>
            <div class="flex justify-center py-2">
                <input type="text" :value="hexColor" readonly class="text-center p-1 border-2 rounded-lg outline-none" />
            </div>
            <div class="w-full" @mousedown="startGradientDrag" @mouseup="stopGradientDrag" @mouseleave="stopGradientDrag">
              <div class="gradient-line mt-2 rounded-full" @mousemove="updateColor($event, 0)" style="height: 15px; background: linear-gradient(to right, red, yellow, green); position: relative;">
                <div class="dragger" :style="{ left: `${draggingPosition[0]}%` }" @mousedown="startDragging(0)"></div>
              </div>
              <div class="gradient-line mt-2 rounded-full" @mousemove="updateColor($event, 1)" style="height: 15px; background: linear-gradient(to right, cyan, blue, magenta); position: relative;">
                <div class="dragger" :style="{ left: `${draggingPosition[1]}%` }" @mousedown="startDragging(1)"></div>
              </div>
              <div class="gradient-line mt-2 rounded-full" @mousemove="updateColor($event, 2)" style="height: 15px; background: linear-gradient(to right, black, white); position: relative;">
                <div class="dragger" :style="{ left: `${draggingPosition[2]}%` }" @mousedown="startDragging(2)"></div>
              </div>
            </div>
            
          </div>
          <div class="w-full">
            <div class="pb-2">
              <button class="border-[1.5px] border-[#636363] p-2 px-6 rounded-lg uppercase text-[#636363]">Cancel</button>
            </div>
            <div>
              <button class="bg-[#636363] border-[1.5px] border-[#636363] p-2 px-9 rounded-lg uppercase text-[white]">Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { ref, onMounted, onUnmounted } from "vue";

const minValue = 0;
const maxValue = 100;

const min = ref(minValue);
const max = ref(maxValue);
const orange = ref(50);
const black = ref(75);
const selectedColor = ref("rgb(255, 0, 0)"); // Default color (red)
const hexColor = ref("#FF0000"); // Default hex color

const minPercent = ref(0);
const orangePercent = ref(50);
const blackPercent = ref(75);
const maxPercent = ref(100);

const draggingPosition = ref([0, 0, 0]); // Positions for gradient draggers
const track = ref(null);
let isDragging = ref(false);
let currentHandle = ref("");
let currentDrag = ref(null);

onMounted(() => {
  updatePercentages();
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("mousemove", onMouseMove); // For slider handles
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
  currentDrag.value = null; // Reset current drag state
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
  
  .slider-container {
    position: relative;
    height: 50px;
  }
  
  .slider-track {
    position: relative;
    width: 100%;
    height: 10px;
    background: #BD00FF;
    border-radius: 5px;
  }
  
  .fill {
    position: absolute;
    height: 100%;
    top: 0;
    border-radius: 5px;
  }
  
  .blue-fill {
    background: #BD00FF;
  }
  
  .orange-fill {
    background: #FF7700;
  }
  
  .black-fill {
    background: black;
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
    background-color: white;
    border: 1px solid #707070;
  }
  
  .orange {
    background-color: white;
    border: 1px solid #707070;
  }
  
  .black {
    background-color: white;
    border: 1px solid #707070;
  }
  
  .red {
    background-color: #d63d4a;
    border: 2px solid white;
  }
  
  .flag {
    position: absolute;
  }
  
  .dragger {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 2px solid #707070;
    border-radius: 50%;
    top: 8px;
    transform: translate(-50%, -50%);
  }
  </style>  