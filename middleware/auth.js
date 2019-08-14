import axios from 'axios'
import cookies from '@/utils/cookies'

export default function({store, req}) {
    let state = store.state
    if (state.token && !state.user){
        axios('/info',{
            baseURL: 'http://api.strayjoke.test/',
            timeout: 5000,
            headers: {'Authorization': `Bearer ${state.token}`},
        }).then(res=>{
            store.commit('set_user', res.data.name);
            store.commit('set_phone', res.data.phone);
        }).catch(err=>{
            console.log(err)
        })
   }
}