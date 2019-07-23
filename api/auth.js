import request from '@/utils/request.js'

export function getSignupCode(data) {
  return request({
    url: '/api/signupCode',
    method: 'post',
    data
  })
}

export function getLoginCode(data) {
  return request({
    url: '/api/loginCode',
    method: 'post',
    data
  })
}

export function signup(data) {
  return request({
    url: '/api/signup',
    method: 'post',
    data
  })
}

export function loginByPassword(data) {
  return request({
    url: '/api/loginByPassword',
    method: 'post',
    data
  })
}

export function loginByCode(data) {
  return request({
    url: '/api/loginByCode',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

