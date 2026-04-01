import request from '@/utils/request'

//一级分类及其数据
export const  firstCategoryGet = (id) => {
  return request.get('/category',{
    params:{
      id
    }
  })
}

