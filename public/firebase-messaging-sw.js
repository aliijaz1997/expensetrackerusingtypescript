importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyBmkEJT4CE8yr8x077SGhPpCfzNTwBxXpg",
    authDomain: "expensetracker-8fdac.firebaseapp.com",
    databaseURL: "https://expensetracker-8fdac.firebaseio.com",
    projectId: "expensetracker-8fdac",
    storageBucket: "expensetracker-8fdac.appspot.com",
    messagingSenderId: "989246080833",
    appId: "1:989246080833:web:4a737a05fa28f61cd543c0"
  })

//Now have to call the messaging function

firebase.messaging();