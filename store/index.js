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
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editPost.id)      
        // console.log('commit', state.loadedPosts[postIndex])
        state.loadedPosts[postIndex] = editPost
        // console.log('loadedPost', state.loadedPosts)
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

      // setPosts(vuexContext, posts) {
      //   vuexContext.commit('setPosts', posts)
      // },

      addPost(vuexContext, postData) {
        const createdPost = {
          ...postData,
          updatedAt: new Date()
        }
        axios.post("https://nuxt-blog-71d4f.firebaseio.com/posts.json", createdPost)
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
        axios.put('https://nuxt-blog-71d4f.firebaseio.com/posts/' + post.id + '.json', post)
          .then(res => {
            vuexContext.commit('editPost', post)
          })
          .catch(e => {
            context.error(e)
          })
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