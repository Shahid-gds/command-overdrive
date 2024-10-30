
<template>
    <section class="flex items-center justify-center min-h-screen">
        <div class="2x:w-[30%] w-1/2 container mx-auto">
            <div class="logo pb-6 flex justify-center">
                <img src="@/assets/images/logo.svg" alt="">
              </div>
            <h1 class="text-[#b92a32] text-[36px] font-[700] uppercase text-center">Add Authentication</h1>
            <p class="text-[#000000] font-[400] pb-4 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <div class="flex space-x-3 pb-6 justify-center">
                <router-link :to="{name: 'codeVerificatoinTextSms'}"
                    class="py-10 text-center cursor-pointer border-[1.5px] w-[350px] p-3 rounded-xl text-white bg-gradient-to-r from-[#F7AE35] bg-[#BD3334] font-[600] uppercase"
                    @mouseover="imageHoverText = true"
                    @mouseleave="imageHoverText = false">
                    <div class="flex justify-center pb-6">
                        <img class="w-[80px]" :src="imageHoverText ? smsRedWhite : smsRed" alt="" >
                    </div>
                    <p class="font-[700]">Text Message</p>
                </router-link>
                <router-link :to="{name: 'AuthenticationQr'}"
                    class="py-10 text-center cursor-pointer w-[350px] p-3 rounded-xl font-[600] uppercase text-white bg-gradient-to-r from-[#F7AE35] bg-[#BD3334] border-[1.5px]"
                    @mouseover="imageHoverAuth = true"
                    @mouseleave="imageHoverAuth = false" >
                    <div class="flex justify-center pb-6">
                        <img class="w-[80px]" :src="imageHoverAuth ? googleAuthWhite : googleAuth" alt="">
                    </div>
                    <p class="font-[700]">Google Authenticator</p>
                </router-link>
            </div>
            <div class="pb-4 flex justify-center">
                <router-link
                  :to="{ name: '' }"
                  class="hover-btn text-center w-[250px] p-2 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[600] uppercase">
                  Complete Later
                  </router-link>
              </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import smsRed from '@/components/icons/sms-auth.svg';
import smsRedWhite from '@/components/icons/sms-auth.svg';
import googleAuth from '@/components/icons/google-auth.svg';
import googleAuthWhite from '@/components/icons/google-auth.svg';

const imageHoverText = ref(false);
const imageHoverAuth = ref(false);
</script>

<style scoped>
@media(max-width:1280px){
    .logo img {
        width: 150px;
    }
    .logo {
       padding-bottom: 4px;
       margin-top: 10px;
    }
  h1 {
      font-size: 25px;
    }
    .submit-btn {
      padding: 8px;
      font-size: 16px;
    } 
  }
</style>
