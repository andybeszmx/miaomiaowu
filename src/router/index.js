import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import home from '@/views/layout/home/index.vue'
import category from '@/views/layout/category/index.vue'
import subcategory from '@/views/layout/subcategory/index.vue'
import detail from '@/views/layout/detail/index.vue'


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
