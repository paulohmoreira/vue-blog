// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwfAXiaLB6qezxNSGu1lyVn9z6KWFfrvk",
  authDomain: "vue-blog-133ff.firebaseapp.com",
  projectId: "vue-blog-133ff",
  storageBucket: "vue-blog-133ff.appspot.com",
  messagingSenderId: "660730375463",
  appId: "1:660730375463:web:0e5e5af51f29403f8a4d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }
export default app.firestore();