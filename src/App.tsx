import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HistoryList from './Components/list';
import { GlobalProvider } from './Components/Contextapi'
// import { transactionContext } from './Components/Contextapi';
import AddTransaction from './Components/AddTransaction'
function App() {
  // Making usestate to update the amount and description
  // const { dispatch } = useContext(transactionContext);

  // const [newamount, setAmount] = useState<number>(0);
  // const [newdesc, setDesc] = useState<string>('');
  // const handleSetDesc = (e: React.ChangeEvent<HTMLInputElement>) => { setDesc(e.target.value) };
  // const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => { setAmount(Number(e.target.value)) };
  // const handleAddition = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const transaction = {
  //     description: newdesc,
  //     amount: Number(newamount)
  //   }

  //   setDesc('')
  //   setAmount(0)
  // dispatch({data: transaction, type : 'Add'})
  // };



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
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
