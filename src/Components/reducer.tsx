const transactionReducer = ((state: any, action : any) => {
     switch (action.type) {
         case "Add":
             console.log(state);
             
            return {
                ...state , transaction: [action.payload , ...state.transaction],
            }
         default:
            return state
     }
    }
    )
    export default transactionReducer;