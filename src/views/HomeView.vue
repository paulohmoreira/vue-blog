<template>
  <div class="blog-container position-relative py-5 px-3 bg-light">
    <h3 class="fs-6 mb-5">View More Recent Posts</h3>
    <div class="blog-cards">
      <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
    </div>
  </div>
</template>

<script>
import BlogCards from '../components/BlogCard.vue'

export default {
  name: 'HomeView',
  components: { BlogCards },
  data() {
    return {
      sampleBlogCards: [
        { postTitle: "Post Card #1", postCoverPhoto: "https://source.unsplash.com/random/?blog&1", postDate:"Nov 18, 2022" },
        { postTitle: "Post Card #2", postCoverPhoto: "https://source.unsplash.com/random/?blog&2", postDate:"Nov 15, 2022" },
        { postTitle: "Post Card #3", postCoverPhoto: "https://source.unsplash.com/random/?blog&3", postDate:"Out 30, 2022" },
        { postTitle: "Post Card #4", postCoverPhoto: "https://source.unsplash.com/random/?blog&4", postDate:"Out 27, 2022" },
      ],
    }
  },
}
</script>

<style scoped>
  .blog-cards {
    display: grid;
    width: 90%;
    margin: auto;
    gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 500px){
    .blog-container {
      padding: 6.25rem 1rem;
    }
    .blog-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 900px){
    .blog-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1200px){
    .blog-cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
