import { useQuasar } from 'quasar';
import { defineStore } from 'pinia';
import DialogComponent from 'components/DialogComponent.vue';

export const useUtils = defineStore('utils', () => {
  const $q = useQuasar();

  return {
    openDialog: (opts: {
      title: string;
      message: string;
      color?: string;
      icon?: string;
      persistent?: boolean;
      actionText?: string;
      cancelText?: string;
      action?: (...args: unknown[]) => unknown;
      cancel?: (...args: unknown[]) => unknown;
    }) => {
      $q.dialog({
        component: DialogComponent,
        componentProps: opts,
      });
    },
  };
});
