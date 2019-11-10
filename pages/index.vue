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
// import PostList from "@/components/post/PostList"  /* global component */

export default {
  components: {
    // PostList  /* global component */
  },
  computed: {
    posts () {
      return this.$store.getters.loadedPosts
    }
  },
  head: {
    title: 'WD-BLOG'
  }

  /*
  // must be promised, using callback for tricky promise
  asyncData(context, callback) { 
    console.log("asyncData is executed")
    console.log(context)
    setTimeout(() => {
     // callback : fist param is error => 
     // when promise get error: catch(err => {context.error(new Error)})
     callback(null, { //write data here
       posts: [
          {
            id: "1",
            title: "Title 1",
            thumbnail: "image-not-found-sm.png",
            previewText:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda \ 
               error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum \ 
               sunt aspernatur commodi?"
          }         
       ]
      })
    }, 1500)
  }
  */
};
</script>

<style lang="scss">
.intro {
  height: 300px;
  padding: 30px;
  position: relative;
  border: solid 1px #ccc;
  // margin-top: 0.5rem;
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
