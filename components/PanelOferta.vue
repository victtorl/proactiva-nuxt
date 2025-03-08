<template>
    <div 
    :class="`${isvisible?'block':'hidden'}`"
    class="relative isolate  flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div class="absolute  top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div class="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
      </div>
      <div class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div class="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
      </div>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 ">
        <p class="text-sm/6 text-[#ae36ab] ">
          <strong class="font-bold">Día de la Mujer</strong><svg viewBox="0 0 2 2" class="mx-2 inline size-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Este sabado 8 de marzo no te pierdas <a @click="goServices()"><span class="underline cursor-pointer font-semibold" >nuestro taller gratuito</span></a>!!
        </p>
        <NuxtLink to="https://docs.google.com/forms/d/1ZiQ6utcorDTgCo_JxOjrorQhfKiIU0pfr8sw9X2POZ0/viewform?edit_requested=true" target="_blank" class="flex-none rounded-full bg-[#ff0080]  px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-[#e4007c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Inscribirse  Ahora<span aria-hidden="true">&rarr;</span></NuxtLink>
      </div>
      <div class="flex flex-1 justify-end">
        <button type="button" @click="toogleVisible()" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span class="sr-only">Dismiss</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z" fill="#0F172A"/>
          </svg>

        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { goTo } from '~/codesutils/utils'

  const isvisible=ref(true)

  const toogleVisible=() => {
        isvisible.value = false     
  }

  const route=useRouter()

  let goServices=() => {
    route.push({ path: "/services" })
    setTimeout(() => {
      goTo('eventogratis')  
    }, 1000);
}

  </script>