# 🌤️ Clima Vue

![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-1E90FF?style=for-the-badge&logo=openstreetmap&logoColor=white)

Aplicación web para consultar el clima actual de una ciudad utilizando Vue.js y la API de OpenWeatherMap.

## ☀️ Descripción

Clima Vue es una pequeña aplicación desarrollada con Vue 3 que permite buscar el clima de una ciudad y país, mostrando información como:

- temperatura actual
- descripción del clima
- humedad
- sensación térmica
- velocidad del viento
- icono representativo del estado del tiempo

La app cuenta con validación de errores cuando la ciudad no existe y una interfaz simple y agradable para la experiencia del usuario.

## 🚀 Demo

Puedes probar la aplicación en vivo aquí:

[🌐 Ver demo en producción](https://clima-vue-vert.vercel.app/)

## 🧰 Tecnologías utilizadas

- Vue 3
- Vite
- JavaScript
- Axios
- Tailwind CSS
- OpenWeatherMap API

## ✅ Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js
- pnpm

## 🛠️ Instalación

1. Clona este repositorio.
2. Entra a la carpeta del proyecto.
3. Instala las dependencias:

```bash
pnpm install
```

4. Crea un archivo `.env` en la raíz del proyecto con tu API key de OpenWeatherMap:

```bash
VITE_API_KEY=tu_api_key_aqui
```

5. Inicia el proyecto:

```bash
pnpm dev
```

## 📜 Scripts disponibles

```bash
pnpm dev
pnpm build
pnpm preview
```

## 📁 Estructura del proyecto

```bash
src/
├── components/
│   ├── Alerta.vue
│   ├── Clima.vue
│   ├── Formulario.vue
│   └── Spinner.vue
├── composables/
│   └── useClima.js
├── App.vue
├── main.js
└── style.css
```

## 👤 Autor
**JonathanECH** - *Frontend developer*

Proyecto desarrollado en Vue.js como práctica de consumo de APIs y renderizado de datos dinámicos.
