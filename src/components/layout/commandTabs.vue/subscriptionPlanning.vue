<template>
    <section class="w-full container mx-auto flex items-center justify-center min-h-screen">
     <div class="w-[60%] flex items-center space-x-10">
      <div class="w-full relative">
        <div class="absolute text-right right-[20rem] w-[80%]">
          <div class="leading-7">
            <h1 class="text-[#BA2B33] text-[30px] font-[700] uppercase">Ready</h1>
            <h1 class="text-[#000000] text-[25px] font-[700]">Set. Activate!</h1>
          </div>
          <p class="text-[#747474]">
            Your VIN can most frequently be found on the driver-side interior dash, or inside the driver-side door post.
          </p>
        </div>
        <div class="mt-[3rem] ml-8">
          <img src="@/assets/images/ready.svg" alt="Car Image" />
        </div>
        <div class="absolute bottom-0 left-[13rem] w-full">
          <p class="text-[#747474] ml-36">
            You can also find your VIN on your insurance card as part of the details listed or within your vehicle documents.
          </p>
        </div>
        <div class="p-16 border-r-[8px] border-t-[8px] border-[#B42830] w-[300px] h-[300px] absolute top-2 right-0"></div>
        <div class="border-l-[8px] border-b-[8px] border-[#B42830] w-[150px] h-[250px] absolute bottom-2 left-0"></div>
      </div>
  
      <div class="w-full">
        <div class="-mt-20">
          <h1 class="font-[700] uppercase text-xl">Activate</h1>
          <p class="text-[#747474] pb-6">Please select a plan for activation</p>
          <div class="w-full relative">
            <div
              class="p-3 px-4 rounded-lg w-full border-[#949494] text-[#808080] bg-white border-[1px] cursor-pointer flex items-center justify-between"
              @click="toggleDropdown">
              <span>{{ selectedOption }}</span>
              <span
                class="transform transition-transform duration-300"
                :class="isDropdownOpen ? 'rotate-180' : 'rotate-0'">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#707070" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </div>
            <transition name="dropdown">
              <ul
                v-if="isDropdownOpen"
                class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all ease-in-out duration-300 max-h-[200px] overflow-y-auto">
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
        <!-- Popup Modal -->
        <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-10 rounded-lg text-center relative">
            <svg v-if="showPopup" class="animate-tick h-20 w-20 border-2 rounded-full text-green-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M6 12l4 4L18 8" />
            </svg>
          </div>
        </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const isDropdownOpen = ref(false);
  const selectedOption = ref('Select Plan');
  const options = ref(['Basic - $10.00', 'Advance - $20.00']);
  const showPopup = ref(false);
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const selectOption = (option) => {
    selectedOption.value = option;
    isDropdownOpen.value = false;
    showPopup.value = true;
    setTimeout(() => {
      if (selectedOption.value.includes('Basic')) {
        router.push('/basic');
      } else if (selectedOption.value.includes('Advance')) {
        router.push('/advance');
      }
    }, 1000);
  };
  
  const closePopup = () => {
    showPopup.value = false;
  };
  </script>
  
  <style scoped>
  
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .animate-tick {
    animation: tick 0.5s ease-in-out forwards;
  }
  
  @keyframes tick {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>  