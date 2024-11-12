import { defineStore } from "pinia";
import { ref } from "vue";
import type { Video } from "~/interfaces/video";

export const useVideoStore = defineStore("videos", () => {
  const favoritos = ref<Video[]>([]);

  const adicionarFavorito = (video: Video) => {
    const favoritosFiltrados = favoritos.value.some((v) => v.id === video.id);
    if (!favoritosFiltrados) {
      favoritos.value.push(video);
    }
  };

  const deletarFavorito = (id: number) => {
    favoritos.value = favoritos.value.filter((v) => v.id !== id);
  };

  return { adicionarFavorito, deletarFavorito, favoritos };
}, {
  persist: true, // Agora deve funcionar com o plugin configurado corretamente
});
