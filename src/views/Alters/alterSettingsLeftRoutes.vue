<template>
  <section class="flex items-start 2xl:space-x-10 space-x-6 mt-3">
    <div class="screen-height w-[400px] max-h-[70vh] overflow-y-auto pr-3">
          <div
            class=""
            :class="[
              selectedTab === 'speed'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('speed')">
           <div class="flex items-center space-x-6">
            <div>
                <img src="@/components/icons/speedo-meter.svg" alt="">
            </div>
            <div class="uppercase">Speed</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'lockUnlock'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('lockUnlock')">
           <div class="flex items-center space-x-6">
            <div>
                <img src="@/components/icons/lock-unlock.svg" alt="">
            </div>
            <div>Lock/Unlock</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'kill'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('kill')">
           <div class="flex items-center space-x-6">
            <div>
                <img src="@/components/icons/kill.svg" alt="">
            </div>
            <div>Kill</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'impactDetection'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('impactDetection')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/impact-direction.svg" alt="">
            </div>
            <div>Impact Detection</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'rapidAcceleration'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('rapidAcceleration')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/rapid.svg" alt="">
            </div>
            <div>Rapid Accelerationn</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'hardBreaking'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('hardBreaking')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/hard-breaking.svg" alt="">
            </div>
            <div>Hard Breaking</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'fuelLevel'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('fuelLevel')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/fuel-red.svg" alt="">
            </div>
            <div>Fuel Level %</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'battery'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('battery')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="" src="@/components/icons/rotate-battery.svg" alt="">
            </div>
            <div>Battery</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'impounded'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('impounded')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/impounded.svg" alt="">
            </div>
            <div>Impounded</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'diagnostic'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('diagnostic')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/diagnostic-tube.svg" alt="">
            </div>
            <div>Diagnostic Trouble Code </div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'trips'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('trips')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/trip-start.svg" alt="">
            </div>
            <div>Trips </div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'fuelEconomy'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('fuelEconomy')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/fuel-red.svg" alt="">
            </div>
            <div>Fuel Economy</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'idleTime'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('idleTime')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/idle-time.svg" alt="">
            </div>
            <div>Idle Time</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'geoFence'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('geoFence')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/location.svg" alt="">
            </div>
            <div>Geo-Fence</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'curfews'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('curfews')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/curfews.svg" alt="">
            </div>
            <div>Curfews</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'offRent'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('offRent')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/off-rent.svg" alt="">
            </div>
            <div>Off Rent Mileage</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'nationalWeather'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('nationalWeather')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/national-weather.svg" alt="">
            </div>
            <div>National Weather Service</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'tampering'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('tampering')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/tampering.svg" alt="">
            </div>
            <div>Tampering</div>
           </div>
          </div>
          <div
            class=""
            :class="[
              selectedTab === 'maintenanceAlert'
                ? 'bg-[#F3E8E9] text-[#D63D4A] font-[600] border-[1px] border-[#D63D4A]'
                : 'bg-[#F9F9F9] text-[#000] border-[1px]',
              'hover-btn w-full cursor-pointer p-2.5 rounded-lg font-[400] uppercase hover:bg-[#F3E8E9] hover:text-[#D63D4A] hover:font-[600] hover:border-[1px] hover:border-[#D63D4A] transition duration-150',]"
            @click="selectTab('maintenanceAlert')">
           <div class="flex items-center space-x-6">
            <div class="">
                <img class="h-[28px]" src="@/components/icons/maintenance-alert.svg" alt="">
            </div>
            <div>Maintenance Alert</div>
           </div>
          </div>
      </div>
      <div class="w-full">
        <component :is="currentComponent" />
      </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import speed from '@/components/layout/alterSettingsInnerViews/speed.vue';
import lockUnlock from '@/components/layout/alterSettingsInnerViews/lock-unlock.vue';
import kill from '@/components/layout/alterSettingsInnerViews/kill.vue';
import impactDetection from '@/components/layout/alterSettingsInnerViews/impactDetection.vue';
import rapidAcceleration from '@/components/layout/alterSettingsInnerViews/rapidAcceleration.vue';
import hardBreaking from '@/components/layout/alterSettingsInnerViews/hardBreaking.vue';
import fuelLevel from '@/components/layout/alterSettingsInnerViews/fuelLevel.vue';
import battery from '@/components/layout/alterSettingsInnerViews/battery.vue';
import impounded from '@/components/layout/alterSettingsInnerViews/impounded.vue';
import diagnostic from '@/components/layout/alterSettingsInnerViews/diagnostic.vue';
import trips from '@/components/layout/alterSettingsInnerViews/trips.vue';
import fuelEconomy from '@/components/layout/alterSettingsInnerViews/fuelEconomy.vue';
import idleTime from '@/components/layout/alterSettingsInnerViews/idleTime.vue';
import geoFence from '@/components/layout/alterSettingsInnerViews/geoFence.vue';
import curfews from '@/components/layout/alterSettingsInnerViews/curfews.vue';
import offRent from '@/components/layout/alterSettingsInnerViews/offRent.vue';
import nationalWeather from '@/components/layout/alterSettingsInnerViews/nationalWeather.vue';
import tampering from '@/components/layout/alterSettingsInnerViews/tampering.vue';
import maintenanceAlert from '@/components/layout/alterSettingsInnerViews/maintenanceAlert.vue';
const route = useRoute()
const router = useRouter()
const selectedTab = ref('')

const updateSelectedTabFromQuery = () => {
  const router = route.query.router = 'speed'
  selectedTab.value = router
}

const selectTab = (tab) => {
  selectedTab.value = tab
}

const currentComponent = computed(() => {
  switch (selectedTab.value) {
    case 'speed':
      return speed
    case 'lockUnlock':
      return lockUnlock
    case 'kill':
      return kill
    case 'impactDetection':
      return impactDetection
    case 'rapidAcceleration':
      return rapidAcceleration
    case 'hardBreaking':
      return hardBreaking
    case 'fuelLevel':
      return fuelLevel
    case 'battery':
      return battery
    case 'impounded':
      return impounded
    case 'diagnostic':
      return diagnostic
    case 'trips':
      return trips
    case 'fuelEconomy':
      return fuelEconomy
    case 'idleTime':
      return idleTime
    case 'geoFence':
      return geoFence
    case 'curfews':
      return curfews
    case 'offRent':
      return offRent
    case 'nationalWeather':
      return nationalWeather
    case 'tampering':
      return tampering
    case 'maintenanceAlert':
      return maintenanceAlert
    default:
      return null
  }
})
onMounted(() => {
  updateSelectedTabFromQuery()
})
</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 10px;
    background-color: #D63D4A;
  
  }
  @media (max-width: 1900px) {
    .screen-height {
      height: 65vh;
    }
    }
</style>
