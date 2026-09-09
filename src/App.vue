<script setup>
import Clima from './components/Clima.vue';
import Formulario from './components/Formulario.vue';
import useClima from './composables/useClima.js'
import Spinner from './components/Spinner.vue';
import Alerta from './components/Alerta.vue';
const { obtenerClima, clima, mostrarClima, cargando, error } = useClima();
</script>

<template>
  <h1 class="text-center text-5xl font-bold mt-20 mb-8">Buscador de Clima</h1>
  <div class=" max-w-[100rem]
  w-[95%] my-0 mx-auto buscador-clima">
    <Formulario @obtener-clima="obtenerClima" />
    <Clima v-if="mostrarClima && cargando === false" :clima="clima" />
    <Spinner v-if="cargando" />
    <!-- Componente de Vue -->
    <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-opacity duration-400 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <Alerta v-if="error" class="absolute left-1/5 top-3/5 md:mt-0 md:static">{{ error }}</Alerta>
    </Transition>

  </div>
</template>
