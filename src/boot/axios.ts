import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';
import { getToken } from 'src/services/keycloak';
import { useUtils } from 'stores/utils';
import useLoader from 'stores/loader';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

function parseError(
  status: number,
  body?: { status: number; message: string },
) {
  if (status === 422) return 'ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง';
  if (body && body.message) return body.message;

  return 'เกิดข้อผิดพลาดทำให้ระบบไม่สามารถทำงานได้ กรุณาลองใหม่ในภายหลัง';
}

api.interceptors.request.use(async (config) => {
  useLoader().show();
  config.headers.Authorization = `Bearer ${await getToken()}`;
  return config;
});

api.interceptors.response.use(
  (res) => {
    useLoader().hide();
    return res;
  },
  (err) => {
    useLoader().hide();
    useUtils().openDialog({
      color: 'negative',
      icon: 'priority_high',
      title: 'เกิดข้อผิดพลาด',
      actionText: 'ตกลง',
      persistent: true,
      message: parseError(err.response.status, err.response.data),
      action: () => {},
    });
  },
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
