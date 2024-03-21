<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useLoader from 'stores/loader';
import LoadingComponent from 'src/components/LoadingComponent.vue';

const loaderStore = useLoader();
const { visible } = storeToRefs(loaderStore);
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <loading-component :visibility="visible" />
    <q-page-container class="main">
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.main {
  height: 100%;
  background-color: #f3f3f7;
}
</style>
