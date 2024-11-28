<template>
  <section v-if="!emailVerification" class="flex items-center justify-center min-h-screen">
    <div class="2xl:w-[35%] w-1/2 container mx-auto">
      <div class="logo pb-6 flex justify-center">
        <img src="@/assets/images/logo.svg" alt="" />
      </div>
      <div class="sign-up text-center">
        <h1
          class="text-[#B92A32] 2xl:text-[40px] text-[30px] font-[700] uppercase"
        >
          Sign-Up
        </h1>
        <p class="text-[#000000] font-[500] pb-4">Create Your Account Now</p>
      </div>
      <div class="with-google flex justify-center pb-6">
        <button
          class="hover-btn items-center space-x-2 bg-gradient-to-r from-[#F7AE35] bg-[#BB2E34] px-10 p-3.5 rounded-md shadow-lg hover:bg-gradient-to-l hover:from-[#f7ab35] hover:bg-[#be3333]"
        >
          <div class="btn-text text-white uppercase font-[600]">
            Sign-in With Google
          </div>
        </button>
      </div>
      <div class="sing-option pb-3 text-center">
        <span class="text-[#6b6b6b] font-[500] text-xl">OR-</span>
        <span class="text-[#bf444b] font-[600] text-xl">Sign-up</span>
        <span class="text-[#6b6b6b]">Using Your Email</span>
      </div>
      <form action="" class="sing-up-form w-full">
        <div class="pb-4">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            class="w-full border border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]"
            :class="{ 'border-red-500 border-2': emptyFields.includes('name') }"
            v-model="name"
            required
            @input="removeEmptyField('name')"
            @keypress.enter="triggerCreateAccount" >
        </div>
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
        <div class="pb-4 relative">
          <input
            placeholder="Enter Your Password"
            class="w-full border border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]"
            :class="{ 'border-red-500 border-2': emptyFields.includes('password') }"
            :type="passwordVisible ? 'text' : 'password'"
            v-model="password"
            required
            @input="removeEmptyField('password')"
            @keypress.enter="triggerCreateAccount" >
          <div
            class="absolute right-4 top-0 mt-4 mr-2 cursor-pointer"
            @click="togglePasswordVisibility">
            <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="20"
              viewBox="0 0 25 16.093">
              <defs> <clipPath id="clip-path">
                  <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#818181" />
                </clipPath>
              </defs>
              <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                  <path id="Path_185" data-name="Path 185"
                    d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                    transform="translate(-147.939 -70.217)"
                    fill="#818181" />
                  <path
                    id="Path_186"
                    data-name="Path 186"
                    d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                    transform="translate(0)"
                    fill="#818181" />
                </g>
              </g>
            </svg>
            <svg v-if="!passwordVisible"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25" height="19.509"
              viewBox="0 0 25 19.509" >
              <defs>
                <clipPath id="clip-path">
                  <rect id="Rectangle_119"
                    data-name="Rectangle 119" width="25"
                    height="16.093" fill="#818181" />
                </clipPath>
              </defs>
              <g id="Group_1719" data-name="Group 1719"
                transform="translate(-451.156 -19.661)" >
                <g id="Group_60"
                  data-name="Group 60"
                  transform="translate(451.156 21.804)">
                  <g id="Group_59"
                    data-name="Group 59"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)" >
                    <path id="Path_185" data-name="Path 185"
                      d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                      transform="translate(-147.939 -70.217)"
                      fill="#818181"/>
                    <path id="Path_186" data-name="Path 186"
                      d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                      transform="translate(0)" fill="#818181" />
                  </g>
                </g>
                <path id="Path_14789" data-name="Path 14789" d="M3.71,2.673,22.259,20.749"
                  transform="translate(450.5 17.705)" fill="none" stroke="#818181"
                  stroke-width="2" />
              </g>
            </svg>
          </div>
        </div>
        <div class="relative">
          <input
            placeholder="Confirm Password"
            class="w-full border border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]"
            :type="passwordConfirmVisible ? 'text' : 'password'" 
            :class="{ 'border-red-500 border-2': emptyFields.includes('passwordConfirm') }"
            v-model="passwordConfirm" required
            @input="removeEmptyField('passwordConfirm')"
            @keypress.enter="triggerCreateAccount" >
            <div class="absolute right-4 top-0 mt-4 mr-2 cursor-pointer"
            @click="togglePasswordConfirmVisibility">
            <svg v-if="passwordConfirmVisible" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="20"
                viewBox="0 0 25 16.093">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093"
                            fill="#818181" />
                    </clipPath>
                </defs>
                <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                    <g id="Group_59" data-name="Group 59" transform="translate(0 0)"
                        clip-path="url(#clip-path)">
                        <path id="Path_185" data-name="Path 185"
                            d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                            transform="translate(-147.939 -70.217)" fill="#818181" />
                        <path id="Path_186" data-name="Path 186"
                            d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                            transform="translate(0)" fill="#818181" />
                    </g>
                </g>
            </svg>
            <svg v-if="!passwordConfirmVisible" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="19.509"
                viewBox="0 0 25 19.509">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093"
                            fill="#818181" />
                    </clipPath>
                </defs>
                <g id="Group_1719" data-name="Group 1719" transform="translate(-451.156 -19.661)">
                    <g id="Group_60" data-name="Group 60" transform="translate(451.156 21.804)">
                        <g id="Group_59" data-name="Group 59" transform="translate(0 0)"
                            clip-path="url(#clip-path)">
                            <path id="Path_185" data-name="Path 185"
                                d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                                transform="translate(-147.939 -70.217)" fill="#818181" />
                            <path id="Path_186" data-name="Path 186"
                                d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                                transform="translate(0)" fill="#818181" />
                        </g>
                    </g>
                    <path id="Path_14789" data-name="Path 14789" d="M3.71,2.673,22.259,20.749"
                        transform="translate(450.5 17.705)" fill="none" stroke="#818181"
                        stroke-width="2" />
                </g>
            </svg>
        </div>
        </div>
        <div class="py-4">
          <div class="checkbox-wrapper-45 flex items-center" 
          :class="{ 'border-red-500': emptyFields.includes('checkbox')}">
            <input v-model="chckboxChecked" id="cbx-45" type="checkbox" />
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
            <label class="text-[#000000] cursor-pointer ml-3" for="cbx-45">I Accept The
              <span class="text-[#818181] font-[600]">Terms & Conditions</span></label>
          </div>
        </div>
        <div class="pb-4">
          <button ref="createAccountButton" @click.prevent="signup" :disabled="processing"
            class="submit-btn hover-btn text-xl text-center w-full p-3.5 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">
            {{ processing ? 'Please Wait...' : 'Submit Now' }}
          </button>
        </div>
        <div class="h-8">
          <p class="text-lg font-[600] text-red-500 text-center">{{ responseMessage }}</p>
      </div>
        <div class="text-center">
          <span class="text-[#000000]">Already A Member?</span>
          <router-link :to="{ name: 'Login' }" class="text-[#ba2b33] font-[600]"
            >Sign In</router-link
          >
        </div>
      </form>
    </div>
  </section>
  <div v-else-if="emailVerification">
    <codeVerification />
