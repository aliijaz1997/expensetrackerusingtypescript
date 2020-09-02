import React, {useState, useContext} from 'react';
// import {TransactionType} from '../types/AppTypes';

//import Global Context
import { transactionContext } from './Contextapi';
import './addtrans.css';
//importing style 
// import '../style/AddTransaction.css';

const AddTransaction = () => {
    const {addTransaction} = useContext(transactionContext);

    const [newdesc, setDesc] = useState<string>('');
    const [newamount, setAmount] = useState<number>(0);

    const handleSetDesc = (e:React.ChangeEvent<HTMLInputElement>)=>{setDesc(e.target.value)};
    const handleSetAmount = (e:React.ChangeEvent<HTMLInputElement>)=>{setAmount(Number(e.target.value))};
    const handleAddition = (event:React.FormEvent)=>{

        event.preventDefault(); // this function will handle page refresh on form submit

        const transaction = {
            description: newdesc,
            amount: Number(newamount)
        }
        addTransaction(transaction)

        setDesc('');
        setAmount(0)

        };

    return (
        <div>
             <h3>Add Transaction</h3>
        <form className="form" onSubmit={handleAddition} >
<div className = "container-input">
          <label className = "label">
            Description
      <br />
            <input type = 'text' placeholder="Enter description" value={newdesc} onChange={handleSetDesc} required />
          </label>
          <br />
          <label className = "label">
            Amount
      <br />
            <input type = 'number' placeholder="Enter amount" value={newamount} onChange={handleSetAmount} required />
          </label>
</div>
          <br />
          <input type="submit" className="button5" value="Add Transaction" />
        </form>

        </div>
    );
}

export default AddTransaction;