import request from '@/utils/request'

//轮播图获取
export const bannerGetSerive = (distributionSite) => {
  return request.get('/home/banner',{
    params:{
      distributionSite
    }
  })
}
//新鲜好物获取
export const newGoodsGetSerive = () => {
  return request.get('/home/new')
}

//人气推荐
export const hotBrandSerive = () => {
  return request.get('/home/hot')
}