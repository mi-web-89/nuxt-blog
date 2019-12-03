import Vuex from "vuex"
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editPost.id)
        // console.log('commit', state.loadedPosts[postIndex])
        state.loadedPosts[postIndex] = editPost
        // console.log('loadedPost', state.loadedPosts)
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },

    actions: {
      // asyncData by nuxt.js
      nuxtServerInit(vuexContext, context) {
        //check proses on client or not
        if (!process.client) {
          // console.log('process_server', context.req)
        }

        //fetch data from firebase
        return context.app.$axios.get(process.env.baseUrl + '/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            // console.log('postsArray', postsArray)
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },

      /*
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      */

      addPost(vuexContext, postData) {
        const createdPost = {
          ...postData,
          updatedAt: new Date()
        }
        return axios.post("https://nuxt-blog-71d4f.firebaseio.com/posts.json?auth=" + vuexContext.state.token, createdPost)
          .then(res => {
            // console.log("new_post", res)
            vuexContext.commit('addPost', {
              ...createdPost,
              id: res.data.name
            })
          })
          .catch(e => {
            console.error(e);
          });
      },

      editPost(vuexContext, post) {
        // console.log('postVuex', post)
        return axios.put('https://nuxt-blog-71d4f.firebaseio.com/posts/' + post.id + '.json?auth=' + vuexContext.state.token, post)
          .then(res => {
            vuexContext.commit('editPost', post)
          })
          .catch(e => {
            context.error(e)
          })
      },

      authUser(vuexContext, authData) {
        let authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.firebaseKey

        if (!authData.isLogin) {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.firebaseKey
        }

        // const apiKey = "AIzaSyCoC_uUdyG3Svr-Hz_30EtUWmuUH5Vb2Z0"; /*store in nuxt config */
        return this.$axios.$post(authUrl,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(res => {
            // console.log(res)
            vuexContext.commit('setToken', res.idToken)
            localStorage.setItem('token', res.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000)
            Cookie.set('jwt', res.idToken)
            Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000)
            // vuexContext.dispatch('setLogoutTimer', res.expiresI)
            return this.$axios.$post('http://localhost:3000/api/track-data', {data: 'Authenticated!'})
          })
          .catch(e => {
            console.error(e)
          })
      },
      
      // setLogoutTimer(vuexContext, duration) {
      //   setTimeout(() => {
      //     vuexContext.commit('clearToken')
      //   }, duration)
      // },

      initAuth(vuexContext, req) {
        let token;
        let expirationDate;

        if (req) {
          //check, if request does not have header cookie
          if (!req.headers.cookie) {
            return;
          }

          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))

          if (!jwtCookie) {
            return
          }

          token = jwtCookie.split('=')[1];

          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith('expirationDate='))
            .split("=")[1]
        }
        else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }

        //+expirationDate => convert stirng date to an number
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('No token or invalid token')
          // vuexContext.commit('clearToken')
          vuexContext.dispatch('logout')
          return
        }

        vuexContext.commit('setToken', token)
        // vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
      },

      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if(process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      }
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore;