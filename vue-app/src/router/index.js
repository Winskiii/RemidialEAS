import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/Homepage.vue';

//import LogOut from '../components/LogOut.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Homepage },
    { path: '/signin', component: () => import('../components/SignIn.vue')},
    { path: '/signup', component: () => import('../components/SignUp.vue')},
    { path: '/messages', component: () => import('../components/Messages.vue')},
    { path: '/homepage', component: () => import('../components/Homepage.vue')},
    //{ path: '/groups', component: () => import('../components/Groups.vue')},

  ]
});

export default router;
