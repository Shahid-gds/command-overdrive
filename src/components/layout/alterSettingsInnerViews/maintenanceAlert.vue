<template>
  <section class="overflow-y-auto max-h-[70vh] px-6">
    <div class="flex justify-between">
      <div class="w-full">
        <h1 class="font-[700] text-2xl pb-3">Maintenance Alert</h1>
        <div>
          <div class="w-full">
            Keep track of when your vehicle is on the road. Curfew alerts notify
            you anytime the vehicle is being driven during the set time and day.
          </div>
        </div>
      </div>
      <div class="w-[20%] flex justify-end">
        <div class="button b2" id="button-13">
          <input type="checkbox" class="checkbox" />
          <div class="knobs">
            <span></span>
          </div>
          <div class="layer"></div>
        </div>
      </div>
    </div>
    <div class="pt-4">
      <button class="border-2 border-[#636363] rounded-lg p-2 px-6 font-[600]">
        Add +
      </button>
    </div>
    <div class="pt-6">
      <div class="2xl:flex 2xl:space-x-4">
        <div class="w-full 2xl:pb-0 pb-6">
          <div class="font-bold pb-2">Nickname</div>
          <div class="relative">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text"
              v-model="nickname"/>
            <div class="absolute top-2 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#D63D4A"
                class="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="font-bold pb-2">Vehicle</div>
          <div class="relative">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text"
              v-model="vehicle"
            />
            <div class="absolute top-2 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#D63D4A"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="font-bold text-white pb-2">notext</div>
          <div
            class="flex p-1.5 items-center justify-between px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none"
          >
            <div>
              <img src="../../../assets/images/overdrive-logo.svg" alt="" />
            </div>
            <div>
              <p class="text-[#979797] font-[600]">Fleet Management Partner</p>
            </div>
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="#D63D4A"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 border-b-[1px] border-[#707070]">
      <div class="flex space-x-4">
        <div class="">
          <div class="font-bold pb-2 uppercase">Categoryies</div>
          <div class="pt-4">
            <span class="text-[#979797] font-[600]">1.</span>
            <span class="font-[600]">Oil</span>
          </div>
          <div class="pt-10">
            <span class="text-[#979797] font-[600]">2.</span>
            <span class="font-[600]">Tires</span>
          </div>
          <div class="pt-10">
            <span class="text-[#979797] font-[600]">3.</span>
            <span class="font-[600]">Brakes</span>
          </div>
          <div class="pt-12">
            <span class="text-[#979797] font-[600]">4.</span>
            <span class="font-[600]">Others</span>
          </div>
        </div>
        <div class="">
          <div class="font-bold pb-2 uppercase">last Service</div>
          <div class="pb-6">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text" v-model="mileage"/>
          </div>
          <div class="pb-6">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text" v-model="mileage"/>
          </div>
          <div class="pb-6">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text" v-model="mileage"/>
          </div>
          <div class="">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text" v-model="mileage"/>
          </div>
        </div>
        <div class="">
          <div class="font-bold pb-2 uppercase">Inderval</div>
          <div class="pb-6">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text" v-model="mileage"/>
          </div>
          <div class="pb-6">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text" v-model="mileage"/>
          </div>
          <div class="pb-6">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text" v-model="mileage"/>
          </div>
          <div class="">
            <input
              class="p-2 px-4 w-full border-2 border-[#AEAEAE] rounded-lg bg-transparent outline-none text-[#979797] font-[600]"
              type="text" v-model="mileage"/>
          </div>
        </div>
        <div class="">
          <div class="font-bold pb-2 uppercase text-white">notext</div>
          <div class="pb-8">
            <div class="button b2" id="button-13">
              <input type="checkbox" class="checkbox" />
              <div class="knobs">
                <span></span>
              </div>
              <div class="layer"></div>
            </div>
          </div>
          <div class="pb-8">
            <div class="button b2" id="button-13">
              <input type="checkbox" class="checkbox" />
              <div class="knobs">
                <span></span>
              </div>
              <div class="layer"></div>
            </div>
          </div>
          <div class="pb-8">
            <div class="button b2" id="button-13">
              <input type="checkbox" class="checkbox" />
              <div class="knobs">
                <span></span>
              </div>
              <div class="layer"></div>
            </div>
          </div>
          <div class="">
            <div class="button b2" id="button-13">
              <input type="checkbox" class="checkbox" />
              <div class="knobs">
                <span></span>
              </div>
              <div class="layer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-12 border-b-[1px] border-[#707070]">
      <h1 class="font-[700] text-2xl pb-3">Manage Maintenance Alerts</h1>
      <div class="mt-2 border-2 rounded-xl">
        <div class="table-container">
          <table class="w-full">
            <thead class="border-gray-300">
              <tr class="text-xs text-left">
                <th class="border-r-2 border-b-2 p-2 py-6">#</th>
                <th class="border-r-2 border-b-2 p-2">NickName</th>
                <th class="border-r-2 border-b-2 p-2">Description</th>
                <th class="border-r-2 border-b-2 p-2">Vehicle</th>
                <th class="border-b-2 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="text-xs text-left"
                v-for="item in tableData"
                :key="item.index"
              >
                <td class="border-r-2 border-b-2 p-2 text-center">
                  {{ item.alterNo }}
                </td>
                <td class="border-r-2 border-b-2 p-2">{{ item.nickname }}</td>
                <td class="border-r-2 border-b-2 p-2">
                  {{ item.description }}
                </td>
                <td class="border-r-2 border-b-2 p-2">
                  {{ item.vehicleApplied }}
                </td>
                <td class="border-b-2 p-2">
                  <div
                    v-if="item.status === 'red-button'"
                    class="button-red b2"
                    id="button-14"
                  >
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs">
                      <span></span>
                    </div>
                    <div class="layer-red"></div>
                  </div>
                  <div v-else class="button b2" id="button-14">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs">
                      <span></span>
                    </div>
                    <div class="layer"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="w-full py-6 pb-[10rem]">
      <div class="flex justify-end space-x-4">
        <div>
          <button
            class="border-[1.5px] border-[#636363] p-2 px-6 rounded-lg uppercase text-[#636363]"
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            class="bg-[#636363] border-[1.5px] border-[#636363] p-2 px-10 rounded-lg uppercase text-[white]"
          >
            Save
          </button>
        </div>
        <div>
          <button
            class="bg-[#D63D4A] border-[1.5px] border-[#D63D4A] p-2 px-10 rounded-lg uppercase text-[white]"
          >
            Apply all
          </button>
        </div>
        <div>
          <div class="relative">
            <div
              class="p-2 rounded-lg border-2 w-[200px] bg-white cursor-pointer flex items-center justify-between"
              @click="toggleDropdown"
            >
              <span>{{ selectedOption }}</span>
              <span
                class="transform transition-transform duration-300"
                :class="isDropdownOpen ? 'rotate-180' : 'rotate-0'"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#707070"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <transition name="dropdown">
              <ul
                v-if="isDropdownOpen"
                class="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl z-40 transition-all duration-300 max-h-[200px] overflow-y-auto"
              >
                <li
                  v-for="(option, index) in options"
                  :key="index"
                  class="p-3 cursor-pointer hover:bg-gray-200"
                  @click="selectOption(option)"
                >
                  {{ option }}
                </li>
              </ul>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const nickname = ref("Nickname");
const vehicle = ref("#12345678910");
const mileage = ref("Mileage");
const isDropdownOpen = ref(false);
const selectedOption = ref("Select Vehicles");
const options = ref(["Vehicles One", "Vehicles Two", "Vehicles Three"]);

// Toggle dropdown open/close
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Select option and close dropdown
const selectOption = (option) => {
  selectedOption.value = option;
  isDropdownOpen.value = false;
};
const tableData = ref([
  {
    alterNo: "01",
    nickname: "Nickname here",
    description:
      "Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    vehicleApplied: "Vehicle Applied here...",
    status: "red-button",
  },
  {
    alterNo: "02",
    nickname: "Nickname here",
    description:
      "Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    vehicleApplied: "Vehicle Applied here...",
    status: "",
  },
  {
    alterNo: "03",
    nickname: "Nickname here",
    description:
      "Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    vehicleApplied: "Vehicle Applied here...",
    status: "red-button",
  },
  {
    alterNo: "04",
    nickname: "Nickname here",
    description:
      "Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    vehicleApplied: "Vehicle Applied here...",
    status: "",
  },
]);
</script>

<style scoped>
.knobs,
.layer {
  position: absolute;
  top: 0;
  bottom: 0;
}

.button {
  position: relative;
  width: 100px;
  height: 36px;
  overflow: hidden;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #D63D4A;
  transition: 0.3s ease all;
  z-index: 1;
  border-radius: 20px;
}

#button-13 .knobs:before,
#button-13 .knobs:after,
#button-13 .knobs span {
  position: absolute;
  top: 4px;
  width: 20px;
  height: 10px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 7px 4px;
  border-radius: 2px;
  transition: 0.3s ease all;
}

#button-13 .knobs:before,
#button-13 .knobs:after {
  z-index: 1;
}

#button-13 .knobs:before {
  content: "ON";
  left: 4px;
  color: white;
  font-size: 16px;
}

#button-13 .knobs:after {
  content: "OFF";
  right: -72px;
  color: #8E8E8E;
  font-size: 16px;
}

#button-13 .knobs span {
  width: 40px;
  height: 27px;
  left: 55px;
  background-color: #ffffff;
  z-index: 2;
  border-radius: 20px;
}

#button-13 .checkbox:checked + .knobs span {
  left: 5px;
  background-color: #ffffff;
  border-radius: 20px;
}

#button-13 .checkbox:checked ~ .layer {
  background-color: #DCDCDC;
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
