<template>
  <div>
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>

    <div class="container">
      <section class="featured-posts row">
        <div class="col-12 col-md-4">
          <postPreview
            id="1"
            title="first topic"
            thumbnail="image-not-found-sm.png"
            previewText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus"
          ></postPreview>
        </div>

        <div class="col-md-4 col-12">
          <postPreview
            id="2"
            title="second topic"
            thumbnail="image-not-found-sm.png"
            previewText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus"
          >
          </postPreview>
        </div>

        <div class="col-md-4 col-12">
          <postPreview
            id="3"
            title="three topic"
            thumbnail="image-not-found-sm.png"
            previewText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus"
          >
          </postPreview>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PostPreview from "@/components/post/PostPreview";

export default {
  components: {
    PostPreview
  }
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
