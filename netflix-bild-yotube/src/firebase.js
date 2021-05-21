import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAND9Xmk_Dgef8sb2Nh6y7YmlzV877lzvc",
    authDomain: "netflix-clone-96c9b.firebaseapp.com",
    projectId: "netflix-clone-96c9b",
    storageBucket: "netflix-clone-96c9b.appspot.com",
    messagingSenderId: "595270391632",
    appId: "1:595270391632:web:38d9e25ac35f64649cbe55"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  export{auth}
  export default db;