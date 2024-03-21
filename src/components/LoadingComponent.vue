<script setup lang="ts">
defineProps<{
  visibility: boolean;
}>();
</script>

<template>
  <q-inner-loading :showing="visibility" class="loader q-gutter-y-xl">
    <q-spinner size="80px" color="primary" />
    <span class="text-h5 text-weight-bold text-primary">LOADING</span>
  </q-inner-loading>
</template>

<style scoped>
.loader {
  z-index: 1000;
}
</style>
