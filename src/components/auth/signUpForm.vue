<template>
    <section class="flex items-center justify-center min-h-screen">
      <div class="2xl:w-[35%] w-1/2 container mx-auto">
        <div class="pb-6 flex justify-center">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
      <div class="text-center">
        <h1 class="text-[#B92A32] 2xl:text-[40px] text-[30px] font-[700] uppercase">Sign-Up</h1>
        <p class="text-[#000000] font-[500] pb-4">
            Create Your Account Now
        </p>
      </div>
       <div class="flex justify-center pb-6">
        <button
        class="hover-btn items-center space-x-2 bg-gradient-to-r from-[#F7AE35] bg-[#BB2E34] px-10 p-3.5 rounded-md shadow-lg hover:bg-gradient-to-l hover:from-[#f7ab35] hover:bg-[#be3333]" >
        <div class="text-white uppercase font-[600]">Sign-in With Google</div>
      </button>
       </div>
       <div class="pb-3 text-center">
        <span class="text-[#6b6b6b] font-[500] text-xl">OR-</span> <span class="text-[#bf444b] font-[600] text-xl">Sign-up</span> <span class="text-[#6b6b6b]">Using Your Email</span>
    </div>
        <form action="" class="w-full">
          <div class="pb-4">
            <input 
              type="text" placeholder="Enter Your Full Name"
              class="w-full border-[0.5px] border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]" />
          </div>
          <div class="pb-4">
            <input 
              type="email" placeholder="Enter Your Email Address"
              class="w-full border-[0.5px] border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]" />
          </div>
          <div class="pb-4">
            <input type="text" placeholder="Enter Your Password"
              class="w-full border-[0.5px] border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]" />
          </div>
          <div class="">
            <input type="text" placeholder="Confirm Password"
              class="w-full border-[0.5px] border-[#a0a0a0] p-3.5 px-6 rounded-lg outline-none placeholder:text-[#808080]" />
          </div>
          <div class="py-4">
            <div class="checkbox-wrapper-45 flex items-center">
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
                <label class="text-[#000000] cursor-pointer ml-3" for="cbx-45">I Accept The <span class="text-[#BD3134] font-[600]">Terms & Conditions</span></label>
              </div>
        </div>
        <div class="pb-4">
            <router-link :to="{name: 'CodeVerification'}" class="hover-btn text-xl text-center w-full p-3.5 rounded-lg text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[700] uppercase">Submit Now</router-link>
        </div>
        <div class="text-center">
            <span class="text-[#000000]">Already A Member?</span> <router-link :to="{name : 'Login'}" class="text-[#ba2b33] font-[600]">Sign In</router-link>
        </div>
        </form>
      </div>
    </section>
  </template>
  
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
  