<template>
    <div  class="w-full " >

        <div class="hidden mx-7 lg:mx-24  lg:flex justify-between items-center pt-16 ">

            <nuxt-link to="/">
                
                <div class="flex items-end">
                    <img src="~/assets/landing-imgs/logoprincipal.png" class="w-10 h-10 object-cover mr-2" alt="" srcset="">
                    <h1 class=" xl:text-[32px] 2xl:text-[38px] 3xl:text-[42px] text-primary font-urbanoR font-semibold">
                        CENTRO PROACTIVA
                    </h1>
                </div>
            </nuxt-link>

            <div class="flex items-end gap-x-5 xl:text-[22px] 2xl:text-[28px] 3xl:text-[29px] text-colortextbold font-urbanoR font-semibold">
                <NuxtLink to="/" 
                active-class="text-primary"
                exact-active-class="font-bold text-primary"
                >
                    <p>HOME</p> 
                </NuxtLink>
                <NuxtLink to="/nosotros"
                active-class="text-primary"
                exact-active-class="font-bold text-primary"
                >
                    <p>NOSOTROS</p>
                </NuxtLink>
                <NuxtLink to="/servicios"
                active-class="text-primary"
                exact-active-class="font-bold text-primary"
                >
                    <p>SERVICIOS</p>
                </NuxtLink>
                <NuxtLink to="/tienda"
                active-class="text-primary"
                exact-active-class="font-bold text-primary">
                    <p>TIENDA VIRTUAL</p>
                </NuxtLink>
                <NuxtLink to="/contacto"
                active-class="text-primary"
                exact-active-class="font-bold text-primary">
                    <p>CONTACTO</p>
                </NuxtLink>
            </div>
        </div>


        <!-- header mobile -->
        <header class=" bg-primary   sticky top-0 z-50  ">
                        <!-- Sidebar mobile -->
                        <div  v-if="!showsidebar"  class="lg:hidden bg-primary  movile-header " role="dialog" aria-modal="true" id="mobile-header">            
                            <div class="fixed inset-0 z-10  bg-slate-700 bg-opacity-50  dark:bg-slate-300 dark:bg-opacity-25" @click="toogleSidebar" id="boton2"></div>
                            <div class="fixed inset-y-0 left-0 z-10 w-[80vw]  bg-primary  overflow-y-auto bg-sidebarcolor dark:bg-secundarydark px-6 pt-3 sm:max-w-sm sm:ring-1  sm:ring-gray-900/10">
                                <span class=" bg-primary  flex flex-col  w-full">
                                    <div class="flex items-center justify-between bg-primary  dark:bg-pflask">
                                        <a href="/">
                                        <span  class="flex flex-row items-center justify-center  ">
                                            <p class="text-white font-medium ">PROACTIVA</p>
                                        </span>
                                        </a>
                                        <!-- boton pantalla pequeña icono cerrara el menu -->
                                        <a href="/">
                                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" >
                                            <!-- <img class="h-9 w-auto " src="~/assets/icons/Logo.svg" alt="Logo"> -->
                                        </button>
                                        </a>
                                    </div>
                    
                                    <div class="mt-6 flow-root     ">
                                        <div class="mt-8">
                                            <div class="grid grid-cols-1 gap-6 " >
                                                <a href="/nosotros" class="flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50">
                                                    <!-- <img class="h-6 mr-4 w-auto " src="~/assets/landing-images/SidebarIconIniit.svg" alt="Logo"> -->
                                                    NOSOTROS
                                                </a>
                                                <a href="/servicios" class=" flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50"> 
                                                    <!-- <img class="h-6 mr-4 w-auto " src="~/assets/landing-images//SidebarIconMyAcount.svg" alt="Logo"> -->
                                                    SERVICIOS
                                                </a>
                                                <a href="/tienda"  class="flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50">
                                                    <!-- <img class="h-6 mr-4 w-auto " src="~/assets/landing-images/SidebarIconSearch.svg" alt="Logo"> -->
                                                    TIENDA VIRTUAL
                                                </a>
                                                <a href="/contacto"  class="flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50">
                                                    <!-- <img class="h-6 mr-4 w-auto " src="~/assets/landing-images/SIdebarIconComunidades.svg" alt="Logo"> -->
                                                     CONTACTO
                                                </a>
                                                <!-- <a href="/app/explora/checkout"  class="flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50">
                                                    <img class="h-6 mr-4 w-auto " src="~/assets/landing-images/SidebarIconCart.svg" alt="Logo">
                                                   SOPORTE
                                                </a> -->
                                          
                                                <!-- <a class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold font-rob leading-7 text-white focus:bg-gray-50">+ CERTIFICADOS</a> -->
                                            </div>
                                            <!-- <div class="py-6">
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Iniciar
                                    sesión</a>
                            </div> -->
                                        </div>
                                    </div>

                                    <div class=" w-64 h-16  flex items-center justify-center absolute bottom-0 right-0">
                                        <button class="flex flex-row items-center"  @click="enabledisableDark" >
                                           <img class="w-6"  :src=!isDark?iconmoon:iconsun  />
                                        </button>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <!-- Navbar content mobile && desktop -->
                        <nav class="mx-auto flex  bg-primary py-2 lg:py-0   items-center justify-between px-2   absolute top-0 w-full " aria-label="Global">
                            <!-- Boton sandwich -->
                            <div class="flex lg:hidden"  @click="toogleSidebar">
                                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" id="boton1">
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" class="text-white" />
                                    </svg>
                                </button>
                            </div>
                            <!-- items nav mobile -->
                            <div class=" flex lg:hidden lg:flex-row  items-center justify-end  p-3  w-full">
                                <a href="/" class="-m-1.5 p-1.5">
                                    <span class="sr-only">Your Company</span>
                                    <!-- logo nav mobile -->
                                    <!-- <img class="w-9 h-9" src="~/assets/icons/Logo.svg" alt="Logo"> -->
      
                                </a>
                                
                            </div>
                            <!-- items nav desktop -->
                            
                            <!-- iniciar sesion solo visible en desktop -->
                            
                        </nav>
        </header>
        
        <div class="border-b-[2px] border-colortextbold mx-7 lg:mx-20  "></div>
        
      
   
    </div>

</template>

<script setup>
import iconmoon from '~/assets/landing-imgs/iconmoon.png'
import iconsun from '~/assets/landing-imgs/iconsun.png'

import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark()
const toggleDark = useToggle(isDark)

const showsidebar = ref(true)

const toogleSidebar = () => {
    showsidebar.value = !showsidebar.value
}



const enabledisableDark = () => {
    toggleDark()

}



</script>

<style>
.nuxt-link-active {
    font-weight: bold;
    background-color: red;
}

</style>