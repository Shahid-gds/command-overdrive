<template>
    <section class="flex items-center space-x-10">
        <div class="w-full relative">
          <div class="absolute text-right right-[20rem] w-[80%]">
            <div class="leading-7">
              <h1 class="text-[#000000] text-[25px] font-[700]">I Have Device</h1>
            </div>
            <p class="text-[#747474]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt laudantium suscipit cupiditate cumque, distinctio explicabo eaque. Voluptas, illum sit.
            </p>
          </div>
          <div class="px-10 pt-16 pb-6 mt-5">
            <img class="w-full" src="@/assets/images/onboarding-steps-car.png" alt="">
          </div>
          <h1 class="text-[#000000] text-[25px] font-[700] ml-36">Purchase Device</h1>
          <p class="text-[#747474] ml-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, amet?
          </p>
          <div class="p-16 border-r-[8px] border-t-[8px] border-[#B42830] w-[300px] h-[250px] absolute top-2 right-0"></div>
          <div class="border-l-[8px] border-b-[8px] border-[#B42830] w-[100px] h-[100px] absolute bottom-2 left-10"></div>
        </div>
    
        <div class="w-full">
            <div class="pt-2">
              <button
                @click="goToNext" :disabled="processing"
                class="hover-btn text-xl text-center w-full p-3 rounded-lg text-[#b21d27d3]  border-2 border-[#962d34] font-[700] uppercase">
                    <div class="flex items-center space-x-4 justify-center">
                        <div>
                            I have device
                        </div>
                        <div>
                          <img src="@/components/icons/tracking-device.svg" alt="">                            
                        </div>
                    </div>
              </button>
            </div>
            <div class="pt-5">
              <a href="https://command-overdrive.com" target="_blank"
                class="hover-btn flex items-center text-xl text-center w-full p-3 rounded-lg text-[#b21d27d3] border-2 border-[#b21d27d3] font-[700] uppercase">
                <div class="flex items-center space-x-4 justify-center">
                    <div class="">
                        Purchase Device
                    </div>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                                                                                                         
                    </div>
                </div>
              </a>
            </div>
        </div>
      </section>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['next']);

const goToNext = () => {
    emit('next');
};
</script>