<template> 
    <section class="2x:flex 2xl:space-x-10">
        <div class="w-full 2xl:pb-0 pb-10">
            <div class="flex justify-between">
                <div><h1 class="font-[700] uppercase text-xl pb-2">Payment History:</h1></div>
                <div class="flex items-center space-x-1">
                    <div><img src="@/components/icons/export.svg" alt=""></div>
                    <div class="uppercase">Export</div>
                </div>
            </div>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex flex-col space-y-4">
                <div v-for="invoice in paginatedInvoices" :key="invoice.id" class="flex justify-between space-x-10">
                  <div class="w-full flex justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-[600]">{{ invoice.date }}</div>
                        <div class="pb-2">
                            <span class="font-[600]">Invoice# -</span> {{ invoice.number }}
                        </div>
                    </div>
                    <div class="">
                        <div class="font-[600]">{{ invoice.amount }}</div>
                        <div class="pb-2 text-[#D63D4A] font-[700]">RECEIPT</div>
                    </div>
                  </div>
                  <div class="w-full flex justify-between pt-4 border-b-2 border-[#AEAEAE]">
                    <div class="w-full">
                        <div class="font-[600]">{{ invoice.date }}</div>
                        <div class="pb-2">
                            <span class="font-[600]">Invoice# -</span> {{ invoice.number }}
                        </div>
                    </div>
                    <div class="">
                        <div class="font-[600]">{{ invoice.amount }}</div>
                        <div class="pb-2 text-[#D63D4A] font-[700]">RECEIPT</div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end mt-4 space-x-2">
                    <span
                        v-for="page in totalPages"
                        :key="page"
                        @click="currentPage = page"
                        :class="[
                            'cursor-pointer w-6 h-6 text-center rounded-full',
                            currentPage === page ? 'bg-[#D63D4A] text-white' : ''
                        ]">
                        {{ page }}
                    </span>
                </div>
            </div>
        </div>
        <div class="w-full 2xl:pb-0 pb-6">
            <h1 class="font-[700] uppercase text-xl pb-2">Connect Accounts: </h1>
            <div class="bg-[#E8E8E8] p-4 rounded-lg flex space-x-10">
               <div class="flex flex-col space-y-4 w-full">
                <div class="checkbox-wrapper-45 flex items-center border-b-2 border-[#AEAEAE] pb-3">
                    <input id="cbx-45" type="checkbox"/>
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
                    <label class="text-[#000000] cursor-pointer ml-1 font-[600]" for="cbx-45">TINT</label>
                  </div>
                <div class="checkbox-wrapper-45 flex items-center border-b-2 border-[#AEAEAE] pb-3">
                    <input id="cbx-46" type="checkbox"/>
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
                    <label class="text-[#000000] cursor-pointer ml-1 font-[600]" for="cbx-46">ABI</label>
                  </div>
                <div class="checkbox-wrapper-45 flex items-center border-b-2 border-[#AEAEAE] pb-3">
                    <input id="cbx-47" type="checkbox"/>
                    <label class="cbx" for="cbx-47">
                      <div class="flip">
                        <div class="front"></div>
                        <div class="back">
                          <svg width="16" height="14" viewBox="0 0 16 14">
                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                          </svg>
                        </div>
                      </div>
                    </label>
                    <label class="text-[#000000] cursor-pointer ml-1 font-[600]" for="cbx-47">BACKYARD Fleet Management</label>
                  </div>
               </div>
               <div class="flex flex-col space-y-4 w-full">
                <div class="checkbox-wrapper-45 flex items-center border-b-2 border-[#AEAEAE] pb-3">
                    <input id="cbx-48" type="checkbox"/>
                    <label class="cbx" for="cbx-48">
                      <div class="flip">
                        <div class="front"></div>
                        <div class="back">
                          <svg width="16" height="14" viewBox="0 0 16 14">
                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                          </svg>
                        </div>
                      </div>
                    </label>
                    <label class="text-[#000000] cursor-pointer ml-1 font-[600]" for="cbx-48">HQ Fleet Management </label>
                  </div>
                <div class="checkbox-wrapper-45 flex items-center border-b-2 border-[#AEAEAE] pb-3">
                    <input id="cbx-49" type="checkbox"/>
                    <label class="cbx" for="cbx-49">
                      <div class="flip">
                        <div class="front"></div>
                        <div class="back">
                          <svg width="16" height="14" viewBox="0 0 16 14">
                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                          </svg>
                        </div>
                      </div>
                    </label>
                    <label class="text-[#000000] cursor-pointer ml-1 font-[600]" for="cbx-49">Street Smarts</label>
                  </div>
                <div class="checkbox-wrapper-45 flex items-center border-b-2 border-[#AEAEAE] pb-3">
                    <input id="cbx-50" type="checkbox"/>
                    <label class="cbx" for="cbx-50">
                      <div class="flip">
                        <div class="front"></div>
                        <div class="back">
                          <svg width="16" height="14" viewBox="0 0 16 14">
                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                          </svg>
                        </div>
                      </div>
                    </label>
                    <label class="text-[#000000] cursor-pointer ml-1 font-[600]" for="cbx-50">Fleet Wire</label>
                  </div>
               </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const invoices = ref([
    { id: 1, date: '9/13/24', number: 'B721C34D-0037', amount: '$269.50' },
    { id: 2, date: '9/13/24', number: 'B721C34D-0038', amount: '$150.00' },
    { id: 3, date: '9/12/24', number: 'B721C34D-0039', amount: '$320.75' },
    { id: 4, date: '9/11/24', number: 'B721C34D-0040', amount: '$450.00' },
    { id: 5, date: '9/10/24', number: 'B721C34D-0041', amount: '$89.99' },
    { id: 6, date: '9/09/24', number: 'B721C34D-0042', amount: '$199.99' },
    { id: 7, date: '9/08/24', number: 'B721C34D-0043', amount: '$299.99' },
    { id: 8, date: '9/07/24', number: 'B721C34D-0044', amount: '$159.99' },
    { id: 9, date: '9/06/24', number: 'B721C34D-0045', amount: '$349.99' },
    { id: 10, date: '9/05/24', number: 'B721C34D-0046', amount: '$399.99' },
]);

const itemsPerPage = 3;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(invoices.value.length / itemsPerPage));

const paginatedInvoices = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return invoices.value.slice(start, start + itemsPerPage);
});

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}
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
  
