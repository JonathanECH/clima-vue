<script setup>
import Clima from './components/Clima.vue';
import Formulario from './components/Formulario.vue';
import useClima from './composables/useClima.js'

const { obtenerClima , clima } = useClima();
</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario @obtener-clima="obtenerClima" />
    <Clima />
  </div>
</template>
