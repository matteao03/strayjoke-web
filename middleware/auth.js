import axios from 'axios'

export default async function({store}) {
    let state = store.state
    if (state.token && !state.user){
        await axios('/info',{
            baseURL: 'http://api.strayjoke.test/',
            timeout: 5000,
            headers: {'Authorization': `Bearer ${state.token}`},
        }).then(res=>{
            const data = res.data.data
            store.commit('set_user', data.nickName);
            store.commit('set_phone', data.phone);
            store.commit('set_avatar', data.avatar);
            store.commit('set_birth', data.birth);
        }).catch(err=>{
            console.log(err)
        })
    }
}