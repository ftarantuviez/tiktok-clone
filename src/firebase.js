import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfsmNmWuqQZ3w3D5ANVL78z4GR2hDhk_E",
  authDomain: "tiktok-92fae.firebaseapp.com",
  databaseURL: "https://tiktok-92fae.firebaseio.com",
  projectId: "tiktok-92fae",
  storageBucket: "tiktok-92fae.appspot.com",
  messagingSenderId: "340370110949",
  appId: "1:340370110949:web:0cec7db292aedf55f8570c",
  measurementId: "G-6ES68BT6JL"
});

const db = firebaseApp.firestore()

export default db;