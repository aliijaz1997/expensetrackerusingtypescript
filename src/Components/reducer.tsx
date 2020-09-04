import { TransactionType } from './Contextapi';

// type StateType: TransactionType[] ;

const AppReducer = (state: TransactionType[], action: { type: string, payload: any, }) => {
    switch (action.type) {
        case "AddTransaction":
            return [...state, action.payload]

        case "DeleteTransaction":
            return state.filter((transaction: TransactionType, index: number) => (index !== action.payload))

        default:
            return state;
    }
}

export default AppReducer;