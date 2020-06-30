/*
 * @Author: 张平
 * @Date: 2019-03-18 13:47:26
 * @Last Modified by: 张平
 * @Last Modified time: 2019-07-24 15:36:09
 */

import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // 用户不存在的拦截
    if (res.code === '1001002') {
      console.log('这里换成跳转你们的登录地址')
    } else {
      if (res.isSuccess === false) {
        // res 回包失败时包装成一个Error对象
        const err = new Error(res.msg)
        err.res = res
        return Promise.reject(err)
      }
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  },
)

export default service
