<template>
  <section class="flex items-center space-x-10 relative">
    <div class="w-full relative">
      <div class="absolute text-right right-[20rem] w-[80%]">
        <div class="leading-7">
          <h1 class="text-[#BA2B33] text-[30px] font-[700] uppercase">Step-2</h1>
          <h1 class="text-[#000000] text-[25px] font-[700]">Enter Your Car Details </h1>
        </div>
        <p class="text-[#747474]">
          Your VIN can most frequently be found on the driver-side interior dash, or inside the driver-side door post
        </p>
      </div>
      <div class="px-10 pt-16 pb-6 mt-5">
        <img class="w-full" src="@/assets/images/onboarding-steps-car.png" alt="">
      </div>
      <p class="text-[#747474] ml-36">
        You can also find your VIN on your insurance card as part of the details listed or within your vehicle documents
      </p>
      <div class="p-16 border-r-[8px] border-t-[8px] border-[#B42830] w-[300px] h-[250px] absolute top-2 right-0"></div>
      <div class="border-l-[8px] border-b-[8px] border-[#B42830] w-[50px] h-[100px] absolute bottom-2 left-20"></div>
    </div>

    <div class="w-full">
      <div class="w-[70%] absolute top-0">
        <h1 class="font-[700] uppercase text-xl">Add Details</h1>
        <p class="text-[#747474]">Add the Make, Model, Year, License Plate, Mileage & Nickname</p>

        <!-- Input fields for vehicle details -->
        <div class="flex space-x-3 mt-4 pb-2">
          <input v-model="vehicleData.make" readonly type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Make">
          <input v-model="vehicleData.license_plate" type="text" class="border px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="License Plate"
            :class="{ 'border-red-500 border-2': emptyFields.includes('license_plate') }"
            required
            @input="removeEmptyField('license_plate')">
        </div>

        <div class="flex space-x-3 pb-2">
          <input v-model="vehicleData.model" readonly type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Model">
          <input v-model="vehicleData.mileage" type="text" class="border px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Mileage"
            :class="{ 'border-red-500 border-2': emptyFields.includes('mileage') }"
            required
            @input="removeEmptyField('mileage')">
        </div>

        <div class="flex space-x-3 pb-2">
          <input v-model="vehicleData.year" readonly type="text" class="border-[1px] px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Year">
          <input v-model="vehicleData.nickname" type="text" class="border px-4 p-3 w-full outline-none border-[#989898] rounded-lg placeholder:text-[#808080]" placeholder="Nickname"
            :class="{ 'border-red-500 border-2': emptyFields.includes('nickname') }"
            required
            @input="removeEmptyField('nickname')">
        </div>

        <div class="flex space-x-3">
          <div class="w-full"></div>
          <div class="w-full">
            <button @click.prevent="goToNext" :disabled="processing" class="hover-btn text-xl text-center w-full p-2 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
              {{ processing ? 'Please Wait...' : 'Save' }}
            </button>
            <!-- Back to Step One (VIN input) -->
            <button @click="goToPrevious" class="w-full text-right">
              Back to VIN Input
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const emptyFields = ref([]);
const responseMessage = ref('');
const processing = ref(false);
const vehicleData = reactive({
  vin: '',
  make: '',
  model: '',
  year: '',
  license_plate: '',
  mileage: '',
  nickname: ''
});

const vId = localStorage.getItem('vId');

const getVehicleData = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'vehicle-id': vId
  };

  try {
    const response = await axios.get(`${apiUrl}/vehicles/me`, { headers });
    const getVehicle = response.data.data.vehicle;
    if (getVehicle) {
      vehicleData.vin = getVehicle.vin || '';
      vehicleData.make = getVehicle.make || '';
      vehicleData.model = getVehicle.model || '';
      vehicleData.year = getVehicle.year || '';
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getVehicleData();
});

const removeEmptyField = (fieldName) => {
  const index = emptyFields.value.indexOf(fieldName);
  if (index !== -1 && vehicleData[fieldName].trim() !== "") {
    emptyFields.value.splice(index, 1);
  }
};

const getCookie = (name) => {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
};

const userId = getCookie('user-id');

const validateData = async () => {
  const headers = { 'user-id': userId, 'Content-Type': 'application/json' };
  const data = {
    vin: vehicleData.vin,
    license_plate: vehicleData.license_plate,
    mileage: vehicleData.mileage,
    nickname: vehicleData.nickname
  };

  try {
    const response = await axios.post(`${apiUrl}/vehicles/save-vehicle-details`, data, { headers });
    if (response.data.success) {
      console.log('Vehicle details updated successfully');
      emit('next');
    } else {
      console.error('Failed to update vehicle details');
      responseMessage.value = 'Failed to update vehicle details. Please try again.';
    }
  } catch (error) {
    responseMessage.value = 'There was an error saving the vehicle details. Please try again.';
  } finally {
    processing.value = false;
  }
};

const emit = defineEmits(['previous', 'next']);

const goToPrevious = () => {
  emit('previous');
};

const goToNext = async () => {
  if (!vehicleData.license_plate.trim() || !vehicleData.mileage.trim() || !vehicleData.nickname.trim()) {
    if (!vehicleData.license_plate.trim()) emptyFields.value.push('license_plate');
    if (!vehicleData.mileage.trim()) emptyFields.value.push('mileage');
    if (!vehicleData.nickname.trim()) emptyFields.value.push('nickname');
    responseMessage.value = 'Please fill in all required fields';
    return;
  }
  processing.value = true;

  try {
    await validateData();
    emit('next'); 
  } catch (error) {
    responseMessage.value = 'There was an error processing the data. Please try again.';
  } finally {
    processing.value = false;
  }
};

</script>