import cookies from '@/utils/cookies'

export const state = () => ({
  token: cookies.getItem('token') || '',
})
  
export const mutations = {
  set_token(state, value){
    state.token = value
    cookies.setItem('token', value)
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    const cookiesObj = cookies.cookieToJson(req.headers.cookie)
    const token = cookiesObj.token 
    if (token) return commit('set_token', token)
  }
 }