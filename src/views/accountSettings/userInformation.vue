<template> 
    <section class="2xl:flex 2xl:space-x-10">
        <div class="w-full 2xl:pb-0 pb-10">
            <h1 class="font-[700] uppercase text-xl pb-2">Account Settings: </h1>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex space-x-10">
            <div class="w-full">
                <div class="flex justify-between border-b-2 border-[#AEAEAE] pb-2">
                    <div class="flex space-x-4 items-center">
                        <div class="relative rounded-lg">
                            <img v-if="userData.photoUrl" class="w-20 h-20 rounded-lg object-cover" :src="userData.photoUrl" alt="">
                            <img v-else class="w-20 h-20 rounded-lg object-cover" src="@/assets/images/default.jpg" alt="">
                            <div v-if="isEditingPhoto" class="absolute  bottom-0 right-0 bg-[white] p-1 rounded-sm cursor-pointer">
                                <input type="file" @change="handleFileChange" class="hidden" ref="fileInput" />
                                <svg v-if="!processing" @click="triggerFileInput" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                  </svg>  
                            </div>
                            <div v-if="processing" class="absolute inset-0 flex items-center justify-center bg-[#1e0d34] opacity-80 z-50">
                              <span class="relative flex h-16 w-16">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-16 w-16 bg-sky-500 p-2">
                                </span>
                              </span>
                            </div>
                        <div v-if="!isEditingPhoto" class="absolute bottom-0 right-0 bg-[white] p-1 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                              </svg>                          
                        </div>
                        </div>
                        <!-- <div>
                            <h1>Photo</h1>
                        </div> -->
                    </div>
                    <div v-if="!isEditingPhoto" @click="togglePhotoEditing" class="flex items-center cursor-pointer">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                    <div v-if="isEditingPhoto" class="flex space-x-4 items-center cursor-pointer">
                            <!-- <div @click="togglePhotoEditing" class="bg-[green] p-1 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>
                            </div> -->
                            <div @click="togglePhotoEditing" class="bg-[red] p-1 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                  </svg>                                  
                            </div>                               
                    </div>
                   </div>
                   <div class="flex justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full relative">
                        <div class="font-bold">Password</div>
                        <div class="rounded-lg" v-if="isEditingPassword">
                            <div class="pb-4">
                                <input class="p-2 rounded-lg bg-white border outline-none w-full" type="password" v-model="oldPassword" placeholder="Old Password" />
                            </div>
                            <div class="pb-4">
                                <input class="p-2 rounded-lg bg-white border outline-none w-full" type="password" v-model="newPassword" placeholder="New Password" />
                            </div>
                            <div>
                                <input class="p-2 rounded-lg bg-white border outline-none w-full" type="password" v-model="confirmPassword" placeholder="Confirm New Password" />
                            </div>
                            <div class="flex justify-end py-2 space-x-4 items-center cursor-pointer">
                                <div  @click="togglePasswordEditing" class="bg-[#36cb36d7] p-1 px-4 text-white rounded-md">
                                    save
                                </div>
                                <div class="bg-[#d44a4af3] p-1 px-4 text-white rounded-md">
                                    Cancel                               
                                </div>                               
                        </div>
                        </div>
                        <div v-else>
                            <input class="pb-4 bg-transparent outline-none w-full" type="password" v-model="userData.password" readonly>
                        </div>
                    </div>
                    <div v-if="!isEditingPassword" @click="togglePasswordEditing" class="flex items-center cursor-pointer">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Reset</div>
                    </div>
                   
                   </div>
                   <div class="flex justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Email</div>
                        <div>
                            <input class="pb-4 w-full bg-transparent outline-none" type="email" placeholder="Your Email" v-model="userData.email" readonly>
                        </div>
                    </div>
                   </div>
            </div>
            <div class="w-full">
                   <div class="flex space-x-3 justify-between border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Username </div>
                        <div v-if="!isEditingUsername">
                            <input class="pb-4 w-full bg-transparent outline-none" type="text" placeholder="User Name" v-model="userData.userName" readonly>
                        </div>
                        <div v-if="isEditingUsername">
                            <input class="p-2 rounded-lg bg-white w-full bg-transparent outline-none" type="text" v-model="userData.userName">
                            <div class="flex justify-end py-2 space-x-4 items-center cursor-pointer">
                                <div @click.prevent="saveUserName" :disabled="isUserNameProcessing" class="bg-[#36cb36d7] p-1 px-4 text-white rounded-md">
                                  {{ isUserNameProcessing ? 'Updating...' :  ' Save' }}
                                </div>
                                <div class="bg-[#d44a4af3] p-1 px-4 text-white rounded-md">
                                    Cancel                               
                                </div>                               
                        </div>
                        </div>
                    </div>
                    <div v-if="!isEditingUsername" @click="toggleUsernameEditing" class="flex items-center cursor-pointer">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                 
                   </div>
                   <div class="flex space-x-4 justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Phone </div>
                        <div v-if="!isEditingPhone">
                            <input class="pb-4 w-full bg-transparent outline-none" type="text" placeholder="Phone Number" v-model="userData.phone" readonly>
                        </div>
                        <div v-if="isEditingPhone">
                            <input class="p-2 rounded-lg bg-white w-full outline-none" type="text" placeholder="Phone Number" required v-model="userData.phone">
                            <div class="flex justify-end py-2 space-x-4 items-center cursor-pointer">
                              <div @click.prevent="saveUserPhone" :disabled="isPhoneProcessing" class="bg-[#36cb36d7] p-1 px-4 text-white rounded-md">
                                {{ isPhoneProcessing ? 'Updating...' :  ' Save' }}
                              </div>
                                <div class="bg-[#d44a4af3] p-1 px-4 text-white rounded-md">
                                    Cancel                               
                                </div>                               
                        </div>
                        </div>
                    </div>
                    <div v-if="!isEditingPhone" @click="togglePhoneEditing"  class="flex items-center cursor-pointer">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                   </div>
                   <div class="flex space-x-4 justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-bold">Mailing Address</div>
                        <div v-if="!isEditingAddress">
                            <textarea class="pb-3 w-full bg-transparent outline-none" placeholder="Address" v-model="userData.address" rows="2" readonly></textarea>
                        </div>
                        <div v-if="isEditingAddress" class="rounded-lg">
                            <textarea class="w-full p-2 rounded-lg outline-none bg-white " placeholder="Address" v-model="userData.address" rows="2"></textarea>
                            <div class="flex justify-end py-2 space-x-4 items-center cursor-pointer">
                                <div  @click="saveUserAddress" :disabled="isAddressProcessing" class="bg-[#36cb36d7] p-1 px-4 text-white rounded-md">
                                  {{ isAddressProcessing ? 'Updating...' :  ' Save' }}
                                </div>
                                <div @click="toggleAddressEditing" class="bg-[#d44a4af3] p-1 px-4 text-white rounded-md">
                                    Cancel                               
                                </div>                               
                        </div>
                        </div>
                    </div>
                    <div v-if="!isEditingAddress" @click="toggleAddressEditing" class="flex items-center cursor-pointer">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#D63D4A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>  
                        </div>
                        <div class="text-[#D63D4A] font-[600] uppercase">Edit</div>
                    </div>
                   </div>
              
            </div>
                <div>

                </div>
            </div>
        </div>
        <div class="w-full 2xl:pb-0 pb-6">
            <h1 class="font-[700] uppercase text-xl pb-2">Billing Information:</h1>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex space-x-10 items-center justify-center h-[auto]">
              <div class="w-full">
                <div v-if="!isEditingBilling" class="flex justify-center pb-1">
                  <img src="@/assets/images/visa-card.svg" alt="Visa Card">
                </div>
                <div v-if="!isEditingBilling">
                  <h1 class="font-[700] text-center">Amex 4567</h1>
                  <div @click="toggleBillingEditing" class="flex justify-center mt-2">
                    <button class="bg-white p-1.5 px-4 rounded-lg font-[600]">Update</button>
                  </div>
                </div>
                <div class="w-full pt-2" v-else>
                  <form @submit.prevent="saveBillingInfo">
                  <div class="flex space-x-4">
                    <div class="w-full">
                        <label for="name" class="block font-semibold">Name</label>
                        <input
                          v-model="billingInfo.name"
                          id="name"
                          type="text"
                          class="w-full p-3 rounded-lg outline-none"
                          placeholder="Full Name"/>
                      </div>
                      <div class="w-full">
                        <label for="card-number" class="block font-semibold">Card Number</label>
                        <input
                          v-model="billingInfo.cardNumber"
                          id="card-number"
                          type="text"
                          class="w-full p-3 outline-none rounded-lg"
                          placeholder="Card Number"/>
                      </div>
                  </div>
                  <div class="flex space-x-4 pt-4">
                    <div class="w-full relative">
                        <label class="block font-semibold">Country</label>
                        <div class="relative">
                          <div
                            @click="toggleDropdown"
                            class="rounded-lg p-3 cursor-pointer flex justify-between items-center bg-white">
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
                              class="absolute mt-1 w-full border rounded bg-white max-h-40 overflow-auto z-10">
                              <li>
                                <input
                                v-model="countrySearchQuery"
                                type="text"
                                class="w-full p-2 border-b-2 outline-none"
                                placeholder="Search for a country..." />
                              </li>
                              <li
                                v-for="country in filteredCountries"
                                :key="country"
                                @click="selectCountry(country)"
                                class="p-2 cursor-pointer hover:bg-gray-100">
                                {{ country }}
                              </li>
                            </ul>
                          </transition>
                        </div>
                      </div>
                      <div class="w-full">
                        <label for="address" class="block font-semibold">Address</label>
                        <input
                          v-model="billingInfo.address"
                          id="address"
                          type="text"
                          class="w-full p-3 rounded-lg outline-none"
                          placeholder="Street Address"/>
                      </div>
                  </div>
                    <div class="py-4 flex space-x-4">
                        <div class="w-full">
                            <label for="city" class="block font-semibold">City</label>
                            <input
                              v-model="billingInfo.city"
                              id="city"
                              type="text"
                              class="w-full p-3 rounded-lg outline-none"
                              placeholder="City"/>
                          </div>
                          <div class="w-full relative">
                            <label class="block font-semibold">{{ stateLabel }}</label>
                            <div class="relative">
                              <div
                                @click="toggleDropdownState"
                                class="rounded-lg p-3 cursor-pointer flex justify-between items-center bg-white">
                                <span>{{ billingInfo.state }}</span>
                                <span class="material-icons transform transition-transform duration-300" :class="{ 'rotate-180': dropdownOpenState }">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                  </svg>
                                </span>
                              </div>
                              <transition name="dropdown">
                                <ul
                                  v-if="dropdownOpenState"
                                  class="absolute mt-1 w-full border rounded bg-white max-h-40 overflow-auto z-10">
                                  <li>
                                    <input
                                    v-model="stateSearchQuery"
                                    type="text"
                                    class="w-full p-2 border-b-2 outline-none"
                                    placeholder="Search Here...."/>
                                  </li>
                                  <li
                                    v-for="state in filteredStates"
                                    :key="state"
                                    @click="selectState(state)"
                                    class="p-2 cursor-pointer hover:bg-gray-100">
                                    {{ state }}
                                  </li>
                                </ul>
                              </transition>
                            </div>
                          </div>
                          <div class="w-full">
                            <label for="zip" class="block font-semibold">ZIP Code</label>
                            <input
                              v-model="billingInfo.zip"
                              id="zip"
                              type="text"
                              class="w-full p-3 rounded-lg outline-none"
                              placeholder="ZIP Code"/>
                          </div>
                    </div>
                    <div class="flex justify-end space-x-2">
                      <button
                        type="submit"
                        class="bg-[#36cb36d7] text-white p-1.5 px-4 rounded-lg font-[600]">
                        Save New Card
                      </button>
                      <button
                      type="button"
                      @click="toggleBillingEditing"
                      class="bg-[#d44a4af3] text-white p-1.5 px-4 rounded-lg font-[600]">
                      Cancel
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </section>
</template>

