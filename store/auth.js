// example modular store

const api = {
  login: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.firebaseKey,
  signUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.firebaseKey
}

export const state = {
  token: null
}

export const mutations = {
  setToken(state, token) {
    // console.log(token)
    state.token = token
  }
}

export const actions = {
  authUser(vuexContext, authData) {
    let authUrl = authData.isLogin  ? api.login : api.signUp 
    this.$axios.$post(authUrl,
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        // console.log(res)
        vuexContext.commit('setToken', res.idToken)
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const getters = {
  getToken(state) {
    return state.token != null
  }
}
