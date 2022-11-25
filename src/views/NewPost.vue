<template>
    <div class="my-4">
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
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="postText">Texto</label>
                    <textarea class="form-control mb-2" id="postText" v-model="postText" rows="15" required></textarea>
                </div>
                <div class="form-group">
                    <input ref="imageInputFile" type="file" class="d-none" accept="image/*" @change="handleImageFile($event)">
                    <button type="button" class="btn w-40 btn-outline-secondary" @click="selectImageFile()">Adicionar Imagem de Capa</button>
                    <div class="handle-image mt-2" v-if="file">
                        {{ `${file.name} -` }}
                        <button class="btn-remove btn btn-sm" @click="file = null">
                            <img src="../assets/icons/trash.svg" alt="Apagar Foto">
                        </button>
                    </div>
                </div>
                <button type="submit" class="btn btn-success my-4">Salvar</button>
            </form>
        </div>
    </div>
  
</template>

<script>
import postsColRef from '@/firebase/firebaseInit';
import { addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



export default {
    data(){
        return {
            storageRef:null,
            postTitle:null,
            postText:null,
            postDate:null,
            postImage:null,
            file:null
        }
    },
    computed: {
        fileName () {
            const { file } = this.$data

            if (file) {
                const split = file.name.split('.')
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
            this.file = target.files[0]
        },  
        createPost(){
            const storage = getStorage();            
            
            const metadata = {
                contentType: 'image/*'
            };

            if(this.file){
                this.storageRef = ref(storage, 'images/' + this.file.name);
            } else {
                alert('Adicione uma imagem!')
            }
            const uploadTask = uploadBytesResumable(this.storageRef, this.file, metadata);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                },
                (error) => {
                    switch (error.code) {
                    case 'storage/unauthorized':
                        console.log("User doesn't have permission to access the object")
                        break;
                    case 'storage/canceled':
                        console.log("User canceled the upload")
                        break;
                    case 'storage/unknown':
                        console.log("Unknown error occurred, inspect error.serverResponse")
                        break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        this.postImage = downloadURL

                        this.postDate = new Date()
                        const addedDoc = addDoc(postsColRef, {
                            postTitle:this.postTitle,
                            postText:this.postText,
                            postDate:this.postDate,
                            postImage:this.postImage
                        })
                        alert('Post criado com sucesso!')
                        this.$router.push('/dashboard') 
                        console.log(addedDoc)
                    })
                }
            )
        }
    }
}
</script>

<style>
.btn-remove:hover{
    text-decoration: underline;
}
</style>