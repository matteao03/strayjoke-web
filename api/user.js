import request from '@/utils/request.js'

export function editName(data) {
  console.log(data)
  return request({
    url: '/auth/name',
    method: 'patch',
    data
  })
}

