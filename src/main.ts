import { createApp } from 'vue'
import './style.scss'
import '@/assets/fonts.scss'
import App from './App.vue'
import router from './router'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(createVfm())
    .use(router)
    .mount('#app')
