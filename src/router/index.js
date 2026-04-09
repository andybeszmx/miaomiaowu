import { createRouter, createWebHistory } from 'vue-router'
const layout = () => import('@/views/layout/index.vue')
const login = () => import('@/views/login/index.vue')
const home = () => import('@/views/layout/home/index.vue')
const category = () => import('@/views/layout/category/index.vue')
const subcategory = () => import('@/views/layout/subcategory/index.vue')
const detail = () => import('@/views/layout/detail/index.vue')
const cartlist = () => import('@/views/layout/cartlist/index.vue')
const checkout = () => import('@/views/layout/checkout/index.vue')
const pay = () => import("@/views/layout/pay/index.vue")
const PayBack = () => import('@/views/layout/pay/PayBack.vue')
const member = () => import('@/views/layout/member/index.vue')
const UserInfo = () => import('@/views/layout/member/components/UserInfo.vue')
const order = () => import('@/views/layout/member/components/UserOrder.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          component: home
        },
        {
          path: 'category/:id',
          component: category
        },
        {
          path: 'category/sub/:id',
          component: subcategory
        },
        {
          path: 'detail/:id',
          component: detail
        },
        {
          path: 'cartlist',
          component: cartlist
        },
        {
          path: 'checkout',
          component: checkout
        },
        {
          path: 'pay',
          component: pay
        },
        {
          path: 'PayBack',
          component: PayBack
        },
        {
          path: 'member',
          component: member,
          children: [
            {
              path: '',
              component: UserInfo,
            },
            {
              path: 'order',
              component: order,
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: login
    }

  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
