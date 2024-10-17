import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Team from "@/views/Team.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import NotFound from "@/views/NotFound.vue";
import Mode from "@/views/Mode.vue";
import Privacy from "@/views/Privacy.vue";
import {useAuthStore} from "@/store/auth.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: Home, meta: { requiresAuth: false, requiresOTP: false }},
        {path: '/mode', name: 'mode', component: Mode, meta: { requiresAuth: true, requiresOTP: false }},
        {path: '/not-found', name: 'not-found', component: NotFound, meta: { requiresAuth: false, requiresOTP: false }},
        {path: '/about', component: About, name: 'about', meta: { requiresAuth: false, requiresOTP: false }},
        {path: '/team', component: Team, name: 'team', meta: { requiresAuth: false, requiresOTP: false }},
        {path: '/login', component: Login, name: 'login', meta: { requiresAuth: false, requiresOTP: false }},
        {path: '/register', component: Register, name: 'register', meta: { requiresAuth: false, requiresOTP: false }},
        {path: '/privacy', component: Privacy, name: 'privacy', meta: { requiresAuth: false, requiresOTP: false }},

    ]
})

router.beforeEach((to, from, next) => {
    const   authStore = useAuthStore();
    const   isLoggedIn = authStore.isLoggedIn;
    if (to.meta.requiresAuth) {
        if (isLoggedIn === true) {
            // The user is authenticated, proceed to route
            next();
        } else {
            // The user is not authenticated, redirect to /login page
            next('/login');
        }
    } else {
        // The use has access to non-protected routes, so we proceed
        next();
    }
})

export default router
