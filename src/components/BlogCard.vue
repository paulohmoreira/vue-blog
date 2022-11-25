<template>
  <router-link 
        :to="{ path: `/blogpost/${post.id}` }"
        class="text-decoration-none">
    <div class="blog-card position-relative d-flex flex-column rounded bg-white">
      <img :src=post.postImage alt="Cover photo" class="d-block rounded-top w-100">
      <div class="info d-flex flex-column h-50 text-dark py-4 px-3">
        <h4 class="title pb-1 fs-6 pb-2">{{post.postTitle}}</h4>
        <h6 class="pb-3"><DateFormatter :dateNumber=post.postDate.seconds /></h6>
        <div class="post-preview">
          <LineClamp :text=post.postText :lines="4"/>
        </div>
        <p class="link text-primary d-inline-flex mt-auto align-items-center pt-3 
          pb-1 text-uppercase">View the post</p>
      </div>
    </div>
  </router-link>
</template>

<script>
  import LineClamp from "../components/LineClamp.vue";
  import DateFormatter from "../components/DateFormatter.vue";

  export default {
    name: "blogCard",
    props: ["post"],
    components: { LineClamp, DateFormatter },
  }
</script>

<style scoped>
  .blog-card {
    cursor: pointer;
    min-height: 420px;
    max-width: 400px;
    transition: .5s ease all;
  }
  .blog-card:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);
  }
  img {
    z-index: 1;
    min-height: 200px;
    height: 300px;
    object-fit: cover;
  }
  .title {
    height: 60px;
    overflow-wrap: break-word;
  }
  .info {
    z-index: 3;
  }
  .info h6 {
    font-size: .75rem;
  }
  .link {
    font-size: .75rem;
    font-weight: 500;
    transition: .5 ease all;
  }
  .link:hover {
    color: rgba(226, 238, 226, 0.8);
  }
  .text {
    font-size: .75rem;
    text-align: justify;
  }
  .post-preview {
    height: 80px;
  }
</style>