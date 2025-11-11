<template>
  <div class="dashboard-container">
    <div class="metrics">
      <div class="metric" v-for="(value, key) in metrics" :key="key">
        <label>{{ key }}</label>
        <progress :value="value" max="100"></progress>
      </div>
    </div>
    <div class="alerts">
      <h3>Alerts</h3>
      <ul>
        <li v-for="alert in alerts" :key="alert">{{ alert }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintHealthDashboard',
  data() {
    return {
      metrics: {
        Temperature: 70,
        FlowRate: 85,
        BedLevel: 92,
        Vibration: 40
      },
      alerts: []
    };
  },
  mounted() {
    this.simulateSensorFeed();
  },
  methods: {
    simulateSensorFeed() {
      setInterval(() => {
        this.metrics.Temperature = Math.floor(Math.random() * 100);
        this.metrics.FlowRate = Math.floor(Math.random() * 100);
        this.metrics.BedLevel = Math.floor(Math.random() * 100);
        this.metrics.Vibration = Math.floor(Math.random() * 100);

        this.alerts = [];
        if (this.metrics.Temperature > 90) this.alerts.push('High temperature risk');
        if (this.metrics.Vibration > 80) this.alerts.push('Excessive vibration detected');
      }, 3000);
    }
  }
};
</script>

<style scoped src="./styles.css"></style>
