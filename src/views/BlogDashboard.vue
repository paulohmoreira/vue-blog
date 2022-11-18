<template>
  <div class="postList">
    <router-link to="/newpost"><button class="btn btn-primary btn-lg btn-new">Novo Post</button></router-link>    
    <div class="container">
        <h3>Posts</h3>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <ul class="list-group">
                    <li v-for="post in posts" :key="post.id" class="list-group-item d-flex justify-content-between align-items-center">
                    {{post.postTitle}}
                    <span class="badge badge-primary badge-pill">
                      <router-link :to="{ path: `/editpost/${post.id}` }" class="btn btn-outline-secondary btn-sm">Editar</router-link>
                      <a href="#" class="btn btn-outline-danger btn-sm">Apagar</a>
                    </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import postsColRef from "../firebase/firebaseInit"
import { getDocs } from "firebase/firestore"
export default {
  name: "DashBoard",
  components: {},
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
    }
  },
  created() {
    this.fetchPosts()
  }
}
</script>

<style>
.btn-new {
  margin: 30px 0;
}
.postList {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 30px;
}

.btn-outline-secondary {
  margin-right: 10px;
}
</style>