import { ref } from 'vue'
import { defineStore } from 'pinia'
import {categoryGetSerive} from '@/apis/layout'


export const useCategoryStore = defineStore('category', () => {
  //全部分类获取
  const categoryList=ref([])
  const getCategory = async () => {
    const res = await categoryGetSerive()
    categoryList.value = res.result
    // console.log(res)
  }

  return{
    getCategory,
    categoryList
  }
})
