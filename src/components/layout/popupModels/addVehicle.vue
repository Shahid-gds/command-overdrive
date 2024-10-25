<template>
    <transition-group name="nested" tag="div">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
            <div class="backdrop" @click="close"></div>
            <div class="popup w-[900px] bg-white p-6 rounded-xl shadow-lg relative" @click.stop>
               <div class="flex space-x-2 items-center border-b-[1px] pb-4 border-[#AAAAAA]">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#D63D4A" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D63D4A" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                      </svg>                      
                </div>
                <div class="text-[20px] font-bold">
                    <h2 class="">Share Access</h2> 
                </div> 
               </div>
               <div class="pt-6 flex space-x-4">
              <div class="w-full">
                <div class="font-[600] uppercase pb-2">Start</div>
                <div class="relative w-full">
                    <div
                      @click="toggleStartCalendar"
                      class="calendar-toggle cursor-pointer flex text-[#979797] justify-between bg-white items-center border-2 p-2 rounded-lg text-[14px]"
                    >
                      <div>{{ formattedStartDate }} {{ Starttime }}</div>
                      <div class="custom-icon">
                        <img src="@/components/icons/calendar.svg" alt="" />
                      </div>
                    </div>
                    <transition name="fade">
                      <div v-if="showStartCalendar" class="calendar-dropdown">
                        <div class="calendar">
                          <div class="calendar-header">
                            <button @click="prevStartMonth"><</button>
                            <span
                              >{{ monthNames[currentStartMonth] }}
                              {{ currentStartYear }}</span
                            >
                            <button @click="nextStartMonth">></button>
                          </div>
                          <div class="calendar-grid">
                            <div
                              class="calendar-cell"
                              v-for="day in daysInStartMonth"
                              :key="day"
                              @click="selectStartDate(day)"
                            >
                              {{ day }}
                            </div>
                          </div>
                        </div>
                        <div class="flex space-x-3 items-center pb-2">
                          <div class="font-[600] w-1/2">Time:</div>
                          <div class="w-full">
                            <input
                              type="time"
                              v-model="Starttime"
                              class="border-[1px] border-[#949494] w-full p-2 rounded-lg outline-none text-[14px]"
                            />
                          </div>
                        </div>
                      </div>
                    </transition>
                </div>
              </div>
              <div class="w-full">
                <div class="font-[600] uppercase pb-2">End</div>
                <div class="relative w-full">
                    <div
                      @click="toggleEndCalendar"
                      class="calendar-toggle cursor-pointer flex justify-between text-[#979797] bg-white items-center border-2 p-2 rounded-lg text-[14px]"
                    >
                      <div>{{ formattedEndDate }} {{ Endtime }}</div>
                      <div class="custom-icon">
                        <img src="@/components/icons/calendar.svg" alt="" />
                      </div>
                    </div>
                    <transition name="fade">
                      <div v-if="showEndCalendar" class="calendar-dropdown">
                        <div class="calendar">
                          <div class="calendar-header">
                            <button @click="prevEndMonth"><</button>
                            <span
                              >{{ monthNames[currentEndMonth] }}
                              {{ currentEndYear }}</span
                            >
                            <button @click="nextEndMonth">></button>
                          </div>
                          <div class="calendar-grid">
                            <div
                              class="calendar-cell"
                              v-for="day in daysInEndMonth"
                              :key="day"
                              @click="selectEndDate(day)"
                            >
                              {{ day }}
                            </div>
                          </div>
                        </div>
                        <div class="flex space-x-3 items-center pb-2">
                          <div class="font-[600] w-1/2">Time:</div>
                          <div class="w-full">
                            <input
                              type="time"
                              v-model="Endtime"
                              class="border-[1px] border-[#949494] w-full p-2 rounded-lg outline-none text-[14px]"
                            />
                          </div>
                        </div>
                      </div>
                    </transition>
                </div>
              </div>
              <div class="w-full">
                <div class="font-[600] pb-2 uppercase">Access Type</div>
                <div class="w-full">
                  <div class="select w-full text-[14px]">
                    <div class="selectBtn border-[1px] p-2 bg-white w-full rounded-lg border-[#707070] text-[#979797]"
                        :class="{ toggle: dropdownVisible }" @click="toggleDropdown">{{ selectedOption }}</div>
                    <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible }">
                        <div class="option w-full" v-for="option in options" :key="option"
                            @click="selectOption(option)" :data-type="option">{{ option }}</div>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div class="pt-8 flex space-x-4 items-center">
               <div class="w-full">
                <div class="font-[600] pb-2 uppercase">Name</div>
                <div>
                    <input type="text" class="w-full border-[1px] p-2 border-[#707070] rounded-lg outline-none" placeholder="Enter Name Here...">
                </div>
               </div>
               <div class="pt-8 w-1/2">
                <button class="bg-[#D63D4A] flex space-x-4 justify-center items-center w-full text-white rounded-lg p-2 uppercase">
                    <div class="text-xl font-[600]">Save</div>
                    <div>
                        <img src="@/components/icons/save.svg" alt="">
                    </div>
                </button>
               </div>
            </div>         
            <div class="py-16 flex space-x-4 items-center relative">
                <div class="w-full border-b-[1px] border-[#707070] relative"> 
                    <button class="bg-[#E2E2E2] uppercase font-[600] px-10 p-2 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Manage Users
                    </button>
                </div>
            </div>                   
            <div class="relative">
                <input type="text" class="w-full border-[1px] border-[#707070] p-3 rounded-lg outline-none" placeholder="www.copylinkhere.com">
                <button class="flex justify-center space-x-2 px-6 items-center bg-[#DFDFDF] p-2 rounded-lg absolute top-[0.35rem] right-1">
                    <div><img src="@/components/icons/copy-link.svg" alt=""></div>
                    <div class="font-[600]">Copy Link</div>
                </button>
            </div>
            <div class="pt-6 pb-8 flex justify-end items-center space-x-4">
                <div class="">
                    <button class="bg-[#636363] flex space-x-2 items-center text-xl text-white p-2 rounded-lg px-6 uppercase font-[600]" >
                        <div>
                            <img src="@/components/icons/send-sms.svg" alt="">
                        </div>
                        <div>Send Sms</div>
                    </button>
                </div>
                <div class="">
                    <button class="bg-[#D63D4A] flex space-x-2 items-center text-xl text-white p-2 rounded-lg px-6 uppercase font-[600]" >
                        <div>
                            <img src="@/components/icons/air-paper.svg" alt="">
                        </div>
                        <div>Send Email</div>
                    </button>
                </div>
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
import { ref, computed } from 'vue';

