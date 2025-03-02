<template>
<div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" :src="detailST.detailproduct.defImageurl" alt="Product Image">
                </div>
               
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{{ detailST.detailproduct.name }}</h2>
            
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Precio: </span>
                        <span class="text-gray-600 dark:text-gray-300">S/.{{ detailST.detailproduct.price }}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Coach: </span>
                        <span class="text-gray-600 dark:text-gray-300">{{ detailST.detailproduct.author.name }}</span>
                    </div>
                </div>

                <div >
                    <span class="font-bold text-gray-700 dark:text-gray-300">Descripción del {{ detailST.detailproduct.category.name.toLowerCase() }} :</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm m-2">
                       {{ detailST.detailproduct.description }}
                    </p>
                </div>

                <div class="flex items-center gap-x-4 -mx-2 my-6">
                    <!-- <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div> -->

                <div 
               @click="sendItemsToCart(detailST.detailproduct.id)"
              class="home-two-btn-white-rev home-two-btn-white-rev-sm group bg-it-blue border-it-blue cursor-pointer">
                <span @click="abrirModal" class="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-it-blue font-inter ">
                  Agregar al carrito
                </span>
                <svg 
                viewBox="-10 0 42 24"
                class="relative w-10 z-10"
                fill="none" xmlns="http://www.w3.org/2000/svg">
               
                  <path 
                  class="transition-all duration-300 group-hover:stroke-it-blue stroke-white"
                  d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                   stroke="white"
                    stroke-width="2" 
                    stroke-linecap="round"
                     stroke-linejoin="round">
                    </path> 
                  
                </svg>

              </div>

              <div class="hidden sm:block">
                    <div type="button" 
                        class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">

                        <span @click="minusQuantityItem()" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"></path>
                        </svg>
                        </span>

                        <span class="mx-2.5"> {{ cantstage }}</span>

                        <span @click="addQuantityItem()" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                            <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"></path>
                        </svg>
                        </span>

                    </div>
                </div>
            </div>

            </div>
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

              <div class="absolute -top-0 right-0 md:-top-0 md:-right-0 cursor-pointer hover:bg-elecktraamarillo  hover:rounded-lg"
                @click="cerrarModal">

                <div class=" ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </div>

              </div>



              <div class="flex flex-col justify-between items-start   gap-x-10 py-10" id="#interiores">
                <div class="hidden md:flex flex-row items-center justify-start  w-full px-8 gap-x-4  mt-0"
                  @click="cerrarModal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.25 12.0046C2.25 6.61986 6.61522 2.25464 12 2.25464C17.3848 2.25464 21.75 6.61986 21.75 12.0046C21.75 17.3894 17.3848 21.7546 12 21.7546C6.61522 21.7546 2.25 17.3894 2.25 12.0046ZM15.6103 10.1906C15.8511 9.85351 15.773 9.3851 15.4359 9.14434C15.0989 8.90358 14.6305 8.98165 14.3897 9.31871L11.1543 13.8483L9.53033 12.2243C9.23744 11.9314 8.76256 11.9314 8.46967 12.2243C8.17678 12.5172 8.17678 12.9921 8.46967 13.285L10.7197 15.535C10.8756 15.6909 11.0921 15.7703 11.3119 15.7521C11.5316 15.7339 11.7322 15.62 11.8603 15.4406L15.6103 10.1906Z"
                      fill="#0F172A" />
                  </svg>
                  <p class="font-josefS font-normal text-[#6B6969] text-sm md:text-xl lg:text-2xl py-6">Lo que incluyes
                    en tu cotización</p>
                </div>

                <div class="flex flex-row justify-between items-start    sm:gap-x-10  p-4 lg:p-10 ">
                  <span class="flex flex-row gap-x-1 xs:gap-x-3 h-28 ">
                    <!-- <img :src="props.imagen" alt="" srcset=""> -->
                    <span class="flex flex-col  justify-between ">
                      <p
                        class="font-josefS font-bold text-graytitles text-xs xs:w-auto  lg:w-full xs:text-sm md:text-xl ">
                        {{ nombre }}
                      </p>
                    </span>
                  </span>
                  <span class="flex flex-col  place-items-end justify-between h-28">


                    <span class="flex flex-col md:flex-row justify-center items-end md:gap-x-6  ">
                      <div class="flex flex-row md:flex-row items-center">
                        <span @click="()=>{}"
                          class="cursor-pointer  p-2 rounded-lg border-2 border-elecktranegro/20">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"></path>
                          </svg>
                        </span>

                        <!-- <span class=" text-center w-8"> {{ cartST.items.find(u => u.id === props.id).quantity }}</span> -->

                        <span @click="()=>{}"
                          class="cursor-pointer  p-2 rounded-lg border-2 border-elecktranegro/20">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"></path>
                          </svg>
                        </span>
                      </div>
                    </span>

                  </span>
                </div>


                <p class="w-full text-xs px-8 pb-2 text-[#A2A2A2] ">El producto seleccionado pueden agotarse
                  rápidamente. Cotizalos pronto.</p>
                <div class="flex flex-col lg:flex-row  gap-x-4 px-8 gap-y-4  w-full ">

                  <h2 @click="cerrarModal"
                    class="font-josefS w-full xl:w-96 font-bold text-lg md:text-2xl underline cursor-pointer  bg-white rounded-3xl h-10 text-slate-700  ">
                    Seguir comprando</h2>

                  <NuxtLink to="/mycart" @click="cerrarModal">
                    <button class="font-josefS w-full lg:w-96 font-bold text-sm md:text-xl bg-primaryc rounded-3xl h-10 text-black px-16
                                        bg-elecktraamarillo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryhov
                                    ">
                      Abrir Carrito
                    </button>
                  </NuxtLink>

                </div>

              </div>

            </div>


          </div>
        </div>
      </UCard>
    </UModal>
  </div>

