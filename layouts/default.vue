<template>
    <!-- aqui pondras un header que se repite siempre -->
    <div class="bg-secundary ">

      <span>
        <HeaderBase/>
      </span>
      <slot/>
      <span >
        <FooterBase/>
      </span>
    </div>
</template>
<script setup>
import HeaderBase from '~/components/HeaderBase.vue'



</script>