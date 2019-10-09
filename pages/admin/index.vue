<template>
  <div class="admin-page">
    <div class="border-bottom text-center pt-2 pb-2 mb-2">
      <nuxt-link to="/admin/new-post" tag="button" class="btn btn-primary">Create Post</nuxt-link>
    </div>
    <div class="container">
      <post-list></post-list>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";

export default {
  components: {
    PostList
  }
};
</script>