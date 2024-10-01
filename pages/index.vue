<template>
  <div class="mx-7 lg:mx-24 bg-secundary h-[100%] pt-[36px] lg:pt-0">
      <div class="w-full ">
        <div class="relative">
          <img src="~/assets/landing-imgs/bannerhome.png" class="w-full object-cover my-4 opacity-50" alt="" srcset="">
          
            <h1 class="xl:text-[28px] 2xl:text-[30px] 3xl:text-[36px] xl:w-32 2xl:w-44 3xl:w-52 2xl:h-64  font-normal absolute top-1/2 -translate-y-1/2 left-5 leading-tight text-colortextbold  ">
              Cambia tu mente,
              <br>
              Cambia tu vida
            </h1>
        </div>

      </div>

      <div class="w-full flex flex-col xl:flex-row pb-16  ">
        <div class="pr-10 sm:pb-4 " >
          <p class="text-colortextbold mb-4 xl:text-[20px] 2xl:text-[24px] 3xl:text-[25px]  xl:w-[430px] 2xl:w-[520px] 3xl:w-[535px] text-justify ">
            Somos un centro de desarrollo personal y psicología positiva que cree en las potencialidades de cada persona para lograr lo que se proponen a través de la reprogramación mental, el desarrollo de habilidades, la gestión de las emociones y el empoderamiento para el cambio. 
          </p>
          <button class="rounded-full px-4 py-1 bg-colorbutton xl:text-[24px] 2xl:text-[26px] 3xl:text-[30px]" >CONOCE MAS</button>
        </div>

        <div  class="w-full flex flex-col md:flex-row  justify-center items-center md:items-start md:justify-between  gap-x-4 " >
              <img v-for="item in 3" src="~/assets/landing-imgs/itemhome1.png" alt=""  class="w-64 h-64 md:w-auto xl:w-52 2xl:w-64 3xl:w-auto  py-4 lg:py-0" srcset="">
        </div>

      </div>
  </div>
  

</template>

<script setup lang="ts">
import SeoProactiva from '/public/SeoProactiva.png'
useSeoMeta({
    title: `Centro de Desarrollo Personal y Psicología Positiva Proactiva en Lima Mejora tu Bienestar con Terapias Emocionales`,
    ogTitle: `Centro de Desarrollo Personal y Psicología Positiva Proactiva en Lima Mejora tu Bienestar con Terapias Emocionales`,
    description: `En Centro Proactiva te ayudamos a superar conflictos emocionales a través de la reprogramación mental y el desarrollo de tu potencial. Coaches  expertos en empoderamiento y bienestar personal en Lima`,
    ogDescription: `En Centro Proactiva te ayudamos a superar conflictos emocionales a través de la reprogramación mental y el desarrollo de tu potencial. Coaches  expertos en empoderamiento y bienestar personal en Lima`,
    ogImage: SeoProactiva,
    twitterCard: 'summary_large_image'
})



</script>