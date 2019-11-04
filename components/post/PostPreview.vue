<template>
  <div class="post-priview border-bottom">
    <nuxt-link :to="postLink">
      <article class="post-priview">
        <div class="post-thumbnail text-center">
          <img :src="thumbnail" :alt="image-thumbnail" width="212px" height="auto" />
          
          <!-- <img :src="`images/${thumbnail}`" :alt="thumbnail" width="100%" height="auto" /> -->
          <!-- :src="'~/assets/images/' + thumbnail + '.png'" -->
          <!-- ~/assets/images/image-not-found-sm.png -->
        </div>

        <div class="post-content">
          <h1>{{ title }}</h1>
          <p>{{ previewText }}</p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    }
  }
};
</script>