const props = defineProps({
    show: Boolean,
    onClose: Function,
});


const close = () => {
    props.onClose();
};

const showStartCalendar = ref(false)
  const currentStartYear = ref(new Date().getFullYear())
  const currentStartMonth = ref(new Date().getMonth())
  const formattedStartDate = ref(
    `${currentStartMonth.value + 1}/${new Date().getDate()}/${currentStartYear.value}`,
  )
  const Starttime = ref('12:00')

//   This is for End Date and Time
const showEndCalendar = ref(false)
  const currentEndYear = ref(new Date().getFullYear())
  const currentEndMonth = ref(new Date().getMonth())
  const formattedEndDate = ref(
    `${currentEndMonth.value + 1}/${new Date().getDate()}/${currentEndYear.value}`,
  )
  const Endtime = ref('12:00')

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const toggleStartCalendar = () => {
    showStartCalendar.value = !showStartCalendar.value
  }
  const daysInStartMonth = computed(() => {
    return new Date(
      currentStartYear.value,
      currentStartMonth.value + 1,
      0,
    ).getDate()
  })

  const prevStartMonth = () => {
    if (currentStartMonth.value === 0) {
      currentStartMonth.value = 11
      currentStartYear.value--
    } else {
      currentStartMonth.value--
    }
  }

  const nextStartMonth = () => {
    if (currentStartMonth.value === 11) {
      currentStartMonth.value = 0
      currentStartYear.value++
    } else {
      currentStartMonth.value++
    }
  }

  const selectStartDate = (day) => {
    const monthStart = String(currentStartMonth.value + 1).padStart(2, '0')
    const formattedStartDay = String(day).padStart(2, '0')
    formattedStartDate.value = `${monthStart}/${formattedStartDay}/${currentStartYear.value}`
    showStartCalendar.value = false
  }

//   End Time and Date function
  const toggleEndCalendar = () => {
    showEndCalendar.value = !showEndCalendar.value
  }
  const daysInEndMonth = computed(() => {
    return new Date(
      currentEndYear.value,
      currentEndMonth.value + 1,
      0,
    ).getDate()
  })

  const prevEndMonth = () => {
    if (currentEndMonth.value === 0) {
      currentEndMonth.value = 11
      currentEndYear.value--
    } else {
      currentEndMonth.value--
    }
  }

  const nextEndMonth = () => {
    if (currentEndMonth.value === 11) {
      currentEndMonth.value = 0
      currentEndYear.value++
    } else {
      currentEndMonth.value++
    }
  }

  const selectEndDate = (day) => {
    const monthEnd = String(currentEndMonth.value + 1).padStart(2, '0')
    const formattedEndDay = String(day).padStart(2, '0')
    formattedEndDate.value = `${monthEnd}/${formattedEndDay}/${currentEndYear.value}`
    showEndCalendar.value = false
  }
  let selectedOption = 'All';
const dropdownVisible = ref(false);
const options = ['Option One', 'Option Two', 'Option Three', 'Option Four'];

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};

const selectOption = (option) => {
    selectedOption = option;
    dropdownVisible.value = false;
};
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
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
    transform: translateY(-30px);
    opacity: 0;
}
.calendar-toggle {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #949494;
    border-radius: 0.5rem;
    transition: border-color 0.3s;
  }

  .custom-icon {
    margin-right: 8px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .calendar-dropdown {
    position: absolute;
    z-index: 10;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-top: 0.25rem;
  }

  .calendar {
    display: flex;
    flex-direction: column;
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
  }

  .calendar-cell {
    padding: 0.5rem;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .calendar-cell:hover {
    background: #f0f0f0;
  }
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
</style>
