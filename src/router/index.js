import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Login from '@/views/Login';
import ProductHome from '@/views/ProductHome';
import Profile from "@/views/Profile";
import ProductDetail from '@/views/ProductDetail';

Vue.use(VueRouter);
export const routes = [
    {name: 'Home', path: '/', component: Home},
    {name: 'About', path: '/about', component: About},
    {name: 'Login', path: '/login', component: Login},
    {name: 'ProductHome', path: '/products', component: ProductHome},
    {name: 'ProductDetail', path: '/product/:id', component: ProductDetail},
    {
        name: 'Profile',
        path: '/profile',
        component: Profile,
        // beforeEnter: (to, from, next) => {

        // }
    },

];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path === '/profile' || to.path === '/products') {
        let auth = localStorage.getItem('auth');
        if (auth) {
            next()
        } else {
            next('/login')
        }
    }else{
        next();
    }

})

export default router;
