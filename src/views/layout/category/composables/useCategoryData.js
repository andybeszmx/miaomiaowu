import { ref } from 'vue'
import { firstCategoryGet } from '@/apis/category'
import { useRoute,onBeforeRouteUpdate } from 'vue-router'


export const useCategoryData = () => {
  const categoryData = ref({})
  const route = useRoute()
  const CategoryGet =async (id=route.params.id) => {
    const res = await firstCategoryGet(id)
    // console.log(res)
    categoryData.value=res.result
  }
  CategoryGet()
  //路由只有参数变化的时候，会复用组件导致无法调用函数获取最新数据，以下函数可以解决此问题
  onBeforeRouteUpdate((to)=>{
    CategoryGet(to.params.id)
})

return {
  categoryData
}
}