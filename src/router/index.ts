import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // 路由模式 hash
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/index.vue'),
      name: 'layout',
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/layout/home/index.vue')
        },
        {
          path: '/boke',
          component: () => import('@/views/layout/boke/index.vue')
        },
        {
          path: '/faxian',
          component: () => import('@/views/layout/faxian/index.vue')
        },
        {
          path: '/my',
          component: () => import('@/views/layout/my/index.vue')
        },
        {
          path: '/shequ',
          component: () => import('@/views/layout/shequ/index.vue')
        }
      ]
    }
  ]
})

export default router
