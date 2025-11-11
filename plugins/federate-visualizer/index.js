import FederateViewer from './viewer.vue';

export default {
  name: 'FederateVisualizer',
  component: FederateViewer,
  install(app) {
    app.component('FederateVisualizer', FederateViewer);
  }
};
