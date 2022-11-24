<template>
  <div class="blog-container position-relative py-5 px-3 bg-light">
    <h3 class="fs-6 mb-5">View More Recent Posts</h3>
    <div class="blog-cards">
      <BlogCards :post="post" v-for="post in posts" :key="post.id"/>
    </div>
  </div>
</template>

<script>
import BlogCards from '../components/BlogCard.vue'
import postsColRef from "../firebase/firebaseInit"
import { getDocs } from "firebase/firestore"

export default {
  name: 'HomeView',
  components: { BlogCards },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async fetchPosts(){
      let postsList = await getDocs(postsColRef)
      let posts = []
      postsList.forEach((post) => {
        let postData = post.data()
        postData.id = post.id
        posts.push(postData)
      })
      this.posts = posts
      this.posts.sort((b, a) => new Date(a.postDate.seconds) - new Date(b.postDate.seconds))
    }
  },
  created() {
    this.fetchPosts()
  }
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
  @media screen and (min-width: 1140px) {
    .blog-cards {
      max-width: 1140px;
    }  
  }
  @media screen and (min-width: 1200px){
    .blog-cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
