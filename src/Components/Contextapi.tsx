import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer from './reducer';

// Mking types


const initialstate: TransactionType[] = [
    { amount: -500, description: "book" },
    { amount: 225, description: "soophley" },
    { amount: -300, description: "credit deduct" },
    { amount: 25, description: "ice cream" },
    { amount: -70, description: "loan" },
]

 type addedtrans = {
    amount: number,
    desc: string,

}

type child = {
    children: ReactNode;
}
export type GlobalContextPropType = {
    children: any;
}

export type state = {
    transaction: addedtrans[],
}
// type contexttype = {
//     transaction : addedtrans[],
//     addnewtransaction : (transobj: addedtrans) => void,
// }
export type TransactionType = { description: string; amount: number }
export const transactionContext = createContext<any>({});

// In reducer one thing must e noted that we always have to arrays
// state and dispatch. Dispatch always decides which of the action
// is to be performed and the fucntion usereducer takes updated
// transaction reducer and initialvalue like in our case it is
// transaction above.
export const GlobalProvider: React.FC<GlobalContextPropType> = ({ children }) => {
    const [transactionListState, dispatch] = useReducer(AppReducer, initialstate);
//    console.log(transactionListState);
   
    const addTransaction = (transaction: TransactionType) => {
        dispatch({
            type: 'AddTransaction',
            payload: transaction
        });
    }

    // const deleteTransaction = (index: number) => {
    //     dispatch({
    //         type: 'DeleteTransaction',
    //         payload: index
    //     });
    // }

    return (
        <transactionContext.Provider value={{ transactionListState, addTransaction}}>
            {children}
        </transactionContext.Provider>
    )
}