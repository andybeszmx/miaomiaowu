import { defineStore } from 'pinia'
import { userLogin } from '@/apis/user'
import { ref } from 'vue'


export const useUserStore = defineStore('user', () => {
  
  //1.数据
  const userInfo = ref({})

  //2.请求数据
  const getUserInfo = async ({ account, password }) => {
    const res = await userLogin({ account, password })
    userInfo.value = res.result
  }
  //消除数据
  const clearUserInfo = () => {
    userInfo.value = {}
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