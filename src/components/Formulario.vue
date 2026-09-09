<script setup>
import { reactive, ref } from 'vue';
import Alerta from './Alerta.vue';

const emit = defineEmits(['obtener-clima']);
const busqueda = reactive({
    ciudad: '',
    pais: ''
});

const error = ref('');
const paises = [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'VE', nombre: 'Venezuela' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' }
];

const consultarClima = () => {
    if (Object.values(busqueda).includes('')) {
        error.value = 'Todos los campos son obligatorios.';
        return
    }
    error.value = '';
    emit('obtener-clima', busqueda);
}
</script>
<template>
    <form class="flex flex-col gap-4" @submit.prevent="consultarClima">
        <Alerta v-if="error">{{ error }}</Alerta>
        <div class="flex flex-col gap-2">
            <label for="ciudad" class="text-4xl font-bold text-white pb-2">Ingresa la ciudad</label>
            <input type="text" id="ciudad" placeholder="Ciudad"
                class="p-4 bg-transparent border-4 border-white rounded-xl text-white font-normal text-[1.8rem] placeholder:text-white"
                v-model="busqueda.ciudad">
        </div>
        <div class="flex flex-col gap-2 relative">
            <label for="pais" class="text-4xl font-bold text-white pb-2">Selecciona el pais</label>
            <select name="" id="pais"
                class="p-4 bg-transparent border-4 border-white rounded-xl text-white font-normal text-[1.8rem] appearance-none cursor-pointer"
                v-model="busqueda.pais">
                <option value="" disabled selected class="text-black bg-white">-- Seleccionar --</option>
                <option v-for="pais in paises" :value="pais.codigo" class="text-black bg-white">{{ pais.nombre }}
                </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 translate-y-7 flex items-center pr-5 text-white">
                <svg class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>

        <input type="submit" value="consultar clima"
            class="bg-[#f59e0b] text-[1.6rem] uppercase font-bold p-4 mt-4 cursor-pointer">
    </form>
</template>
