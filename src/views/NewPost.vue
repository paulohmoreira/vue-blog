<template>
    <div class="container">
        <div class="col-md-6 offset-md-3">
            <h3>Novo Post</h3>
            <form @submit.prevent="createPost">
                <div class="form-group">
                    <label for="postTitle">Título</label>
                    <input 
                        type="text"
                        class="form-control form-control-sm mb-2"
                        id="postTitle"
                        placeholder="Título..."
                        v-model="postTitle"
                    />
                </div>
                <div class="form-group">
                    <label for="postText">Texto</label>
                    <textarea class="form-control mb-2" id="postText" v-model="postText" rows="15"></textarea>
                </div>
                <!-- <div class="form-group">
                    <input ref="imageInputFile" type="file" class="w-1/2"  accept="image/*" @change="previewImage">
                    <div class="handle-image mt-2" v-if="picture">
                        <p>Progress: {{uploadValue.toFixed()+"%"}}</p>
                        <img :src="picture" alt="preview">
                        <button v-if="picture" @click="onUpload">Salvar</button>
                    </div>
                </div> -->
                <button type="submit" class="btn btn-success mt-2">Salvar</button>
            </form>
        </div>
    </div>
  
</template>

<script>
import postsColRef from '@/firebase/firebaseInit';
import { addDoc } from 'firebase/firestore'

export default {
    data(){
        return {               
            postTitle:null,
            postText:null,
            postDate:null,
            postImage:null
        }
    },
    methods: {
        async createPost(){
            this.postInfo.postDate = new Date()
            const addedDoc = await addDoc(postsColRef, this.$data)
            alert('Post criado com sucesso!')
            this.$router.push('/dashboard') 
            console.log(addedDoc)
        }
    }
}
</script>

<style>
.btn-remove:hover{
    text-decoration: underline;
}
</style>