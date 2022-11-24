<template>
    <div class="post-container mt-5">
        <h3>{{ postInfo.postTitle }}</h3>
        <small><DateFormatter :dateNumber=postInfo.postDate.seconds /></small>
        <img :src=postInfo.postImage alt="Cover photo" class="post-image">
        <div class="blog-text">{{ postInfo.postText }}</div>
    </div>
</template>

<script>
import postsColRef from '../firebase/firebaseInit'
import { getDoc, doc } from 'firebase/firestore'
import DateFormatter from "../components/DateFormatter.vue";

export default {
    components: { DateFormatter },
    data () {
        return {
            selectedPost:{},
            postId: null,
            docRef: null,
            postInfo: {                
                postTitle:null,
                postText:null,
                postDate:null,
                postImage:null
            }
        }
    },
    methods: {
        async getPost() {
            let postRef = doc(postsColRef, this.postId)
            this.docRef = postRef
            let post = await getDoc(this.docRef)
            let postData = post.data()
            this.postInfo.postTitle = postData.postTitle
            this.postInfo.postText = postData.postText
            this.postInfo.postDate = postData.postDate
            this.postInfo.postImage = postData.postImage
        }
    },
    created(){
        let postId = this.$route.params.postId
        this.postId = postId
        this.getPost()
    }
}
</script>

<style>
.post-container {
    width: 100vw;
    align-items: center;
    justify-content: center;
}
.post-image {
    margin: 30px 0;
    border-radius: 10px;
}
.blog-text {
	width: 950px;
	margin: 0 auto 30px auto;
    padding: 10px;
    text-align: justify;
}
</style>