<template>
    <section class="flex items-center justify-center min-h-screen">
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
                            class="border-[1.5px] border-[#989898] w-full outline-none  text-center h-[70px] rounded-lg font-[600] text-[#808080]"
                            maxlength="1" @paste="handlePaste($event, index)"  
                            @input="handleInput($event, index)"
                            @keydown="handleKeyDown($event, index)">
                    </div>
                </div>
                <div class="pb-2">
                    <router-link :to="{name: 'Authentication'}" class="submit-btn hover-btn text-center  w-full p-3 rounded-xl text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] text-xl uppercase">Verify Your Code</router-link>
                </div>
                <div class="text-center">
                    <span class="text-[#383838] font-[400]">Didn’t receive code? </span> <router-link :to="{name : ''}" class="text-[#ba2b33] font-[400]">Request Again</router-link>
                </div>
             </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const codeDigits = ref(['1', '2', '3', '4', '5', '6']);

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