<template>
    <div v-if="showPopup">
        <ResendOTP />
       </div>
       <div v-if="successfullOtp">
        <SuccessOTP />
       </div>
    <section class="flex items-center justify-center min-h-screen relative">
        <div class="2xl:w-[35%] w-1/2 container mx-auto">
            <div class="logo pb-6 flex justify-center">
                <img src="@/assets/images/logo.svg" alt="">
              </div>
            <h1 class="text-[#b92a32] 2xl:text-[40px] text-[30px] text-center uppercase font-[700]">Verify</h1>
            <p class="text-[#000000] font-[600] pb-6 text-center">Your code was sent to you via email</p>
             <div class="px-[5rem]">
                <div class="pb-6 w-full flex space-x-3">
                    <div v-for="(digit, index) in codeDigits" :key="index" class="inline-block w-[80px] sm:h-[70px] text-center">
                        <input v-model="codeDigits[index]" type="text"
                            class="border border-[#989898] w-full outline-none  text-center h-[70px] rounded-lg font-[600] text-[#808080]"
                            :class="{ 'border-red-500 border-2': emptyFields.includes('otp') }"
                            maxlength="1" @paste="handlePaste($event, index)"  
                            @input="handleInput($event, index)"
                            @keydown="handleKeyDown($event, index)">
                    </div>
                </div>
                <div class="pb-2">
                    <button @click="verifyOTP" class="submit-btn hover-btn text-center  w-full p-3 rounded-xl text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] text-xl uppercase">Verify Your Code</button>
                </div>
                <div class="text-center">
                    <span class="text-[#383838] font-[400]">Didn’t receive code? </span> <router-link :to="{name : ''}" class="text-[#ba2b33] font-[400]">Request Again</router-link>
                </div>
                <div v-if="responseMessage" class="absolute w-[500px] text-center top-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
                    <p class="text-lg">{{ responseMessage }}</p>
                </div>
             </div>
             <div class="flex space-x-2 text-[48px] text-[#ba2b33] justify-center">
                <div> {{ formattedTime }} </div>
            </div>
        </div>
    </section>
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white opacity-80 z-50">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted, watch } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useApi } from '../api/useApi';
import ResendOTP from '../layout/popupModels/resendOTP.vue';
import SuccessOTP from '../layout/popupModels/successOTP.vue';
const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const isLoading = ref(false);
const totalSeconds = ref(60 * 10);
const showPopup = ref(false);
const successfullOtp = ref(false);
const showResend = ref(false);
const showVerify = ref(true);
const router = useRouter();
const emptyFields = ref('');
const responseMessage = ref('');
const attemptMessage = ref('');
const codeDigits = ref(['', '', '', '', '', '']);
const incorrectCodeAttempts = ref(0);
const invalidCode = ref(false);

const authToken = localStorage.getItem('token');

const handlePaste = (event, index) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text/plain');
    for (let i = 0; i < pastedText.length && index + i < codeDigits.value.length; i++) {
        codeDigits.value[index + i] = pastedText.charAt(i);
    }
    const lastInputIndex = Math.min(index + pastedText.length, codeDigits.value.length - 1);
    const lastInput = document.querySelectorAll('input[type="text"]')[lastInputIndex];
    if (lastInput) {
        lastInput.focus();
    }
};
const handleInput = (event, index) => {
        const inputElement = event.target;
        const inputLength = inputElement.value.length;
        if (inputLength === 1 && index < codeDigits.value.length - 1) {
            const nextInput = inputElement.parentElement.nextElementSibling.querySelector('input[type="text"]');
            if (nextInput) {
                nextInput.focus();
            }
        }
    };
    const handleKeyDown = (event, index) => {
    if (event.keyCode === 8 || event.key === "Backspace") {
        event.preventDefault();
        codeDigits.value[index] = '';
        if (index > 0) {
            const prevInput = event.target.parentElement.previousElementSibling.querySelector('input[type="text"]');
            if (prevInput) {
                prevInput.focus();
            }
        }
    }
};
const decrementSeconds = () => {
    if (totalSeconds.value > 0) {
        totalSeconds.value--;
    } else {
        showPopup.value = true;
        showResend.value = true;
        showVerify.value = false;
    }
};
const formattedTime = computed(() => {
    const minutes = Math.floor(totalSeconds.value / 60);
    const seconds = totalSeconds.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})


// API Integration for OTP Verification
const verifyOTP = async () => {
    emptyFields.value = [];
    invalidCode.value = false;
    const codeValue = codeDigits.value.join('');
    if(!codeValue) {
        responseMessage.value = "Please fill the OTP fields with sent 6 digit on your email!";
        emptyFields.value.push('otp');
        return;
    }

    try {
        const response = await axios.post(`${apiUrl}/users/verifyOTP`, {
            otpInput: codeValue,
        }, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        });
        incorrectCodeAttempts.value = 0;
        responseMessage.value = 'OTP verified successfully!'
        console.log('OTP verified successfully:', response.data)
        successfullOtp.value = true;
        setTimeout(() => {
            router.replace('/reset-password')
        }, 1000);
    } catch (error) {
        incorrectCodeAttempts.value++
        if(incorrectCodeAttempts.value === 4) {
            showPopup.value = true;
        }
        if (error.response && error.response.status === 400) {
            responseMessage.value = 'Invalid OTP or Expired',
                emptyFields.value.push('otp')
        } else {
            responseMessage.value = 'Something went wrong. Please try again later !';
        }
    }
}

const responseMessageTimeout = ref(null);

watch(responseMessage, (newValue) => {
    clearTimeout(responseMessageTimeout.value);
    responseMessageTimeout.value = setTimeout(() => {
        responseMessage.value = '';
    }, 3000);
});

onUnmounted(() => {
    clearTimeout(responseMessageTimeout.value);
});

onMounted(() => {
    const timeInterval = setInterval(decrementSeconds, 1000);
    return () => clearInterval(timeInterval);
})
</script>

<style scoped>
@media(max-width:1366px){
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