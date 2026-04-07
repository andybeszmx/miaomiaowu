import { defineStore } from "pinia"
import { computed, ref } from 'vue'
import { useUserStore } from "./user"
import { findNewCartListAPI,delCartAPI, insertCartAPI } from "@/apis/cart"

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  //是否登录
  const isLogin = computed(() => userStore.userInfo.token)
  //本地购物车
  const cartList = ref([])
  //获取最新购物车列表
  const getAPIList = async ()=>{
    const res=await findNewCartListAPI()
    cartList.value=res.result
  }
  //添加商品
  const getCartList = async (goods) => {
    const { skuId,count } = goods
    if (isLogin.value) {
      //接口
      await insertCartAPI({ skuId, count })
      getAPIList()
    } else {
      //本地存储
      const item = cartList.value.find((item => item.skuId === skuId))
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }


  }
  //删除商品
  const delCart = async (skuId) => {
    if(isLogin.value){
      await delCartAPI([skuId])
      getAPIList()
    } else {
      // findIndex,splice
    const index = cartList.value.findIndex((item) => {return skuId === item.skuId })
    cartList.value.splice(index, 1)
    }
    
  }
  // 清空购物车
  const clearCart =()=>{
    cartList.value=[]
  }
  //是否单选选中的控制
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => item.skuId === skuId)
    item.selected = selected
  }
  //单选决定多选
  const isAll = computed(() => { return cartList.value.every(item => { return item.selected }) })
 
  //多选改变单选
  const changeSingle = (flag) => {
    cartList.value.forEach(item => {
      return item.selected = flag
    })
  }

  //计算数量和价格
  const allCount = computed(() => { return cartList.value.reduce((sum, item) => sum + item.count, 0) })
  const allPrice = computed(() => { return cartList.value.reduce((sum, item) => sum + item.count * item.price, 0) })
  //选中的数量和价格
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count, 0))
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count * item.price, 0))

  return {
    cartList,
    getCartList,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    changeSingle,
    selectedCount,
    selectedPrice,
    clearCart,
    getAPIList
  }
}, {
  persist: true
})