</div>
</template>

<script setup>
import { onUnmounted, ref, watch } from "vue";
import axios from "axios";
import codeVerification from "@/views/codeVerification.vue";
import { useApi } from "@/components/api/useApi";
const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const passwordVisible = ref(false);
const passwordConfirmVisible = ref(false);
const emptyFields = ref([]);
const responseMessage = ref("");
const chckboxChecked = ref(true);
const emailVerification = ref(false);
const processing = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const togglePasswordConfirmVisibility = () => {
  passwordConfirmVisible.value = !passwordConfirmVisible.value;
};

const createAccountButton = ref(null);

const triggerCreateAccount = () => {
  if (createAccountButton.value) {
    createAccountButton.value.click();
  }
};

emptyFields.value = [];

const removeEmptyField = (fieldName) => {
  const index = emptyFields.value.indexOf(fieldName);
  if (index !== -1 && fieldName === "name" && name.value.trim() !== "") {
    emptyFields.value.splice(index, 1);
  } else if (
    index !== -1 &&
    fieldName === "email" &&
    email.value.trim() !== ""
  ) {
    emptyFields.value.splice(index, 1);
  } else if (
    index !== -1 &&
    fieldName === "password" &&
    password.value.trim() !== ""
  ) {
    emptyFields.value.splice(index, 1);
  } else if (
    index !== -1 &&
    fieldName === "passwordConfirm" &&
    passwordConfirm.value.trim() !== ""
  ) {
    emptyFields.value.splice(index, 1);
  } else if (fieldName === "password" || fieldName === "passwordConfirm") {
    emptyFields.value.splice(index, 1);
  }
};

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

