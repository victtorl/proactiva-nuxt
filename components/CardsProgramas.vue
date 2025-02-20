<template>
    <div class="bg-white py-24 sm:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl" id="programastitle" >Programas</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Conoce más acerca de nuestros programas.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
            <div class="relative w-full">
              <img :src="post.imageUrl" alt="" class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 h-12 ">
                  <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ post.description }}</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <!-- <img :src="post.author.imageUrl" alt="" class="size-10 rounded-full bg-gray-100" />
                <div class="text-sm/6">
                  <p class="font-semibold text-gray-900">
                    <a :href="post.author.href">
                      <span class="absolute inset-0" />
                      {{ post.author.name }}
                    </a>
                  </p>
                  <p class="text-gray-600">{{ post.author.role }}</p>
                </div> -->
                <div 
               @click="()=>{}"
              class="home-two-btn-white-rev home-two-btn-white-rev-sm group bg-it-blue border-it-blue cursor-pointer">
                <span class="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-it-blue font-inter ">
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
              
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const posts = [
    {
      id: 1,
      title: 'Programa Liderazgo y Empoderamiento Femenino',
      href: '#',
      description:
        'Desarrolla tu liderazgo con confianza y seguridad, toma decisiones estratégicas y supera barreras que frenan tu éxito. Aprende a inspirar, influir y crear impacto en tu entorno con inteligencia emocional. ¡Es hora de liderar con propósito y hacer que tu voz se escuche!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Programa', href: '#' },
       
    },
    {
      id: 2,
      title: 'Programa Marca Personal para el Éxito',
      href: '#',
      description:
        'Haz que tu nombre brille y conviértete en un referente en tu industria. Aprende a construir una marca personal auténtica, atrae oportunidades y diferenciarte con una propuesta única. ¡Tu marca es tu mejor carta de presentación, haz que el mundo la reconozca!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Programa', href: '#' },
       
    },
    {
      id: 3,
      title: 'Programa de Comunicación y Posicionamiento de Marca Personal',
      href: '#',
      description:
        'Domina la comunicación estratégica para transmitir tu mensaje con impacto y persuasión. Fortalece tu presencia en redes y eventos, posicionándote como una experta en tu sector. ¡Tu voz es tu poder, úsala para crecer y dejar huella!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Programa', href: '#' },
       
    },
    {
      id: 4,
      title: 'Programa Emprendimientos con Propósito',
      href: '#',
      description:
        'Crea un negocio alineado con tu pasión y valores, atrayendo clientes que realmente valoren lo que ofreces. Aprende estrategias efectivas para consolidar un emprendimiento rentable y con impacto. ¡Emprende con propósito y haz crecer tu éxito!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Programa', href: '#' },
       
    },
    {
      id: 5,
      title: 'Programa Habilidades Blandas',
      href: '#',
      description:
        'Desarrolla inteligencia emocional, mejora tu negociación y fortalece tu confianza para destacar en cualquier entorno. Aprende a gestionar tu tiempo, manejar el estrés y potenciar tu productividad. ¡Las habilidades clave para triunfar están en tus manos!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Programa', href: '#' },
       
    },
   
    // More posts...
  ]
  </script>