<template>

<div class="mx-7 lg:mx-24 bg-secundary h-[100%] pt-[36px] lg:pt-0">
      <div class="w-full ">
        <!-- <div class="relative isolate overflow-hidden h-full xl:h-[50vh] mb-4 bg-blackgio  flex justify-center ">
           <h3 class="text-xl  text-primary mt-6" >PAGINA PRINCIPAL DE SERVICIOS</h3>



        </div>

        <div class="w-full flex justify-center items-center">
               <ul>
                   <li><NuxtLink to="/services/servicio1" >Servicio 1</NuxtLink></li>
                   <li><NuxtLink to="/services/servicio2" >Servicio 2</NuxtLink></li>
                   <li><NuxtLink to="/services/servicio2" >Servicio 2</NuxtLink></li>
                </ul>
        </div> -->

        <div class="bg-white py-16 sm:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl" id="programastitle" >Programas</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Conoce más acerca de nuestros programas.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <CardsProgramas 
        :id="item.id"
        :nombre="item.name" 
        :description="item.description" 
        :category="item.category" 
        :author="item.author"
        :datetime="item.datetime"
        :date="item.date"
        :price="item.price"
        :defImageurl="item.defImageurl" 
        :quantity="item.quantity" 
        v-for="item in programas" />

        </div>
      </div>
    </div>
       


        <CardsAsesorias/>
    </div>
</div>
</template>



<script setup>

const programas = [
    {
      id: 1,
      name: 'Programa Liderazgo y Empoderamiento Femenino',
      href: '#', price:0,
      description:
        'Desarrolla tu liderazgo con confianza y seguridad, toma decisiones estratégicas y supera barreras que frenan tu éxito. Aprende a inspirar, influir y crear impacto en tu entorno con inteligencia emocional. ¡Es hora de liderar con propósito y hacer que tu voz se escuche!',
      defImageurl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { name: 'Programa', href: '#' },
       
    },
    {
      id: 2,
      name: 'Programa Marca Personal para el Éxito',
      href: '#', price:0,
      description:
        'Haz que tu nombre brille y conviértete en un referente en tu industria. Aprende a construir una marca personal auténtica, atrae oportunidades y diferenciarte con una propuesta única. ¡Tu marca es tu mejor carta de presentación, haz que el mundo la reconozca!',
      defImageurl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { name: 'Programa', href: '#' },
       
    },
    {
      id: 3,
      name: 'Programa de Comunicación y Posicionamiento de Marca Personal',
      href: '#', price:0,
      description:
        'Domina la comunicación estratégica para transmitir tu mensaje con impacto y persuasión. Fortalece tu presencia en redes y eventos, posicionándote como una experta en tu sector. ¡Tu voz es tu poder, úsala para crecer y dejar huella!',
      defImageurl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { name: 'Programa', href: '#' },
       
    },
    {
      id: 4,
      name: 'Programa Emprendimientos con Propósito',
      href: '#', price:0,
      description:
        'Crea un negocio alineado con tu pasión y valores, atrayendo clientes que realmente valoren lo que ofreces. Aprende estrategias efectivas para consolidar un emprendimiento rentable y con impacto. ¡Emprende con propósito y haz crecer tu éxito!',
      defImageurl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { name: 'Programa', href: '#' },
       
    },
    {
      id: 5,
      name: 'Programa Habilidades Blandas',
      href: '#', price:0,
      description:
        'Desarrolla inteligencia emocional, mejora tu negociación y fortalece tu confianza para destacar en cualquier entorno. Aprende a gestionar tu tiempo, manejar el estrés y potenciar tu productividad. ¡Las habilidades clave para triunfar están en tus manos!',
      defImageurl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { name: 'Programa', href: '#' },
       
    },
   
    // More posts...
  ]

</script>