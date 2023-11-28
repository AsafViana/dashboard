// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, browserSessionPersistence, setPersistence } from 'firebase/auth'
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAAR5SIG_9D8-6iXNUEySdTtxcwk49RgTM',
	authDomain: 'dashboard-cia.firebaseapp.com',
	projectId: 'dashboard-cia',
	storageBucket: 'dashboard-cia.appspot.com',
	messagingSenderId: '492722305798',
	appId: '1:492722305798:web:0c5afdb9bcc87adfd2fc87',
	measurementId: 'G-1P4CRNZNSB',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, collection, getDocs, addDoc, db }
