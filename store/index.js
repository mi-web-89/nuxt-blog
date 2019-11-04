import Vuex from "vuex"
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      // asyncData by nuxt.js
      nuxtServerInit(vuexContext, context) {
        //check proses on client or not
        if(!process.client) {
          console.log('process_server', context.req)
        }
        
        //fetch data from firebase
        return axios.get('https://nuxt-blog-71d4f.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key})
            }
            // console.log('postsArray', postsArray)
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore;