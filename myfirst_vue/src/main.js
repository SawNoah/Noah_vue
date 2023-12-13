import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Cookies from './components/Cookies.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Counter from './components/Counter.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import { createPinia } from 'pinia';
import '@/assets/main.css'

const routes = [
    { path: '/', component: Home },
    { path: '/cookies', component: Cookies },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app
    .component('Nav', Nav)
    .component('Footer', Footer)
    .component('Counter', Counter);
app.use(pinia);
app.mount('#app');