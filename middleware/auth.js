export default function({store, route, req, redirect}) {
    if (!store.state.token){
        console.log('未登录')
    }
}