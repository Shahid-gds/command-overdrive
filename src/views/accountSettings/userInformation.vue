<template> 
    <section class="2xl:flex 2xl:space-x-10">
        <div class="w-full 2xl:pb-0 pb-10">
            <h1 class="font-[700] uppercase text-xl pb-2">Account Settings: </h1>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex space-x-10 h-[300px]">
            <div class="w-full">
                <div class="flex justify-between border-b-2 border-[#AEAEAE] pb-2">
                    <div class="flex space-x-4 items-center">
                        <div class="relative">
                            <img src="@/assets/images/car-img-red.svg" alt="">
                        <div class="absolute bottom-0 right-0 bg-[white] p-1 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                              </svg>                          
                        </div>
                        </div>
                        <div>
                            <h1>Photo</h1>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                   </div>
                   <div class="flex justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Passowrd</div>
                        <div>
                            <input class="pb-4 bg-transparent outline-none w-full" type="passowrd" v-model="passowrd" readonly>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Reset</div>
                    </div>
                   </div>
                   <div class="flex justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Email</div>
                        <div>
                            <input class="pb-4 w-full bg-transparent outline-none" type="email" v-model="email" readonly>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                   </div>
            </div>
            <div class="w-full">
                   <div class="flex justify-between border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Username </div>
                        <div>
                            <input class="pb-4 w-full bg-transparent outline-none" type="text" v-model="userName" readonly>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                   </div>
                   <div class="flex justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Phone </div>
                        <div>
                            <input class="pb-4 w-full bg-transparent outline-none" type="text" v-model="phone" readonly>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                   </div>
                   <div class="flex justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Mailing Address</div>
                        <div>
                            <textarea class="pb-4 w-full bg-transparent outline-none" v-model="address" rows="2" readonly></textarea>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                   </div>
              
            </div>
                <div>

                </div>
            </div>
        </div>
        <div class="w-full 2xl:pb-0 pb-6">
            <h1 class="font-[700] uppercase text-xl pb-2">Billing Information: </h1>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex space-x-10 items-center justify-center h-[300px]">
                <div>
                        <div class="flex justify-center pb-1">
                            <img src="@/assets/images/visa-card.svg" alt="">
                        </div>
                        <h1 class="font-[700] text-center">Amex 4567</h1>
                        <div class="flex justify-center mt-2">
                            <button class="bg-white p-1.5 px-4 rounded-lg font-[600]">Update</button>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const passowrd = ref('**********')
const email = ref('joshua@carr-capital.com')
const userName = ref('Joshua Carr')
const phone = ref('123 4567 8910')
const address = ref('5926 AMBASSADOR WAY ALEXANDRIA VA, 22310, US')

</script>

<style>
textarea {
   resize: none;
}
</style>