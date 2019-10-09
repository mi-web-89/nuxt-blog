<template>
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
      ></postPreview>
    </div>

    <div class="col-md-4 col-12">
      <postPreview
        id="3"
        title="three topic"
        thumbnail="image-not-found-sm.png"
        previewText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus"
      ></postPreview>
    </div>
  </section>
</template>

<script>
import postPreview from "@/components/post/PostPreview";

export default {
  components: {
    postPreview
  }
};
</script>