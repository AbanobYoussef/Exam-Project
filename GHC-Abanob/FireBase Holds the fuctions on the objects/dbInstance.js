var firebaseConfig = {
    apiKey: "AIzaSyCymPdjjN799yMVICi__-Fj8id34s60g8s",
    authDomain: "ghcproject-9de12.firebaseapp.com",
    projectId: "ghcproject-9de12",
    storageBucket: "ghcproject-9de12.appspot.com",
    messagingSenderId: "110280690224",
    appId: "1:110280690224:web:d32a68aa5bf027474cfbf5",
    measurementId: "G-54T8YSYKFT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

export default db;