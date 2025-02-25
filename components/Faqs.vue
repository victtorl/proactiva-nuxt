<template>
    <section id="faq" class="py-[20px]  bg-white max-w-full">
      <div class=" px-[20px] 2xl:px-0 mx-auto grid grid-cols-6 lg:grid-cols-12 sm:gap-[63px] centradoPgrande">
        <div class="col-span-6">
          <h1 class="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit">
            Preguntas frecuentes
          </h1>
          <h2 class="mt-5 font-semibold text-24 sm:text-48 text-main-black">
            <!-- Frequently Asked Questions & Answer -->
            Resuelve tus dudas al instante con nuestras preguntas frecuentes
          </h2>
          <p class="text-paragraph mt-[30px] max-w-[424px] mb-[18px]">
            <!-- IT businesses help organizations develop and implement robust
            business continuity plans disaster -->
            Encuentra respuestas rápidas a tus dudas más comunes, ¡explora nuestras preguntas frecuentes!
          </p>
          <Link to="/contacto">
            <div class="home-two-btn-bg py-3.5 group bg-it-black border-it-black w-fit mt-2.5">
              <span class="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-it-black font-inter">
                Learn More
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
                  class="transition-all duration-300 group-hover:stroke-it-black"
                  d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div class="col-span-6 mt-5 md:mt-0">
          <div data-aos="fade-up" class="flex flex-col gap-2.5 w-full">
         
              <div  v-for="(faq,i) in faqs"
                :key="i"
                class="py-5 px-2 md:px-[30px] w-full rounded-[10px] h7-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-it-blue/15" 
                name="faq-1"
                @click="toggleFAQ(i)"
              >
                <div class="flex items-center justify-between w-full pointer-events-none h-fit">
                  <h1 class="font-semibold sm:text-18 text-main-black">
                    {{faq.question}}
                  </h1>
                  <svg
                    width="19"
                    height="10"
                    viewBox="0 0 19 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L9.5 8L17 2"
                      stroke="#5F57FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
       
                  <p v-if="i==activeFAQ"  class="mt-3.5 text-paragraph pointer-events-none h-fit">
                    {{faq.answer}}
                  </p>
                
              </div>

    
       
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>

const faqs = ref([
  {
    question: "¿Cuánto dura un programa?",
    answer:
      "La duración de los programas varían según la temática. Existen programas de mínimo 6 meses, cada módulo dura 1 mes y medio.",
  },
  {
    question: "¿Cuánto dura una asesoría en coaching y mentoría?",
    answer:
      "La duración dependerá del diagnóstico que se realiza a la persona y del diseño  del plan de cambio trabajado en en conjunto con el cliente.",
  },
  {
    question: "¿Cuánto dura una asesoría en coaching y mentoría?",
    answer:
      "Los programas son presenciales, mientras que las asesorías de coaching y mentorías pueden ser presenciales o virtuales.",
  },
  {
    question: "¿Qué días son las clases de los programas, asesorías y mentorías?",
    answer:
      "Los programas son los sábados con una duración de tres horas y las asesorías y mentorías una vez a la semana a coordinar con una duración de 45 minutos presenciales o virtuales.",
  },
  
  // Add more FAQ items here if needed
])


  const activeFAQ=ref(0)
  

  const setActiveFAQ=(index) => {
    activeFAQ.value === index ? 0 : index
  }

  const toggleFAQ = (index) => {

    activeFAQ.value=index
  };



</script>