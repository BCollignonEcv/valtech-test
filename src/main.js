import { createApp } from 'vue'
import './styles/reset.css'
import './styles/base.css'
import './styles/style.css'
import App from './App.vue'

import router from '@/scripts/router.js';

createApp(App)
    .use(router)
    .mount('#app')
