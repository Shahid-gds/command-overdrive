<template>
  <section class="2xl:block hidden">
      <div class="bg-[white] w-full pt-4 relative">
     <div class="flex space-x-5 border-b-[1px] pb-[0.6rem] border-[#A1A1A1]">
        <div class="active-link"
        @click="selectTab('commandTab')"
        :class="[
          selectedTab === 'commandTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
          'cursor-pointer text-center w-[120px] font-[600] uppercase relative'
        ]">
        Command
      </div>

      <div class="active-link"
        @click="selectTab('tripsTab')"
        :class="[
          selectedTab === 'tripsTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
          'cursor-pointer text-center w-[60px] font-[600] uppercase relative'
        ]">
        Trips
      </div>

      <div class="active-link"
        @click="selectTab('informationTab')"
        :class="[
          selectedTab === 'informationTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
          'cursor-pointer text-center w-[130px] font-[600] uppercase relative'
        ]">
        Information
      </div>

      <div class="active-link"
        @click="selectTab('altersTab')"
        :class="[
          selectedTab === 'altersTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
          'cursor-pointer text-center w-[80px] font-[600] uppercase relative'
        ]">
        Alters
      </div>
     </div>
     <div class="bg-[#D63D4A] p-2 absolute -right-[3rem] top-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>          
     </div>
      </div>
      <div class="bg-white h-screen p-4">
        <component :is="currentComponent" />
      </div>
    </section>
    <TransitionGroup name="list" tag="ul" class="relative">
      <div v-if="isOpen" @click="closeOutSideClick" class="fixed inset-0 -z-10 opacity-25"></div>
      <button v-if="!isOpen" class="2xl:hidden absolute top-0 left-0 -z-10 bg-[#D63D4A] p-2  rounded-br-lg" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>          
      </button>
      <div class="bg-white h-screen fixed -z-10" v-if="isOpen">
        <div  class="bg-[white] w-full pt-4 relative">
          <div class="flex space-x-5 border-b-[1px] pb-[0.6rem] border-[#A1A1A1]">
             <div class="active-link"
             @click="selectTab('commandTab')"
             :class="[
               selectedTab === 'commandTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
               'cursor-pointer text-center w-[120px] font-[600] uppercase relative'
             ]">
             Command
           </div>
     
           <div class="active-link"
             @click="selectTab('tripsTab')"
             :class="[
               selectedTab === 'tripsTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
               'cursor-pointer text-center w-[60px] font-[600] uppercase relative'
             ]">
             Trips
           </div>
     
           <div class="active-link"
             @click="selectTab('informationTab')"
             :class="[
               selectedTab === 'informationTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
               'cursor-pointer text-center w-[130px] font-[600] uppercase relative'
             ]">
             Information
           </div>
   
           <div class="active-link"
             @click="selectTab('altersTab')"
             :class="[
               selectedTab === 'altersTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
               'cursor-pointer text-center w-[80px] font-[600] uppercase relative'
             ]">
             Alters
           </div>
          </div>
          <div class="bg-[#D63D4A] p-2 absolute -right-[3rem] top-0" @click="toggleMenu">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>          
          </div>
           </div>
           <div class="bg-white h-screen p-4">
            <component :is="currentComponent" />
          </div>
      </div>
    </TransitionGroup>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import commandTab from '@/components/layout/commandTabs.vue/commandTab.vue';
import tripsTab from '@/components/layout/commandTabs.vue/tripsTab.vue';
import informationTab from '@/components/layout/commandTabs.vue/informationTab.vue';
import altersTab from '@/components/layout/commandTabs.vue/altersTab.vue';


const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeOutSideClick = () => {
  isOpen.value = false
}
const route = useRoute()
const router = useRouter()

const selectedTab = ref('')

const updateSelectedTabFromQuery = () => {
const tab = route.query.tab || 'tripsTab'
selectedTab.value = tab
}

onMounted(() => {
updateSelectedTabFromQuery()
})

const selectTab = (tab) => {
selectedTab.value = tab
router.push({ path: '/command', query: { tab } })
}


const currentComponent = computed(() => {
switch (selectedTab.value) {
  case 'commandTab':
    return commandTab
  case 'tripsTab':
    return tripsTab
  case 'informationTab':
    return informationTab
  case 'altersTab':
    return altersTab
  default:
    return null
}
})
</script>
<style scoped>
.active-link {
  position: relative;
}

.active-link::after {
  content: '';
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  height: 5px;
  background: #D63D4A;
  width: 0%;
  margin: auto;
  transition: width 0.5s;
}

.active-link:hover::after {
  width: 100%;
}

.active-route::after {
  width: 100%;
  transition: width 0.5s;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}
</style>