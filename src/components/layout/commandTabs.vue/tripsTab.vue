<template>
  <section class="">
    <div class="pb-4 relative">
      <div class="pt-2 flex space-x-3">
        <div class="w-full flex space-x-3 items-center">
          <div class="font-[600] text-[#9B9B9B] uppercase">Export:</div>
          <div class="w-1/2">
            <div class="select w-full text-[14px]">
              <div
                class="selectBtn border-[1px] p-2 bg-white w-full rounded-lg border-[#707070]"
                :class="{ toggle: dropdownVisible }"
                @click="toggleDropdown">
                {{ selectedOption }}
              </div>
              <div
                class="selectDropdown p-2"
                :class="{ toggle: dropdownVisible }">
                <div
                  class="option w-full"
                  v-for="option in options"
                  :key="option"
                  @click="selectOption(option)"
                  :data-type="option">
                  {{ option }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex space-x-3 items-center">
          <div class="font-[600] text-[#9B9B9B] uppercase">Filter By:</div>
          <div class="w-1/2">
            <div class="select w-full text-[14px]">
              <div
                class="selectBtn border-[1px] p-2 bg-white w-full rounded-lg border-[#707070]"
                :class="{ toggle: dropdownFilterVisible }"
                @click="toggleFilterDropdown">
                {{ selectedFilterOption }}
              </div>
              <div
                class="selectDropdown p-2"
                :class="{ toggle: dropdownFilterVisible }">
                <div
                  class="option w-full"
                  v-for="option in filterOptions"
                  :key="option"
                  @click="selectFilterOption(option)"
                  :data-type="option">
                  {{ option }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t-2 mt-4">
        <div v-if="isHelicopterView" class="flex justify-center items-center space-x-4 uppercase font-[600] text-white bg-[#D63D4A] p-4 rounded-lg mt-4">
          <div>Helicopter View</div>
          <div>
            <img src="@/components/icons/helicopter.svg" alt="">
          </div>
        </div>
      </div>
      <div v-if="isHelicopterView" class="absolute top-0 -right-[11rem]">
        <div class="bg-[white] p-2 px-4 flex space-x-2 items-center shadow-md rounded-full">
          <div class="w-6 h-6 bg-[#FF9104] rounded-full"></div>
          <div class="text-[#878787] font-[500]">0-35 MPH</div>
        </div>
        <div class="bg-[white] p-2 px-4 flex space-x-2 items-center shadow-md rounded-full mt-2">
          <div class="w-6 h-6 bg-[#68AD1A] rounded-full"></div>
          <div class="text-[#878787] font-[500]">35-45 MPH</div>
        </div>
        <div class="bg-[white] p-2 px-4 flex space-x-2 items-center shadow-md rounded-full mt-2">
          <div class="w-6 h-6 bg-[#0053FC] rounded-full"></div>
          <div class="text-[#878787] font-[500]">45-50 MPH</div>
        </div>
        <div class="bg-[white] p-2 px-4 flex space-x-2 items-center shadow-md rounded-full mt-2">
          <div class="w-6 h-6 bg-[#FC00EC] rounded-full"></div>
          <div class="text-[#878787] font-[500]">50-90 MPH</div>
        </div>
        <div class="bg-[white] p-2 px-4 flex space-x-2 items-center shadow-md rounded-full mt-2">
          <div class="w-6 h-6 bg-[#FC0003] rounded-full"></div>
          <div class="text-[#878787] font-[500]">90 + MPH</div>
        </div>
      </div>
      <div class="max-h-[80vh] overflow-y-scroll pb-14 pr-4 mt-4">
        <div v-for="month in months" :key="month.name" class="mt-4">
          <button
            @click="toggle(month.name)"
            class="w-full flex justify-between text-left py-2 font-[700] text-lg border-t-2 border-b-2">
            <div>
              {{ month.name }}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                stroke-width="0"
                stroke="black"
                class="size-6 transition-transform duration-300"
                :class="{ 'rotate-180': activeMonth === month.name }">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
              </svg>
            </div>
          </button>
          <transition name="fade">
            <div v-if="activeMonth === month.name" class="pt-4">
              <div
                v-for="(day, index) in month.dayAndMoths"
                :key="index"
                class="pb-6">
                <div class="flex justify-between items-center">
                  <div class="font-[600] uppercase">
                    {{ day.day }}
                  </div>
                  <div class="flex items-center">
                    <div>
                    {{ day.totalMile }} Total Miles
                  </div> 
                  <div class="text-[24px] text-[#D63D4A] font-[600]">&#x3e;</div>
                </div>
                </div>
                <div
                  v-for="(entry, entryIndex) in day.entries"
                  :key="entryIndex"
                  class="pt-2">
                  <div
                    @click="navigateToHelicopterDetail(entry)"
                    class="border-2 cursor-pointer p-2 px-4 rounded-lg flex justify-between items-center hover:bg-[#FFE5E7] hover:text-[#E82031] transition duration-150">
                    <div>{{ entry.time }}</div>
                    <div class="text-center">
                      <div class="font-[700]">{{ entry.milesDigit }}</div>
                      <div>{{ entry.miles }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const selectedOption = "CVS";
const dropdownVisible = ref(false);
const options = ["CVS", "Excel", "PDF"];

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const selectOption = (option) => {
  selectedOption = option;
  dropdownVisible.value = false;
};

// This is for filter by

const selectedFilterOption = "Date";
const dropdownFilterVisible = ref(false);
const filterOptions = ["Status", "Modal", "Made"];

const toggleFilterDropdown = () => {
  dropdownFilterVisible.value = !dropdownFilterVisible.value;
};

const selectFilterOption = (option) => {
  selectedFilterOption = option;
  dropdownFilterVisible.value = false;
};
const isHelicopterView = computed(() => route.name === 'HelicopterView')

const months = [
  {
    name: "January 2024",
    dayAndMoths: [
      {
        day: "Tuesday, January 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, January 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "Febuary 2024",
    dayAndMoths: [
      {
        day: "Tuesday, Febuary 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, Febuary 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "March 2024",
    dayAndMoths: [
      {
        day: "Tuesday, March 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, March 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "April 2024",
    dayAndMoths: [
      {
        day: "Tuesday, April 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, April 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "May 2024",
    dayAndMoths: [
      {
        day: "Tuesday, May 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, May 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "June 2024",
    dayAndMoths: [
      {
        day: "Tuesday, June 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, June 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "July 2024",
    dayAndMoths: [
      {
        day: "Tuesday, July 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, July 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "August 2024",
    dayAndMoths: [
      {
        day: "Tuesday, August 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, August 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "September 2024",
    dayAndMoths: [
      {
        day: "Tuesday, September 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, September 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "October 2024",
    dayAndMoths: [
      {
        day: "Tuesday, October 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, October 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "November 2024",
    dayAndMoths: [
      {
        day: "Tuesday, November 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, November 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
  {
    name: "December 2024",
    dayAndMoths: [
      {
        day: "Tuesday, December 10",
        totalMile: "0",
        entries: [
          { time: "12:11 PM - 12:13 PM", milesDigit: "0", miles: "miles" },
        ],
      },
      {
        day: "Monday, December 09",
        totalMile: "98.4",
        entries: [
          { time: "3:01 PM - 3:03 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "15.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "0", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "13.5", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "8.8", miles: "miles" },
          { time: "4:00 PM - 4:30 PM", milesDigit: "3.9", miles: "miles" },
        ],
      },
    ],
  },
];

const activeMonth = ref(null);

const toggle = (monthName) => {
  activeMonth.value = activeMonth.value === monthName ? null : monthName;
};
const navigateToHelicopterDetail = (entry) => {
  router.push({ name: "HelicopterView", params: { entryId: entry.id } });
};
</script>

<style scoped>
.select {
  position: relative;
  width: 100%;
}

.select .selectBtn:after {
  content: "";
  position: absolute;
  top: 45%;
  right: 15px;
  width: 10px;
  height: 10px;
  -webkit-transform: translateY(-50%) rotate(45deg);
  transform: translateY(-50%) rotate(45deg);
  border-right: 2px solid #707070;
  border-bottom: 2px solid #707070;
  cursor: pointer;
  transition: 0.2s ease;
}

.select .selectBtn.toggle {
  border-radius: 0.5rem 0.5rem 0 0;
}

.select .selectBtn.toggle:after {
  -webkit-transform: translateY(-50%) rotate(-135deg);
  transform: translateY(-50%) rotate(-135deg);
}

.select .selectDropdown {
  position: absolute;
  top: 100%;
  width: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
  overflow-y: hidden;
  background: wite;
  border: 1px solid #949494;
  background: white;
  z-index: 1;
  -webkit-transform: scale(1, 0);
  transform: scale(1, 0);
  -webkit-transform-origin: top center;
  transform-origin: top center;
  visibility: hidden;
  transition: 0.2s ease;
}

.select .selectDropdown .option {
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select .selectDropdown .option:hover {
  background: transparent;
  color: black;
  border-radius: 0.5rem;
}

.select .selectDropdown.toggle {
  visibility: visible;
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.rotate-180 {
  transform: rotate(180deg);
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #e8e8e8;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 5px;
}
</style>
