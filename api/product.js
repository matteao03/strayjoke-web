import request from '@/utils/request.js'

export function getProductList(){
  return request({
    url: '/products?include=lawyer',
    method: 'get',
  })
}

export function getSkuList(query){
  return request({
    url: '/skus',
    method: 'get',
    params:query
  })
}

export function getSku(id){
  return request({
    url: `/sku/${id}`,
    method: 'get',
  })
}
