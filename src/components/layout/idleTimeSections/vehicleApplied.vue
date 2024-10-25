<template>
    <section class="">
      <h1 class="font-[700] text-2xl pb-3">Vehicles Applied</h1>
      <div class="border-b-[1px] pb-16 border-[#707070]">
        <div
        class="table-container border-2 rounded-lg">
        <table class="w-full">
          <thead class="border-gray-300">
            <tr class="text-xs text-left">
              <th class="border-r-2 border-b-2 p-2 py-6">Alert #</th>
              <th class="border-r-2 border-b-2 p-2">Vehicle ID</th>
              <th class="border-r-2 border-b-2 p-2 w-1/2">Description</th>
              <th class="border-r-2 border-b-2 p-2">Date Time</th>
              <th class="border-b-2 p-2">Action</th>                 
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-xs text-left"
              v-for="item in tableData"
              :key="item.index">
              <td class="border-r-2 border-b-2 p-2 text-center">{{ item.alterNo }}</td>
              <td class="border-r-2 border-b-2 p-2">
               <div class="flex space-x-2 items-center"> 
               <div>
                  <img
                  src="@/assets/images/car-img-red.svg"
                  alt="Vehicle Photo"/>
               </div>
               <div>
                  <div class="font-[600]">{{item.vehicleId}}</div>
                  <div>{{item.made}} - <span>{{item.model}}</span> </div>
                  <div>{{item.nickname}}</div>
               </div>
              </div>
              </td>
              <td class="border-r-2 border-b-2 p-2">{{ item.description }}</td>
              <td class="border-r-2 border-b-2 p-2">
                  <div> {{ item.date }} </div>
                  <div> {{ item.time }} </div>
              </td>
              <td class="border-b-2 p-2">
               <div class="flex justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9A9A" class="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg> 
               </div>                     
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
   
    </section>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue'
  
    const tableData = ref([
      {
        alterNo :'01',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'01',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'01',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
      {
        alterNo :'01',
        vehicleId: 'AB123X2',
        made:'Chevy Cruze',
        model: '2021',
        nickname: 'Nickname here',
        description: 'Speed exceeded 95mph - Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        date: '28 Aug, 2024',
        time: '01: 25 am',
      },
  ]);
  </script>
  
  <style scoped>
  .dropdown-enter-active, .dropdown-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .dropdown-enter-from, .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
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
  .submenu::before {
    content: "";
    position: absolute;
    top: -9px;
    left: 20px;
    width: 15px;
    height: 15px;
    background: #ffffff;
    border-left: 2px solid #D9D9D9 ;
    border-top: 2px solid #D9D9D9 ;
    transform: rotate(45deg);
    z-index: -3;
  }
  .list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  50% {
    transform: scale(1);
  }
}
  ::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  
  }
  </style>
  