export default function (context) {
  if (!context.store.getters.isAuthenticated) {
    // console.log('middleware-Auth')
    context.redirect('/admin/auth')
  }
}