<script setup>
import { ref, computed, watch, reactive, onMounted } from 'vue';
import axios from 'axios';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const userData = reactive({
photoUrl : '',
password : '*************',
email: '',
userName : '',
phone: '',
address: ''
})
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
};

const userId = getCookie('user-id')

const getUserData = async () => {
  const headers = {
    'user-id' : userId,
    'Content-Type' : 'application/json'
  };

  try {
    const response = await axios.get(`${apiUrl}/users/me`, { headers });

    const getUser = response.data.data.data;
    if (getUser) {
      userData.photoUrl = getUser.photo || ''
      userData.email = getUser.email || ''
      userData.userName = getUser.name || ''
      userData.phone = getUser.phoneNumber || ''
      userData.address = getUser.address || ''
    }
  } catch (error) {
    console.error(error)
  }
}

const processing = ref(false);
const isUserNameProcessing = ref(false);
const isPasswordProcessing = ref(false);
const isPhoneProcessing = ref(false);
const isAddressProcessing = ref(false)
 
const updateUser = async (updatedData) => {
  const headers = {
    'user-id' : userId,
    'Content-Type' : 'multipart/form-data'
  };
  try {
 
    const response = await axios.patch(`${apiUrl}/users/updateMe`, updatedData, {headers});
    if (response.data.sucess) {
      getUserData();
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      processing.value = true;
        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await axios.patch(`${apiUrl}/users/updateMe`, formData, {
                headers: {
                    'user-id': userId,
                    'Content-Type': 'multipart/form-data',
                },
            });

            userData.profilePhotoUrl = response.data.data.user.photo;
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else {
                console.error('Error message:', error.message);
            }
        } finally {
          processing.value = false,
          isEditingPhoto.value = false
          window.location.reload();
        }
    }
};

