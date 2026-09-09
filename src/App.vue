<script setup>
import Clima from './components/Clima.vue';
import Formulario from './components/Formulario.vue';
import useClima from './composables/useClima.js'
import Spinner from './components/Spinner.vue';
const { obtenerClima, clima, mostrarClima, cargando } = useClima();
</script>

<template>
  <h1 class="text-center text-5xl font-bold mt-20 mb-8">Buscador de Clima</h1>
  <div class=" max-w-[100rem]
  w-[95%] my-0 mx-auto buscador-clima">
    <Formulario @obtener-clima="obtenerClima" />
    <Clima v-if="mostrarClima && cargando === false" :clima="clima" />
    <Spinner v-if="cargando" />
  </div>
</template>
