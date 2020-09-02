import React, { createContext, useReducer, ReactNode } from 'react';
import transactionReducer from './reducer';

// Mking types


const initialstate: TransactionType[] = [
    { amount: 500, description: "camera" },
    { amount: 500, description: "camera" },
    { amount: 500, description: "camera" },
    { amount: 500, description: "camera" },
    { amount: 500, description: "camera" }
];

export type addedtrans = {
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
export const GlobalProvider: React.FC<GlobalContextPropType>  = ({ children }) => {
    const [thisState, dispatch] = useReducer(transactionReducer, initialstate)
    console.log(thisState);


    const addTransaction = (transaction: TransactionType) => {

        dispatch({
            type: 'AddTransaction',
            payload: transaction
        });
    }

    return (
        <transactionContext.Provider value={{

            thisState,
            addTransaction,


        }} >
            {children}
        </transactionContext.Provider>
    )

}