import axios from 'axios'

export default function({store, req}) {
    let state = store.state
    if (state.token && !state.user){
        axios('/info',{
            baseURL: 'http://api.strayjoke.test/',
            timeout: 5000,
            headers: {'Authorization': `Bearer ${state.token}`},
        }).then(res=>{
            const data = res.data.data
            store.commit('set_user', data.nickName);
            store.commit('set_phone', data.phone);
        }).catch(err=>{
            console.log(err)
        })
   }
}