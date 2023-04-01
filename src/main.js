import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel';



import './assets/css/main.css'

// PRIME VUE
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";        
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";

library.add(fas, far, fab)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(PrimeVue)
app.use(Carousel)

app.mount('#app')