const saveUserName = () => {
  isUserNameProcessing.value = true;
  const updatedData = {
    name: userData.userName,
  }; 
  updateUser(updatedData);
  setTimeout(() => {
    isUserNameProcessing.value = false;
    isEditingUsername.value = false;
  }, 1000);
}
const saveUserPhone = () => {
  isPhoneProcessing.value = true;
  const updatedData = {
    phone: userData.phoneNumber,
  }; 
  updateUser(updatedData);
  setTimeout(() => {
    isPhoneProcessing.value = false;
    isEditingPhone.value = false;
  }, 1000);
}
const saveUserAddress = () => {
  isAddressProcessing.value = true;
  const updatedData = {
    address: userData.address,
  }; 
  updateUser(updatedData);
  setTimeout(() => {
    isAddressProcessing.value = false;
    isEditingAddress.value = false;
  }, 1000);
}

function triggerFileInput() {
    const input = document.querySelector("input[type='file']");
    input.click();
}

onMounted(() => {
  getUserData();
})

const isEditingPhoto = ref(false);
const isEditingPassword = ref(false);
const isEditingUsername = ref(false);
const isEditingPhone = ref(false);
const isEditingAddress = ref(false);
const isEditingBilling = ref(false);

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
const countrySearchQuery = ref("");
const filteredCountries = computed(() => {
  const query = countrySearchQuery.value.toLowerCase();
  return countries.filter(country => country.toLowerCase().includes(query));
});
const dropdownOpen = ref(false);
const dropdownOpenState = ref(false);

