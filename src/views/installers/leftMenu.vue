<template>
    <section class="bg-[rgb(232,232,232)] h-screen fixed z-40">
      <div class="mt-[2rem] pl-4 pr-2">
       <div class="pb-2">
        <router-link :to="{name : 'Onboarding'}" class="flex space-x-2 text-white rounded-lg font-[600] cursor-pointer uppercase justify-center px-4 bg-[#D63D4A] p-2">
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
           </svg>          
          </div>
           <div>
            add device
          </div>
         </router-link>
       </div>
       <div class="relative pb-4">
        <input
          type="search"
          class="bg-[white] outline-none p-2 border-2 border-[#B9B9B9] rounded-lg w-full pl-12 placeholder:text-[#000000]"
          placeholder="Search Vehicle"  />
        <div class="absolute top-3.5 left-4">
          <img src="@/components/icons/search.svg" alt="" />
        </div>
      </div>
        <div class="h-screen">
          <div class="main-rounters h-[76vh] overflow-y-scroll pr-3 pb-2">
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
                <div class="text-[#000000] text-[16px] font-[600]">
                  {{ item.name }}
                </div>
                <div class="flex items-center text-[14px] text-[#434343]">
                  <div class="w-4">
                    <img :src="item.iconLocation" alt="">
                  </div>
                  <div>
                    {{ item.address }}
                  </div>
                </div>
                <div class="flex justify-between items-center">
                <div class="flex items-center text-[14px] text-[#434343]">
                  <div class="w-4">
                    <img :src="item.iconPhone" alt="">
                  </div>
                  <div>
                    {{ item.phone }}
                  </div>
                </div>
                <div>
                  <span class="text-[#D63D4A] font-[600]">$</span>50
                </div>
                </div>
          
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { RouterLink } from "vue-router";
 
  const menu = ref([
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      iconLocation: import("@/components/icons/address-marker.svg").then(
        (module) => module.default
      ),
      iconPhone: import("@/components/icons/phone.svg").then(
        (module) => module.default
      ),
      name: "Daniel's Installer ",
      address: "C2420 Mountain Road Blvd,",
      phone: "417-818-9000",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      iconLocation: import("@/components/icons/address-marker.svg").then(
        (module) => module.default
      ),
      iconPhone: import("@/components/icons/phone.svg").then(
        (module) => module.default
      ),
      name: "Daniel's Installer ",
      address: "C2420 Mountain Road Blvd,",
      phone: "417-818-9000",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      iconLocation: import("@/components/icons/address-marker.svg").then(
        (module) => module.default
      ),
      iconPhone: import("@/components/icons/phone.svg").then(
        (module) => module.default
      ),
      name: "Daniel's Installer ",
      address: "C2420 Mountain Road Blvd,",
      phone: "417-818-9000",
      active: " ",
      unactive: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      iconLocation: import("@/components/icons/address-marker.svg").then(
        (module) => module.default
      ),
      iconPhone: import("@/components/icons/phone.svg").then(
        (module) => module.default
      ),
      name: "Daniel's Installer ",
      address: "C2420 Mountain Road Blvd,",
      phone: "417-818-9000",
      active: " ",
      unactive: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      iconLocation: import("@/components/icons/address-marker.svg").then(
        (module) => module.default
      ),
      iconPhone: import("@/components/icons/phone.svg").then(
        (module) => module.default
      ),
      name: "Daniel's Installer ",
      address: "C2420 Mountain Road Blvd,",
      phone: "417-818-9000",
      active: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      iconLocation: import("@/components/icons/address-marker.svg").then(
        (module) => module.default
      ),
      iconPhone: import("@/components/icons/phone.svg").then(
        (module) => module.default
      ),
      name: "Daniel's Installer ",
      address: "C2420 Mountain Road Blvd,",
      phone: "417-818-9000",
      active: " ",
      unactive: " ",
      route: "",
    },
    {
      carImg: import("@/assets/images/car-img-red.svg").then(
        (module) => module.default
      ),
      iconLocation: import("@/components/icons/address-marker.svg").then(
        (module) => module.default
      ),
      iconPhone: import("@/components/icons/phone.svg").then(
        (module) => module.default
      ),
      name: "Daniel's Installer ",
      address: "C2420 Mountain Road Blvd,",
      phone: "417-818-9000",
      active: " ",
      unactive: " ",
      route: "",
    },

  ]);
  
  onMounted(async () => {
    menu.value = await Promise.all(
      menu.value.map(async (item) => ({
        ...item,
        carImg: await item.carImg,
        iconLocation: await item.iconLocation,
        iconPhone: await item.iconPhone,
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
      height: 72vh;
    }
  }
  @media (max-width: 1366px) and (max-height: 800px) {
    .main-rounters {
        padding: 0.5rem;
        height: 72vh;
    }
}
  @media (max-width: 1366px) and (max-height: 650px) {
    .main-rounters {
        padding: 0.5rem;
        height: 66vh;
    }
}
  </style>  