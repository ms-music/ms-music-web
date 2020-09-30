import Vue from 'vue'
import VueRouter from 'vue-router'
import haolj from "./haolj";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Login',
    meta: {requiresAuth: false},
    component: () => import('../views/login/Login')
}, haolj];

const router = new VueRouter({
    mode: 'history',
    base: process.env.VUE_APP_BASE_URL,
    routes: routes
});

export default router;
