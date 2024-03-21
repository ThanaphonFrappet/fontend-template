import { boot } from 'quasar/wrappers';
import DebugComponent from 'components/DebugComponent.vue';

export default boot(({ app }) => {
  app.component('DebugComponent', DebugComponent);
});
