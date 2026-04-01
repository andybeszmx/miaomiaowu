import request from '@/utils/request'

//轮播图获取
export const bannerGetSerive = (distributionSite) => {
  return request.get('/home/banner',{
    params:{
      distributionSite
    }
  })
}
