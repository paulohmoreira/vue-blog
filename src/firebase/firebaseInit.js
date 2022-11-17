// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
//import { getAuth } from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "vue-blog-133ff.firebaseapp.com",
    projectId: "vue-blog-133ff",
    storageBucket: "vue-blog-133ff.appspot.com",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(app);

const postsColRef = collection(db, "posts")

//export { auth }
//export { postsColRef }
export default postsColRef