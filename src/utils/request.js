import axios from 'axios'

// 创建axios
const service = axios.create({
  baseURL: '/api', // base url
  timeout: 5000 // 请求超时
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type':'application/json'
    }
    return config
  },
  error => {
    console.log(error) // debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    console.log(response.data.code)
    if (response.data.code != 0) {
      console.log(11111)
      console.log({
        message: response.data.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) // debug
    console.log({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
