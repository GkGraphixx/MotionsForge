import { createApp } from 'vue';
import App from './App.vue';
import { registerAllPlugins } from './scripts/register-plugins.js';

const app = createApp(App);
registerAllPlugins(app);
app.mount('#app');
