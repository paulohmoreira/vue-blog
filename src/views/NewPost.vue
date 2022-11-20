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
                <div class="form-group">
                    <input ref="imageInputFile" type="file" class="d-none" accept="image/*" @change="handleImageFile($event)">
                    <button type="button" class="btn w-40 btn-outline-secondary" @click="selectImageFile()">Adicionar Imagem de Capa</button>
                    <div class="handle-image mt-2" v-if="postImage">
                        {{ `${postImage.name} -` }}
                        <button class="btn-remove btn text-danger btn-sm" @click="postImage = null">
                            remover
                        </button>
                    </div>
                </div>
                <!--<div class="mb-3">
                    <label for="postCover" class="form-label">Imagem de capa</label>
                    <input class="form-control form-control-sm" id="postCover" type="file">
                </div>-->
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
        selectImageFile () {
            this.$refs.imageInputFile.value = null
            this.$refs.imageInputFile.click()
        },
        handleImageFile ({ target }){
            this.postImage = target.files[0]
        },
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
.btn-remove:hover{
    text-decoration: underline;
}
</style>