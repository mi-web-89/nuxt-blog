export default function (context) {
    console.log('middleware-checkAuth')
    if(process.client) {
        context.store.dispatch('initAuth')
    }
}