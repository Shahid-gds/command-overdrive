<template>
    <div class="min-h-screen bg-gray-100">
      <!-- Header -->
      <header class="bg-white shadow-sm">
        <div
          class="container mx-auto px-4 py-3 flex justify-between items-center"
        >
          <div class="flex items-center">
            <img src="../../../assets/images/logo.svg" alt="Logo" class="h-10" />
          </div>
          <button
            class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Contact us
          </button>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <!-- Payment Form -->
        <section class="bg-white shadow-lg p-6 rounded-lg flex-1 w-full">
          <h2 class="text-xl font-semibold mb-4">Monthly Subscription</h2>
          <p class="text-sm text-gray-600 mb-6">
            We are ready to begin activating Command! Let's setup payment
            information first.
          </p>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                class="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg  focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                placeholder="helloworld@gmail.com"/>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Name on card</label>
              <input
                type="text"
                class="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                placeholder="Joshua Carr" />
            </div>
            <div class="flex gap-4">
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Card number</label
                >
                <input
                  class="border-2 w-full rounded-lg p-3 focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                  type="text"
                  placeholder="XXXX XXXX XXXX XXX"
                  v-model="numericInput"
                  @input="filterNonNumeric"
                  :maxlength="max"
                />
              </div>
              <div class="w-20">
                <label class="block text-sm font-medium text-gray-700">CVV</label>
                <input type="password"
                  class="border-2 w-full rounded-lg p-3  focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                  v-model="cvvInput"
                  @input="filterCvvNumeric"
                  maxlength="4"
                  placeholder="••••" />
              </div>
              <div class="w-24">
                <label class="block text-sm font-medium text-gray-700"
                  >Expiry</label>
                <input
                  class="border-2 w-full rounded-lg p-3  focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                  v-model="expirationDate"
                  @input="formatExpirationDate"
                  type="text"
                  placeholder="MM/YY"
                  :maxlength="expMax"/>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Billing address</label>
              <input
                type="text"
                class="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                placeholder="100 Smith Street" />
            </div>
            <div class="w-full relative">
              <label class="block font-semibold">Country</label>
              <div class="relative">
                <div
                  @click="toggleDropdown"
                  class="rounded-lg p-3 cursor-pointer flex justify-between items-center border-2 border-gray-300 focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]">
                  <span>{{ billingInfo.country }}</span>
                  <span class="material-icons transform transition-transform duration-300" :class="{ 'rotate-180': dropdownOpen }">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </div>      
                <transition name="dropdown">
                  <ul
                    v-if="dropdownOpen"
                    class="absolute mt-1 w-full border rounded bg-white max-h-60 overflow-auto z-10">
                    <li
                      v-for="country in countries"
                      :key="country"
                      @click="selectCountry(country)"
                      class="p-2 cursor-pointer hover:bg-gray-100">
                      {{ country }}
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700">State / Province</label>
                <input
                  type="text"
                  class="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg  focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                  placeholder="VIC" />
              </div>
              <div class="w-32">
                <label class="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  class="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                  placeholder="3066" @input="filterZipNumeric"
                  maxlength="4" v-model="zipInput"/>
              </div>
            </div>
            
          </form>
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
          <button
            class="hover-btn text-lg mt-10 text-center w-full p-3 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
            Make Payment
          </button>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from "vue";
  
  const max = 19;
  const numericInput = ref("");
  const expMax = 5;
  const expirationDate = ref("");
  const cvvInput = ref("");
  const zipInput = ref("");
  
  
  const formatExpirationDate = (event) => {
    let input = event.target.value;
    let digitsOnly = input.replace(/\D/g, "");
    let formatted = digitsOnly.replace(/^(\d{2})/, "$1/");
    expirationDate.value = formatted;
  };
  const filterNonNumeric = () => {
    numericInput.value = numericInput.value.replace(/[^0-9]/g, "");
  };
  
  const filterCvvNumeric = () => {
    cvvInput.value = cvvInput.value.replace(/[^0-9]/g, "");
  };
  const filterZipNumeric = () => {
    zipInput.value = zipInput.value.replace(/[^0-9]/g, "");
  };
  watch(numericInput, (value) => {
    const unformattedNumber = value.replace(/\s/g, "");
    const formattedValue = unformattedNumber.replace(/(\d{4})/g, "$1 ");
    numericInput.value = formattedValue.trim();
  });
  
  const billingInfo = ref({
    name: '',
    cardNumber: '',
    country: 'United States',
    address: '',
    city: '',
    state: 'Alabama',
    zip: '',
  });
  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "India",
    "Germany", "France", "China", "Japan", "South Korea", "Mexico", "Brazil",
    "Italy", "Russia", "Netherlands", "South Africa", "Saudi Arabia", 
    "Turkey", "Spain", "Argentina", "Sweden", "Switzerland", "Norway",
    "Denmark", "Belgium", "New Zealand", "Singapore", "Indonesia", "Thailand",
    "Philippines", "Vietnam", "Malaysia", "United Arab Emirates", 
    "Egypt", "Israel", "Pakistan", "Bangladesh", "Nigeria", "Kenya"
  ];
  const dropdownOpen = ref(false);
  
  function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value;
  }
  
  function selectCountry(country) {
    billingInfo.value.country = country;
    dropdownOpen.value = false;
  }
  // const countrySearchQuery = ref("");
  // const filteredCountries = computed(() => {
  //   const query = countrySearchQuery.value.toLowerCase();
  //   return countries.filter(country => country.toLowerCase().includes(query));
  // });
  
  </script>
  
  <style scoped>
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all 0.3s ease;
  }
  .dropdown-enter-from,
  .dropdown-leave-to {
    transform: scaleY(0);
    opacity: 0;
  }
  .dropdown-enter-to,
  .dropdown-leave-from {
    transform: scaleY(1);
    opacity: 1;
  }
  ::-webkit-scrollbar {
      width: 5px;
      background-color: white;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #D63D4A;
      border-radius: 5px;
    }
  </style>  