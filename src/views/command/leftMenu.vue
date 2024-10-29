<template>
    <section class="bg-[rgb(232,232,232)] pt-4">
      <div class="pl-4 pr-2">
       <div class="pb-2">
        <button @click.prevent="openAddVehicleModal"  class="flex w-full space-x-2 text-white rounded-lg font-[600] cursor-pointer uppercase justify-center px-4 bg-[#D63D4A] p-3">
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
           </svg>          
          </div>
           <div>
            Add Vehicle
          </div>
         </button>
       </div>
       <div class="relative pb-4">
        <input
          type="search"
          class="bg-[white] outline-none p-3 border-2 border-[#B9B9B9] rounded-lg w-full pl-12 placeholder:text-[#000000]"
          placeholder="Search Vehicle"  />
        <div class="absolute top-3.5 left-4">
          <img src="@/components/icons/search.svg" alt="" />
        </div>
      </div>
        <div class="h-screen">
          <div class="main-rounters overflow-y-scroll h-[75vh] pb-2 pr-3">
            <router-link
              class="flex items-center space-x-2 py-3 px-1 transition-all duration-300 ease-in-out border-b-[1px] border-[#C2C2C2]"
              v-for="item in menu"
              :key="item"
              :to="item.route"
              :class="{
                'bg-white rounded-lg':
                  $route.path === item.route,
                '' : $route.path !== item.route,}">
              <div class="relative">
                <span>
                  <img :src="item.carImg">
                </span>
                <span v-if="item.active" class="w-4 h-4 border-white border-2 bg-[#E82031] absolute -top-1 -left-1.5 rounded-full"></span>
                <span v-if="item.unactive" class="w-4 h-4 border-white border-2 bg-[#2BE31E] absolute -top-1 -left-1.5 rounded-full"></span>
              </div>
              <div class="">
                <div class="text-[#000000] text-[14px] font-[600]">
                  {{ item.name }}
                </div>
                <div class="text-[12px] text-[#434343]">
                  {{ item.made }} - {{ item.model }}
                </div>
              </div>
              <div class="h-[50px] w-[2px] bg-[#CCCCCC]"></div>
              <div class="flex w-[30%] justify-center">
                <div class="w-full">
                  <div class="flex justify-center">
                    <img :src="item.icon" alt="">
                  </div>
                  <div class="uppercase text-center text-[12px] text-[#E82031] font-[600]">
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <addVehicle  :show="showAddVehicleModal" :onClose="colseVehicleModal" />
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { RouterLink } from "vue-router";
  import addVehicle from "@/components/layout/popupModels/addVehicle.vue";

  const showAddVehicleModal = ref(false);
const openAddVehicleModal = () => {
    showAddVehicleModal.value = true;
};
const colseVehicleModal = () => {
    showAddVehicleModal.value = false;
};
 
  const menu = ref([
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/driver.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "driving",
      active: " ",
      route: "/command",
    },
    {
      carImg: import("@/assets/images/car-img-white.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/idle.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "idle",
      unactive: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-black.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/lock.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "locked",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/unlock.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "unlock",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-white.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/disable.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "disabled",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-black.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/car.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "impounded",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/disconnected.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "Disconnected",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/driver.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "driving",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-white.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/idle.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "idle",
      unactive: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-black.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/lock.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "locked",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/unlock.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "unlock",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-white.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/disable.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "disabled",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-black.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/car.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "impounded",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      icon: import("@/components/icons/disconnected.svg").then(
        (module) => module.default
      ),
      name: "Nick Name Here...",
      made: "Chevy Cruze",
      model: "2021",
      status: "Disconnected",
      active: " ",
      route: "",
    },
  ]);
  
  onMounted(async () => {
    menu.value = await Promise.all(
      menu.value.map(async (item) => ({
        ...item,
        carImg: await item.carImg,
        icon: await item.icon,
      }))
    );
  });
  </script>
  
  <style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-400px);
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
    .main-rounters {
      padding: 0.5rem;
      height: 70vh;
    }
  }

  </style>  