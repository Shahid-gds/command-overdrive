<template>
    <section class="flex justify-between bg-[white] px-6 py-4">
        <div class="flex items-center space-x-12">
            <router-link :to="{name : 'Dashboard'}" class="w-[150px]">
                <img src="@/assets/images/logo.svg" alt="">
            </router-link>
        </div>
        <div class="flex items-center space-x-4">
            <div class="relative">
                <input
                  type="search"
                  class="w-[520px] bg-[#E8E8E8] outline-none p-3 rounded-lg pl-14 placeholder:text-[#7A86A1]"
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
            <router-link :to="{name : 'Alters'}" class="relative">
                <img src="@/components/icons/bell.svg" alt="">
                <div class="bg-[#D63D4A] rounded-full w-5 h-5 text-[14px] absolute bottom-3 left-3 text-center text-white">6</div>
            </router-link>
            <div class="bg-[#E8E8E8] border-[1px] p-1 border-[#B9B9B9] rounded-lg relative">
                <img v-if="userData.photoUrl" class="w-10 h-10" :src="userData.photoUrl" alt="">
                <img v-else class="w-10 h-10" src="@/assets/images/default.jpg" alt="">
                  <div class="bg-[#D63D4A] rounded-full w-4 h-4 text-[14px] absolute top-0 -right-2 border-2 border-white text-center text-white"></div>             
            </div>
            <div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import axios from 'axios';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const userData = reactive({
    photoUrl: '',
});

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
  getUserData();
})
</script>