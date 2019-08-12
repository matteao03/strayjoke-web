import request from '@/utils/request.js'

export function createOrder(data) {
  return request({
    url: '/order',
    method: 'post',
    data
  })
}
