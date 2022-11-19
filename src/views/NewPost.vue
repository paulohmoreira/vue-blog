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
                <!--<div class="mb-3">
                    <label for="postCover" class="form-label">Imagem de capa</label>
                    <input class="form-control form-control-sm" id="postCover" type="file">
                </div>-->
                <button type="submit" class="btn btn-success">Salvar</button>
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
            console.log("Criando Post")
            this.postDate = new Date()
            const addedDoc = await addDoc(postsColRef, this.$data)
            alert('Post criado com sucesso!')
            console.log(addedDoc)
            this.$router.push('/dashboard')
            
        }
    }
}
</script>

<style>

</style>