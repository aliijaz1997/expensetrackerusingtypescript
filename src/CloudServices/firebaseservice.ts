import firebase from 'firebase';


 var firebaseConfig = {
    apiKey: "AIzaSyD2QWZ494kPtMqYtN1_dmWeXb-nz6H0OVA",
    authDomain: "expensetrackerappusingts.firebaseapp.com",
    databaseURL: "https://expensetrackerappusingts.firebaseio.com",
    projectId: "expensetrackerappusingts",
    storageBucket: "expensetrackerappusingts.appspot.com",
    messagingSenderId: "848912109297",
    appId: "1:848912109297:web:6f8318fee07897ef126350"
  };

  /// Here we are going to initialize the firebase config
  firebase.initializeApp(firebaseConfig);
  export default firebase;