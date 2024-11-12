<script setup lang="ts">
  const {diasPassados, diferencaEmDias} = userFormatacao()

  const DataVideo = new Date(2024, 7, 11);
  diasPassados(DataVideo);
</script>

<template>
  <h1>Componentes - Nuxt3</h1>
  <p>Autor: Pablo Codes</p>
  <p>{{ diferencaEmDias }} dias atrás</p>
</template>