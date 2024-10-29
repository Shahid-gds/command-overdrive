<template>
    <section class="h-[90vh] overflow-y-auto 2xl:mt-10 pb-[15rem]">
      <div class="relative h-[600px]">
        <div ref="mapContainer" class="absolute top-0 left-0 z-0 w-full h-full"></div>
        <button 
          @click="toggleDetails" 
          class="details-btn absolute flex items-center bottom-0 transform 2xl:translate-x-1/2 2xl:left-10 left-4 bg-[#5C5C5C] text-white py-2 px-4 rounded-t-lg">
          <div>Trip Details</div>
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          </div>
        </button>
      </div>
      <transition name="fade">
        <div v-if="showDetails" class="tabs-detail pt-4 2xl:pl-[6rem] relative z-10 bg-[#F8F8F8] rounded">
          <div class="p-4">
            <div class="flex justify-between pb-4"> 
                <div class="flex space-x-4">
                <div class="w-6 h-6 bg-[#CD092B] rounded-full"></div>
                <div class="">
                    <div class="text-[#7AA5F4] font-[600] uppercase text-[14px]">Ended at 6:38 PM</div>
                    <div>160,171 mi</div>
                </div>
                <div class="text-[#ADADAD] font-[600] text-[14px]">20 Cooper Square, New York, NY 10003, USA</div>
              </div>
              <div class="">
               <div class="border-2 border-[#1585CF] px-3 rounded-lg cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1585CF" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>  
               </div>                
              </div>
            </div>
            <div class="event-tab 2xl:flex items-center justify-between 2xl:space-x-6"> 
                <div class="flex space-x-4 w-full 2xl:pb-0 pb-6">
                <div class="w-6 h-6 bg-[#CD092B] rounded-full"></div>
                <div class="">
                    <div class="text-[#7AA5F4] font-[600] uppercase text-[14px]">Ended at 6:38 PM</div>
                    <div>160,171 mi</div>
                </div>
                <div class="text-[#ADADAD] font-[600] text-[14px]">20 Cooper Square, New York, NY 10003, USA</div>
              </div>
              <div class="w-full flex items-center space-x-10">
                <div class="">
                  <div class="bg-gradient-to-b from-[#b72b33] bg-[#962d34] w-10 h-10 p-2 px-2.5 cursor-pointer rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>                    
                  </div>
                </div>
                <div class="slider-container py-[3rem] w-full">
                    <div class="slider-track" ref="track">
                      <div class="fill red-fill" :style="{ width: `${minPercent}%` }"></div>
                      <div
                        class="slider-handle red"
                        :style="{ left: `${minPercent}%` }"
                        @mousedown="startDrag('min')">
                        <span class="flag w-[90px] text-center border-2 bottom-[30px] -right-[30px] z-20  p-2 rounded-lg text-[#757575] font-[700]">{{ min }}</span>
                      </div>
                    </div>
                  </div>               
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="tabs 2xl:pl-[6rem] pl-[2rem] py-5">
          <!-- Tabs -->
         <div class="flex items-center">
            <div
              class="w-[200px] text-left"
              :class="[
                selectedTab === 'tripDetail'
                  ? 'bg-[white] text-[#4E4E4E] font-[700]'
                  : 'bg-[#FFFFFF] text-[#000]',
                'cursor-pointer py-3 font-[400] uppercase',]"
              @click="selectTab('tripDetail')">
              Details
            </div>
            <div
              class="w-[200px] text-left"
              :class="[
                selectedTab === 'tripEvent'
                  ? 'bg-[white] text-[#4E4E4E] font-[700]'
                  : 'bg-[#FFFFFF] text-[#000]',
                'cursor-pointer py-3 font-[400] uppercase',]"
              @click="selectTab('tripEvent')">
              Events
            </div>
         </div>
          <div>
            <component :is="currentComponent" />
          </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import carIconUrl from '@/assets/images/car-img-red.svg';
  import tripDetail from '@/components/layout/helicopterTripTabs/tripDetail.vue';
  import tripEvent from '@/components/layout/helicopterTripTabs/tripEvent.vue';
const route = useRoute()
const selectedTab = ref('')

const updateSelectedTabFromQuery = () => {
  const tab = route.query.tab || 'tripDetail'
  selectedTab.value = tab
}

onMounted(() => {
  updateSelectedTabFromQuery()
})

const selectTab = (tab) => {
  selectedTab.value = tab
}

const currentComponent = computed(() => {
  switch (selectedTab.value) {
    case 'tripDetail':
      return tripDetail
    case 'tripEvent':
      return tripEvent
    default:
      return null
  }
}) 
  const mapContainer = ref(null);
  const showDetails = ref(true);
  
  const toggleDetails = () => {
    showDetails.value = !showDetails.value;
  };
  
  onMounted(() => {
    if (mapContainer.value) {
      const map = L.map(mapContainer.value).setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      const vehicleIcon = L.icon({
        iconUrl: carIconUrl,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
      });
      L.marker([51.505, -0.09], { icon: vehicleIcon }).addTo(map);
    }
  });
  const minValue = 0;
  const maxValue = 100;
  
  const min = ref(minValue);
  const max = ref(maxValue);
  
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
      if (percentage < maxPercent.value) {
        min.value = Math.max(minValue, Math.min(maxValue, percentage));
        updatePercentages();
      }
    } else if (currentHandle.value === 'max') {
      if (percentage > minPercent.value) {
        max.value = Math.max(minValue, Math.min(maxValue, percentage));
        updatePercentages();
      }
    }
  }
  function updatePercentages() {
    minPercent.value = ((min.value - minValue) / (maxValue - minValue)) * 100;
    maxPercent.value = ((max.value - minValue) / (maxValue - minValue)) * 100;
  }
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
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
  
  .black-fill {
    background: black;
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
  
  .black {
    width: 30px;
    height: 30px;
    background-color: white;
    border: 1px solid #707070;
    top: -10px;
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
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #e8e8e8;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #D63D4A;
    border-radius: 5px;
  }
  @media(max-width:1900px){
    .details-btn {
        margin-left: 8rem;
    }
    .tabs, .tabs-detail {
        margin-left: 8rem;
    }
    .event-tab{
      flex-direction: column;
    }
    .slider-container {
      padding-top: 4rem;
    }
  }
  @media(max-width:1280px){
    .details-btn {
        margin-left: 0rem;
    }
    .tabs, .tabs-detail {
        margin-left: 0rem;
    }
  }
  </style>
  