</template>

<script setup>
const estadomodal = ref(false)

function cerrarModal() {
  estadomodal.value = false
  unselectVariant() //quita la seleccion de variante
}
function abrirModal() {
  // console.log(itemcart.value);     
  estadomodal.value = true
}

const detailST=useDetailProduct()

//logica carrito
const cartST = useCartStore()


const cantstage = ref(1)

function addQuantityItem() {
  cantstage.value = cantstage.value + 1
}

function minusQuantityItem() {
  cantstage.value = cantstage.value - 1
  if (cantstage.value < 1) {
    cantstage.value = 1
  }
}



function addQuantityItemModal(idprodselect) {

  let existItemSelectedInCart = cartST.items.find(u => u.id === idprodselect)
  if (existItemSelectedInCart) {
    cartST.updateQuantity(existItemSelectedInCart?.id, existItemSelectedInCart?.quantity + 1)
  }
}

function minusQuantityItemModal(idprodselect) {
  let existItemSelectedInCart = cartST.items.find(u => u.id === idprodselect)
  if (existItemSelectedInCart) {
    cartST.updateQuantity(existItemSelectedInCart?.id, existItemSelectedInCart?.quantity - 1)
  }
}


const itemcart = computed(() => {
  return {
    id: props.id,
    nombre: props.nombre,
    price:props.price,
    description:props.description,
    category:props.category,
    imagen: props.imagen,
    quantity: props.quantity,


  }

})

function sendItemsToCart(idcart) {
  let existItemSelectedInCart = cartST.items.find(u => u.id === idcart)
  if (existItemSelectedInCart) {
    cartST.updateQuantity(existItemSelectedInCart?.id, existItemSelectedInCart?.quantity + cantstage.value)
    abrirModal()
  } else {
    cartST.addSeveralItems(itemcart.value, cantstage.value)
    abrirModal()
  }
  cantstage.value = 1

}

</script>