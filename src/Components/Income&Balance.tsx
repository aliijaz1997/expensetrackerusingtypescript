import React, { useContext } from 'react';
import '../App.css';
import { transactionContext } from './Contextapi';
// import {TransactionType} from './Contextapi';
function Income() {

    const { transactionListState } = useContext(transactionContext);
    const getIncome = () => {
        let income: number = 0;
        for (var i = 0; i < transactionListState.length; i++) {
            if (transactionListState[i].amount > 0)
                income += transactionListState[i].amount
        }
        return income;
    }
    // console.log(getIncome());

    const getExpense = () => {
        let expense: number = 0;
        for (var i = 0; i < transactionListState.length; i++) {
            if (transactionListState[i].amount < 0)
                expense += transactionListState[i].amount
        }

        return expense;
    }
    // console.log(getIncome() + getExpense())
    return (
        <div>
            <h3>Total Balance</h3>
            <h2>${getIncome() + getExpense()}</h2>
            <div className="Income-Expense">
                <h3> Income <br /> ${getIncome()}</h3>
                <h3> Expense <br /> ${getExpense()}</h3>
            </div>
        </div>
    )
}
export default Income;