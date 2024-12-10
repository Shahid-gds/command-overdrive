<template>
    <transition-group name="nested" tag="div">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
            <div class="backdrop" @click="close"></div>
            <div class="popup w-[900px] bg-white p-6 rounded-xl shadow-lg relative" @click.stop>
                 <!-- Payment Form -->
        <div class="bg-white p-6 rounded-lg flex-1 w-full">
            <h2 class="text-xl font-semibold mb-4">Monthly Subscription</h2>
            <p class="text-sm text-gray-600 mb-6">
              We are ready to begin activating Command! Let's setup payment
              information first.
            </p>
            <form class="space-y-4" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-sm font-medium text-gray-700">Name on card</label>
                <input v-model="billingInfo.name"
                  type="text"
                  class="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                  placeholder="Joshua Carr" />
              </div>
              <div class="flex gap-4">
                <div class="flex-1">
                  <label class="block text-sm font-medium text-gray-700"
                    >Card number</label>
                  <input
                    class="border-2 w-full rounded-lg p-3 focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                    type="text"
                    placeholder="XXXX XXXX XXXX XXX"
                    v-model="numericInput"
                    @input="filterNonNumeric"
                    :maxlength="max"/>
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
                <div class="w-20">
                  <label class="block text-sm font-medium text-gray-700">CVV</label>
                  <input type="password"
                    class="border-2 w-full rounded-lg p-3  focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                    v-model="cvvInput"
                    @input="filterCvvNumeric"
                    maxlength="4"
                    placeholder="••••" />
                </div>
              </div>
              <div class="w-full relative">
                <label class="block font-semibold">Country</label>
                <div class="relative">
                  <div
                    @click="toggleDropdown"
                    class="rounded-lg p-3 cursor-pointer flex justify-between items-center border-2 border-gray-300 focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]">
                    <span>{{ billingInfo.country }}</span>
                    <span class="material-icons transform transition-transform duration-300" :class="{ 'rotate-0': dropdownOpen }">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>      
                  <!-- <transition name="dropdown">
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
                  </transition> -->
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Billing address</label>
                <input
                  type="text"
                  class="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#b72b33] focus:ring-[#b72b33]"
                  placeholder="100 Smith Street" />
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
              <div class="flex justify-center mt-4">
                <button type="submit" class="hover-btn text-white p-3 px-8 rounded-lg bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
                  Add Card
                </button>
              </div>
            </form>
          </div>
            <div>
                <button @click="close" class="bg-black text-white font-[600] p-2 rounded-full border-4 border-white absolute -top-3 -right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>                      
                </button>
            </div>                   
            </div>
        </div>
    </transition-group>
</template>

<script setup>
import { ref, watch, computed} from 'vue';

const props = defineProps({
    show: Boolean,
    onClose: Function,
});

const emit = defineEmits(['cardAdded']);

const close = () => {
    props.onClose();
};

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
    country: 'United States',
    address: '',
    city: '',
    state: 'Alabama',
    zip: '',
  });
const handleSubmit = () => {
    emit('cardAdded', {
        name:billingInfo.value.name,
        numericInput: numericInput.value,
    });
    close();
}

  const countries = [
    "United States",
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
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(0px);
    opacity: 0;
}

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