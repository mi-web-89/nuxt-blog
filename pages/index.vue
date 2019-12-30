<template>
  <div>
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>

    <div class="container">
      <post-list :posts="posts"></post-list>
    </div>
  </div>
</template>

<script>
/* 
global component 
import PostList from "@/components/post/PostList"   
*/

export default {
  /* middleware: ['log'], example middleware on page*/
  computed: {
    posts () {
      return this.$store.getters.loadedPosts
    }
  },
  head: {
    title: 'WD-BLOG'
  }

  /*
  must be promised, using callback for tricky promise
  asyncData(context, callback) { 
    console.log(context)
  }
  */
}
</script>

<style lang="scss">
.intro {
  height: 300px;
  padding: 30px;
  position: relative;
  border: solid 1px #ccc;
  margin-bottom: 1rem;
  background-image: url("../assets/images/startup-entrepreneur.png");
  background-position: center;
  background-size: cover;

  h1 {
    position: absolute;
    border: solid 1px #ccc;
    background-color: #eee;
    border-radius: 5px;
    padding: 2px 5px;
    top: 20%;
    left: 5%;
    width: 90%;
  }
}
</style>
