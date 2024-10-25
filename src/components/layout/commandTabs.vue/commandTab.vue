<template>
    <section class="">
     <div class="pb-4">
        <div class="flex justify-between border-b-[1px] py-2 border-[#C8C8C8]">
            <div class="text-center">
                <div class="flex justify-center pb-1.5">
                    <img src="../../../components/icons/black-lock.svg" alt="">
                </div>
                <div class="font-[700] uppercase">Lock</div>
                <div class="text-[#D63D4A]">Locked</div>
            </div>
            <div class="text-center">
                <div class="flex justify-center pb-1.5">
                    <img src="../../../components/icons/black-unlock.svg" alt="">
                </div>
                <div class="font-[700] uppercase">Unlock</div>
                <div class="text-[#D63D4A]">Unlocked</div>
            </div>
            <div class="text-center" >
                <div class="flex justify-center pb-1">
                    <img src="../../../components/icons/engine.svg" alt="">
                </div>
                <div class="font-[700] uppercase">Engine</div>
                <div class="">Disabled</div>
            </div>
          </div>
     </div>
     <div class="pb-4">
        <div class="flex justify-between py-2">
            <div class="text-center">
                <div class="flex justify-center pb-4">
                    <img src="../../../components/icons/fuel.svg" alt="">
                </div>
                <div class="font-[700] uppercase">Fuel Level</div>
                <div class="">27%</div>
            </div>
            <div class="text-center">
                <div class="flex justify-center pb-1.5">
                    <img src="../../../components/icons/diagnostic-status.svg" alt="">
                </div>
                <div class="font-[700] uppercase">Diagnostic Status</div>
                <div class="">5 Errors</div>
            </div>
            <div class="text-center" >
                <div class="flex justify-center pb-1.5">
                    <img src="../../../components/icons/battery.svg" alt="">
                </div>
                <div class="font-[700] uppercase">Battery</div>
                <div class="">Normal</div>
            </div>
          </div>
          <div class="pt-2">
            <button class="bg-[#E2E2E2] p-3 w-full rounded-lg flex space-x-2 justify-center items-center">
                <div class="font-[600] uppercase">Device Connected </div>
                <div class="w-4 h-4 bg-[#D63D4A] rounded-full"></div>
            </button>
            <p class="text-center uppercase text-sm">Last Connected 25 Aug, 2024 01:30 pm</p>
          </div>
        <div class="max-h-[500px] overflow-y-scroll pb-[4rem] pr-4 mt-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="uppercase font-[600] text-lg">Current Location:</h1>
                    <p class="text-sm">6438 Edsall Rd, Alexandria, VA 22312, USA</p>
                </div>
                <div class="border-2 p-2 px-4 uppercase text-[#9B9B9B] rounded-lg font-[600] cursor-pointer">
                    Filter
                </div>
              </div>
              <div class="pt-6">
                <button class="bg-[#D63D4A] text-white p-3 w-full rounded-lg flex space-x-2 justify-center items-center">
                    <div class="font-[600] uppercase">Share Access</div>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                          </svg>                      
                    </div>
                </button>
              </div>
              <div class="pt-6">
               <h1 class="uppercase font-[600] text-lg">Temporary Accesses Granted</h1>
               <div class="flex justify-between border-t-2 py-3">
                <div class="flex items-center">
                    <div class="w-10">1.</div>
                    <div>Bob's</div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="text-[#989898]">- Access Expire on:</div>
                    <div>10/20/2024</div>
                </div>
               </div>
               <div class="flex justify-between border-t-2 py-3">
                <div class="flex items-center">
                    <div class="w-10">2.</div>
                    <div>John's</div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="text-[#989898]">- Access Expire on:</div>
                    <div>10/20/2024</div>
                </div>
               </div>
               <div class="flex justify-between border-t-2 border-b-2 py-3">
                <div class="flex items-center">
                    <div class="w-10">3.</div>
                    <div>Smith's</div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="text-[#989898]">- Access Expire on:</div>
                    <div>10/20/2024</div>
                </div>
               </div>
              </div>
              <div class="pt-6">
                <div class="flex justify-between items-center" >
                    <div class="uppercase font-[700] w-full">Driving:</div>
                    <div class="text-[#777777] font-[700] uppercase w-full">Total</div>
                    <div class="text-[#777777] font-[700] uppercase w-full">Avg</div>
                </div>
                <div class="flex justify-between items-center py-4" >
                    <div class="w-full">Distance</div>
                    <div class="w-full">1,180 miles</div>
                    <div class="w-full">10 miles</div>
                </div>
                <div class="flex justify-between items-center pb-4" >
                    <div class="w-full">Travel Time</div>
                    <div class="w-full">48 hours 46 minutes</div>
                    <div class="w-full">26 minutes</div>
                </div>
                <div class="flex justify-between items-center pb-4" >
                    <div class="w-full">Idle Time </div>
                    <div class="w-full">17 hours 7 minutes</div>
                    <div class="w-full">9 minutes</div>
                </div>
              </div>
        </div>
     </div>
    
    </section>
</template>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
    background-color: #E8E8E8;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #C1C1C1;
    border-radius: 5px;
  }
</style>