import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyAh3OPCTC9hwxV_2jkBonzDnGgIB3O9oS4",
    authDomain: "magiczny-warsztat-artura.firebaseapp.com",
    databaseURL: "https://magiczny-warsztat-artura.firebaseio.com",
    projectId: "magiczny-warsztat-artura",
    storageBucket: "magiczny-warsztat-artura.appspot.com",
    messagingSenderId: "9132075446"
};

firebase.initializeApp(config);

const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true });

export const db = fire;