const statesByCountry = {
  "United States": ["Alabama", "Alaska", "Arizona", "California", "Florida", "New York", "Texas", "Washington", "Oregon", "Illinois"],
  "Canada": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Newfoundland and Labrador", "Nova Scotia"],
  "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
  "Australia": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia", "Australian Capital Territory", "Northern Territory"],
  "India": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Chandigarh", "Lakshadweep", "Puducherry", "Dadra and Nagar Haveli and Daman and Diu"],
  "Germany": ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"],
  "France": ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Normandy", "Grand Est", "Occitanie", "Nouvelle-Aquitaine", "Brittany", "Hauts-de-France", "Centre-Val de Loire", "Pays de la Loire", "Corsica", "Burgundy-Franche-Comté", "Auvergne-Rhône-Alpes", "Guadeloupe", "Martinique", "French Guiana", "Réunion"],
  "China": ["Beijing", "Shanghai", "Tianjin", "Chongqing", "Guangdong", "Shandong", "Jiangsu", "Zhejiang", "Henan", "Sichuan", "Hunan", "Hebei", "Hubei", "Liaoning", "Jilin", "Fujian", "Anhui", "Xinjiang", "Inner Mongolia", "Hainan", "Guangxi", "Yunnan", "Qinghai", "Gansu", "Ningxia", "Tibet", "Hong Kong", "Macau"],
  "Japan": ["Hokkaido", "Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima", "Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa", "Niigata", "Toyama", "Ishikawa", "Fukui", "Yamanashi", "Nagano", "Gifu", "Shizuoka", "Aichi", "Mie", "Shiga", "Kyoto", "Osaka", "Hyogo", "Nara", "Wakayama", "Tottori", "Shimane", "Okayama", "Hiroshima", "Yamaguchi", "Tokushima", "Kagawa", "Ehime", "Kochi", "Fukuoka", "Saga", "Nagasaki", "Kumamoto", "Oita", "Miyazaki", "Kagoshima", "Okinawa"],
  "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Gyeonggi", "Gangwon", "Chungcheongbuk", "Chungcheongnam", "Jeollabuk", "Jeollanam", "Gyeongsangbuk", "Gyeongsangnam", "Jeju"],
  "Mexico": ["Aguascalientes", "Baja California", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico City", "Mexico State", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"],
  "Brazil": ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Rio Grande do Sul", "Paraná", "Pernambuco", "Ceará", "Amazonas", "Santa Catarina", "Maranhão", "Goiás", "Paraíba", "Espírito Santo", "Alagoas", "Piauí", "Pará", "Mato Grosso", "Mato Grosso do Sul", "Distrito Federal", "Rondônia", "Roraima", "Acre", "Sergipe", "Tocantins", "Amapá", "São Paulo"],
  "Italy": ["Lazio", "Lombardy", "Veneto", "Campania", "Sicily", "Emilia-Romagna", "Piedmont", "Apulia", "Tuscany", "Calabria", "Liguria", "Marches", "Abruzzo", "Trentino-Alto Adige/Südtirol", "Umbria", "Molise", "Friuli Venezia Giulia", "Sardinia", "Aosta Valley", "Basilicata"],
  "Russia": ["Moscow", "Saint Petersburg", "Tatarstan", "Bashkortostan", "Chechnya", "Sverdlovsk", "Krasnoyarsk", "Samara", "Nizhny Novgorod", "Tula", "Voronezh", "Krasnodar", "Irkutsk", "Vladimir", "Kemerovo", "Leningrad", "Rostov", "Omsk", "Kurgan", "Khabarovsk", "Tomsk", "Arkhangelsk", "Kaliningrad", "Primorsky", "Sakha", "Vologda", "Lipetsk", "Orenburg", "Tver", "Altai", "Krasnoyarsk", "Sakhalin", "Saratov"],
  "Netherlands": ["North Holland", "South Holland", "Utrecht", "Groningen", "Friesland", "Overijssel", "Limburg", "North Brabant", "Drenthe", "Flevoland", "Zeeland", "Gelderland"],
  "South Africa": ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Free State", "Limpopo", "Mpumalanga", "Northern Cape", "North West"],
  "Saudi Arabia": ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Jazan", "Najran", "Qassim", "Hail", "Tabuk", "Northern Borders", "Al-Jouf", "Baha"],
  "Turkey": ["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Adana", "Konya", "Gaziantep", "Mersin", "Kocaeli", "Diyarbakır", "Şanlıurfa", "Kayseri", "Kahramanmaraş", "Balıkesir", "Sakarya", "Manisa", "Tekirdağ", "Trabzon", "Eskişehir", "Denizli", "Aydın", "Muğla", "Çanakkale", "Aksaray", "Nevşehir", "Giresun", "Sivas", "Zonguldak"],
  "Spain": ["Madrid", "Catalonia", "Andalusia", "Valencia", "Galicia", "Castile and León", "Basque Country", "Castilla-La Mancha", "Canary Islands", "Aragon", "Murcia", "Balearic Islands", "Extremadura", "Cantabria", "Asturias", "Navarre", "La Rioja", "Ceuta", "Melilla"],
  "Argentina": ["Buenos Aires", "CABA", "Cordoba", "Mendoza", "Santa Fe", "Tucuman", "Misiones", "San Juan", "Salta", "Chaco", "Entre Rios", "Santiago del Estero", "Corrientes", "Río Negro", "Jujuy", "Neuquén", "San Luis", "La Pampa", "Chubut", "Formosa", "Catamarca", "La Rioja", "Tierra del Fuego", "San Juan"],
  "Sweden": ["Stockholm County", "Västra Götaland County", "Skåne County", "Östergötland County", "Halland County", "Jönköping County", "Uppsala County", "Västmanland County", "Gävleborg County", "Dalarna County", "Norrbotten County"],
  "Switzerland": ["Zurich", "Geneva", "Bern", "Vaud", "Basel-Stadt", "Aargau", "Solothurn", "Ticino", "Fribourg", "St. Gallen", "Thurgau", "Valais", "Graubünden", "Neuchâtel", "Lucerne", "Schwyz", "Zurich", "Appenzell Innerrhoden"],
  "Norway": ["Oslo", "Viken", "Vestfold og Telemark", "Agder", "Rogaland", "Vestland", "Trøndelag", "Møre og Romsdal", "Nordland", "Troms og Finnmark"],
  "Denmark": ["Capital Region", "Central Denmark Region", "Zealand", "North Denmark", "South Denmark"],
  "Belgium": ["Flanders", "Wallonia", "Brussels", "Antwerp", "Limburg", "West Flanders", "East Flanders", "Hainaut", "Namur", "Liege", "Luxembourg"],
  "New Zealand": ["Auckland", "Wellington", "Canterbury", "Otago", "Waikato", "Bay of Plenty", "Hawke's Bay", "Northland", "Taranaki", "Manawatu-Wanganui", "Gisborne", "Marlborough"],
  "Singapore": ["Central Region", "Eastern Region", "North Region", "North-East Region", "West Region"],
  "Indonesia": ["Jakarta", "Bali", "West Java", "East Java", "Central Java", "North Sumatra", "South Sulawesi", "Lampung", "Riau", "Banten", "West Nusa Tenggara", "East Nusa Tenggara", "Papua", "Maluku", "North Sulawesi", "South Sumatra", "Aceh"],
  "Thailand": ["Bangkok", "Chiang Mai", "Phuket", "Chonburi", "Khon Kaen", "Udon Thani", "Nakhon Ratchasima", "Nonthaburi", "Samut Prakan", "Surat Thani", "Nakhon Si Thammarat", "Songkhla", "Pattani", "Yala"],
  "Philippines": ["Metro Manila", "Cebu", "Davao", "Iloilo", "Batangas", "Laguna", "Cagayan de Oro", "Pangasinan", "Zamboanga", "Leyte", "Negros Occidental", "Rizal", "Cavite"],
  "Vietnam": ["Hanoi", "Ho Chi Minh City", "Da Nang", "Bac Giang", "Quang Ninh", "Thanh Hoa", "Nghe An", "Hai Phong", "Quang Nam", "Hau Giang", "Lam Dong", "Quang Ngai"],
  "Malaysia": ["Selangor", "Penang", "Sabah", "Sarawak", "Kuala Lumpur", "Johor", "Melaka", "Perak", "Perlis", "Kedah", "Terengganu", "Kelantan", "Negeri Sembilan", "Pahang"],
  "United Arab Emirates": ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al-Quwain", "Fujairah", "Ras Al Khaimah"],
  "Egypt": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Aswan", "Qena", "Dakahlia", "Fayoum", "Damietta", "Monufia", "Beni Suef", "Kafr el-Sheikh"],
  "Israel": ["Tel Aviv District", "Central District", "Northern District", "Southern District", "Jerusalem District", "Haifa District"],
  "Pakistan": ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Gilgit-Baltistan", "Azad Kashmir", "Islamabad Capital Territory"],
  "Bangladesh": ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal", "Sylhet", "Rangpur", "Mymensingh"],
  "Nigeria": ["Lagos", "Kano", "Abuja", "Anambra", "Ogun", "Rivers", "Kaduna", "Enugu", "Delta", "Ekiti", "Kwara", "Osun", "Imo", "Oyo", "Benue", "Borno", "Katsina", "Kano", "Akwa Ibom", "Gombe"],
  "Kenya": ["Nairobi", "Kiambu", "Mombasa", "Nakuru", "Kisumu", "Eldoret", "Nyeri", "Meru", "Thika", "Garissa"]
};

