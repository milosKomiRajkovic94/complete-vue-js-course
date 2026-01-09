import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './components/router-project/router.ts'
import { store } from './components/vuex-project/store.ts';

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
