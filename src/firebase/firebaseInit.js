// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.FIRE_API_KEY,
    // authDomain: process.env.FIRE_AUTH,
    // projectId: process.env.FIRE_PROJ_ID,
    // storageBucket: process.env.FIRE_STORAGE,
    // messagingSenderId: process.env.FIRE_MSG_ID,
    // appId: process.env.FIRE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const postsColRef = collection(db, "posts")

export default postsColRef

export { auth }