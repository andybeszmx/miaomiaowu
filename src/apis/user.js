import request from '@/utils/request'

export const userLogin = ({account,password}) => {
  return request.post('/login',{
      account,
      password
    })
}