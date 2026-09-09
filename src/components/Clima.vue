<script setup>
import useClima from '../composables/useClima';
const { formatearTemp} = useClima();
defineProps({
    clima: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="bg-white p-4 text-[#2b353b] text-center mt-20 ms:mt-8 rounded-2xl">
        <h2 class=" text-5xl font-black mt-8">Clima de: {{ clima.name }}</h2>
        <p class="text-[6rem] m-2 font-black">{{ formatearTemp(clima.main.temp) }} <span>&deg;C</span></p>
        <div class="flex gap-8 justify-center mb-8">
            <p class="font-black">Min: {{ formatearTemp(clima.main.temp_min) }} <span class="font-normal">&deg;C</span>
            </p>
            <p class="font-black">Max: {{ formatearTemp(clima.main.temp_max) }} <span class="font-normal">&deg;C</span>
            </p>
        </div>
    </div>
</template>
