import request from '@/utils/request.js'

export function collectLawyer(id) {
  return request({
    url: `/lawyers/${id}/collect`,
    method: 'post',
  })
}

export function uncollectLawyer(id) {
  return request({
    url: `/lawyers/${id}/uncollect`,
    method: 'post',
  })
}

export function collectSku(id) {
  return request({
    url: `/skus/${id}/collect`,
    method: 'post',
  })
}

export function uncollectSku(id) {
  return request({
    url: `/skus/${id}/uncollect`,
    method: 'post',
  })
}

export function getCollectLawyers() {
  return request({
    url: `/collectLawyers`,
    method: 'get',
  })
}

export function getCollectSkus() {
  return request({
    url: `/collectSkus`,
    method: 'get',
  })
}



