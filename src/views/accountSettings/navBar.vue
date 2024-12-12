<template>
    <section class="flex justify-between">
        <div class="flex items-center space-x-12">
            <router-link :to="{name : 'Dashboard'}" class="w-[150px]">
                <img src="@/assets/images/logo.svg" alt="">
            </router-link>
            <div class="">
                <h1 class="text-[30px] font-[700]">Settings</h1>
                <p><span class="text-[#989898]">Home / Settings / </span>  Account Settings </p> 
            </div>
        </div>
        <div class="flex items-center space-x-4">
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
       <div class="relative">
        <div @click="toggleUserDropdown" class="bg-[#E8E8E8] cursor-pointer border-[1px] p-1 border-[#B9B9B9] rounded-lg relative">
          <img v-if="userData.photoUrl" class="w-10 h-10" :src="userData.photoUrl" alt="">
        <img v-else class="w-10 h-10" src="@/assets/images/default.jpg" alt=""> 
            <div class="bg-[#D63D4A] rounded-full w-4 h-4 text-[14px] absolute top-0 -right-2 border-2 border-white text-center text-white"></div>             
      </div>
      <transition name="dropdown">
        <ul v-if="isUserDropdownOpen" class="absolute mt-1 right-0 w-[180px] bg-white border border-gray-300 rounded-xl z-50">
            <li @click="logout" class="p-3 cursor-pointer hover:bg-gray-200">Logout</li>
        </ul>
    </transition>
       </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import axios from 'axios';
import { useApi } from '@/components/api/useApi';
import { useRouter } from 'vue-router';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();
const router = useRouter();

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
});

const isUserDropdownOpen = ref(false);

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
};
const logout = () => {
  document.cookie = 'persist:auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  document.cookie = 'user-id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  router.push({ name: 'Login' });
};
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  }
</style>