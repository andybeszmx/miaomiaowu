import { ref } from "vue"
import { bannerGetSerive } from '@/apis/home'



export const useBanner = () => {
  //轮播图
const bannerList = ref([])
const getBanner = async () => {
  const res = await bannerGetSerive('1')
  // console.log(res)
  bannerList.value = res.result
}
getBanner()

return {
  bannerList
}
}