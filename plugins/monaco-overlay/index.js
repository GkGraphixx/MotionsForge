import MonacoOverlay from './overlay.vue';

export default {
  name: 'MonacoEditorOverlay',
  component: MonacoOverlay,
  install(app) {
    app.component('MonacoEditorOverlay', MonacoOverlay);
  }
};

