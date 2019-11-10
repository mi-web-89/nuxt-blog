<template>
  <div class="admin-new-post container">
    <AdminPostForm @submit="onSubmittedMethod" />
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
import axios from "axios";

export default {
  layout: "admin",
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