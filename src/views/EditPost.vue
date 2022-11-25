<template>
  <div class="my-4">
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
                <div class="form-group">
                    <div>
                        <img :src=postInfo.postImage alt="Cover photo" class="edit-post-image">
                    </div>
                    <input ref="imageInputFile" type="file" class="d-none" accept="image/*" @change="handleImageFile($event)">
                    <button type="button" class="btn w-40 btn-outline-secondary" @click="selectImageFile()">Mudar Imagem de Capa</button>
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
import postsColRef from '../firebase/firebaseInit'
import { getDoc, doc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";

const storage = getStorage();

export default {
    data () {
        return {
            selectedPost:{},
            postId: null,
            docRef: null,
            file:null,
            deleteRef:null,
            //deletedFile:null,
            postInfo: {                
                postTitle: null,
                postText: null,
                postImage: null,
                postDate:null
            }
        }
    },
    methods: {
        selectImageFile () {
            this.$refs.imageInputFile.value = null
            this.$refs.imageInputFile.click()
        },
        handleImageFile ({ target }){
            this.file = target.files[0]            
            //this.deleteRef = ref(storage, 'images/' + this.postInfo.postImage.name);
        },
        async getPost() {
            let postRef = doc(postsColRef, this.postId)
            this.docRef = postRef
            let post = await getDoc(this.docRef)
            let postData = post.data()
            this.postInfo.postTitle = postData.postTitle
            this.postInfo.postText = postData.postText
            this.postInfo.postImage = postData.postImage            
            this.postInfo.postDate = postData.postDate
        },
        async updatePost() {           
            
            if (this.file) {
                const metadata = {
                    contentType: 'image/*'
                };

                const storageRef = ref(storage, 'images/' + this.file.name);
                const uploadTask = uploadBytesResumable(storageRef, this.file, metadata);

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
                            this.postInfo.postImage = downloadURL
                            //deleteObject(this.desertRef)
                            setDoc(this.docRef, this.postInfo)
                            alert(`O post "${this.postInfo.postTitle}" foi alterado com sucesso!`)
                            this.$router.push('/dashboard')
                        })
                    }
                )
            } else {
                setDoc(this.docRef, this.postInfo)
                alert(`O post "${this.postInfo.postTitle}" foi alterado com sucesso!`)
                this.$router.push('/dashboard')
            }
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
.edit-post-image{
    width: 200px;
}
.container {
    margin: 0;
}
</style>