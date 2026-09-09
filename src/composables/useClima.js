import { ref, computed } from "vue";
import axios from 'axios';
export default function useClima() {

    const clima = ref({});
    const cargando = ref(false);
    const error = ref('');

    const obtenerClima = async ({ ciudad, pais }) => {
        cargando.value = true;
        clima.value = {};
        //importamos la api
        const key = import.meta.env.VITE_API_KEY;

        //importamos lat y log
        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
            const { data } = await axios(url);

            const { lat, lon } = data[0];

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
            const { data: resultado } = await axios(urlClima);

            clima.value = resultado;
        } catch {
            error.value = 'Ciudad no encontrada.';
            setTimeout(() => {
                error.value = '';
            }, 4000);
        }finally{
            cargando.value = false;
        }
    }

    const mostrarClima = computed(() => {
        return Object.values(clima.value).length > 0;
    })

    const formatearTemp = temp => parseInt(temp - 273.15)

    return {
        obtenerClima,
        clima,
        mostrarClima,
        formatearTemp,
        cargando,
        error
    }
}