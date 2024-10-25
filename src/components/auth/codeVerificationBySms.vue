<template>
    <section class="flex items-center justify-center min-h-screen">
        <div class="2xl:w-[35%] w-1/2 container mx-auto ">
            <div class="pb-6 flex justify-center">
                <img src="@/assets/images/logo.svg" alt="">
              </div>
            <h1 class="text-[#b92a32] text-[36px] font-[700] uppercase text-center">Text Message</h1>
            <p class="text-[#000000] font-[400] pb-4 text-center">Lorem Ipsum is simply dummy text </p>
            <div class="pb-4">
                <input 
                  type="text" placeholder="Enter Your Mobile Number"
                  class="w-full border-[0.5px] border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]" />
              </div>
                <div class="pb-4">
                    <router-link :to="{name : 'TowFactorAuth'}" class="hover-btn text-center w-full p-3 rounded-xl text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">Get Code Via SMS</router-link>
                </div>
        </div>
    </section>
</template>

<style scoped>

</style>