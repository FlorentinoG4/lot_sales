import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCIneCkp7BzGy9zQAmRzL8K2lIg9uiI9uM",
  authDomain: "landlord-app-9f963.firebaseapp.com",
  projectId: "landlord-app-9f963",
  storageBucket: "landlord-app-9f963.appspot.com",
  messagingSenderId: "784761918551",
  appId: "1:784761918551:web:8f366bcc3a283ba5f7bf12",
  measurementId: "G-17LCQWHZGF"
};

firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
  projectAuth,
  projectFirestore,
  timestamp
}