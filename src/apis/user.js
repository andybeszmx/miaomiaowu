import request from '@/utils/request'

export const userLogin = ({account,password}) => {
  return request.post('/login',{
      account,
      password
    })
}

//猜你喜欢
export const getLikeList =({limit = 4})=>{
  return request.get('/goods/relevant',{
    params:{
      limit
    }
  })
}