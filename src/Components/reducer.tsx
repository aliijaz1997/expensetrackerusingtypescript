import {TransactionType} from './Contextapi';

const transactionReducer = ((state: TransactionType[], action:{type:string, payload:any,}) => {
     switch (action.type) {
         case "Add":
             console.log(state);
             
             return  [...state, action.payload]
         default:
            return state
     }
    }
    )
    export default transactionReducer;