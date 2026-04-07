import request from '@/utils/request'

//一级分类及其数据
export const  firstCategoryGet = (id) => {
  return request.get('/category',{
    params:{
      id
    }
  })
}
 
//二级分类及其数据
export const secondCategoryGet = id => {
  return request.get('/category/sub/filter',{
    params:{
      id
    }
  })
}

//二级分类的物品数据
export const secondCategoryGoods = data => {
  return request.post('/category/goods/temporary',{
   data
  })
}