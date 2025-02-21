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


    <div class="bg-white py-16 sm:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl" id="asesoriastitle" >Asesorias</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Conoce más acerca de nuestras asesorias.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <CardsAsesorias 
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
        v-for="item in asesorias" />

        </div>
      </div>
    </div>
       

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



  const asesorias = [
    {
      id: 1,
      name: 'Clínica de Coaching Profesionales exitosos',
      href: '#',price:0,
      description:
        'Impulsa tu carrera con estrategias de alto impacto. Aprende a proyectar seguridad, potenciar tu liderazgo y destacar en cualquier entorno profesional. Diseñado para mujeres que buscan ascender, negociar con confianza y convertirse en referentes en su industria. ¡Es hora de desbloquear tu máximo potencial!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FProfesional%20Exitosa.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 2,
      name: 'Clínica de Coaching "Emprende & Brilla"',
      href: '#',price:0,
      description:
        'Convierte tu pasión en un negocio exitoso con una mentalidad ganadora. Te guiamos paso a paso en estrategias para construir, posicionar y escalar tu emprendimiento con seguridad y visión. Domina la confianza, la gestión y la marca personal para destacar en el mercado. ¡Haz que tu negocio refleje tu grandeza!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FEmprende%20y%20brilla.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 3,
      name: 'Clínica de Coaching "Mentalidad Abundante"',
      href: '#',price:0,
      description:
        'El éxito empieza en tu mente. Rompe con creencias limitantes y desarrolla una mentalidad poderosa que te ayude a atraer oportunidades y bienestar en todas las áreas de tu vida. Aprende técnicas para gestionar el estrés, mantener una actitud positiva y vivir en plenitud. ¡El cambio empieza hoy!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FMentalidad%20abundante.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 4,
      name: 'Clínica de Coaching "Marca Personal Imparable"',
      href: '#',price:0,
      description:
        'Diferénciate y haz que tu nombre sea sinónimo de éxito. Te ayudamos a construir una marca personal fuerte, auténtica y alineada con tus valores y objetivos. Aprende a destacar en redes, comunicar tu propuesta de valor y dejar una huella en tu industria. ¡Es momento de brillar con luz propia!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FMarca%20Personal%20Imparable.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 5,
      name: 'Clínica de Coaching "Finanzas Inteligentes"',
      href: '#',price:0,
      description:
        'Haz que tu dinero trabaje para ti. Aprende a gestionar tus finanzas con estrategias prácticas que te permitan ahorrar, invertir y multiplicar tus ingresos sin estrés. Empodérate financieramente y toma el control de tu futuro económico con hábitos efectivos. ¡La libertad financiera está en tus manos!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FFinanzas%20inteligentes.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 6,
      name: 'Clínica de Coaching "Dominando tus Emociones"',
      href: '#',price:0,
      description:
        'El éxito empieza con el autocontrol. Aprende a gestionar el estrés, la ansiedad y las emociones difíciles para tomar mejores decisiones en tu vida profesional y personal. Desarrolla inteligencia emocional, confianza y resiliencia para enfrentar cualquier desafío con éxito. ¡Empodérate desde adentro!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FDomina%20tus%20emociones.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 7,
      name: 'Clínica de Coaching "Liderazgo Femenino de Impacto"',
      href: '#',price:0,
      description:
        'Convierte tu liderazgo en una ventaja competitiva. Aprende a dirigir equipos, tomar decisiones estratégicas y posicionarte como una líder influyente en tu entorno. Potencia tu seguridad, tu comunicación y tu visión para inspirar y transformar. ¡Es tu momento de liderar con poder!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FLiderazgo%20femenino.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 8,
      name: 'Clínica de Coaching "Comunicación & Marca de Élite"',
      href: '#',price:0,
      description:
        'Tu mensaje es tu poder. Aprende a comunicarte con claridad, seguridad y persuasión en cualquier escenario. Potencia tu presencia, expresión verbal y no verbal para impactar en reuniones, presentaciones y redes sociales. ¡Conviértete en una experta en influencia y posicionamiento!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FComunicaci%C3%B3n%20y%20marca%20elite.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 9,
      name: 'Clínica de Coaching "Tiempo & Productividad Eficaz"',
      href: '#',price:0,
      description:
        'Haz más en menos tiempo sin sacrificar tu bienestar. Aprende estrategias de gestión del tiempo, organización y productividad que te ayudarán a equilibrar tu vida profesional y personal. Libérate del caos, prioriza lo importante y alcanza tus metas con enfoque. ¡La clave está en tu agenda!',
        defImageurl:
        'https://firebasestorage.googleapis.com/v0/b/peloterosfc-c496a.appspot.com/o/proactiva%2FTiempo%20y%20productividad%20eficaz.jpg?alt=media',
        date: 'Mar 16, 2020',
      datetime: '2020-03-16',
          author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 10,
      name: 'Clínica de Coaching "Hábitos de Éxito"',
      href: '#',price:0,
      description:
        'Cambia tu rutina, cambia tu vida. Aprende a diseñar hábitos poderosos que te impulsen al éxito sin esfuerzo ni frustración. Descubre técnicas para desarrollar disciplina, motivación y constancia en cualquier meta que te propongas. ¡Los pequeños cambios generan grandes resultados!',
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
      category: { title: 'Asesoria', href: '#' },
       
    },
    {
      id: 11,
      name: 'Clínica de Coaching "Identidad & Estilo de Poder"',
      href: '#',price:0,
      description:
        'Tu imagen habla antes que tú. Aprende a proyectar seguridad, elegancia y autenticidad a través de tu estilo personal. Descubre los secretos de la imagen profesional, la vestimenta estratégica y el branding personal para brillar en cualquier escenario. ¡Cuando te ves bien, te sientes imparable',
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
      category: { title: 'Asesoria', href: '#' },
       
    },
    // More posts...
  ]

</script>