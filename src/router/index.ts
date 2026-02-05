import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/loginPages/LoginPage.vue'
import LobbyPage from '@/pages/lobbyPages/LobbyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/register',
    },
    {
      path: '/register',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: LobbyPage,
    },
  ],
})

export default router
