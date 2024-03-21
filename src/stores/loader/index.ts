import { defineStore } from 'pinia';
import { ref } from 'vue';

const useLoader = defineStore('loader-store', () => {
  const visible = ref(false);

  return {
    visible,
    toggle() {
      visible.value = !visible.value;
    },
    show() {
      visible.value = true;
    },
    hide() {
      visible.value = false;
    },
  };
});

export default useLoader;
