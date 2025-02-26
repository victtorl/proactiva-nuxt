<template>

    <div class="pt-[180px] w-full flex justify-center">
      <div class="w-full px-6 lg:px-16  font-manrope 3xl:w-maxdesk 3xl:px-0">
        <section class=" py-8 antialiased dark:bg-gray-900 md:py-16  ">
          <div class="mx-auto   px-4 2xl:px-0 ">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl ">Resumen cotización</h2>
  
            <div class=" md:gap-6 lg:flex lg:items-start xl:gap-x-8 ">
  
  
              <div class="mx-auto w-full">
                <!-- items cart -->
                <div class="flex flex-col gap-y-6 ">
                  <div v-for="item in cartST.items"
                    class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                    <div class="space-y-4 md:flex md:items-center flex-row md:flex-col xl:flex-row md:justify-between md:gap-6 md:space-y-0">
                      <a class="shrink-0 md:order-1  flex items-center px-6">
                        <img class="md:h-24  md:w-44   dark:hidden" :src="item.defImageurl" alt="imac image" />
                        <img class="hidden h-20 w-20 dark:block" :src="item.defImageurl" alt="imac image" />
                      </a>
  
  
                      <div class="flex items-center  justify-center lg:justify-between md:order-3 md:justify-end">
                        <div class="flex items-center">
                          <button @click="cartST.updateQuantity(item.id,item.quantity-1)" type="button"
                            id="decrement-button" data-input-counter-decrement="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h16" />
                            </svg>
                          </button>
                          <p
                            class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
                            {{ item.quantity }}
                          </p>
                          <button @click="cartST.updateQuantity(item.id,item.quantity+1)" type="button"
                            id="increment-button" data-input-counter-increment="counter-input"
                            class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 1v16M1 9h16" />
                            </svg>
                          </button>
                        </div>
  
                      </div>
  
                      <div
                        class="w-full min-w-0 flex flex-col justify-between  space-y-4 md:order-2 md:max-w-[200px]  px-6">
                        <a class="text-base font-medium text-gray-900 hover:underline dark:text-white text-center ">{{ item.nombre
                          }}</a>
  
                        <div class="flex items-center justify-center  gap-4 ">
  
                          <button @click="cartST.removeItem(item.id)" type="button" class="inline-flex items-center ">

                              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5001 3.48283V3.70962C14.4548 3.79701 15.4017 3.91194 16.3398 4.05362C16.6871 4.10607 17.0332 4.16219 17.3781 4.22194C17.7863 4.29263 18.0598 4.6808 17.9891 5.08894C17.9184 5.49708 17.5302 5.77062 17.1221 5.69992C17.0525 5.68787 16.9829 5.67596 16.9131 5.66421L15.9077 18.7347C15.7875 20.2977 14.4842 21.5046 12.9166 21.5046H5.08369C3.51608 21.5046 2.21276 20.2977 2.09253 18.7347L1.0871 5.66421C1.0174 5.67596 0.947739 5.68787 0.878134 5.69992C0.469998 5.77062 0.0818265 5.49708 0.011128 5.08894C-0.0595705 4.68081 0.213976 4.29263 0.622112 4.22194C0.96701 4.16219 1.31315 4.10607 1.66048 4.05362C2.59858 3.91194 3.5454 3.79701 4.50012 3.70962V3.48283C4.50012 1.91835 5.71265 0.582821 7.31556 0.531546C7.87491 0.513653 8.43648 0.504639 9.00012 0.504639C9.56377 0.504639 10.1253 0.513653 10.6847 0.531546C12.2876 0.582821 13.5001 1.91835 13.5001 3.48283ZM7.36352 2.03078C7.90689 2.0134 8.45247 2.00464 9.00012 2.00464C9.54778 2.00464 10.0934 2.0134 10.6367 2.03078C11.3913 2.05492 12.0001 2.68857 12.0001 3.48283V3.59546C11.0078 3.5352 10.0075 3.50464 9.00012 3.50464C7.99278 3.50464 6.99249 3.5352 6.00012 3.59546V3.48283C6.00012 2.68857 6.6089 2.05492 7.36352 2.03078ZM7.00872 7.97581C6.9928 7.56191 6.64436 7.23927 6.23045 7.25519C5.81654 7.27111 5.49391 7.61956 5.50983 8.03346L5.85599 17.0335C5.8719 17.4474 6.22035 17.77 6.63426 17.7541C7.04816 17.7382 7.3708 17.3897 7.35488 16.9758L7.00872 7.97581ZM12.4895 8.03346C12.5054 7.61956 12.1828 7.27111 11.7689 7.25519C11.355 7.23927 11.0065 7.56191 10.9906 7.97581L10.6444 16.9758C10.6285 17.3897 10.9512 17.7382 11.3651 17.7541C11.779 17.77 12.1274 17.4474 12.1433 17.0335L12.4895 8.03346Z" fill="#EB320B"/>
                              </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end items cart -->
              </div>
  
  
  
              <div class="mx-auto  w-full" id="element-to-print">
                <div
                  class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p class="text-xl font-semibold text-gray-900 dark:text-white">Lista detallada</p>
  
                  <div class="space-y-4">
                    <div class="space-y-2">
                      <dh class="flex items-center justify-between gap-4">
                        <dt class="text-base font-medium text-gray-900 dark:text-white w-64 ">Nombre</dt>
                        <dt class="text-base font-medium text-gray-900 dark:text-white  w-16 ">Precio</dt>
                        <dd class="text-base font-medium text-gray-900 dark:text-white w-16 ">Cantidad</dd>
                      </dh>
                      <dl class="flex items-center justify-between gap-4 " v-for="item in cartST.items">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400 w-64 ">{{item.nombre}}</dt>
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400   w-16 "> {{item.price}}</dt>
                        <dd class="text-base font-medium text-gray-900 dark:text-white w-16 text-end ">{{ item.quantity }}
                        </dd>
                      </dl>
                    </div>
  
                    <dl
                      class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt class="text-base font-bold text-gray-900 dark:text-white">Total items</dt>
                      <dd class="text-base font-bold text-gray-900 dark:text-white">{{ cartST.totalItems }}</dd>
                    </dl>
                    <dl
                      class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt class="text-base font-bold text-gray-900 dark:text-white">Total precio</dt>
                      <dd class="text-base font-bold text-gray-900 dark:text-white">S/. {{ cartST.totalPrice }}</dd>
                    </dl>
                  </div>
  
                  <a href="#"
                    class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed
                    to Checkout</a>
  
                  <div class="flex items-center justify-center gap-2">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> o </span>
                    <NuxtLink to="/services" title=""
                      class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                      Agregar mas servicios
                      <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </section>
      </div>
  
  
    </div>
  
    <!-- <button class="w-64 h-12 px-4 py-2 bg-red-500" @click="savepdf">opcion PDF</button> -->
    <!-- <button class="w-64 h-12 px-4 py-2 bg-green-dark" @click="sendToWhatsApp">Opcion Wsp</button> -->
    <div class="w-full  flex justify-end pb-8">
      <div class="w-full px-6 lg:px-16  flex justify-center font-manrope 3xl:w-maxdesk 3xl:px-0" v-if="cartST.totalItems>0" >
        <div @click="abrirModal"
          class="home-two-btn-bg w-64  rounded-2xl py-3.5 group   flex flex-row justify-center items-center bg-elecktraamarillo hover:bg-elecktranegro cursor-pointer text-black mt-2.5 before:bg-it-black after:bg-it-black">
          <span 
            class="relative z-10 text-base font-semibold text-black transition-all duration-300 group-hover:text-elecktraamarillo  font-inter">
            Enviar Cotización
          </span>
        </div>
      </div>
    </div>
  
  
  
    <!-- /////modal -->
    <div class="w-full h-full ">
      <UModal v-model="estadomodal" fullscreen :ui="{ background: 'bg-dark-500 dark:bg-transparent' }">
        <UCard :ui="{
          base: 'h-full w-full flex flex-col',
          rounded: '',
          background: 'bg-dark-600 dark:bg-transparent',
          body: {
            base: 'grow'
          }
        }">
  
          <div class="flex items-center justify-between ">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            </h3>
          </div>
  
          <div class="w-full h-full grid grid-cols-1 place-items-center content-center ">
  
            <div class="w-[100%] md:w-[80%]  h-full ">
  
              <div class="w-full h-auto flex flex-col justify-start bg-white items-center py-0 md:py-4 md:pt-6 relative">
  
                <div class="absolute -top-0 right-0 md:-top-0 md:-right-0 cursor-pointer hover:bg-elecktraamarillo z-20 hover:rounded-lg"
                  @click="cerrarModal">
  
                  <div class=" ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
  
                  </div>
  
                </div>
  
  
                <div class="isolate bg-white px-6  lg:px-8 ">
                  <div
                    class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true">
                    <div
                      class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                  </div>
                  <div class="mx-auto max-w-2xl text-center py-4">
                    <p class="mt-2 text-lg/8 text-gray-600">Completa los campos para enviar tu cotización
                    </p>
                  </div>
  
                  <form action="#" method="POST" class="mx-auto  max-w-xl ">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div class="sm:col-span-2">
                        <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Nombre Completo</label>
                        <div class="mt-2.5">
                          <input type="text" name="first-name" id="first-name" autocomplete="given-name" required v-model="stateform.nombre"
                            :class="{ 'border-red-500 border-2': v$.nombre.$errors.length }"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6"/>
                          </div>
                      </div>
                      <div class="sm:col-span-2">
                        <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">RUC o DNI</label>
                        <div class="mt-2.5">
                          <input type="number" name="first-name" id="first-name" autocomplete="given-name" required v-model="stateform.rucdni"
                            :class="{ 'border-red-500 border-2': v$.rucdni.$errors.length }"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset no-spinners  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6"/>
                          </div>
                      </div>
  
                      <div class="sm:col-span-2">
                        <label for="email" class="block text-sm/6 font-semibold text-gray-900">Correo</label>
                        <div class="mt-2.5">
                          <input type="email" name="email" id="email" autocomplete="email" required  v-model="stateform.email"
                          :class="{ 'border-red-500 border-2': v$.email.$errors.length }"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
                        </div>
                      </div>
                      <div class="sm:col-span-2">
                        <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Teléfono</label>
                        <div class="relative mt-2.5">
  
                          <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" required v-model="stateform.telefono"
                          :class="{ 'border-red-500 border-2': v$.telefono.$errors.length }"
                            class="block w-full rounded-md border-0 px-3.5 py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-elecktraamarillo sm:text-sm/6" />
                        </div>
                      </div>
                    </div>
                    <div class="mt-10" >
                      <button type="submit"  @click="sendToWhatsApp"
                        class="block w-full rounded-md bg-main-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">COTIZAR</button>
                    </div>
                  </form>
  
                </div>
  
              </div>
  
  
            </div>
          </div>
        </UCard>
      </UModal>
    </div>
    <!-- modal end -->
  
  
  
  </template>
  
  
  
  
  <script setup>
  import { FwbButton, FwbModal } from 'flowbite-vue'
  import html2pdf from 'html2pdf.js'
  import { useVuelidate } from '@vuelidate/core'
  import { required,helpers,email,minLength } from '@vuelidate/validators'
  
  const cartST=useCartStore()
  
  
  
  
  
  function savepdf(){
    html2pdf(document.getElementById('element-to-print')),{
      margin:1,
      filename:'i-was-html.pdf'
    }
  
  }
  
  //modal
  const estadomodal = ref(false)
  
  function cerrarModal() {
    estadomodal.value = false
    unselectVariant() //quita la seleccion de variante
  }
  function abrirModal() {
    // console.log(itemcart.value);     
    estadomodal.value = true
  }
  
  //formulario
  
  const stateform=reactive({
    nombre:'',
    rucdni:'',
    email:'',
    telefono:''
  })
  
  const rules = computed(() => {
      return {
          nombre: {
              required: helpers.withMessage('Este campo es requerido', required),
              // $autoDirty: true ,
          },
          rucdni: {
              required: helpers.withMessage('Este campo es requerido', required),
               minLength: helpers.withMessage(' debe tener mínimo 8 caracteres', minLength(8)),
              // $autoDirty: true ,
          },
          email: {
              required: helpers.withMessage('Ingrese un correo', required),
               email: helpers.withMessage('Ingrese un correo válido', email),
              // $autoDirty: true ,
          },
          telefono: {
              required: helpers.withMessage('Ingrese una contraseña', required),
              // $autoDirty: true ,
          },
      }
  })
  
  const v$ = useVuelidate(rules, stateform);
  
  
  //SEND DETAIL CARRITO
     const sendToWhatsApp=()=> {
      v$.value.$touch();
      if (!v$.value.$error) {
      const cartST=useCartStore()
        let message = `🛒 *Detalle del Carrito de Compras:*\n *Nombre: ${stateform.nombre}* \n *RUC: ${stateform.rucdni}* \n *Correo: ${stateform.email}*\n *Mobil: ${stateform.telefono}*\n \n`;
        cartST.items.forEach(item => {
          message += `${item.nombre} || ${item.codigo} ||  X${item.quantity}\n`;
        });
        message += `\n*Total productos: ${cartST.totalItems}*`;
  
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "+51982043391"; // Número con código de país  // 
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
        cartST.clearCart()
        window.open(whatsappUrl, "_blank");
      }
     }
    
  
  
  </script>
  
  
  <style>
   .no-spinners {
           -moz-appearance: textfield;
        }
        
        .no-spinners::-webkit-outer-spin-button,
        .no-spinners::-webkit-inner-spin-button {
           -webkit-appearance: none;
           margin: 0;
        }
  </style>