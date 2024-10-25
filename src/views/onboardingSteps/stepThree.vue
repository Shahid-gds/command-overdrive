<template>
  <section class="flex items-center space-x-10 relative">
    <div class="w-full relative">
      <div class="absolute text-right right-[20rem] w-[80%]">
        <div class="leading-7">
          <h1 class="text-[#BA2B33] text-[30px] font-[700] uppercase">Step-3</h1>
          <h1 class="text-[#000000] text-[25px] font-[700]">Enter Your Car Details </h1>
        </div>
        <p class="text-[#747474]">
          Your VIN can most frequently be found on the driver-side interior dash, or inside the driver-side door post
        </p>
      </div>
      <div class="mt-[7rem] ml-8">
        <img src="@/assets/images/stepThree-img.svg" alt="Car Image">
      </div>
      <div class="absolute bottom-0 left-[15rem] w-full">
        <p class="text-[#747474] ml-36">
          You can also find your VIN on your insurance card as part of the details listed or within your vehicle documents
        </p>
      </div>
      <div class="p-16 border-r-[8px] border-t-[8px] border-[#B42830] w-[300px] h-[250px] absolute top-2 right-0"></div>
      <div class="border-l-[8px] border-b-[8px] border-[#B42830] w-[150px] h-[250px] absolute bottom-2 left-0"></div>
    </div>

    <div class="w-full">
      <div class="w-[70%] absolute top-[15%]">
        <h1 class="font-[700] uppercase text-xl">Link Device</h1>
        <p class="text-[#747474] pb-6">Please enter the SN: 8 digits</p>
        <div class="w-full flex space-x-3">
          <div v-for="(digit, index) in codeDigits" :key="index" class="inline-block w-[50px] text-center">
            <input v-model="codeDigits[index]" type="text"
              class="border-[1.5px] border-[#989898] w-full outline-none  text-center h-[50px] rounded-lg font-[600] text-[#808080]"
              maxlength="1" @paste="handlePaste($event, index)"  
              @input="handleInput($event, index)"
              @keydown="handleKeyDown($event, index)">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const codeDigits = ref(['', '', '', '', '', '', '', '']);
watch(codeDigits, (newVal) => {
  const filled = newVal.every(digit => digit !== '');
  if (filled) {
    emit('ready');
  }
}, { deep: true });

const emit = defineEmits(['ready']);

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
  if (event.keyCode === 8 || event.key === 'Backspace') {
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
