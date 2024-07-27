import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MostrarResultado from './components/MostrarResultado.vue'

const app = createApp(App);
app.component('MostraResultado', MostrarResultado);
app.mount('#app');
