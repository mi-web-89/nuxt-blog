<template>
  <section class="featured-posts row">
      <postPreview
        class="col-12 col-md-4"
        v-for="post in posts"
        :key= post.id
        :id="post.id"
        :is-admin="isAdmin"
        :title="post.title"
        :thumbnail="post.thumbnail"
        :previewText="post.previewText"
        :author="post.author"
      ></postPreview>
  </section>
</template>

<script>
import postPreview from "@/components/post/PostPreview";

export default {
  components: {
    postPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }  
}
</script>