import React, { useState, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import HistoryList from './Components/list';
import { GlobalProvider } from './Components/Contextapi'
import {transactionContext} from './Components/Contextapi';
function App() {
  // Making usestate to update the amount and description
  const {  addtransaction }= useContext(transactionContext);
  // const func = transactions.addtransaction;
  // console.log(func);
  
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const handleAddition = (event: any) => {
    event.preventDefault();
    console.log(desc, amount)
    const newtransaction = {
      amount,
      desc,
    }
    addtransaction(newtransaction)
    console.log( addtransaction(newtransaction))
    
    setDesc('')
    setAmount('')
  }



  return (
    <GlobalProvider>
      <div className="Container">
        <h1>Expense Tracker</h1>
        <h3>Total Balance</h3>
        <h2>$260</h2>
        <div className="Income-Expense">
          <h3> Income <br /> $0</h3>
          <h3> Expense <br /> $0</h3>
        </div>
        <h3>Transaction History</h3>
        <HistoryList />
        <hr />
        <h3>Add Transaction</h3>
        <form className="form" onSubmit={handleAddition} >
          <label>
            Description
      <br />
            <input type = 'text' placeholder="Enter description" value={desc} onChange={(e) => setDesc(e.target.value)} required />
          </label>
          <br />
          <label>
            Amount
      <br />
            <input type = 'number' placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          </label>
          <br />
          <input type="submit" className="button5" value="Add Transaction" />
        </form>

      </div>
    </GlobalProvider>
  );
}

export default App;
