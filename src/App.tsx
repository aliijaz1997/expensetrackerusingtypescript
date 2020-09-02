import React, { useState, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import HistoryList from './Components/list';
import { GlobalProvider } from './Components/Contextapi'
import { transactionContext } from './Components/Contextapi';
function App() {
  // Making usestate to update the amount and description
  const { addTransaction } = useContext(transactionContext);

  const [newamount, setAmount] = useState<number>(0);
  const [newdesc, setDesc] = useState<string>('');
  const handleSetDesc = (e: React.ChangeEvent<HTMLInputElement>) => { setDesc(e.target.value) };
  const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => { setAmount(Number(e.target.value)) };
  const handleAddition = (event: React.FormEvent) => {
    event.preventDefault();
    const transaction = {
      description: newdesc,
      amount: Number(newamount)
    }
    // addnewtransaction(newtransaction)
    addTransaction(transaction)
    // console.log(newtransaction)

    setDesc('')
    setAmount(0)
  };



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
        <h3>Add Transaction</h3>
        <form className="form" onSubmit={handleAddition} >
          <label>
            Description
      <br />
            <input type='text' placeholder="Enter description" value={newdesc} onChange={handleSetDesc} required />
          </label>
          <br />
          <label>
            Amount
      <br />
            <input type='number' placeholder="Enter amount" value={newamount} onChange={handleSetAmount} required />
          </label>
          <br />
          <input type="submit" className="button5" value="Add Transaction" />
        </form>
      </div>
    </GlobalProvider>
  );
}

export default App;