const stateSearchQuery = ref("");
const filteredStates = computed(() => {
  const query = stateSearchQuery.value.toLowerCase();
  return stateOptions.value.filter(state => state.toLowerCase().includes(query));
});
const selectedStateIndex = ref(-1);

function handleKeydown(event) {
  const states = filteredStates.value;
  if (!states.length) return;

  // Handle "down arrow" key
  if (event.key === "ArrowDown") {
    selectedStateIndex.value = (selectedStateIndex.value + 1) % states.length;
  }

  // Handle "up arrow" key
  if (event.key === "ArrowUp") {
    selectedStateIndex.value =
      (selectedStateIndex.value - 1 + states.length) % states.length;
  }
  if (event.key === "Enter") {
    if (selectedStateIndex.value >= 0) {
      selectState(filteredStates.value[selectedStateIndex.value]);
    }
  }
}

watch(() => billingInfo.value.country, (newCountry) => {
  const states = statesByCountry[newCountry] || [];
  billingInfo.value.state = states.length > 0 ? states[0] : '';
});

const stateOptions = computed(() => {
  return statesByCountry[billingInfo.value.country] || [];
});

const stateLabel = computed(() => {
  const provincesCountries = [
    "Canada", "China", "South Africa", "Pakistan", "Bangladesh", 
    "Malaysia", "Argentina"
  ];

  return provincesCountries.includes(billingInfo.value.country) ? "Province" : "State";
});


function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function selectCountry(country) {
  billingInfo.value.country = country;
  dropdownOpen.value = false;
}

function toggleDropdownState() {
  dropdownOpenState.value = !dropdownOpenState.value;
}

function selectState(state) {
  billingInfo.value.state = state;
  dropdownOpenState.value = false;
}

function togglePhotoEditing() {
    isEditingPhoto.value = !isEditingPhoto.value;
}

function togglePasswordEditing() {
    isEditingPassword.value = !isEditingPassword.value;
}

function toggleUsernameEditing() {
    isEditingUsername.value = !isEditingUsername.value;
}
function togglePhoneEditing() {
    isEditingPhone.value = !isEditingPhone.value;
}
function toggleAddressEditing() {
    isEditingAddress.value = !isEditingAddress.value;
}
function toggleBillingEditing() {
    isEditingBilling.value = !isEditingBilling.value;
}
function saveBillingInfo() {
  console.log('Saved Billing Info:', billingInfo.value);
  toggleBillingEditing();
}
</script>

<style scoped>
textarea {
   resize: none;
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