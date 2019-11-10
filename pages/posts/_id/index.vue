<template>
  <div class="single-post-page container text-center">
    <section class="post">
      <h1 class="post-title">Title of the Post {{ $route.params.id }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedAt | date }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.previewText }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a
          href="mailto:feedback@my-awesome-domain.com"
        >feedback@my-awesome-domain.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
// import axios from "axios"; /* extend module axios in nuxtconfig */

export default {
  //single data
  asyncData(context) {
    //example extend modules axios
    return context.app.$axios.$get("/posts/" + context.params.id + ".json")
      .then(data => {
        console.log('fetchSingle', data)
        return { loadedPost : data }
      })
      .catch(e => context.error(e));
  }
};
</script>

