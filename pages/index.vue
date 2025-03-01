<template>
  <div class=" bg-secundary h-[100%] md:pt-[36px] lg:pt-0 " id="iniciotitle">
      <div class="w-full flex justify-center">
        <div class="relative isolate overflow-hidden mt-8 lg:mt-0 h-[45vh] lg:h-[350px] mb-4 bg-blackgio  flex justify-center  centradoPgrande">
          <img :src="`${imagesbanner[currentIn]?imagesbanner[currentIn].name:''}`" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50" />
        </div>

      </div>
     
      <div class="w-full   flex justify-center  lg:my-8" >
      <div class=" grid grid-cols-1 lg:grid-cols-2 items-center  centradoPgrande ">
        <div class="lg:pr-10 sm:pb-4 " >
          <p class="text-paragraph mb-4  text-center    ">
            Somos un centro de desarrollo personal y psicología positiva que cree en las potencialidades de cada persona para lograr lo que se proponen a través de la reprogramación mental, el desarrollo de habilidades, la gestión de las emociones y el empoderamiento para el cambio. 
          </p>
        </div>

        <div  class="w-full flex flex-col md:flex-row  justify-center items-center md:items-start md:justify-between  gap-x-4 " >
              <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FImagen%20home%201%20ok.jpg?alt=media" alt=""  
              class=" object-cover py-4 lg:py-0
              transform rounded-xl  
              " srcset="">
        </div>

        
      </div>
      </div>

      <div class="w-full   flex justify-center my-16" >
      <div class=" grid grid-cols-1 lg:grid-cols-2 items-center centradoPgrande ">

        <div  class="w-full  flex flex-col md:flex-row  justify-center items-center md:items-start md:justify-between  gap-x-4 " >
              <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FImagen%202%20home%20ok.jpg?alt=media" alt=""  
              class=" object-cover py-4 lg:py-0
              transform rounded-xl  w-full
              " srcset="">
        </div>

        <div class="lg:pr-10 sm:pb-4 px-4 flex flex-col justify-between items-center h-full " >
          <p class="text-paragraph mb-4  text-center  text-2xl font-robotoflex font-bold  ">
            Cuando creamos un nuevo destino en nuestra mente creamos un nuevo futuro en nuestra vida. 
          </p>

          <p class="text-paragraph mb-4  text-center" >Contamos con una metodologia efectiva para ayudarte a liberar todo tu potencial para lograr tus metas y los cambios qeu necesitas</p>

          <NuxtLink to="/metodologia" class="w-36 px-8 py-1  border-2 border-primary" >MAS INFO</NuxtLink>
        </div>
        
      </div>
      </div>

      <div class="w-full flex justify-center" >
        <p class="centradoPgrande text-center text-paragraph font-bold text-2xl"  >INVIERTE EN LA NUEVA  MUJER QUE TE QUIERES CONVERTIR</p>
      </div>

      <div class="w-full   flex justify-center my-8 " >
      <div class=" grid grid-cols-1 lg:grid-cols-2 items-center  centradoPgrande ">
        <div class="lg:pr-10 sm:pb-4 flex flex-col items-center justify-between  h-full " >
          <p class="text-paragraph mb-4  text-center  w-full  h-full flex justify-center items-center  ">
            Somos un centro de desarrollo personal y psicología positiva que cree en las potencialidades de cada persona para lograr lo que se proponen a través de la reprogramación mental, el desarrollo de habilidades, la gestión de las emociones y el empoderamiento para el cambio. 
          </p>
          <button class="w-36 px-8 py-1  border-2 border-primary" >MAS INFO</button>
        </div>

        <div  class="w-full flex flex-col md:flex-row  justify-center items-center md:items-start md:justify-between  gap-x-4 " >
              <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FImagen%20home%201%20ok.jpg?alt=media" alt=""  
              class=" object-cover py-4 lg:py-0
              transform 
              " srcset="">
        </div>

        
      </div>
      </div>

      <div class="w-full flex justify-center " >
        <p class="centradoPgrande text-center text-paragraph font-bold text-2xl pt-8 lg:pt-24"  >
          Es momento de tomar acción y  decisiones clave, para convertirte en lideresa de tu vida.
        </p>
      </div>

      <div class="w-full   flex justify-center my-10 " >
      <div class=" grid grid-cols-1 md:gri-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-10 2xl:gap-x-4 items-center  centradoPgrande ">

        <div class="py-6 lg:py-0 sm:pb-4 flex flex-col items-center justify-between  h-full " >
          <p class="text-xl font-bold text-center text-paragraph" >Programas de empoderamiento</p>
          <div  class="w-full flex flex-col md:flex-row lg:py-2 justify-center items-center md:items-start md:justify-between  gap-x-4 " >
                <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FProgramas%20de%20empoderamiento%20ok.jpg?alt=media" alt=""  
                class=" object-cover 
                transform  
                " srcset="">
          </div>
          <p class="text-paragraph mb-4  text-center  w-full  h-full lg:h-20  flex justify-center items-center  ">
            Entrena tu mente, potencia tu liderazgo y empodérate para la toma de decisiones y realizar los cambios que necesitas.
          </p>
          <button class="w-36 px-8 py-1  border-2 border-primary" >MAS INFO</button>
        </div>

        <div class="py-6 lg:py-0 sm:pb-4 flex flex-col items-center justify-between  h-full " >
          <p class="text-xl font-bold text-paragraph" >Mentorías & coaching</p>
          <div  class="w-full flex flex-col md:flex-row lg:py-2 justify-center items-center md:items-start md:justify-between  gap-x-4 " >
                <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FMentor%C3%ADa%20y%20coaching%20ok.jpg?alt=media" alt=""  
                class=" object-cover 
                transform 
                " srcset="">
          </div>
          <p class="text-paragraph mb-4  text-center  w-full  h-full lg:h-20  flex justify-center items-center  ">
            Recibe la guía y mentoría para el desarrollo de tu liderazgo  y cumple tus metas  personales y profesionales.
          </p>
          <button class="w-36 px-8 py-1  border-2 border-primary" >MAS INFO</button>
        </div>


        <div class="py-6 lg:py-0 sm:pb-4 flex flex-col items-center justify-between  h-full " >
          <p class="text-xl font-bold text-paragraph" >Workshop new mindset</p>
          <div  class="w-full flex flex-col md:flex-row lg:py-2 justify-center items-center md:items-start md:justify-between  gap-x-4 " >
                <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2Fworkshop%20new%20mindset%20ok.jpg?alt=media" alt=""  
                class=" object-cover 
                transform 
                " srcset="">
          </div>
          <p class="text-paragraph mb-4  text-center  w-full  h-full  lg:h-20  flex justify-center items-center  ">
            Participa de nuestros eventos gratuitos y siente la energía del cambio que requieres hacer.
          </p>
          <button class="w-36 px-8 py-1  border-2 border-primary" >MAS INFO</button>
        </div>


        
      </div>
      </div>

      <div class="w-full  flex justify-center relative" >
                <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FMentor%C3%ADa%20y%20coaching%20ok.jpg?alt=media" alt=""  
                class=" object-cover w-[100vw]   3xl:w-maxdesk 3xl:px-0 py-4 lg:py-0 brightness-50
                
                " srcset="">

                <p class="absolute lg:right-6 text-center bottom-6  lg:text-xl font-bold text-white flex flex-col items-center gap-y-6">
                  <span>¡Únete a nuestro club de aprendizaje  e intercambio de experiencias!</span>

                  <span class="/n" >¡Junt@s podemos con todo!</span>
                </p>
      </div>

      <div class="w-full   flex justify-center my-8 " >
      <div class=" grid grid-cols-1 lg:grid-cols-2 items-center  centradoPgrande ">
        <div class="lg:pr-10 sm:pb-4 flex flex-col items-center justify-between  h-full " >
          <p class="font-bold text-xl text-primary">Nuestra Misión</p>
          <p class="text-paragraph mb-4  text-center  w-full  h-full flex justify-center items-center  ">
            Ayudar a las personas a alcanzar sus sueños, metas y objetivos a través de la reprogramación de creencias limitantes, desarrollo de habilidades, la gestión de sus emociones y el empoderamiento para el cambio, aumentando su estado de bienestar, felciidad y calidad de vida.
          </p>
        </div>

        <div  class="w-full flex flex-col md:flex-row  justify-center items-center md:items-start md:justify-between  gap-x-4 " >
              <img src="https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FImagen%20home%201%20ok.jpg?alt=media" alt=""  
              class=" object-cover py-4 lg:py-0
              transform 
              " srcset="">
        </div>

        
      </div>
      </div>

      <div class="w-full flex justify-center" >
        <p class="centradoPgrande text-center text-paragraph font-bold text-2xl"  >Valores</p>
      </div>

      <div class="w-full flex justify-center" >
        <div class="centradoPgrande text-paragraph text-center"  >
            <ul class="w-full grid grid-cols-2 lg:grid-cols-4" >
              <li>*Proactividad</li>
              <li>*Gratitud</li>
              <li>*Espiritualidad</li>
              <li>*Disciplina</li>
            </ul>
        </div>
      </div>

      <div class="w-full flex justify-center md:my-4 pb-4 lg:pb-0" >
        <div class="centradoPgrande text-paragraph text-center"  >
            <ul class="w-full grid grid-cols-2 lg:grid-cols-3" >
              <li>*Responsabilidad</li>
              <li>*Empatía</li>
              <li>*Adaptación a los cambios</li>
            </ul>
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