import React, { createContext, useReducer, ReactNode } from 'react';
import transactionReducer from './reducer';

// Mking types


const initialstate = {
    transaction: [
        // { amount: 500, desc: "camera" },
        // { amount: 500, desc: "camera" },
        // { amount: 500, desc: "camera" },
        // { amount: 500, desc: "camera" },
        // { amount: 500, desc: "camera" }
    ],
    addtransaction : (transobj : any) => (transobj),

}

export type addedtrans = {
    amount: number,
    desc: string,
}

type child = {
    children: ReactNode;
}

export type state = {
    transaction : addedtrans[],
    addtransation : (transobj : addedtrans) => void
}
export const transactionContext = createContext(initialstate);

// In reducer one thing must e noted that we always have to arrays
// state and dispatch. Dispatch always decides which of the action
// is to be performed and the fucntion usereducer takes updated
// transaction reducer and initialvalue like in our case it is
// transaction above.
export const GlobalProvider = ({ children }: child) => {
    const [state, dispatch] = useReducer(transactionReducer, initialstate)
         console.log(state.transaction)
    function addtransaction(transobj: addedtrans) {
        dispatch({
            type: "Add",
            payload: transobj,
            
        })
    }
       return (
           <transactionContext.Provider value = {{
               
            transaction: state.transaction,
            addtransaction,
           
           
           }} >
                {children}
           </transactionContext.Provider>
       )

}