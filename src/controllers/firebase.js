import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
        apiKey: "AIzaSyDhCF7g0ikFfDW0FRwz1U5NMxrs5AF9lw0",
        authDomain: "carwash-d6176.firebaseapp.com",
        databaseURL: "https://carwash-d6176.firebaseio.com",
        projectId: "carwash-d6176",
        storageBucket: "carwash-d6176.appspot.com",
        messagingSenderId: "299284388804",
        appId: "1:299284388804:web:0eed58e5cf450cb568e291"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export { firebase }