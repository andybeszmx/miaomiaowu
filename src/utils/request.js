import { useUserStore } from '@/stores/user'
import axios from 'axios'
// 导入你的路由规则（和项目路由保持一致，避免跳转失败）
import router from '@/router' // 假设你的路由规则单独放在 routes.js 中
// import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 100000
})

//拦截器

// axios请求拦截器
instance.interceptors.request.use(config => {
  const userStore = useUserStore()

  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
instance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  // console.log(e)
  ElMessage.warning(e.response.data.msg)
  //401token失效处理
  if (e.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})

export default instance