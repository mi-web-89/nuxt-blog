<template>
  <div class="container">
    <h2 class="text-center">Index Posts</h2>
    <post-list :posts="loadedPosts"></post-list>
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>
