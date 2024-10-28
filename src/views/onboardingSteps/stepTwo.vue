<template>
    <section class="flex items-center space-x-10 relative">
      <div class="w-full relative">
        <div class="absolute text-right right-[20rem] w-[80%]">
          <div class="leading-7">
            <h1 class="text-[#BA2B33] text-[30px] font-[700] uppercase">Step-2</h1>
            <h1 class="text-[#000000] text-[25px] font-[700]">Enter Your Car Details </h1>
          </div>
          <p class="text-[#747474]">
            Your VIN can most frequently be found on the driver-side interior dash, or inside the driver-side door post
          </p>
        </div>
        <div class="px-10 pt-16 pb-6 mt-5">
          <img class="w-full" src="@/assets/images/onboarding-steps-car.png" alt="">
        </div>
        <p class="text-[#747474] ml-36">
          You can also find your VIN on your insurance card as part of the details listed or within your vehicle documents
        </p>
        <div class="p-16 border-r-[8px] border-t-[8px] border-[#B42830] w-[300px] h-[250px] absolute top-2 right-0"></div>
        <div class="border-l-[8px] border-b-[8px] border-[#B42830] w-[50px] h-[100px] absolute bottom-2 left-20"></div>
      </div>
  
      <div class="w-full">
        <div class="w-[70%] absolute top-0">
          <h1 class="font-[700] uppercase text-xl">Add Details</h1>
          <p class="text-[#747474]">Add the Make, Model, Year, License Plate, Mileage & Nickname</p>
  
          <!-- Input fields for vehicle details -->
          <div class="flex space-x-3 mt-4 pb-2">
            <input type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Make">
            <input type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="License Plate">
          </div>
  
          <div class="flex space-x-3 pb-2">
            <input type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Model">
            <input type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Mileage">
          </div>
          <div class="flex space-x-3 pb-2">
            <input type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Year">
            <input type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Nickname">
          </div>
  
          <div class="flex space-x-3">
            <div class="w-full"></div>
            <div class="w-full">
              <button  @click="goToNext"
                class="hover-btn text-xl text-center w-full p-2 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
                Save
              </button>
              <!-- Back to Step One (VIN input) -->
              <button @click="goToPrevious" class="w-full text-right">
                Back to VIN Input
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const emit = defineEmits(['previous']);
  
  const goToPrevious = () => {
    emit('previous');
  };
  const goToNext = () => {
    emit('next');
  };
  </script>
  