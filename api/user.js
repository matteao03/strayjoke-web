import request from '@/utils/request.js'

export function editName(data) {
  return request({
    url: '/auth/name',
    method: 'patch',
    data
  })
}

export function editBirth(data) {
  return request({
    url: '/auth/birth',
    method: 'patch',
    data
  })
}

export function editAvatar(data) {
  return request({
    url: '/auth/avatar',
    method: 'patch',
    data
  })
}

