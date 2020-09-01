import {addedtrans} from './Contextapi';

const transactionReducer = ((state: addedtrans[], action:{type:string, payload:any,}) => {
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