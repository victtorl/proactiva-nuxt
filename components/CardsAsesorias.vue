<template>
    <div class="bg-white py-16 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl" id="asesoriastitle">Asesorias</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Conoce más acerca de nuestros asesorias.</p>
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
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600  h-12">
                  <a :href="post.href">
                    <span class="absolute inset-0 " />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ post.description }}</p>
              </div>
              <div class="relative mt-8 flex flex-col sm:flex-row gap-y-4 items-center justify-between gap-x-4">
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
                <span class="relative z-10 text-xs sm:text-base font-semibold text-white transition-all duration-300 group-hover:text-it-blue font-inter ">
                  Agregar al carrito
                </span>

              </div>

              <div class="">
                    <div type="button" 
                        class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">

                        <span @click="()=>{}" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"></path>
                        </svg>
                        </span>

                        <span class="mx-2.5"> {{ 6 }}</span>

                        <span @click="()=>{}" class="cursor-pointer">
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
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const posts = [
    {
      id: 1,
      title: 'Clínica de Coaching Profesionales exitosos',
      href: '#',
      description:
        'Impulsa tu carrera con estrategias de alto impacto. Aprende a proyectar seguridad, potenciar tu liderazgo y destacar en cualquier entorno profesional. Diseñado para mujeres que buscan ascender, negociar con confianza y convertirse en referentes en su industria. ¡Es hora de desbloquear tu máximo potencial!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 2,
      title: 'Clínica de Coaching "Emprende & Brilla"',
      href: '#',
      description:
        'Convierte tu pasión en un negocio exitoso con una mentalidad ganadora. Te guiamos paso a paso en estrategias para construir, posicionar y escalar tu emprendimiento con seguridad y visión. Domina la confianza, la gestión y la marca personal para destacar en el mercado. ¡Haz que tu negocio refleje tu grandeza!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 3,
      title: 'Clínica de Coaching "Mentalidad Abundante"',
      href: '#',
      description:
        'El éxito empieza en tu mente. Rompe con creencias limitantes y desarrolla una mentalidad poderosa que te ayude a atraer oportunidades y bienestar en todas las áreas de tu vida. Aprende técnicas para gestionar el estrés, mantener una actitud positiva y vivir en plenitud. ¡El cambio empieza hoy!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 4,
      title: 'Clínica de Coaching "Marca Personal Imparable"',
      href: '#',
      description:
        'Diferénciate y haz que tu nombre sea sinónimo de éxito. Te ayudamos a construir una marca personal fuerte, auténtica y alineada con tus valores y objetivos. Aprende a destacar en redes, comunicar tu propuesta de valor y dejar una huella en tu industria. ¡Es momento de brillar con luz propia!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 5,
      title: 'Clínica de Coaching "Finanzas Inteligentes"',
      href: '#',
      description:
        'Haz que tu dinero trabaje para ti. Aprende a gestionar tus finanzas con estrategias prácticas que te permitan ahorrar, invertir y multiplicar tus ingresos sin estrés. Empodérate financieramente y toma el control de tu futuro económico con hábitos efectivos. ¡La libertad financiera está en tus manos!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 6,
      title: 'Clínica de Coaching "Dominando tus Emociones"',
      href: '#',
      description:
        'El éxito empieza con el autocontrol. Aprende a gestionar el estrés, la ansiedad y las emociones difíciles para tomar mejores decisiones en tu vida profesional y personal. Desarrolla inteligencia emocional, confianza y resiliencia para enfrentar cualquier desafío con éxito. ¡Empodérate desde adentro!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 7,
      title: 'Clínica de Coaching "Liderazgo Femenino de Impacto"',
      href: '#',
      description:
        'Convierte tu liderazgo en una ventaja competitiva. Aprende a dirigir equipos, tomar decisiones estratégicas y posicionarte como una líder influyente en tu entorno. Potencia tu seguridad, tu comunicación y tu visión para inspirar y transformar. ¡Es tu momento de liderar con poder!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 8,
      title: 'Clínica de Coaching "Comunicación & Marca de Élite"',
      href: '#',
      description:
        'Tu mensaje es tu poder. Aprende a comunicarte con claridad, seguridad y persuasión en cualquier escenario. Potencia tu presencia, expresión verbal y no verbal para impactar en reuniones, presentaciones y redes sociales. ¡Conviértete en una experta en influencia y posicionamiento!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 9,
      title: 'Clínica de Coaching "Tiempo & Productividad Eficaz"',
      href: '#',
      description:
        'Haz más en menos tiempo sin sacrificar tu bienestar. Aprende estrategias de gestión del tiempo, organización y productividad que te ayudarán a equilibrar tu vida profesional y personal. Libérate del caos, prioriza lo importante y alcanza tus metas con enfoque. ¡La clave está en tu agenda!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 10,
      title: 'Clínica de Coaching "Hábitos de Éxito"',
      href: '#',
      description:
        'Cambia tu rutina, cambia tu vida. Aprende a diseñar hábitos poderosos que te impulsen al éxito sin esfuerzo ni frustración. Descubre técnicas para desarrollar disciplina, motivación y constancia en cualquier meta que te propongas. ¡Los pequeños cambios generan grandes resultados!',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 11,
      title: 'Clínica de Coaching "Identidad & Estilo de Poder"',
      href: '#',
      description:
        'Tu imagen habla antes que tú. Aprende a proyectar seguridad, elegancia y autenticidad a través de tu estilo personal. Descubre los secretos de la imagen profesional, la vestimenta estratégica y el branding personal para brillar en cualquier escenario. ¡Cuando te ves bien, te sientes imparable',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Asesoria', href: '#' },
       
    },
    // More posts...
  ]
  </script>