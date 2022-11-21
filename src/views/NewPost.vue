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
                <!--<div class="form-group">
                    <input ref="imageInputFile" type="file" class="d-none" accept="image/*" @change="handleImageFile($event)">
                    <button type="button" class="btn w-40 btn-outline-secondary" @click="selectImageFile()">Adicionar Imagem de Capa</button>
                    <div class="handle-image mt-2" v-if="postImage">
                        {{ `${postImage.name} -` }}
                        <button class="btn-remove btn text-danger btn-sm" @click="postImage = null">
                            remover
                        </button>
                    </div>
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
    computed: {
        fileName () {
            const { postImage } = this.$data

            if (postImage) {
                const split = postImage.name.split('.')
                return `${split[0]}-${new Date().getTime()}.${split[1]}`
            } else {
                return ''
            }
        },
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
            let url = ''

            try {
                if (this.postImage){
                    const snapshot = await this.$firebase.storage()
                        .ref(window.uid)
                        .child(this.fileName)
                        .put(this.postImage)

                    url = await snapshot.ref.getDownloadURL()
                }
                this.postDate = new Date()
                const addedDoc = await addDoc(postsColRef, this.$data)
                alert('Post criado com sucesso!')
                this.$router.push('/dashboard') 
                console.log(addedDoc)                          
            } catch (error) {
                console.error(error)
            } finally {
                console.log(url)
            }
        },
    }
}
</script>

<style>
.btn-remove:hover{
    text-decoration: underline;
}
</style>