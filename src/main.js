import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';


// font Awesome css
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Bootstrap CSS,JS

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const pinia = createPinia()
const app = createApp(App);

app.use(router)
app.use(pinia)

app.mount('#app');