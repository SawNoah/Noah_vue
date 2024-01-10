import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Employee from './components/Employees.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createPinia } from 'pinia';
import '@/assets/main.css';
import './index.css';

const routes = [
    { path: '/', component: Home },
    { path: '/employee', component: Employee },
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
    .component('Footer', Footer);
app.use(pinia);
app.mount('#app');