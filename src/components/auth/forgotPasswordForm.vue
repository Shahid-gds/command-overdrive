<template>
  <section v-if="!emailVerification" class="flex items-center justify-center min-h-screen">
    <div class="2xl:w-[35%] w-1/2 container mx-auto">
      <div class="logo pb-6 flex justify-center">
        <img src="@/assets/images/logo.svg" alt="" />
      </div>
      <div class="sign-up text-center">
        <h1
          class="text-[#B92A32] 2xl:text-[40px] text-[30px] font-[700] uppercase">
          Forgot Your Password
        </h1>
        <p class="text-[#000000] font-[500] pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, soluta.</p>
      </div>
    
      <form action="" class="sing-up-form w-full">
        <div class="pb-4">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            class="w-full border border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]"
            :class="{ 'border-red-500 border-2': emptyFields.includes('email') }"
            v-model="email"
            required
            @input="
              removeEmptyField('email');
              email = email.toLocaleLowerCase(); "
            @keypress.enter="triggerCreateAccount" >
        </div>
       
        <div class="pb-4">
          <button ref="createAccountButton" @click.prevent="forgotPassword" :disabled="processing"
            class="submit-btn hover-btn text-xl text-center w-full p-3.5 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
            {{ processing ? 'Please Wait...' : 'Send Email' }}
          </button>
        </div>
        <div class="h-8">
          <p class="text-lg font-[600] text-red-500 text-center">{{ responseMessage }}</p>
      </div>
      </form>
    </div>
  </section>
  <div v-else-if="emailVerification">
    <codeVerification />
</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import codeVerification from './resetOTPVerification.vue';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const email = ref('');
const responseMessage = ref('');
const processing = ref(false);
const emailVerification = ref(false);
const emptyFields = ref([]);


const enterButton = ref(null);

const triggerButton = () => {
    if (enterButton.value) {
        enterButton.value.click();
    }
}

emptyFields.value = [];

const removeEmptyField = (fieldName) => {
    const index = emptyFields.value.indexOf(fieldName);
    if (index !== -1 && fieldName === 'email' && email.value.trim() !== '') {
        emptyFields.value.splice(index, 1);
    }
}
const forgotPassword = async () => {
    if (!email.value) {
        responseMessage.value = "Please fill in the required field";
        if (!email.value) emptyFields.value.push('email');
        return;
    }

    if (!email.value.includes('@')) {
        responseMessage.value = "Please enter a valid email address! '@'";
        emptyFields.value.push('email');
        return;
    }

    if (!email.value) {
        responseMessage.value = 'Email not found!';
        return;
    }
    try {
        processing.value = true;
        const response = await axios.post(`${apiUrl}/users/forgotPassword`, {
            email: email.value
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        responseMessage.value = 'OTP sent to your email. Please check your email!';
        console.log('Email sent', response.data);
        localStorage.setItem('token', response.data.resetToken);
        emailVerification.value = true;
    } catch (error) {
        if (error.response && error.response.status === 500) {
            responseMessage.value = "Too many attempts. Please try again after 1 hour.";
        } else if (error.response && error.response.status === 404) {
            responseMessage.value = 'There is no user with that email address';
        } else {
            responseMessage.value = "Something went wrong. Please try again later!";
        }
    } finally {
        processing.value = false;
    }
}



</script>

<style scoped>
@media (max-width: 1366px) {
  .logo img {
    width: 150px;
  }
  .logo {
    padding-bottom: 4px;
    margin-top: 10px;
  }
  .sign-up h1 {
    font-size: 25px;
  }
  .sign-up p {
    padding-bottom: 4px;
  }
  .with-google button {
    padding: 8px;
  }
  .with-google {
    padding-bottom: 10px;
  }
  .sing-option span {
    font-size: 16px;
  }
  .btn-text {
    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .sing-up-form input {
    padding: 8px;
  }
  .submit-btn {
    padding: 8px;
    font-size: 16px;
  }
}
</style>
