import HealthDashboard from './dashboard.vue';

export default {
  name: 'PrintHealthDashboard',
  component: HealthDashboard,
  install(app) {
    app.component('PrintHealthDashboard', HealthDashboard);
  }
};
