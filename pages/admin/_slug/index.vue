<template>
  <div class="admin-new-post container">
    <AdminPostForm :post="loadedPost" />
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  layout: 'admin',
  components: {
     AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "max",
        title: "My awesome post",
        content: "super amazing. thx all",
        thumbnailLink: "image-not-found-sm.png"
      }
    }
  }
};
</script>