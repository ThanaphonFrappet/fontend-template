<script lang="ts" setup>
defineProps<{ data: unknown }>();
</script>
<template>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>

<style scoped>
pre {
  display: block;
  border: 1px solid #c1c1c9;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-y: auto;
  max-height: 50vh;
  background: e1e1e8;
  white-space: pre-wrap;
  clip-path: view-box;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border: 0.15rem solid rgba(0, 0, 0, 0);
    background-color: hsla(0, 0%, 50%, 0.75);
    background-clip: padding-box;
    border-radius: 0.5rem;
  }
}
</style>
