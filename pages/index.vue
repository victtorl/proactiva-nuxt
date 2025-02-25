<template>
  <div class="mx-7 lg:mx-24 bg-secundary h-[100%] pt-[36px] lg:pt-0 ">
      <div class="w-full flex justify-center">
        <div class="relative isolate overflow-hidden mt-8 lg:mt-0 h-[30vh] lg:h-[350px] mb-4 bg-blackgio  flex justify-center  centradoPgrande">
          <img :src="`${imagesbanner[currentIn]?imagesbanner[currentIn].name:''}`" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50" />
        </div>

      </div>
     
      <div class="w-full   flex justify-center" >
      <div class=" grid grid-cols-2 items-center centradoPgrande ">
        <div class="pr-10 sm:pb-4 " >
          <p class="text-paragraph mb-4  text-center    ">
            Somos un centro de desarrollo personal y psicología positiva que cree en las potencialidades de cada persona para lograr lo que se proponen a través de la reprogramación mental, el desarrollo de habilidades, la gestión de las emociones y el empoderamiento para el cambio. 
          </p>
          <!-- <NuxtLink  to="/services" class="rounded-full px-4 lg:px-0 py-1 bg-colorbutton xl:text-[24px] 2xl:text-[26px] 3xl:text-[30px] cursor-pointer hover:font-bold">CONOCE MÁS</NuxtLink> -->
        </div>

        <div  class="w-full flex flex-col md:flex-row  justify-center items-center md:items-start md:justify-between  gap-x-4 " >
              <img :src="img3" alt=""  
              class=" object-cover py-4 lg:py-0
              transform rounded-xl  bg-white shadow-xl transition duration-300 hover:translate-x-4
              " srcset="">
        </div>

        
      </div>
      </div>

      <div class="w-full   flex justify-center my-10" >
      <div class=" grid grid-cols-2 items-center centradoPgrande ">

        <div  class="w-full px-4 flex flex-col md:flex-row  justify-center items-center md:items-start md:justify-between  gap-x-4 " >
              <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FImagen%202%20home%20ok.jpg?alt=media" alt=""  
              class=" object-cover py-4 lg:py-0
              transform rounded-xl  bg-white shadow-xl transition duration-300 hover:translate-x-4
              " srcset="">
        </div>

        <div class="pr-10 sm:pb-4 px-4 flex flex-col justify-between h-full " >
          <p class="text-paragraph mb-4  text-center  text-2xl font-robotoflex font-bold  ">
            Cuando creamos un nuevo destino en nuestra mente creamos un nuevo futuro en nuestra vida. 
          </p>

          <p class="text-paragraph mb-4  text-center" >Contamos con una metodologia efectiva para ayudarte a liberar todo tu potencial para lograr tus metas y los cambios qeu necesitas</p>

          <button>MAS INFO</button>
          <!-- <NuxtLink  to="/services" class="rounded-full px-4 lg:px-0 py-1 bg-colorbutton xl:text-[24px] 2xl:text-[26px] 3xl:text-[30px] cursor-pointer hover:font-bold">CONOCE MÁS</NuxtLink> -->
        </div>

        
      </div>
      </div>


      <Faqs/>
  </div>
  

</template>

<script setup >

import img1 from '~/assets/landing-imgs/itemhome1.png'
import img2 from '~/assets/landing-imgs/itemhome2.jpg'
import img3 from '~/assets/landing-imgs/itemhome3.jpg'


import imgbanner1 from '~/assets/landing-imgs/bannerhome.jpg'
import imgbanner2 from '~/assets/landing-imgs/bannerhome2.png'
import imgbanner3 from '~/assets/landing-imgs/bannerhome.jpg'


import SeoPro from '/public/SeoPro.png'
useSeoMeta({
    title: `Centro de Desarrollo Personal y Psicología Positiva Proactiva en Lima Mejora tu Bienestar con Terapias Emocionales`,
    ogTitle: `Centro de Desarrollo Personal y Psicología Positiva Proactiva en Lima Mejora tu Bienestar con Terapias Emocionales`,
    description: `En Centro Proactiva te ayudamos a superar conflictos emocionales a través
     de la reprogramación mental y el desarrollo de tu potencial. Coaches  expertos en empoderamiento
     y bienestar personal en Lima`,
    ogImage: SeoPro,
    twitterCard: 'summary_large_image'
})





const imgs=[
  {name:img1},
  {name:img2},
  {name:img3},

]



const imagesbanner = [
  {name:imgbanner1},
  {name:imgbanner2},
  {name:imgbanner3},
]
//imagen cambiante
let currentIn = ref(0);
function changeBackground() {
  currentIn.value=obtenerNumeroAleatorio()    
}

function obtenerNumeroAleatorio() {
  return Math.floor(Math.random() * 3);
}

setInterval(changeBackground, 5000);

</script>


<style>
@keyframes show {
  from {
    opacity: 1;
    scale: 25%;
  }

  to {
    opacity: 1;
    scale: 100%;
  }
}
.claseimagen {
  view-timeline-name: --image;
  view-timeline-axis: block;
  animation-timeline: --image;
  animation-name: show;
  animation-range: entry 25% cover 60%;
  animation-fill-mode: both;
  /* animation-iteration-count: 1; */
}

/* ///zoom images */
@-webkit-keyframes zoom {
  0% {
    -webkit-transform: scale(1, 1);
  }

  50% {
    -webkit-transform: scale(1.5, 1.5);
  }

  100% {
    -webkit-transform: scale(1.1, 1.1);
  }
}

/* Standard syntax */
@keyframes zoom {
  0% {
    -webkit-transform: scale(1, 1);
  }

  50% {
    -webkit-transform: scale(1.5, 1.5);
  }

  100% {
    -webkit-transform: scale(1.1, 1.1);
  }
}

.zoom-img {
  -webkit-animation: zoom 100s;
  /* Chrome, Safari, Opera */
  animation: zoom 100s;
  animation-iteration-count: infinite;
}

.animatable {
  /* initially hide animatable objects */
  visibility: hidden;

  /* initially pause animatable objects their animations */
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -ms-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}
/* show objects being animated */
.animated {
  visibility: visible;

  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -ms-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;

  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
  -ms-animation-play-state: running;
  -o-animation-play-state: running;
  animation-play-state: running;
}

@-webkit-keyframes moveUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(40px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@-moz-keyframes moveUp {
  0% {
    opacity: 1;
    -moz-transform: translateY(40px);
  }

  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}

@-o-keyframes moveUp {
  0% {
    opacity: 1;
    -o-transform: translateY(40px);
  }

  100% {
    opacity: 1;
    -o-transform: translateY(0);
  }
}

@keyframes moveUp {
  0% {
    opacity: 1;
    transform: translateY(40px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>