import ModifierPanel from './modifier.vue';

export default {
  name: 'OpenSCADModifierPanel',
  component: ModifierPanel,
  install(app) {
    app.component('OpenSCADModifierPanel', ModifierPanel);
  }
};
