import Manipulator from './manipulator.vue';

export default {
  name: 'EnhancedCodeManipulator',
  component: Manipulator,
  install(app) {
    app.component('EnhancedCodeManipulator', Manipulator);
  }
};
