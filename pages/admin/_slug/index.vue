<template>
  <div class="admin-new-post container">
    <AdminPostForm :post="loadedPost" @submit="onSubmittedMethod"/>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
import axios from 'axios'

export default {
  layout: 'admin',
  middleware: ['checkAuth', 'auth'],
  components: {
     AdminPostForm
  },
  asyncData(context) {
    // console.log('contextParamsid', context.params.slug)
    return axios.get(process.env.baseUrl + '/posts/' + context.params.slug + '.json')
    .then(res => {
      // console.log('resData', res.data)
      return { 
        loadedPost : {
          ...res.data
        } 
      }
    })
    .catch(e => {
      context.error(e)
    })
  },
  methods: {
    onSubmittedMethod(postData) {
      console.log('postData', postData)
      const tmpData = {
        ...postData,
        id: this.$route.params.slug,
        updatedAt: new Date()
      }
      this.$store.dispatch('editPost', tmpData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
};
</script>