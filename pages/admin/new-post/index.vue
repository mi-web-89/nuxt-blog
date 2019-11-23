<template>
  <div class="admin-new-post container">
    <AdminPostForm @submit="onSubmittedMethod" />
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  layout: "admin",
  middleware: ['checkAuth', 'auth'],
  components: {
    AdminPostForm
  },
  methods: {
    onSubmittedMethod(postData) {
      console.log("postData", postData)
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
};
</script>