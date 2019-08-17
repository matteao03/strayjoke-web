import request from '@/utils/request.js'

export function createOrder(data) {
  return request({
    url: '/order',
    method: 'post',
    data
  })
}

export function getOrders(query) {
  return request({
    url: '/orders',
    method: 'get',
    params:query
  })
}
