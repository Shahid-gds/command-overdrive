<template>
    <section class="">
      <TransitionGroup name="list" tag="ul" >
        <div v-if="isOpenLarge" class="fixed bg-white">
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
               @click="selectTab('aletrsTab')"
               :class="[
                 selectedTab === 'aletrsTab' ? 'text-[#000000] font-[600] active-route' : 'text-[#929292] font-[400]',
                 'cursor-pointer text-center w-[80px] font-[600] uppercase relative'
               ]">
               Alerts
             </div>
            </div>
            <div class="bg-[#D63D4A] p-2 absolute -right-[3rem] top-0 cursor-pointer" @click="toggleMenuLarge">
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
      </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import commandTab from '@/components/layout/commandTabs.vue/commandTab.vue';
import tripsTab from '@/components/layout/commandTabs.vue/tripsTab.vue';
import informationTab from '@/components/layout/commandTabs.vue/informationTab.vue';
import aletrsTab from '@/components/layout/commandTabs.vue/altersTab.vue';

const isOpenLarge = ref(true)
  const toggleMenuLarge = () => {
    isOpenLarge.value = !isOpenLarge.value
  }
const route = useRoute()
const router = useRouter()

const selectedTab = ref('')

const updateSelectedTabFromQuery = () => {
  const tab = route.query.tab || 'commandTab'
  selectedTab.value = tab
}

onMounted(() => {
  updateSelectedTabFromQuery()
})

watch(route, () => {
  isOpenLarge.value = true;
});

const selectTab = (tab) => {
  selectedTab.value = tab
  router.push({ query: { ...route.query, tab: tab } })
}


const currentComponent = computed(() => {
  switch (selectedTab.value) {
    case 'commandTab':
      return commandTab
    case 'tripsTab':
      return tripsTab
    case 'informationTab':
      return informationTab
    case 'aletrsTab':
      return aletrsTab
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
    transform: translateX(-10px);
  }
</style>