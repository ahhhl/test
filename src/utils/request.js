import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { Message } from 'view-design'

const message = Vue.prototype.$message
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = store.getters.token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    
    const res = response.data
    if (res.status !== 200) {
      message.error(res.message||'Error')
      if (res.status === 5008 || res.status === 12) {
        message.error('会话已过期,请重新登录')
        setTimeout(() => {
          store.dispatch('logout').then(() => {
            location.reload()
          })
        })
      }
      // return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    message.error(error.message)
    return Promise.reject(error)
  }
)
export default service