const signup = async () => {
  if (
    !name.value ||
    !email.value ||
    !password.value ||
    !passwordConfirm.value
  ) {
    responseMessage.value = "Please fill in the required fields!";
    if (!name.value) emptyFields.value.push("name");
    if (!email.value) emptyFields.value.push("email");
    if (!password.value) emptyFields.value.push("password");
    if (!passwordConfirm.value) emptyFields.value.push("passwordConfirm");
    return;
  }
  if (!email.value.includes("@")) {
    responseMessage.value = "Please enter a valid email address!";
    emptyFields.value.push("email");
    return;
  }
  if (!chckboxChecked.value) {
    responseMessage.value =
      "You need to checked the Terms and Conditions.";
    emptyFields.value.push("checkbox");
    return;
  }

  if (password.value.length < 8) {
    responseMessage.value = "Password must be at least 8 characters long.";
    emptyFields.value.push("password");
    return;
  }

  if (password.value !== passwordConfirm.value) {
    responseMessage.value = "Passwords do not match.";
    emptyFields.value.push("password");
    emptyFields.value.push("passwordConfirm");
    return;
  }

  try {
    processing.value = true;
    const response = await axios.post(
      `${apiUrl}/users/signup`,
      {
        name: name.value,
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
        chckboxChecked: chckboxChecked.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    responseMessage.value = "User Signed Up successfully!";
    // console.log("User Signed Up successfully:", response.data);
    localStorage.setItem('authToken', response.data.token);
    const userId = response.data.data.user._id;
    setCookie('userId', userId, 7);
    emailVerification.value = true;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      (responseMessage.value = "Email is already in use"),
        emptyFields.value.push("email");
    } else {
      responseMessage.value = "Something went wrong. Please try again later !";
    }
  } finally {
    processing.value = false;
    // emailVerification.value = true; // This is using for when api is off
  }
};

const responseMessageTimeout = ref(null);

watch(responseMessage, (newValue) => {
  clearTimeout(responseMessageTimeout.value);
  responseMessageTimeout.value = setTimeout(() => {
    responseMessage.value = "";
  }, 5000);
});
onUnmounted(() => {
  clearTimeout(responseMessageTimeout.value);
});
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
  border: 2px solid #d63d4a;
  background: #e8e8eb;
  border-radius: 4px;
  transform: translate3d(0, 0, 0);
  cursor: pointer;
  transition: all 0.3s ease;
}
.checkbox-wrapper-45 .cbx:hover {
  border-color: #d63d4a;
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
  border-color: #d63d4a;
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
  background: #d63d4a;
  text-align: center;
  color: #fff;
  line-height: 25px;
  box-shadow: 0 0 0 1px #d63d4a;
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
  .checkbox-wrapper-45 .flip {
    width: 20px;
    height: 20px;
  }
  .checkbox-wrapper-45 .front,
  .checkbox-wrapper-45 .back {
    width: 20px;
    height: 20px;
  }
  .checkbox-wrapper-45 .back svg {
    margin-top: 2px;
    margin-left: 2px;
  }
}
</style>
