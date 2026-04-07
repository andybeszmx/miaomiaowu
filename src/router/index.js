import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import home from '@/views/layout/home/index.vue'
import category from '@/views/layout/category/index.vue'
import subcategory from '@/views/layout/subcategory/index.vue'
import detail from '@/views/layout/detail/index.vue'
import cartlist from '@/views/layout/cartlist/index.vue'
import checkout from '@/views/layout/checkout/index.vue'
import pay from "@/views/layout/pay/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:layout,
      children:[
        {
          path:'',
          component:home
        },
        {
          path:'category/:id',
          component:category
        },
        {
          path:'category/sub/:id',
          component:subcategory
        },
        {
          path:'detail/:id',
          component:detail
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
        }
      ]
    },
    {
      path:'/login',
      component:login
    }

  ],
  scrollBehavior() {
    return {
      top:0
    }
  }
})

export default router
