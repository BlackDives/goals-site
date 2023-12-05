import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDSXBhKfWHkUZIvKGOeSvEnkeRI5Y9LzA8',
  authDomain: 'wati-4f722.firebaseapp.com',
  projectId: 'wati-4f722',
  storageBucket: 'wati-4f722.appspot.com',
  messagingSenderId: '686591820784',
  appId: '1:686591820784:web:e8c581632d1a4d235e9335',
  measurementId: 'G-TXW2E7DTS4',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getFirestore(app)
const auth = getAuth(app)

export { app, analytics, database, auth }
