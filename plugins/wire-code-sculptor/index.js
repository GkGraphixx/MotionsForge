import WireSculptor from './sculptor.vue';

export default {
  name: 'WireCodeSculptor',
  component: WireSculptor,
  install(app) {
    app.component('WireCodeSculptor', WireSculptor);
  }
};
