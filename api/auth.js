import request from '@/utils/request.js'

export function getSignupCode(data) {
  return request({
    url: '/signupCode',
    method: 'post',
    data
  })
}

export function getLoginCode(data) {
  return request({
    url: '/loginCode',
    method: 'post',
    data
  })
}

export function signup(data) {
  return request({
    url: '/signup',
    method: 'post',
    data
  })
}

export function loginByPassword(data) {
  return request({
    url: '/loginByPassword',
    method: 'post',
    data
  })
}

export function loginByCode(data) {
  return request({
    url: '/loginByCode',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

