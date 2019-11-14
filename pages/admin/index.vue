<template>
  <div class="admin-page">
    <div class="border-bottom text-center pt-2 pb-2 mb-2">
     <app-button @click="$router.push('/admin/new-post')">create page</app-button>
    </div>
    <div class="container">
      <post-list isAdmin :posts="loadedPosts"></post-list>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/post/PostList"
import AppButton from "@/components/ui/AppButton"

export default {
  layout: 'admin',
  middleware: ['checkAuth', 'auth'],
  components: {
    PostList,
    AppButton
  },
  computed: {
    loadedPosts() {
      // console.log('loadedPostAdmin', this.$store.getters.loadedPosts)
      return this.$store.getters.loadedPosts
    }
  }
};
</script>