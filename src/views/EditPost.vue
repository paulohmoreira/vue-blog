<template>
  <div class="container">
        <div class="col-md-6 offset-md-3">
            <h3>Editar Post</h3>
            <form @submit.prevent="updatePost">
                <div class="form-group">
                    <label for="postTitle">Título</label>
                    <input 
                        type="text"
                        class="form-control mb-2"
                        id="postTitle"
                        placeholder="Título..."
                        v-model="postInfo.postTitle"
                    />
                </div>
                <div class="form-group">
                    <label for="postText">Texto</label>
                    <textarea class="form-control mb-2" id="postText" rows="15" v-model="postInfo.postText"></textarea>
                </div>
                <button type="submit" class="btn btn-success">Salvar</button>
            </form>
        </div>
    </div>
</template>

<script>
import postsColRef from '../firebase/firebaseInit'
import { getDoc, doc, setDoc } from 'firebase/firestore'
export default {
    data () {
        return {
            selectedPost:{},
            postId: null,
            docRef: null,
            postInfo: {                
                postTitle: null,
                postText: null
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
        },
        async updatePost() {
            await setDoc(this.docRef, this.postInfo)
            alert(`O post "${this.postInfo.postTitle}" foi alterado com sucesso!`)
            this.$router.push('/dashboard')
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

</style>