import './assets/main.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

const app = createApp(App)
app.use(PrimeVue);

app.use(createPinia())
app.use(router)

app.mount('#app')
