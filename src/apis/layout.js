import request from '@/utils/request'

export const categoryGetSerive = () => {
  return request.get('/home/category/head')
}