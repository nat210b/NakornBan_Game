import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/loginPages/LoginPage.vue'
import SignupPage from '@/pages/signupPages/SignupPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
    },
  ],
})

export default router
