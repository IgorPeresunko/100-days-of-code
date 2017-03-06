import firebase from 'firebase';

//config
try {
    const config = {
        apiKey: "AIzaSyD4d5nF1040ffD3sE3nIhlpA3RsTenTaYk",
        authDomain: "findteacher-68729.firebaseapp.com",
        databaseURL: "https://findteacher-68729.firebaseio.com",
        storageBucket: "findteacher-68729.appspot.com",
        messagingSenderId: "132933867720"
    };
    firebase.initializeApp(config);
} catch(e) {
    console.log(`firebase: ${e}`);
}

export const firebaseRef = firebase.database().ref();

export default firebase;