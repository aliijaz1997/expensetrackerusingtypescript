importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyD2QWZ494kPtMqYtN1_dmWeXb-nz6H0OVA",
    authDomain: "expensetrackerappusingts.firebaseapp.com",
    databaseURL: "https://expensetrackerappusingts.firebaseio.com",
    projectId: "expensetrackerappusingts",
    storageBucket: "expensetrackerappusingts.appspot.com",
    messagingSenderId: "848912109297",
    appId: "1:848912109297:web:6f8318fee07897ef126350"
})

//Now have to call the messaging function

firebase.messaging();