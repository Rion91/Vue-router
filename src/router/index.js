import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Login from '@/views/Login';
import ProductHome from '@/views/ProductHome';
import Profile from "@/views/Profile";
import ProductDetail from '@/views/ProductDetail';
import jQuery from 'jquery';

Vue.use(VueRouter);
export const routes = [
    {name: 'Home', path: '/', component: Home},
    {name: 'About', path: '/about', component: About},
    {name: 'Login', path: '/login', component: Login},
    {name: 'ProductHome', path: '/products', component: ProductHome},
    {name: 'ProductDetail', path: '/product/:id', component: ProductDetail},
    {name: 'Profile', path: '/profile', component: Profile},

];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
