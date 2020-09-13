import firebase from 'firebase';

 var firebaseConfig = {
  apiKey: "AIzaSyBmkEJT4CE8yr8x077SGhPpCfzNTwBxXpg",
  authDomain: "expensetracker-8fdac.firebaseapp.com",
  databaseURL: "https://expensetracker-8fdac.firebaseio.com",
  projectId: "expensetracker-8fdac",
  storageBucket: "expensetracker-8fdac.appspot.com",
  messagingSenderId: "989246080833",
  appId: "1:989246080833:web:4a737a05fa28f61cd543c0"
};
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js") // service worker file location
      .then(function() {
        console.log("Service Worker Registered Successfully");
      })
      .catch(function(error) {
        console.error("Something goes wrong while registering service worker");
        console.log(error);
      });
  } else {
    console.log("Service Worker is not available");
  }
  /// Here we are going to initialize the firebase config
  firebase.initializeApp(firebaseConfig);
  export default firebase;