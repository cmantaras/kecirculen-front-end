import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp/SignUpView.vue';
import SignIn from '../views/SignIn/SignInView.vue';
import Login from '../views/Login/LoginView.vue';
import Home from '../views/Home/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
