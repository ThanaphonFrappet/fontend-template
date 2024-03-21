<script setup lang="ts">
defineProps<{
  title: string;
  message: string;
  color?: string;
  icon?: string;
  actionText?: string;
  cancelText?: string;
  persistent?: boolean;
  action?: (...args: unknown[]) => void;
  cancel?: (...args: unknown[]) => void;
}>();
</script>
<template>
  <q-dialog ref="dialogRef" :persistent="persistent || false">
    <q-card class="q-pa-sm" style="min-width: 300px; max-width: 80%">
      <q-card-section class="row q-pa-sm">
        <div
          class="q-pr-md"
          v-if="icon"
          style="display: flex; align-items: center"
        >
          <q-avatar
            :icon="icon"
            size="xl"
            font-size="25px"
            color="grey-2"
            :text-color="color || 'primary'"
          />
        </div>
        <div class="col text-dark">
          <span class="text-bold block">{{ title }}</span>
          <span class="block">{{ message }}</span>
        </div>
      </q-card-section>
      <q-card-actions align="right" v-if="action || cancel">
        <q-btn
          v-if="cancel"
          @click="cancel"
          :label="cancelText || 'Cancel'"
          color="primary"
          v-close-popup
          flat
        />
        <q-btn
          v-if="action"
          @click="action"
          :label="actionText || 'OK'"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss"></style>
