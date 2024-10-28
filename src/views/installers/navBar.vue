<template>
    <section class="flex justify-between bg-[white] px-6 py-4">
        <div class="flex items-center space-x-12">
            <router-link :to="{name : 'Dashboard'}" class="w-[150px]">
                <img src="@/assets/images/logo.svg" alt="">
            </router-link>
        </div>
        <div class="flex items-center space-x-4">
           <div class="flex items-center space-x-4">
            <div class="text-[#1E1E1E]">Status:</div>
            <div class="relative">
                <div
                  class="p-2 px-4  rounded-lg w-[200px]  text-[#000000] bg-[#E8E8E8] border-[1px] cursor-pointer flex items-center justify-between"
                  @click="toggleStatusDropdown">
                  <span>{{ selectedStatusOption }}</span>
                  <span
                    class="transform transition-transform duration-300"
                    :class="isStatusDropdownOpen ? 'rotate-180' : 'rotate-0'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D63D4A" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                      </span>
                </div>
               <transition name="dropdown">
                <ul
                  v-if="isStatusDropdownOpen"
                  class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all ease-in-out duration-300 max-h-[200px] overflow-y-auto">
                  <li
                    v-for="(option, index) in Statusoptions"
                    :key="index"
                    class="p-3 cursor-pointer hover:bg-gray-200"
                    @click="selectStatusOption(option)">
                    {{ option }}
                  </li>
                </ul>
               </transition>
              </div>
           </div>
           <div class="flex items-center space-x-4">
            <div class="text-[#1E1E1E]">Filter by:</div>
            <div class="relative">
                <div
                  class="p-2 px-4  rounded-lg w-[200px]  text-[#000000] bg-[#E8E8E8] border-[1px] cursor-pointer flex items-center justify-between"
                  @click="toggleFilterDropdown">
                  <span>{{ selectedFilterOption }}</span>
                  <span
                    class="transform transition-transform duration-300"
                    :class="isFilterDropdownOpen ? 'rotate-180' : 'rotate-0'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D63D4A" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                      </span>
                </div>
               <transition name="dropdown">
                <ul
                  v-if="isFilterDropdownOpen"
                  class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all ease-in-out duration-300 max-h-[200px] overflow-y-auto">
                  <li
                    v-for="(option, index) in Filteroptions"
                    :key="index"
                    class="p-3 cursor-pointer hover:bg-gray-200"
                    @click="selectFilterOption(option)">
                    {{ option }}
                  </li>
                </ul>
               </transition>
              </div>
           </div>
            <div class="relative">
                <input
                  type="search"
                  class="2xl:w-[520px] bg-[#E8E8E8] outline-none p-3 rounded-lg pl-14 placeholder:text-[#7A86A1]"
                  placeholder="Search Here ..."  />
                <div class="absolute top-3.5 left-4">
                  <img src="@/components/icons/search.svg" alt="" />
                </div>
              </div>
            <router-link :to="{name: 'Installers'}">
                <img src="@/components/icons/open-wrench-tool.svg" alt="">
            </router-link>
            <router-link :to="{name : 'AccountSettings'}">
                <img src="@/components/icons/settings.svg" alt="">
            </router-link>
            <router-link :to="{name: 'Alters'}" class="relative">
                <img src="@/components/icons/bell.svg" alt="">
                <div class="bg-[#D63D4A] rounded-full w-5 h-5 text-[14px] absolute bottom-3 left-3 text-center text-white">6</div>
            </router-link>
            <div class="bg-[#E8E8E8] border-[1px] p-2 border-[#B9B9B9] rounded-lg relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>  
                  <div class="bg-[#D63D4A] rounded-full w-4 h-4 text-[14px] absolute top-0 -right-2 border-2 border-white text-center text-white"></div>             
            </div>
            <div>
            </div>
        </div>
    </section>
</template>
<script setup> 
import { ref } from 'vue';

  const isStatusDropdownOpen = ref(false);
  const selectedStatusOption = ref('Driving');
  const Statusoptions = ref(['Driving', 'Idle', 'Locked', 'Unlocked']);
  const toggleStatusDropdown = () => {
          isStatusDropdownOpen.value = !isStatusDropdownOpen.value;
  };
const selectStatusOption = (option) => {
  selectedStatusOption.value = option;
  isStatusDropdownOpen.value = false;
};

  const isFilterDropdownOpen = ref(false);
  const selectedFilterOption = ref('Model');
  const Filteroptions = ref(['Model 2017', 'Model 2018', 'Model 2019', 'Model 2020']);
  const toggleFilterDropdown = () => {
          isFilterDropdownOpen.value = !isFilterDropdownOpen.value;
  };
const selectFilterOption = (option) => {
  selectedFilterOption.value = option;
  isFilterDropdownOpen.value = false;
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
