import { defineStore } from 'pinia'
import { userLogin } from '@/apis/user'
import { ref } from 'vue'
import { useCartStore } from './cart'
import { mergeCartAPI } from '@/apis/cart'


export const useUserStore = defineStore('user', () => {
  
  const cartStore = useCartStore()
  //1.数据
  const userInfo = ref({})

  //2.请求数据
  const getUserInfo = async ({ account, password }) => {
    const res = await userLogin({ account, password })
    userInfo.value = res.result
    mergeCartAPI(cartStore.cartList.map(item=>{
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.getAPIList()
  }
  //消除数据
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
  {
    persist: true
  }
)