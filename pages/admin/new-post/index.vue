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
      console.log("postData", postData);
      //postData  => submited editedPosts
      axios
        .post("https://nuxt-blog-71d4f.firebaseio.com/posts.json", {
          ...postData,
          updatedAt: new Date()
        })
        .then(res => {
          console.log("new_post", res);
          this.$router.push("/admin");
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>