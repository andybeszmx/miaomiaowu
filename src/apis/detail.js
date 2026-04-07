import request from '@/utils/request'

//商品详情
export const detailGet = (id) => {
  return request.get('/goods',{
    params:{
      id
    }
  })
}

//热榜信息
export const hotGoodsGet = ({ id, type, limit = 3 }) => {
  return request.get('/goods/hot',{
    params:{
      id,
      type, 
      limit
    }
  })
}