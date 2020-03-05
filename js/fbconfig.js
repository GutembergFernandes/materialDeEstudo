// Configuração do Firebase para este App
var firebaseConfig = {
    apiKey: "AIzaSyDWxfozu1O3tGzFcT55PO0-zyQ4QoveyLY",
    authDomain: "mecmec-cf6ef.firebaseapp.com",
    databaseURL: "https://mecmec-cf6ef.firebaseio.com",
    projectId: "mecmec-cf6ef",
    storageBucket: "mecmec-cf6ef.appspot.com",
    messagingSenderId: "783124698368",
    appId: "1:783124698368:web:fc06c6ccca15d7a5d00fe5"
};

// Initializa o Firebase
firebase.initializeApp(firebaseConfig);

// Conexão com o Firestore
var db = firebase.firestore();