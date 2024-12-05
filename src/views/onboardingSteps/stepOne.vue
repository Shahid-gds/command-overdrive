<template>
  <section class="flex items-center space-x-10">
    <div class="w-full relative">
      <div class="absolute text-right right-[20rem] w-[80%]">
        <div class="leading-7">
          <h1 class="text-[#BA2B33] text-[30px] font-[700] uppercase">Step-1</h1>
          <h1 class="text-[#000000] text-[25px] font-[700]">Enter Your VIN</h1>
        </div>
        <p class="text-[#747474]">
          Your VIN can most frequently be found on the driver-side interior dash, or inside the driver-side door post.
        </p>
      </div>
      <div class="px-10 pt-16 pb-6 mt-5">
        <img class="w-full" src="@/assets/images/onboarding-steps-car.png" alt="">
      </div>
      <p class="text-[#747474] ml-36">
        You can also find your VIN on your insurance card as part of the details listed or within your vehicle documents.
      </p>
      <div class="p-16 border-r-[8px] border-t-[8px] border-[#B42830] w-[300px] h-[250px] absolute top-2 right-0"></div>
      <div class="border-l-[8px] border-b-[8px] border-[#B42830] w-[50px] h-[100px] absolute bottom-2 left-20"></div>
    </div>

    <div class="w-full">
      <div class="w-full">
        <h1 class="font-[700] uppercase text-xl">Add Vehicle</h1>
        <p class="text-[#747474]">Type your VIN</p>
        <input type="text" class="border mt-4 px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="VIN"
          :class="{ 'border-red-500 border-2': emptyFields.includes('vin') }"
          v-model="vin"
          maxlength="17"
          required
          @input="removeEmptyField('vin')">
        <div class="pt-2">
          <button
            @click.prevent="goToNext" :disabled="processing"
            class="hover-btn text-xl text-center w-full p-3 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
            {{ processing ? 'Please Wait...' : 'Next' }}
          </button>
        </div>
        <div class="h-8">
          <p class="text-lg font-[500] text-red-500 text-center">{{ responseMessage }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const vin = ref('');
const emptyFields = ref([]);
const responseMessage = ref('');
const processing = ref(false);

const removeEmptyField = (fieldName) => {
  const index = emptyFields.value.indexOf(fieldName);
  if (index !== -1 && fieldName === "vin" && vin.value.trim() !== "") {
    emptyFields.value.splice(index, 1);
  }
};

const emit = defineEmits(['next']);

const isValidVINLength = (vin) => vin.length === 17;
const isValidVINFormat = (vin) => /^[A-HJ-NPR-Z0-9]{17}$/.test(vin);

const validateVIN = async () => {
  if (!isValidVINLength(vin.value)) {
    responseMessage.value = 'VIN must be exactly 17 characters long.';
    return;
  }

  if (!isValidVINFormat(vin.value)) {
    responseMessage.value = 'Invalid VIN format. Please check and try again.';
    return;
  }

  try {
    processing.value = true;
    responseMessage.value = '';
    const response = await axios.post(`${apiUrl}/vehicles/save-vin`, 
    { vin: vin.value });
    
    if (response.data.status === 'success') {
      const vehicleId = response.data.data._id;
      localStorage.setItem('vId', vehicleId); 
      emit('next');
    } else {
      responseMessage.value = response.data.message || 'Invalid VIN. Please check and try again.';
    }
  } catch (error) {
    console.error('Error during API request:', error);
    
    if (error.response && error.response.data && error.response.data.message === "Vehicle with this VIN already exists.") {
      responseMessage.value = 'Vehicle with this VIN already exists.';
    } else {
      responseMessage.value = 'An error occurred. Please try again later.';
    }
  } finally {
    processing.value = false;
  }
};

const goToNext = () => {
  if (vin.value.trim() === '') {
    emptyFields.value.push('vin');
    responseMessage.value = 'Please enter a VIN.';
    return;
  }
  validateVIN();
};
</script>
