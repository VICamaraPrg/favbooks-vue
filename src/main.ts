import './assets/main.css';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './router';

const app = createApp(App);

app.use(router).use(createPinia().use(piniaPluginPersistedState));

app.mount('#app');
