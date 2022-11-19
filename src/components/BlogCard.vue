<template>
  <div class="blog-card position-relative d-flex flex-column rounded bg-white">
    <img :src=post.img alt="Cover photo" class="d-block rounded-top w-100">
    <div class="info d-flex flex-column h-50 text-dark py-4 px-3">
      <h4 class="pb-1 fs-5 pb-2">{{post.postTitle}}</h4>
      <h6 class="pb-3"><DateFormatter :dateNumber=post.postDate.seconds /></h6>
      <div class="post-preview">
        <LineClamp :text=post.postText :lines="2"/>
      </div>
      <router-link to="#" class="link d-inline-flex mt-auto align-items-center pt-3 pb-1 text-decoration-none text-uppercase">View the post</router-link>
    </div>
  </div>
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
    color: rgba(48, 48, 48, .8);
  }
  .text {
    font-size: .75rem;
    text-align: justify;
  }
</style>