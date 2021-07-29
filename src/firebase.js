import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtHL3NYirEfMefFWRmZd8pviQqaijcCNg",
  authDomain: "netflix-build-f9f61.firebaseapp.com",
  projectId: "netflix-build-f9f61",
  storageBucket: "netflix-build-f9f61.appspot.com",
  messagingSenderId: "1045833140409",
  appId: "1:1045833140409:web:bf11991190cb7a9ae8b368"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;