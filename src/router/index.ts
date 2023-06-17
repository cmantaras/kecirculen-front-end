import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp/SignUpView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})

export default router
