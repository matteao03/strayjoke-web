import cookies from '@/utils/cookies'

export const state = () => ({
  token: '',
  user:'',
  phone:''
})
  
export const mutations = {
  set_token(state, value){
    state.token = value
    cookies.setItem('token', value)
  },
  set_user(state, value){
    state.user = value
  },
  set_phone(state, value){
    state.phone = value
  },
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    const cookiesObj = cookies.cookieToJson(req.headers.cookie)
    const token = cookiesObj.token 
    if (token) return commit('set_token', token)
  }
 }