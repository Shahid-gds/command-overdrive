<template>
    <section class="">
        <div v-if="!isSettingsVisible" class="flex justify-between items-center mt-3">
            <div class="font-[600]">Alerts/Notifications</div>
            <div class="relative">
            <div class="cursor-pointer" @click="accontToggleShow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9A9A" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>                  
            </div>
              <TransitionGroup name="bounce" tag="ul" class="relative">
                <div
                  v-if="isAccountToggleShow" @click="accontToggleShow" class="fixed inset-0 z-10 opacity-25"></div>
                <div
                  v-if="isAccountToggleShow"
                  class="submenu w-[160px] absolute -left-3 top-0 border-2 border-[#D9D9D9] z-20 bg-[#FFFFFF] shadow-xl p-4 rounded-xl transition-opacity 0.5 ease-in pointer-events-auto" >
                    <div class="text-[#585858] font-[600] cursor-pointer hover:text-[#D63D4A] transition-all duration-300 border-b-[1px] border-[#BFBFBF] pb-2">Clear All</div>
                    <div class="text-[#585858] font-[600] cursor-pointer hover:text-[#D63D4A] transition-all duration-300 border-b-[1px] py-4 border-[#BFBFBF]">Edit</div>
                    <div @click="showSettings" class="text-[#585858] font-[600] cursor-pointer hover:text-[#D63D4A] transition-all duration-300 pt-4">Settings</div>
                </div>
              </TransitionGroup>
              </div>
        </div>
        <div v-if="!isSettingsVisible" class="screen-height max-h-[75vh] overflow-y-scroll pr-4 mt-6 ">
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4]">
              <div>
                <div class="bg-[#D63D4A] p-2 rounded-full w-[50px] h-[50px] pt-2.5">
                    <img class="w-full" src="@/components/icons/diagnostic-white.svg" alt="">
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">1RCRUZE17's check engine light is on.</h1>
                    <p class="text-xs">P0172 - System Too Rich Bank 1, P0420 - Catalyst <br>
                        System Efficiency Below Threshold Bank 1, P1101</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-3 rounded-full w-[50px] h-[50px] pt-2.5">
                    <img class="w-full" src="@/components/icons/fuel-white.svg" alt="">
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">Fuel Warning</h1>
                    <p class="text-xs">1RCRUZE17 has 5% fuel left.</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-2 rounded-full w-[50px] h-[50px] pt-2.5">
                    <img class="w-full" src="@/components/icons/diagnostic-white.svg" alt="">
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">1RCRUZE17's check engine light is on.</h1>
                    <p class="text-xs">P0172 - System Too Rich Bank 1, P0420 - Catalyst <br>
                        System Efficiency Below Threshold Bank 1, P1101</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-3 rounded-full w-[50px] h-[50px] pt-2.5">
                    <img class="w-full" src="@/components/icons/fuel-white.svg" alt="">
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">Fuel Warning</h1>
                    <p class="text-xs">1RCRUZE17 has 5% fuel left.</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-1 py-4 rounded-full w-[50px] h-[50px]">
                   <h1 class="uppercase text-sm text-white font-[700]">news</h1>
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">Fuel Warning</h1>
                    <p class="text-xs">1RCRUZE17 has 5% fuel left.</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-2 rounded-full w-[50px] h-[50px] pt-2.5">
                    <img class="w-full" src="@/components/icons/diagnostic-white.svg" alt="">
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">1RCRUZE17's check engine light is on.</h1>
                    <p class="text-xs">P0172 - System Too Rich Bank 1, P0420 - Catalyst <br>
                        System Efficiency Below Threshold Bank 1, P1101</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-3 rounded-full w-[50px] h-[50px] pt-2.5">
                    <img class="w-full" src="@/components/icons/fuel-white.svg" alt="">
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">Fuel Warning</h1>
                    <p class="text-xs">1RCRUZE17 has 5% fuel left.</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-1 py-4 rounded-full w-[50px] h-[50px]">
                   <h1 class="uppercase text-sm text-white font-[700]">news</h1>
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">Fuel Warning</h1>
                    <p class="text-xs">1RCRUZE17 has 5% fuel left.</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-2 rounded-full w-[50px] h-[50px] pt-2.5">
                    <img class="w-full" src="@/components/icons/diagnostic-white.svg" alt="">
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">1RCRUZE17's check engine light is on.</h1>
                    <p class="text-xs">P0172 - System Too Rich Bank 1, P0420 - Catalyst <br>
                        System Efficiency Below Threshold Bank 1, P1101</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-3 rounded-full w-[50px] h-[50px] pt-2.5">
                    <img class="w-full" src="@/components/icons/fuel-white.svg" alt="">
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">Fuel Warning</h1>
                    <p class="text-xs">1RCRUZE17 has 5% fuel left.</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
            <div class="flex space-x-4 border-b-2 pb-4 border-[#D4D4D4] mt-4">
              <div>
                <div class="bg-[#D63D4A] p-1 py-4 rounded-full w-[50px] h-[50px]">
                   <h1 class="uppercase text-sm text-white font-[700]">news</h1>
                </div>
              </div>
                <div class="w-full">
                    <h1 class="font-[600]">Fuel Warning</h1>
                    <p class="text-xs">1RCRUZE17 has 5% fuel left.</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#979797] text-xs mt-3">9/24 at 9:31 am</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                                  
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div v-if="isSettingsVisible">
            <settings />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import settings from '../notifications/settings.vue';

const isAccountToggleShow = ref(false);
const isSettingsVisible = ref(false);
const accontToggleShow = () => {
    isAccountToggleShow.value = !isAccountToggleShow.value;
};

const showSettings = () => {
    isSettingsVisible.value = true;
    isAccountToggleShow.value = false;
};
</script>

<style scoped>
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
    width: 5px;
    background-color: #E8E8E8;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #C1C1C1;
    border-radius: 5px;
  }
  @media(max-width:1900px){
    .screen-height {
        height: 70vh;
    }
  }
</style>