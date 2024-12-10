<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <router-link :to="{name : 'Dashboard'}">
            <img src="@/assets/images/logo.svg" alt="Logo" class="h-10" />
          </router-link>
        </div>
        <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
          Contact us
        </button>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      <section v-if="isSaveCard" class="bg-white shadow-lg p-6 rounded-lg flex-1 w-full">
        <div class="checkbox-wrapper-45 bg-[#E8E8E8] flex items-center p-10 rounded-lg shadow-lg">
          <input 
            id="cbx-45" 
            type="checkbox" 
            v-model="isChecked45"
            @change="handleCheckboxChange('45')"  >
          <label class="cbx" for="cbx-45">
            <div class="flip">
              <div class="front"></div>
              <div class="back">
                <svg width="16" height="14" viewBox="0 0 16 14">
                  <path d="M2 8.5L6 12.5L14 1.5"></path>
                </svg>
              </div>
            </div>
          </label>
          <label class="text-[#000000] ml-3 cursor-pointer text-[16px]" for="cbx-45">Use Name On Card <span class="font-[600] text-[#D63D4A]">{{ cardName }}</span> & card number ending in <span class="font-[600] text-[#D63D4A]">{{ lastfourDigits }}</span></label>
        </div>
         <div class="checkbox-wrapper-45 mt-10 bg-[#E8E8E8] flex items-center p-10 rounded-lg shadow-lg">
          <input 
            id="cbx-46" 
            type="checkbox"    
            v-model="isChecked46"
            @change="handleCheckboxChange('46')" />
          <label class="cbx" for="cbx-46">
            <div class="flip">
              <div class="front"></div>
              <div class="back">
                <svg width="16" height="14" viewBox="0 0 16 14">
                  <path d="M2 8.5L6 12.5L14 1.5"></path>
                </svg>
              </div>
            </div>
          </label>
          <label class="text-[#000000] ml-3 cursor-pointer text-[16px]" for="cbx-46">Add New Card</label>
        </div>
      </section>
      
      <section v-else class="flex justify-center items-center bg-white shadow-lg p-6 rounded-lg flex-1 w-full">
        <div>
          <div class="flex justify-center pb-6">
            <img class="w-1/3" src="@/assets/images/payment-card.png" alt="" />
          </div>
          <h1 class="text-[25px] text-center">No Saved Card</h1>
          <p class="text-center text-[#636363]">Looks Like you haven't saved any card yet, <br />click on the button to add the first one</p>
          <div class="flex justify-center mt-4">
            <button @click="openAddNewCardModal" class="hover-btn text-white p-3 px-8 rounded-lg bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
              Add New Card
            </button>
          </div>
        </div>
      </section>

      <!-- Plan Summary -->
      <section class="bg-white shadow-lg p-6 rounded-lg w-1/2">
        <h3 class="text-lg font-semibold mb-4">Due Today</h3>
        <div class="text-sm text-gray-600 mb-4">
          <p>Partial Billing Period</p>
          <p>Dec 6th Dec 13th 2024</p>
        </div>
        <h3 class="text-lg font-semibold">Your Plan</h3>
        <p class="mb-4">Basic</p>
        <ul class="space-y-2">
          <li class="flex justify-between">
            <span>Monthly Data Subscription</span>
            <span>$10.00</span>
          </li>
          <li class="flex justify-between">
            <span>Tax</span>
            <span>$00</span>
          </li>
        </ul>
        <div class="border-t mt-4 pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>$10.00</span>
        </div>
        <div class="text-sm text-gray-600 my-2">
          <p>Renews: Jan 01, 2025</p>
        </div>

        <h3 class="text-lg font-semibold mt-4">
          Your original billing date will remain the same.
        </h3>
        <p>
          The Monthly Data Subscription is a recurring charge to your card. You
          can cancel your Monthly Data Subscription at any time. Cancelled
          devices will remain active until the end of the billing period in
          which they were cancelled.
        </p>
        <button v-if="isSaveCard" class="hover-btn text-lg mt-10 text-center w-full p-3 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
          Make Payment
        </button>
        <button v-else class="hover-btn opacity-50 cursor-not-allowed text-lg mt-10 text-center w-full p-3 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
          Make Payment
        </button>
      </section>
    </main>

    <!-- Modal Component -->
    <addNewCard :show="showAddNewCardModal" :onClose="closeNewCardModal" @cardAdded="handleCardAdded" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import addNewCard from "../popupModels/addNewCard.vue";


const showAddNewCardModal = ref(false);
const isSaveCard = ref(false);
const cardName = ref("");
const lastfourDigits = ref ("");
const isChecked45 = ref(true);
const isChecked46 = ref(false); 

const openAddNewCardModal = () => {
  showAddNewCardModal.value = true;
};

const closeNewCardModal = () => {
  showAddNewCardModal.value = false;
  isChecked46.value = false;
  isChecked45.value = true
};

const handleCardAdded = (cardInfo) => {
  cardName.value = cardInfo.name;
  lastfourDigits.value = cardInfo.numericInput.slice(-4);
  isSaveCard.value = true;
}

const handleCheckboxChange = (checkboxId) => {
  if (checkboxId === '45' && isChecked45.value) {
    isChecked46.value = false;
  } else if (checkboxId === '46' && isChecked46.value) {
    isChecked45.value = false; 
    showAddNewCardModal.value = true;
  }
};
</script>

<style scoped>
.checkbox-wrapper-45 {
  position: relative;
}

.checkbox-wrapper-45 input[type="checkbox"] {
  display: none;
  visibility: hidden;
}
.checkbox-wrapper-45 .cbx {
  -webkit-perspective: 30;
  perspective: 30;
  display: inline-block;
  border: 2px solid #D63D4A;
  background: #e8e8eb;
  border-radius: 4px;
  transform: translate3d(0, 0, 0);
  cursor: pointer;
  transition: all 0.3s ease;
}
.checkbox-wrapper-45 .cbx:hover {
  border-color: #D63D4A;
}
.checkbox-wrapper-45 .flip {
  display: block;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  position: relative;
  width: 25px;
  height: 25px;
}
.checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx {
  border-color: #D63D4A;
}
.checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx .flip {
  transform: rotateY(180deg);
}
.checkbox-wrapper-45 .front,
.checkbox-wrapper-45 .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  border-radius: 2px;
}
.checkbox-wrapper-45 .front {
  background: #fff;
  z-index: 1;
}
.checkbox-wrapper-45 .back {
  transform: rotateY(180deg);
  background: #D63D4A;
  text-align: center;
  color: #fff;
  line-height: 25px;
  box-shadow: 0 0 0 1px #D63D4A;
}
.checkbox-wrapper-45 .back svg {
  margin-top: 5px;
  margin-left: 5px;
  fill: none;
}
.checkbox-wrapper-45 .back svg path {
  stroke: #fff;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
