import Sculptor from './sculptor.vue';

export default {
  name: 'LiveGcodeSculptor',
  component: Sculptor,
  install(app) {
    app.component('LiveGcodeSculptor', Sculptor);
  }
};
