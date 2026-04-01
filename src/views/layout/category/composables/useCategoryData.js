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
  //组件不复用，刷新数据
  onBeforeRouteUpdate((to)=>{
    CategoryGet(to.params.id)
})

return {
  categoryData
}
}