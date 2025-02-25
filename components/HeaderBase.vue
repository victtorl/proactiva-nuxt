<template>

<div class="bg-gradient-to-r  pb-0 lg:pb-24  " >
    <header class="bg-white dark:bg-gray-800 shadow-lg hidden lg:block fixed z-50 w-full ">
        <nav class="container mx-auto px-4 py-6 flex justify-between items-center centradoPgrande">
            <!-- <a href="#" class="text-2xl font-bold text-indigo-800 dark:text-white transition-colors duration-300">
                Logo
            </a> -->
            <nuxt-link to="/">
                
                <div class="flex items-end">
                    <img src="~/assets/landing-imgs/logoprincipal.png" class="w-10 h-10 object-cover mr-2" alt="" srcset="">
                    <h1 class="nav-link xl:text-[26px] 2xl:text-[28px] 3xl:text-[32px] text-primary font-rob font-semibold">
                        CENTRO PROACTIVA
                    </h1>
                </div>
            </nuxt-link>
                
            <div class="hidden md:flex space-x-6">
                <NuxtLink to="/" active-class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors duration-300" exact-active-class="font-bold text-primary  text-primary" >
                    <a>Inicio</a>
                </NuxtLink>
                 <NuxtLink to="/nosotros" active-class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors duration-300" exact-active-class="font-bold text-primary  text-primary">
                     <a>Nosotros</a>
                 </NuxtLink>
                 <!-- <NuxtLink to="/servicios" active-class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors duration-300" exact-active-class="font-bold text-primary  text-primary">
                     <a>Servicios</a>
                 </NuxtLink> -->
                 <!-- <NuxtLink to="/tienda" active-class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors duration-300" exact-active-class="font-bold text-primary  text-primary">
                     <a >Tienda</a>
                 </NuxtLink> -->
                 <!-- <NuxtLink to="/contacto">
                     <a  class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors duration-300">Contácto</a>
                 </NuxtLink> -->

                                          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
                <MenuButton  >
                    <div @click="goServices()" class="z-20 " active-class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors duration-300" exact-active-class="font-bold text-primary  text-primary" >
                        Servicios
                    </div>
                    <!-- <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> -->
                </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 left-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden cursor-pointer">
                <MenuItem v-slot="{ active }" @click="goTo('programastitle')" >
                  <div  :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Programas</div>
                </MenuItem>
                <MenuItem v-slot="{ active }" @click="goTo('asesoriastitle')" >
                  <div  :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Asesorias</div>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

            </div>


            <NuxtLink to="/contacto">
              <div 
               @click="goToInicio"
              class="home-two-btn-white-rev home-two-btn-white-rev-sm group bg-it-blue border-it-blue ">
                <span class="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-it-blue font-inter ">
                  Contáctanos
                </span>
                <svg
                  class="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="transition-all duration-300 group-hover:stroke-it-blue stroke-white"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </NuxtLink>
        </nav>
        <div id="mobileMenu" class="mobile-menu md:hidden bg-white dark:bg-gray-800 shadow-lg absolute w-full left-0 transform -translate-y-full opacity-0">
            <div class="container mx-auto px-4 py-4 space-y-4">
                <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-primary/20 dark:hover:text-white transition-colors duration-300">Home</a>
                <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-primary/20 dark:hover:text-white transition-colors duration-300">About</a>
                <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-primary/20 dark:hover:text-white transition-colors duration-300">Services</a>
                <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-primary/20 dark:hover:text-white transition-colors duration-300">Contact</a>
                <a href="#" class="inline-block bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors duration-300">Sign Up</a>
            </div>
        </div>
    </header>

      <!-- header mobile -->
      <header class=" bg-[#86654B]    fixed w-full top-0 z-50   ">
                        <!-- Sidebar mobile -->
                        <div  v-if="!showsidebar"  class="lg:hidden  movile-header " role="dialog" aria-modal="true" id="mobile-header">            
                            <div class="fixed inset-0 z-10  bg-slate-700 bg-opacity-50  dark:bg-slate-300 dark:bg-opacity-25" @click="toogleSidebar" id="boton2"></div>
                            <div class="fixed inset-y-0 left-0 z-10 w-[80vw]  bg-[#86654B]  overflow-y-auto bg-sidebarcolor dark:bg-secundarydark px-6 pt-3 sm:max-w-sm sm:ring-1  sm:ring-gray-900/10">
                                <span class="   flex flex-col  w-full">
                                    <div class="flex items-center justify-between   dark:bg-pflask">
                                        <NuxtLink @click="toogleSidebar" to="/">
                                        <span  class="flex flex-row items-center justify-center  ">
                                            <p class="text-white font-medium ">PROACTIVA</p>
                                        </span>
                                        </NuxtLink>
                                        <!-- boton pantalla pequeña icono cerrara el menu -->
                                        <NuxtLink @click="toogleSidebar" href="/">
                                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" >
                                            <!-- <img class="h-9 w-auto " src="~/assets/icons/Logo.svg" alt="Logo"> -->
                                            X
                                        </button>
                                        </NuxtLink>
                                    </div>
                    
                                    <div class="mt-0 flow-root     ">
                                        <div class="mt-6">
                                            <div class="grid grid-cols-1 gap-6 " >
                                                <NuxtLink @click="toogleSidebar" to="/nosotros" class="flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50">
                                                    <!-- <img class="h-6 mr-4 w-auto " src="~/assets/landing-images/SidebarIconIniit.svg" alt="Logo"> -->
                                                    NOSOTROS
                                                </NuxtLink>
                                                <!-- <a href="/services" class=" flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50"> 
                                                    
                                                    SERVICIOS
                                                </a> -->
                                                     <Menu as="div" class="relative ">
                                                        <div>
                                                            <MenuButton  >
                                                                <div @click="goServices()" class="z-20 " active-class="nav-link text-white  hover:text-primary dark:hover:text-white transition-colors duration-300" exact-active-class="font-bold text-primary  text-primary" >
                                                                    <p class="text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50" >SERVICIOS</p>
                                                                </div>
                                                                <!-- <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> -->
                                                            </MenuButton>
                                                        </div>
                                                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                                        <MenuItems class="absolute right-0 left-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden cursor-pointer">
                                                            <MenuItem v-slot="{ active }" @click="goTo('programastitle')" >
                                                            <div @click="toogleSidebar" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Programas</div>
                                                            </MenuItem>
                                                            <MenuItem v-slot="{ active }" @click="goTo('asesoriastitle')" >
                                                            <div @click="toogleSidebar" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Asesorias</div>
                                                            </MenuItem>
                                                        </MenuItems>
                                                        </transition>
                                                    </Menu>
                                                <NuxtLink @click="toogleSidebar" to="/tienda"  class="flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50">
                                                    <!-- <img class="h-6 mr-4 w-auto " src="~/assets/landing-images/SidebarIconSearch.svg" alt="Logo"> -->
                                                    TIENDA VIRTUAL
                                                </NuxtLink>
                                                <NuxtLink  @click="toogleSidebar" to="/contacto"  class="flex flex-row items-center  text-xl font-normal font-rob leading-7 text-white focus:bg-slate-700 focus:opacity-50">
                                                    <!-- <img class="h-6 mr-4 w-auto " src="~/assets/landing-images/SIdebarIconComunidades.svg" alt="Logo"> -->
                                                     CONTACTO
                                                </NuxtLink>
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

                                    <!-- <div class=" w-64 h-16  flex items-center justify-center absolute bottom-0 right-0">
                                        <button class="flex flex-row items-center"  @click="enabledisableDark" >
                                           <img class="w-6"  :src=!isDark?iconmoon:iconsun  />
                                        </button>
                                    </div> -->
                                </span>
                            </div>
                        </div>
                        <!-- Navbar content mobile && desktop -->
                        <nav class="mx-auto flex  bg-[#86654B] py-2 lg:py-0   items-center justify-between px-2   absolute top-0 w-full " aria-label="Global">
                      
                            <!-- items nav mobile -->
                            <div class=" flex lg:hidden lg:flex-row  items-center justify-end  p-3  w-full">
                                <a href="/" class="-m-1.5 p-1.5">
                                    <span class="sr-only">Your Company</span>
                                    <!-- logo nav mobile -->
                                    <!-- <img class="w-9 h-9" src="~/assets/icons/Logo.svg" alt="Logo"> -->
      
                                </a>
                                
                            </div>
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
                            <!-- items nav desktop -->
                            
                            <!-- iniciar sesion solo visible en desktop -->
                            
                        </nav>
        </header>

   
</div>

</template>


<style>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
}
.nav-link {
    position: relative;
    overflow: hidden;
}
.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-out;
}
.nav-link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}
.mobile-menu {
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
</style>


<script setup>
import iconmoon from '~/assets/landing-imgs/iconmoon.png'
import iconsun from '~/assets/landing-imgs/iconsun.png'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'


const route=useRouter()

let stylink=ref(true)
let goServices=() => {
    route.push({ path: "/services" })
    stylink.value=false
}





import { useDark, useToggle } from '@vueuse/core';
import { goTo } from '~/codesutils/utils'
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