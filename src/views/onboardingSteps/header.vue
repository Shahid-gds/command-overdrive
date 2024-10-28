<template>
    <section class="flex justify-between">
        <div class="flex items-center space-x-12">
            <router-link :to="{name : 'Dashboard'}" class="w-[150px]">
                <img src="@/assets/images/logo.svg" alt="">
            </router-link>
            <div class="">
                <h1 class="text-[30px] font-[700]">Onboarding</h1>
                <p><span class="text-[#989898]">Home</span> / Onboarding </p> 
            </div>
        </div>
        <div class="flex items-center space-x-4">
            <router-link :to="{name: 'Installers'}">
                <img src="@/components/icons/open-wrench-tool.svg" alt="">
            </router-link>
            <rounter-link :to="{name : 'AccountSettings'}">
                <img src="@/components/icons/settings.svg" alt="">
            </rounter-link>
            <router-link :to="{name : 'Alters'}" class="relative">
                <img src="@/components/icons/bell.svg" alt="">
                <div class="bg-[#D63D4A] rounded-full w-5 h-5 text-[14px] absolute bottom-3 left-3 text-center text-white">6</div>
            </router-link>
            <div class="bg-[#E8E8E8] border-[1px] p-2 border-[#B9B9B9] rounded-lg relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>  
                  <div class="bg-[#D63D4A] rounded-full w-4 h-4 text-[14px] absolute top-0 -right-2 border-2 border-white text-center text-white"></div>             
            </div>
        </div>
    </section>
</template>