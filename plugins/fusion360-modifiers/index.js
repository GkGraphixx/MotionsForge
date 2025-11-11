import FusionPanel from './fusion.vue';

export default {
  name: 'Fusion360ModifierPanel',
  component: FusionPanel,
  install(app) {
    app.component('Fusion360ModifierPanel', FusionPanel);
  }
};
