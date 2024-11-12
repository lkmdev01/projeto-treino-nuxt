<template>
  <div>
    você está na página de vídeos número {{ $route.params.id }}
    <VideosDetalhes />
    <VideosControlePlay></VideosControlePlay>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'exibicao',
  middleware: ['video','auth'],
})


</script>

<style lang="scss" scoped>

</style>