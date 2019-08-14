import axios from 'axios'
import cookies from '@/utils/cookies'

// create an axios instance
const service = axios.create({
  baseURL: 'http://api.strayjoke.test/', // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
      let token = cookies.getItem('token') || ''
      config.headers.common['Authorization'] = `Bearer ${token}`
      return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response
  },

  error => {
    return Promise.reject(error.response.data)
  }
)

export default service
