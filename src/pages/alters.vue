<template>
    <section>
        <header class="flex justify-between px-6 py-4">
            <div class="flex items-center space-x-12">
                <router-link :to="{name : 'Dashboard'}" class="w-[150px]">
                    <img src="@/assets/images/logo.svg" alt="">
                </router-link>
                <div class="">
                    <h1 class="text-[30px] font-[700]">Alerts</h1>
                    <p><span class="text-[#989898]"></span>   {{breadcrumbText}} </p> 
                </div>
            </div>
            <div class="flex items-center space-x-4">
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
                <div class="bg-[#E8E8E8] border-[1px] p-1 border-[#B9B9B9] rounded-lg relative">
                  <img v-if="userData.photoUrl" class="w-10 h-10" :src="userData.photoUrl" alt="">
                  <img v-else class="w-10 h-10" src="@/assets/images/default.jpg" alt=""> 
                      <div class="bg-[#D63D4A] rounded-full w-4 h-4 text-[14px] absolute top-0 -right-2 border-2 border-white text-center text-white"></div>             
                </div>
            </div>
        </header>
        <div class="mt-2 px-6">
            <!-- Tabs -->
            <div class="bg-[#F3E8E9] w-full p-1.5 rounded-xl flex space-x-3">
              <div
                class="hover-btn w-[232px] text-center"
                :class="[
                  selectedTab === 'alterDashboard'
                    ? 'bg-[#D63D4A] text-[#FFFFFF] font-[600]'
                    : 'bg-[#FFFFFF] text-[#000]',
                  'cursor-pointer p-3 px-6 rounded-xl font-[400] uppercase hover:bg-[#D63D4A] hover:text-[#FFFFFF]',]"
                @click="selectTab('alterDashboard')">
                Alerts Dashboard
              </div>
              <div
                class="hover-btn w-[190px] text-center"
                :class="[
                  selectedTab === 'alterSettings'
                    ? 'bg-[#D63D4A] text-[#FFFFFF] font-[600]'
                    : 'bg-[#FFFFFF] text-[#000]',
                  'cursor-pointer p-3 px-6 rounded-xl font-[400] uppercase hover:bg-[#D63D4A] transition-all duration-150 hover:text-[#FFFFFF]', ]"
                @click="selectTab('alterSettings')">
                Alerts Settings
              </div>
            </div>
            <div>
              <component :is="currentComponent" />
            </div>
          </div>
    </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import alterDashboard from '@/views/Alters/alterDashboard.vue'
import alterSettings from '@/views/Alters/alterSettings.vue';
import axios from 'axios';
import { useApi } from '@/components/api/useApi';
const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const userData = reactive({
    photoUrl: '',
});

const route = useRoute()
const router = useRouter()
const selectedTab = ref('')

const updateSelectedTabFromQuery = () => {
  const tab = route.query.tab || 'alterDashboard'
  selectedTab.value = tab
}
const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
};
const userId = getCookie('user-id')
const getUserData = async () => {
  const headers = {
    'user-id' : userId,
    'Content-Type' : 'application/json'
  };

  try {
    const response = await axios.get(`${apiUrl}/users/me`, { headers });

    const getUser = response.data.data.data;
    if (getUser) {
      userData.photoUrl = getUser.photo || ''
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  updateSelectedTabFromQuery();
  getUserData();
})

const selectTab = (tab) => {
  selectedTab.value = tab
  router.push({ query: { ...route.query, tab: tab } })
}

const currentComponent = computed(() => {
  switch (selectedTab.value) {
    case 'alterDashboard':
      return alterDashboard
    case 'alterSettings':
      return alterSettings
    default:
      return null
  }
})

const breadcrumbText = computed(() => {
    switch (selectedTab.value) {
      case 'alterDashboard':
        return 'Home / Alerts / Alerts Dashboard'
      case 'alterSettings':
        return 'Home / Alerts / Alerts Settings'
      default:
        return 'Home / Alerts'
    }
})
</script>