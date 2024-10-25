<template>
    <section class="flex items-start space-x-10 relative">
      <div class="w-full relative">
        <div class="absolute text-right right-[20rem] w-[80%]">
          <div class="leading-7">
            <h1 class="text-[#BA2B33] text-[30px] font-[700] uppercase">Ready</h1>
            <h1 class="text-[#000000] text-[25px] font-[700]">Set. Activate!</h1>
          </div>
          <p class="text-[#747474]">
            Your VIN can most frequently be found on the driver-side interior dash, or inside the driver-side door post
          </p>
        </div>
        <div class="mt-[3rem] ml-8">
          <img src="@/assets/images/ready.svg" alt="Car Image">
        </div>
        <div class="absolute bottom-0 left-[13rem] w-full">
          <p class="text-[#747474] ml-36">
            You can also find your VIN on your insurance card as part of the details listed or within your vehicle documents
          </p>
        </div>
        <div class="p-16 border-r-[8px] border-t-[8px] border-[#B42830] w-[300px] h-[300px] absolute top-2 right-0"></div>
        <div class="border-l-[8px] border-b-[8px] border-[#B42830] w-[150px] h-[250px] absolute bottom-2 left-0"></div>
      </div>
  
      <div class="w-full">
        <div class="mt-10">
          <h1 class="font-[700] uppercase text-xl">Activate</h1>
          <p class="text-[#747474] pb-6">Please select a plan for activate</p>
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
    </section>
  </template>
  
  <script setup> 
  import { ref } from 'vue';

    const isDropdownOpen = ref(false);
    const selectedOption = ref('Select Plan');
    const options = ref(['Plan One', 'Plan Two', 'Plan Three', 'Plan Four']);
    const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
    };
  const selectOption = (option) => {
    selectedOption.value = option;
    isDropdownOpen.value = false;
  };
  </script>

  <style scoped>
  .select .selectBtn:after {
    content: "";
    position: absolute;
    top: 45%;
    right: 15px;
    width: 10px;
    height: 10px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    border-right: 2px solid #707070;
    border-bottom: 2px solid #707070;
    cursor: pointer;
    transition: 0.2s ease;
}

.select .selectBtn.toggle {
    border-radius: 0.5rem 0.5rem 0 0;
}

.select .selectBtn.toggle:after {
    -webkit-transform: translateY(-50%) rotate(-135deg);
    transform: translateY(-50%) rotate(-135deg);
}

.select .selectDropdown {
    position: absolute;
    top: 100%;
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
    overflow-y: hidden;
    background: wite;
    border: 1px solid #949494;
    background: white;
    z-index: 1;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: top center;
    transform-origin: top center;
    visibility: hidden;
    transition: 0.2s ease;
}

.select .selectDropdown .option {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
}

.select .selectDropdown .option:hover {
    background: transparent;
    color: black;
    border-radius: 0.5rem;
}

.select .selectDropdown.toggle {
    visibility: visible;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
}

@keyframes rotateAnimation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
  