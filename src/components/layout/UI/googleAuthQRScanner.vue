<template>
    <section class="flex items-center justify-center min-h-screen">
        <div class="2xl:w-[25%] w-1/2 container mx-auto ">
            <div class="logo pb-6 flex justify-center">
                <img src="@/assets/images/logo.svg" alt="">
              </div>
            <h1 class="text-[#b92a32] 2xl:text-[36px] text-[30px] font-[700] uppercase text-center">Google Authenticator</h1>
            <p class="text-[#000000] font-[400] pb-4 text-center">Lorem Ipsum is simply dummy text </p>
                <div class="py-6 border-[1.5px] bg-white rounded-xl flex justify-center">
                   <img src="@/components/icons/qr.svg" alt="">
                </div>
                <div class="pb-4 pt-6">
                    <button class="hover-btn  w-full p-3 rounded-xl text-white bg-gradient-to-b from-[#b72b33] bg-[#962d34] font-[600] uppercase">Scan Qr Code</button>
                </div>
        </div>
    </section>
</template>

<style scoped>
@media(max-width:1366px){
    .logo img {
        width: 150px;
    }
    .logo {
       padding-bottom: 4px;
       margin-top: 10px;
    }
  h1 {
      font-size: 25px;
    }
    .submit-btn {
      padding: 8px;
      font-size: 16px;
    } 
  }
</style>