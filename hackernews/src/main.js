import { createApp } from 'vue'
import App from './App.vue'
import router from '/src/router/index';
import {store} from './store/index';

createApp(App).use(router, store).mount('#app')