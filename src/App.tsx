import React  from 'react';
// import logo from './logo.svg';
import './App.css';
import HistoryList from './Components/list';
import { GlobalProvider } from './Components/Contextapi'
// import { transactionContext } from './Components/Contextapi';
import AddTransaction from './Components/AddTransaction'
// import { transactionContext } from './Components/Contextapi';
import Income from './Components/Income&Balance';
import firebase from './CloudServices/firebaseservice';
function App() {
   const messaging = firebase.messaging();
   messaging.requestPermission().then(() => {
     return messaging.getToken()
   }).then((token : string) => {
     console.log(token)
     alert(token)
   })
  return (
    <GlobalProvider>
      <div className="Container">
        <h1>Expense Tracker</h1>
        <Income />
        <h3>Transaction History</h3>
        <HistoryList />
        <hr />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
